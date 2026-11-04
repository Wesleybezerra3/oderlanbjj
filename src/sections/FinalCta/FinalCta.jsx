import { finalCta, primaryCta } from '../../content/siteContent'
import MotionLink from '../../components/MotionLink/MotionLink'
import styles from './FinalCta.module.css'

function FinalCta() {
  return (
    <section className={styles.finalCta} aria-labelledby="final-cta-title">
      <div className={`container ${styles.layout}`}>
        <h2 id="final-cta-title">{finalCta.title}</h2>
        <p className={styles.description}>{finalCta.description}</p>
        <MotionLink
          href={primaryCta.href}
          className={`button ${styles.button}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {primaryCta.label}
        </MotionLink>
      </div>
    </section>
  )
}

export default FinalCta
