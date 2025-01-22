"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

interface Article {
  id: string;
  title: string;
  author_id: string;
  date: string;
  article_type: string;
  category: string;
  content: string;
  is_draft: boolean;
  created_at: string;
}

export default function DraftsPage() {
  const [drafts, setDrafts] = useState<Article[]>([]);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchDrafts = async () => {
      try {
        // Get the currently logged-in user
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError) {
          throw userError;
        }
        if (!user) {
          setErrorMsg("No user is currently logged in.");
          return;
        }

        // Fetch only drafts (is_draft = true) for this user
        const { data, error } = await supabase
          .from("articles")
          .select("*")
          .eq("is_draft", true)
          .eq("author_id", user.id);

        if (error) {
          console.error("Error fetching drafts:", error);
          setErrorMsg(error.message);
        } else if (data) {
          setDrafts(data);
        }
      } catch (err: any) {
        console.error("Unexpected error:", err);
        setErrorMsg("Failed to fetch drafts");
      }
    };

    fetchDrafts();
  }, []);

  const openDraft = (id: string) => {
    router.push(`/writers-home/drafts/edit/${id}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.heading}>Drafts</h1>
      </div>
      {errorMsg && <p className={styles.error}>{errorMsg}</p>}
      <div className={styles.articlesList}>
        {drafts.map((draft) => (
          <div key={draft.id} className={styles.articleCard}>
            <div className={styles.articleDetails}>
              <h3 className={styles.articleTitle}>{draft.title}</h3>
              <p>
                <strong>Author ID:</strong> {draft.author_id}
              </p>
              <p>
                <strong>Date:</strong> {draft.date}
              </p>
              <p>
                <strong>Type:</strong> {draft.article_type}
              </p>
              <p>
                <strong>Category:</strong> {draft.category}
              </p>
              <p>{draft.content.substring(0, 100)}...</p>
            </div>
            <button
              onClick={() => openDraft(draft.id)}
              className={styles.editDraftButton}
            >
              Edit Draft
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
