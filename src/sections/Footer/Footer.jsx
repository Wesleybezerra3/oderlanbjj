import { academy, navigationLinks } from '../../content/siteContent'
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
          <p>{academy.address}</p>
        </div>

        <nav aria-label="Rodapé">
          <ul className={styles.links}>
            {navigationLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className={styles.links}>
          <li>
            <a href={academy.instagramUrl} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
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
      </div>
    </footer>
  )
}

export default Footer

