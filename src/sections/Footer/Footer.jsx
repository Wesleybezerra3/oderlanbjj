import { academy, developer, primaryCta } from '../../content/siteContent'
import styles from './Footer.module.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.brand}>
          <img
            src={academy.logo.src}
            srcSet={academy.logo.srcSet}
            alt=""
            width="96"
            height="96"
            loading="lazy"
            className={styles.logoImage}
          />
          <p className={styles.name}>{academy.name}</p>
          <p className={styles.street}>{academy.street}</p>
          <p className={styles.city}>{academy.city}</p>
        </div>

        <ul className={styles.contacts}>
          <li>
            <a href={academy.instagramUrl} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href={academy.phoneUrl}>{academy.phoneDisplay}</a>
          </li>
          <li>
            <a href={academy.whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </li>
        </ul>
      </div>

      <div className={`container ${styles.legal}`}>
        <p>
          © {currentYear} {academy.name}
        </p>
        <p>
          Site por{' '}
          <a href={developer.instagramUrl} target="_blank" rel="noopener noreferrer">
            {developer.name}
          </a>
        </p>
      </div>

      <a
        href={primaryCta.href}
        className={styles.whatsappFab}
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
    </footer>
  )
}

export default Footer
