import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <ul className={styles.navLinks}>
            <li><a href="#" className={styles.navLink}>Home</a></li>
            <li><a href="#" className={styles.navLink}>Latest Fits</a></li>
            <li><a href="#" className={styles.navLink}>NFL Teams</a></li>
            <li><a href="#" className={styles.navLink}>Uniform History</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section with Text Overlay */}
      <div 
        className={styles.heroSection}
        style={{
          backgroundImage: "url('/images/hero.jpg')"
        }}
      >
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>National Fashionista League</h1>
        </div>
      </div>

      {/* Site Description on Blue Background */}
      <p className={styles.siteDescription}>
        Grid Iron fashion that you don't need to iron
      </p>

      {/* Three Action Buttons on Blue Background */}
      <div className={styles.actionButtons}>
        <a href="#" className={`${styles.btn} ${styles.btnLatestFits}`}>
          <div className={styles.btnIcon}>🏈</div>
          <span>Latest Fits</span>
        </a>
        <a href="#" className={styles.btn}>
          <div className={styles.btnIcon}>⭐</div>
          <span>NFL Teams</span>
        </a>
        <a href="#" className={`${styles.btn} ${styles.btnUniformHistory}`}>
          <div className={styles.btnIcon}>👕</div>
          <span>Uniform History</span>
        </a>
      </div>

      {/* Footer on Blue Background */}
      <footer className={styles.footer}>
        <h3 className={styles.footerTitle}>
          National Fashionista League
        </h3>
        <p className={styles.footerText}>
          Where every uniform tells a story.
        </p>
      </footer>
    </div>
  );
}