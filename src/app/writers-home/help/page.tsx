"use client";

import React from "react";
import styles from "./page.module.css";

export default function HelpPage() {
  return (
    <div className={styles["help-container"]}>
      <h1 className={styles["help-heading"]}>Help for New Writers</h1>
      <p className={styles["help-paragraph"]}>
        Welcome to the Writers' Portal! Here's how to get started:
      </p>
      <ul className={styles["help-list"]}>
        <li className={styles["help-list-item"]}>
          <strong>Creating Articles:</strong> Use the Articles section to create
          and publish your work.
        </li>
        <li className={styles["help-list-item"]}>
          <strong>Saving Drafts:</strong> Save your progress in the Drafts
          section.
        </li>
        <li className={styles["help-list-item"]}>
          <strong>Managing Your Account:</strong> Update your profile in the
          Account section.
        </li>
        <li className={styles["help-list-item"]}>
          <strong>Viewing Other Writers:</strong> Connect with fellow writers in
          the Other Writers section.
        </li>
      </ul>
      <p className={styles["help-paragraph"]}>
        If you have any further questions OR want to change a submitted article, feel free to reach out to our support
        team.
      </p>
      <p className={styles["help-paragraph"]}>
       Whatsapp: 07824827046
      </p>
      <p className={styles["help-paragraph"]}>
       Email: Felixburton2002@gmail.com
      </p>
    </div>
  );
}