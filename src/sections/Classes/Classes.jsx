import { classGroups } from '../../content/siteContent'
import MotionLink from '../../components/MotionLink/MotionLink'
import styles from './Classes.module.css'

function Classes() {
  return (
    <section id="turmas" className="section" aria-labelledby="classes-title">
      <div className="container">
        <header className="section-header">
          <h2 id="classes-title">Encontre a turma certa para você</h2>
          <p>Treinos para diferentes idades e níveis, com turmas pensadas para cada fase da sua evolução</p>
        </header>

        <ul className={styles.list}>
          {classGroups.map(
            ({ imgSrc, imageAlt, name, audience, description, ctaLabel, whatsappUrl }) => (
              <li key={name}>
                <article className={styles.panel}>
                  <div className={styles.photo}>
                    <img src={imgSrc} alt={imageAlt} width="800" height="1000" loading="lazy" />
                    <div className={styles.caption}>
                      <h3>{name}</h3>
                      <p>{audience}</p>
                    </div>
                  </div>
                  <p className={styles.description}>{description}</p>
                  <MotionLink
                    href={whatsappUrl}
                    className={styles.cta}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {ctaLabel}
                  </MotionLink>
                </article>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  )
}

export default Classes
