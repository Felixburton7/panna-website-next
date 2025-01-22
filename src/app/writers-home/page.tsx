// // src/app/writers-home/layout.tsx
// "use client";

// import React from 'react';
// import Sidebar from '@/components//Writers/WritersSidebar'; // a custom sidebar component

// export default function WritersHomeLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="writers-layout">
//       <Sidebar />
//       <main className="writers-content">{children}</main>
//     </div>
//   );
// }
// src/app/writers-home/page.tsx
// src/app/writers-home/page.tsx
// src/pages/WritersHome.tsx

export default function WritersHome() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <header style={{ marginBottom: "40px", color: "#999" }}>
        <h1 style={{ fontSize: "2.5em" }}>
          Welcome to the PANNA Writer Home Page
        </h1>
        <p style={{ fontSize: "1.2em", color: "#999" }}>
          A dedicated space for PANNA writers to collaborate, create, and thrive.
        </p>
      </header>
      <main>
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "2em", color: "#999" }}>About This Page</h2>
          <p style={{ fontSize: "1.1em", lineHeight: "1.6", color: "#666" }}>
            This is the official hub for individuals who have volunteered and been selected to contribute as writers for PANNA. 
            It’s a collaborative space designed to help you connect with fellow writers, ensure unique and individual content, and 
            foster creativity. 
          </p>
        </section>
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "2em", color: "#999" }}>Features</h2>
          <ul style={{ fontSize: "1.1em", lineHeight: "1.8", color: "#666" }}>
            <li>Save and edit your drafts directly here.</li>
            <li>Create and publish articles with ease.</li>
            <li>View the profiles of other writers and connect with them.</li>
            <li>Collaborate with fellow writers to ensure high-quality and distinct content.</li>
          </ul>
        </section>
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "2em", color: "#999" }}>What's Coming Next?</h2>
          <p style={{ fontSize: "1.1em", lineHeight: "1.6", color: "#666" }}>
            Stay tuned for upcoming features designed to empower PANNA writers and creators, 
            including advanced collaboration tools, analytics to track your content's performance, 
            and more resources to help you hone your craft.
          </p>
        </section>
       
      </main>
    </div>
  );
}
