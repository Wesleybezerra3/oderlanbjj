import { primaryCta, trialClassSteps } from '../../content/siteContent'
import MotionLink from '../../components/MotionLink/MotionLink'
import styles from './TrialClass.module.css'

function TrialClass() {
  return (
    <section className="section" aria-labelledby="trial-title">
      <div className="container">
        <header className="section-header">
          <h2 id="trial-title">Como começar a treinar</h2>
        </header>

        <ol className={styles.steps}>
          {trialClassSteps.map(({ title, description }, index) => (
            <li key={title} className={styles.step}>
              <span className={styles.number} aria-hidden="true">
                <span className={styles.faixa} />
                {index + 1}
              </span>
              <div className={styles.stepText}>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ol>

        <MotionLink
          href={primaryCta.href}
          className={`button button--primary ${styles.cta}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {primaryCta.label}
        </MotionLink>
      </div>
    </section>
  )
}

export default TrialClass
