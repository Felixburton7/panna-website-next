import styles from "../../components/Writers/WritersHome.module.css";

export default function WritersHome() {
  return (
    <div className={styles["writers-home"]}>
      <header className={styles["writers-header"]}>
        <h1>Welcome to the PANNA Writer Home Page</h1>
        <p>
          A dedicated space for PANNA writers to collaborate, create, and thrive.
        </p>
      </header>
      <main>
        <section className={styles["writers-section"]}>
          <h2>About This Page</h2>
          <p>
            This is the official hub for individuals who have volunteered and
            been selected to contribute as writers for PANNA. It’s a
            collaborative space designed to help you connect with fellow
            writers, ensure unique and individual content, and foster
            creativity.
          </p>
        </section>
        <section className={styles["writers-section"]}>
          <h2>Features</h2>
          <ul>
            <li>Save and edit your drafts directly here.</li>
            <li>Create and publish articles with ease.</li>
            <li>View the profiles of other writers and connect with them.</li>
            <li>
              Collaborate with fellow writers to ensure high-quality and
              distinct content.
            </li>
          </ul>
        </section>
        <section className={styles["writers-section"]}>
          <h2>What's Coming Next?</h2>
          <p>
            Stay tuned for upcoming features designed to empower PANNA writers
            and creators, including advanced collaboration tools, analytics to
            track your content's performance, and more resources to help you
            hone your craft.
          </p>
        </section>
      </main>
    </div>
  );
}