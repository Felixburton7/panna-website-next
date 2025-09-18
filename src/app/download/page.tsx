"use client";

import Image from "next/image";
import Link from "next/link";
// Use public assets paths for badges
import styles from "./page.module.css";

export default function DownloadPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <h1>Get Panna for iOS/Android</h1>
            <p>Install the app and join games in seconds.</p>
            <div className={styles.badges}>
              <Link href="https://apps.apple.com/gb/app/panna/id6749247478" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/appstore.png" width={180} height={56} alt="Download on the App Store" className={styles.badgeImg} />
              </Link>
              <Image src="/assets/googleplay.png" width={200} height={56} alt="Get it on Google Play" className={styles.badgeImg} />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.qrCard}>
              <div className={styles.qrImageWrapper}>
                <Link href="https://apps.apple.com/gb/app/panna/id6749247478" target="_blank" rel="noopener noreferrer">
                  <Image src="/assets/qrcode.svg" alt="Panna App QR code" width={220} height={220} />
                </Link>
              </div>
              <div className={styles.qrLabel}>
                <span className={styles.corner}>⌜</span>
                <span>Scan to Download</span>
                <span className={styles.corner}>⌟</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


