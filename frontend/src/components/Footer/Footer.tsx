import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} CS Webring</span>
      <a
        href="https://github.com/Devansh015/cs-webring"
        target="_blank"
        rel="noreferrer"
        className={styles.joinButton}
      >
          Join the ring
      </a>
    </footer>
  );
}
