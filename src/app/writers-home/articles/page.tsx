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

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
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

        // Fetch published articles for this user
        const { data, error } = await supabase
          .from("articles")
          .select("*")
          .eq("is_draft", false)
          .eq("author_id", user.id);

        if (error) {
          console.error("Error fetching articles:", error);
          setErrorMsg(error.message);
        } else if (data) {
          setArticles(data);
        }
      } catch (err: any) {
        console.error("Unexpected error:", err);
        setErrorMsg("Failed to fetch articles");
      }
    };

    fetchArticles();
  }, []);

  const handleNewArticle = () => {
    router.push("/writers-home/articles/new");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.heading}>Articles</h1>
        <button onClick={handleNewArticle} className={styles.newArticleButton}>
          Create New Article
        </button>
      </div>
      {errorMsg && <p className={styles.error}>{errorMsg}</p>}
      <div className={styles.articlesList}>
        {articles.map((article) => (
          <div key={article.id} className={styles.articleCard}>
            <h3 className={styles.articleTitle}>{article.title}</h3>
            <p>
              <strong>Author ID:</strong> {article.author_id}
            </p>
            <p>
              <strong>Date:</strong> {article.date}
            </p>
            <p>
              <strong>Type:</strong> {article.article_type}
            </p>
            <p>
              <strong>Category:</strong> {article.category}
            </p>
            <p>{article.content.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}
