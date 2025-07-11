import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`${inter.className} ${styles.container}`}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div>
            <img 
              src="/images/logo.png" 
              alt="National Fashionista League" 
              className={styles.logo}
            />
          </div>
          <ul className={styles.navLinks}>
            <li><a href="#" className={styles.navLink}>Home</a></li>
            <li><a href="#" className={styles.navLink}>Latest Fits</a></li>
            <li><a href="#" className={styles.navLink}>NFL Teams</a></li>
            <li><a href="#" className={styles.navLink}>Uniform History</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Image */}
      <div 
        className={styles.heroImage}
        style={{
          backgroundImage: "url('/images/hero.jpg')"
        }}
      />

      {/* Main Content */}
      <div className={styles.mainContent}>
        <p className={styles.siteDescription}>
          Grid Iron fashion that you don't need to iron
        </p>

        {/* Three Action Buttons */}
        <div className={styles.actionButtons}>
          <a href="#" className={`${styles.btn} ${styles.btnLatestFits}`}>
            Latest Fits
          </a>
          <a href="#" className={styles.btn}>
            NFL Teams
          </a>
          <a href="#" className={`${styles.btn} ${styles.btnUniformHistory}`}>
            Uniform History
          </a>
        </div>
      </div>

      {/* Footer */}
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