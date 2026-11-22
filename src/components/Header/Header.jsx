// Header - big, centered, bold title.
// Renders an <h1> with the text: Campus Club Dashboard

  // TODO: <header> with an <h1>
  // Use the classes from Header.module.css, e.g. className={styles.title}
 
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Campus Club Dashboard
      </h1>
    </header>
  );
}
