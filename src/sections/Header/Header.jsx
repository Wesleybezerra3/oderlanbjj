import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { academy, navigationLinks, primaryCta } from '../../content/siteContent'
import MotionLink from '../../components/MotionLink/MotionLink'
import styles from './Header.module.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const isSolid = isScrolled || isMenuOpen

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 16)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <header className={styles.header} data-solid={isSolid}>
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

        <motion.button
          type="button"
          className={styles.menuToggle}
          data-open={isMenuOpen}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 400, damping: 24 }}
        >
          <span className={styles.menuIcon} aria-hidden="true" />
          {isMenuOpen ? 'Fechar' : 'Menu'}
        </motion.button>

        <nav aria-label="Navegação principal" className={styles.nav}>
          <ul className={styles.navList}>
            {navigationLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className={styles.navLink}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <MotionLink
            href={primaryCta.href}
            className={`button button--primary ${styles.navCta}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {primaryCta.label}
          </MotionLink>
        </nav>

        <nav
          id="main-navigation"
          aria-label="Navegação principal"
          aria-hidden={!isMenuOpen}
          inert={!isMenuOpen}
          className={styles.mobileNav}
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
          <MotionLink
            href={primaryCta.href}
            className={`button button--primary ${styles.navCta}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            {primaryCta.label}
          </MotionLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
