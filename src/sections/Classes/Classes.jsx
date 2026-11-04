import { classGroups } from '../../content/siteContent'
import styles from './Classes.module.css'

function Classes() {
  return (
    <section id="turmas" className="section" aria-labelledby="classes-title">
      <div className="container">
        <header className="section-header">
          <p className="eyebrow">Turmas</p>
          <h2 id="classes-title">Encontre a turma certa para você</h2>
          <p>Treinos para diferentes idades e níveis, com turmas pensadas para cada fase da sua evolução</p>
        </header>

        <ul className={styles.list}>
          {classGroups.map(({ imgSrc,name, audience, description }) => (
            <li key={name}>
              <article className={styles.classGroup}>
                <div className={styles.containerImg}>
                <img src={imgSrc} alt="" />
                </div>
                <h3>{name}</h3>
                <p className={styles.audience}>{audience}</p>
                <p className={styles.description}>{description}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Classes

