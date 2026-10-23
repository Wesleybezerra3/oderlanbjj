import { hero, primaryCta } from '../../content/siteContent'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.background}>
        {hero.imageSrc ? (
          // Above the fold: loaded eagerly with high priority (LCP element).
          <img
            src={hero.imageSrc}
            srcSet={hero.imageSrcSet}
            sizes="100vw"
            alt={hero.imageAlt}
            width="1200"
            height="1600"
            className={styles.backgroundImage}
            fetchPriority="high"
            decoding="async"
          />
        ) : (
          <div role="img" aria-label={hero.imageAlt} className={styles.backgroundPlaceholder}>
            <span aria-hidden="true">[Imagem de fundo — {hero.imageAlt}]</span>
          </div>
        )}
      </div>

      <div className={`container ${styles.content}`}>
        <p className={`eyebrow ${styles.eyebrow}`}>{hero.eyebrow}</p>
        <h1 id="hero-title" className={styles.title}>
          {hero.title}
        </h1>
        <p className={styles.description}>{hero.description}</p>
        <div className={styles.actions}>
          <a
            href={primaryCta.href}
            className={`button ${styles.primaryButton}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {primaryCta.label}
          </a>
          <a href={hero.secondaryCta.href} className={`button ${styles.secondaryButton}`}>
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
