import ImagePlaceholder from '../../components/ImagePlaceholder/ImagePlaceholder'
import { academy } from '../../content/siteContent'
import styles from './Location.module.css'

function Location() {
  return (
    <section id="localizacao" className="section" aria-labelledby="location-title">
      <div className={`container ${styles.layout}`}>
        <div className={styles.copy}>
          <p className="eyebrow">Localização</p>
          <h2 id="location-title">Onde treinamos</h2>
          <address className={styles.address}>
            <span>{academy.address}</span>
            <a href={academy.whatsappUrl} target="_blank" rel="noopener noreferrer">
              {academy.phoneDisplay}
            </a>
          </address>
          <a
            href={academy.mapsUrl}
            className={`button button--secondary ${styles.mapsLink}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir rota no Google Maps
          </a>
        </div>

        {/* Replace with a lazy-loaded Google Maps iframe (loading="lazy") */}
        <ImagePlaceholder label="[Mapa da localização]" ratio="16 / 10" />
      </div>
    </section>
  )
}

export default Location

