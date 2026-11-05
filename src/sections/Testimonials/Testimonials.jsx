import { publishedTestimonials } from '../../content/siteContent'
import styles from './Testimonials.module.css'

function Testimonials() {
  // Never show fabricated social proof: the section only renders with real entries.
  if (publishedTestimonials.length === 0) return null

  return (
    <section className="section section--surface" aria-labelledby="testimonials-title">
      <div className="container">
        <header className="section-header">
          <p className="eyebrow">Depoimentos</p>
          <h2 id="testimonials-title">O que dizem nossos alunos</h2>
        </header>

        <ul className={styles.list}>
          {publishedTestimonials.map(({ quote, author, detail }, index) => (
            <li key={`${author}-${index}`}>
              <figure className={styles.testimonial}>
                <blockquote className={styles.quote}>
                  <p>{quote}</p>
                </blockquote>
                <figcaption className={styles.author}>
                  <strong>{author}</strong>
                  <span>{detail}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Testimonials

