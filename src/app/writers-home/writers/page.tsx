"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface Profile {
  id: string;
  full_name: string;
  role: string;
  articleCount?: number;
}

export default function WritersPage() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchProfilesAndArticles = async () => {
      try {
        // 1) Fetch all profiles (all members)
        const { data: allProfiles, error: profilesError } = await supabase
          .from("profiles")
          .select("*");

        if (profilesError) {
          throw profilesError;
        }
        if (!allProfiles) {
          setErrorMsg("No profiles found.");
          return;
        }

        // 2) Fetch all articles to count how many each user has
        const { data: allArticles, error: articlesError } = await supabase
          .from("articles")
          .select("author_id");

        if (articlesError) {
          throw articlesError;
        }

        // 3) Count how many articles belong to each profile ID
        const profilesWithCounts = allProfiles.map((profile) => {
          const articleCount =
            allArticles?.filter((a) => a.author_id === profile.id).length || 0;
          return { ...profile, articleCount };
        });

        setProfiles(profilesWithCounts);
      } catch (err: any) {
        console.error("Unexpected error:", err);
        setErrorMsg("Failed to fetch profiles or articles");
      }
    };

    fetchProfilesAndArticles();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Members</h1>
      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            <strong>Name:</strong> {profile.full_name}{" "}
            <em>(Role: {profile.role})</em> — Articles Written:{" "}
            {profile.articleCount}
          </li>
        ))}
      </ul>
    </div>
  );
}
