import { publishedFaqItems } from '../../content/siteContent'
import styles from './FAQ.module.css'

/*
 * Native <details>/<summary> gives keyboard and screen reader support with zero JS.
 * The section is omitted until real answers exist — same rule as testimonials.
 */
function FAQ() {
  if (publishedFaqItems.length === 0) return null

  return (
    <section id="duvidas" className="section section--surface" aria-labelledby="faq-title">
      <div className={`container ${styles.layout}`}>
        <header className="section-header">
          <p className="eyebrow">Dúvidas</p>
          <h2 id="faq-title">Perguntas frequentes</h2>
        </header>

        <div className={styles.list}>
          {publishedFaqItems.map(({ question, answer }) => (
            <details key={question} className={styles.item}>
              <summary className={styles.question}>{question}</summary>
              <p className={styles.answer}>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
