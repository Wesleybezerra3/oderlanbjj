import { useState } from 'react'
import { academy, navigationLinks, primaryCta } from '../../content/siteContent'
import styles from './Header.module.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <a href="#inicio" className={styles.logo} onClick={closeMenu}>
          <img
            src={academy.logo.src}
            srcSet={academy.logo.srcSet}
            alt={`${academy.name} — página inicial`}
            width="96"
            height="96"
            className={styles.logoImage}
          />
        </a>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className={styles.menuIcon} aria-hidden="true" />
          {isMenuOpen ? 'Fechar' : 'Menu'}
        </button>

        <nav
          id="main-navigation"
          aria-label="Navegação principal"
          className={styles.nav}
          data-open={isMenuOpen}
        >
          <ul className={styles.navList}>
            {navigationLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className={styles.navLink} onClick={closeMenu}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={primaryCta.href}
            className={`button button--primary ${styles.navCta}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            {primaryCta.label}
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header

