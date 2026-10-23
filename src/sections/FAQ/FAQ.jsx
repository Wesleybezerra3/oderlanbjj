import { faqItems } from '../../content/siteContent'
import styles from './FAQ.module.css'

/*
 * Native <details>/<summary> gives keyboard and screen reader support with zero JS.
 * Swap for Radix Accordion only if single-open behavior or animated height is required.
 */
function FAQ() {
  return (
    <section id="duvidas" className="section section--surface" aria-labelledby="faq-title">
      <div className={`container ${styles.layout}`}>
        <header className="section-header">
          <p className="eyebrow">Dúvidas</p>
          <h2 id="faq-title">Perguntas frequentes</h2>
        </header>

        <div className={styles.list}>
          {faqItems.map(({ question, answer }) => (
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

