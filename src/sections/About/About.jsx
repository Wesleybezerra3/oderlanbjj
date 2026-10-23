import ImagePlaceholder from '../../components/ImagePlaceholder/ImagePlaceholder'
import { about } from '../../content/siteContent'
import styles from './About.module.css'

function About() {
  return (
    <section id="sobre" className="section section--surface" aria-labelledby="about-title">
      <div className={`container ${styles.layout}`}>
         {about.imageSrc ? (
          // Above the fold: loaded eagerly with high priority (LCP element).
          <img
            src={about.imageSrc}
            srcSet={about.imageSrcSet}
            sizes="100vw"
            alt={about.imageAlt}
            width="1200"
            height="1600"
            className={styles.backgroundImage}
            fetchPriority="high"
            decoding="async"
          />
        ) : (
          <div role="img" aria-label={about.imageAlt} className={styles.backgroundPlaceholder}>
            <span aria-hidden="true">[Imagem de fundo — {about.imageAlt}]</span>
          </div>
        )}

        <div className={styles.copy}>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 id="about-title">{about.title}</h2>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

