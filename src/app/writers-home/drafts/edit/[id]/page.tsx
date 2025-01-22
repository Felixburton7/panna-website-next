"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import styles from "../../../../../components/Editor/DarkEditor.module.css"; // the shared dark minimal style file

function countWords(str: string) {
  if (!str.trim()) return 0;
  return str.trim().split(/\s+/).length;
}

export default function EditDraftPage() {
  const router = useRouter();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [mainContent, setMainContent] = useState("");
  const [date, setDate] = useState("");
  const [articleType, setArticleType] = useState("Opinion");
  const [category, setCategory] = useState("Transfers");
  const [statusMsg, setStatusMsg] = useState("");

  // References to contentEditable fields
  const headingRef = useRef<HTMLDivElement>(null);
  const authorRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Fetch the draft
  useEffect(() => {
    const fetchDraft = async () => {
      const { data: draft, error } = await supabase
        .from("articles")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching draft:", error);
        setStatusMsg(`Error: ${error.message}`);
      } else if (draft) {
        setTitle(draft.title || "");
        setAuthor(draft.author || "");
        setDate(draft.date || new Date().toISOString().slice(0, 10));
        setArticleType(draft.article_type || "Opinion");
        setCategory(draft.category || "Transfers");
        setMainContent(draft.content || "");

        // Populate the contentEditable fields
        if (headingRef.current) {
          headingRef.current.textContent = draft.title || "";
        }
        if (authorRef.current) {
          authorRef.current.textContent = draft.author || "";
        }
        if (contentRef.current) {
          contentRef.current.textContent = draft.content || "";
        }
      }
    };

    fetchDraft();
  }, [id]);

  // Word-limit logic for Main Content
  const handleMainContentInput = (e: React.FormEvent<HTMLDivElement>) => {
    let text = (e.currentTarget.textContent ?? "").replace(/\n/g, " ");
    const words = countWords(text);

    if (words > 700) {
      // Trim to 700 words
      const trimmed = text.split(/\s+/).slice(0, 700).join(" ");
      setMainContent(trimmed);
      if (contentRef.current) {
        contentRef.current.textContent = trimmed;
        contentRef.current.classList.add(styles.wordLimitExceeded);
      }
    } else {
      setMainContent(text);
      contentRef.current?.classList.remove(styles.wordLimitExceeded);
    }
  };

  const handleSave = async (isDraft: boolean) => {
    try {
      const { error } = await supabase
        .from("articles")
        .update({
          title,
          author,
          date,
          article_type: articleType,
          category,
          content: mainContent,
          is_draft: isDraft,
        })
        .eq("id", id);

      if (error) {
        setStatusMsg(`Error: ${error.message}`);
      } else {
        setStatusMsg(isDraft ? "Draft updated!" : "Article submitted!");
        if (!isDraft) {
          router.push("/writers-home/articles");
        }
      }
    } catch (err: any) {
      setStatusMsg(`Unexpected error: ${err.message}`);
    }
  };

  const isFilled = (value: string) => value.trim().length > 0;

  return (
    <div className={styles.darkContainer}>
      {/* Heading */}
      <div
        className={`${styles.fieldWrapper} ${isFilled(title) ? "filled" : ""}`}
        data-label="Heading"
      >
        <div
          ref={headingRef}
          className={styles.editableField}
          data-placeholder="Heading"
          contentEditable
          suppressContentEditableWarning
          onInput={(e) => setTitle(e.currentTarget.textContent ?? "")}
        />
      </div>

      {/* Author */}
      <div
        className={`${styles.fieldWrapper} ${isFilled(author) ? "filled" : ""}`}
        data-label="Author"
      >
        <div
          ref={authorRef}
          className={styles.editableField}
          data-placeholder="Author Name"
          contentEditable
          suppressContentEditableWarning
          onInput={(e) => setAuthor(e.currentTarget.textContent ?? "")}
        />
      </div>

      {/* Main Content (700-word limit) */}
      <div
        className={`${styles.fieldWrapper} ${
          isFilled(mainContent) ? "filled" : ""
        }`}
        data-label="Main Content"
      >
        <div
          ref={contentRef}
          className={`${styles.editableField} ${styles.multiline}`}
          data-placeholder="Main Content (up to 700 words)"
          contentEditable
          suppressContentEditableWarning
          onInput={handleMainContentInput}
        />
      </div>

      {/* Meta Fields */}
      <div className={styles.metaFields}>
        <div className={styles.metaGroup}>
          <label className={styles.metaLabel}>Date</label>
          <input
            type="date"
            className={styles.metaInput}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className={styles.metaGroup}>
          <label className={styles.metaLabel}>Article Type</label>
          <select
            value={articleType}
            onChange={(e) => setArticleType(e.target.value)}
            className={styles.metaSelect}
          >
            <option value="Opinion">Opinion - Personal viewpoints</option>
            <option value="News">News - Factual, timely updates</option>
            <option value="Latest">Latest - Recently breaking info</option>
            <option value="Matches">Matches - Fixture coverage</option>
          </select>
        </div>

        <div className={styles.metaGroup}>
          <label className={styles.metaLabel}>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={styles.metaSelect}
          >
            <option value="Transfers">Transfers</option>
            <option value="Matches">Matches</option>
            <option value="Tactics">Tactics</option>
            <option value="Analysis">Analysis</option>
            <option value="Injury Updates">Injury Updates</option>
            <option value="Premier League Rumours">
              Premier League Rumours
            </option>
          </select>
        </div>
      </div>

      {/* Buttons */}
      <div className={styles.buttonGroup}>
        <button
          onClick={() => handleSave(false)}
          className={styles.submitButton}
        >
          Submit Article
        </button>
        <button
          onClick={() => handleSave(true)}
          className={styles.saveDraftButton}
        >
          Save Draft
        </button>
      </div>

      {statusMsg && <p className={styles.statusMessage}>{statusMsg}</p>}
    </div>
  );
}
