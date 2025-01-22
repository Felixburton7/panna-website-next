"use client";

import React from 'react';
import WritersSidebar from '@/components/Writers/WritersSidebar';
import styles from './layout.module.css';

export default function WritersHomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <WritersSidebar />
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
}
