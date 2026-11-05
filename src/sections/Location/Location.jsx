import { academy } from '../../content/siteContent'
import MotionLink from '../../components/MotionLink/MotionLink'
import styles from './Location.module.css'

function Location() {
  const mapQuery = encodeURIComponent(academy.address)

  return (
    <section id="localizacao" className={`section ${styles.location}`} aria-labelledby="location-title">
      <div className={`container ${styles.layout}`}>
        <div className={styles.copy}>
          <p className="eyebrow">Localização</p>
          <h2 id="location-title">Onde treinamos</h2>
          <address className={styles.address}>
            <p className={styles.street}>{academy.street}</p>
            <p className={styles.city}>{academy.city}</p>
            <a className={styles.phone} href={academy.phoneUrl}>
              <span className={styles.contactLabel}>Telefone</span>
              {academy.phoneDisplay}
            </a>
            <a
              className={styles.whatsapp}
              href={academy.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </address>
          <MotionLink
            href={academy.mapsUrl}
            className={`button button--secondary ${styles.mapsLink}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir rota no Google Maps
          </MotionLink>
        </div>

        <div className={styles.mapFrame}>
          <iframe
            src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
            title={`Mapa da localização da academia: ${academy.address}`}
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

export default Location
