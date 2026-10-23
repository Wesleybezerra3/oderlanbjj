import { weeklySchedule } from '../../content/siteContent'
import styles from './Schedule.module.css'

function Schedule() {
  return (
    <section id="horarios" className="section section--surface" aria-labelledby="schedule-title">
      <div className="container">
        <header className="section-header">
          <p className="eyebrow">Horários</p>
          <h2 id="schedule-title">Grade semanal de treinos</h2>
          <p>[Observação sobre a grade, ex.: horários sujeitos a alteração em feriados.]</p>
        </header>

        <ul className={styles.days}>
          {weeklySchedule.map(({ day, sessions }) => (
            <li key={day} className={styles.day}>
              <h3 className={styles.dayName}>{day}</h3>
              <ul className={styles.sessions}>
                {sessions.map(({ time, group }, index) => (
                  // Index is part of the key because placeholder entries are not unique yet.
                  <li key={`${time}-${group}-${index}`} className={styles.session}>
                    <span className={styles.time}>{time}</span>
                    <span>{group}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Schedule

