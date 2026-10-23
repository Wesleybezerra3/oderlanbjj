import styles from './ImagePlaceholder.module.css'

/*
 * Wireframe stand-in for real photography. Exposes the intended alt text
 * via role="img" so the accessibility tree matches the final implementation.
 */
function ImagePlaceholder({ label, ratio = '4 / 3', className = '' }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`${styles.placeholder} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <span className={styles.label} aria-hidden="true">
        {label}
      </span>
    </div>
  )
}

export default ImagePlaceholder

