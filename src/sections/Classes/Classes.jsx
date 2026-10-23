import { classGroups } from '../../content/siteContent'
import styles from './Classes.module.css'

function Classes() {
  return (
    <section id="turmas" className="section" aria-labelledby="classes-title">
      <div className="container">
        <header className="section-header">
          <p className="eyebrow">Turmas</p>
          <h2 id="classes-title">[Encontre a turma certa para você]</h2>
          <p>[Frase curta explicando que há opções por idade e nível.]</p>
        </header>

        <ul className={styles.list}>
          {classGroups.map(({ name, audience, description }) => (
            <li key={name}>
              <article className={styles.classGroup}>
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

