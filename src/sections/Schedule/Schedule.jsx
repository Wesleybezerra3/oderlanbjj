import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { weeklySchedule } from '../../content/siteContent'
import styles from './Schedule.module.css'

const getStartMinutes = (time) => {
  const match = time.match(/(\d{1,2})h(?:(\d{1,2}))?/i)

  if (!match) return Number.MAX_SAFE_INTEGER

  return Number(match[1]) * 60 + Number(match[2] ?? 0)
}

function matchesFilter(group, groupFilter) {
  return groupFilter === 'Todas' || group === groupFilter
}

function Schedule() {
  const [groupFilter, setGroupFilter] = useState('Todas')
  const shouldReduceMotion = useReducedMotion()
  const timeSlots = [
    ...new Set(weeklySchedule.flatMap(({ sessions }) => sessions.map(({ time }) => time))),
  ].sort((a, b) => getStartMinutes(a) - getStartMinutes(b))

  return (
    <section id="horarios" className={`section ${styles.schedule}`} aria-labelledby="schedule-title">
      <div className="container">
        <header className={`section-header ${styles.header}`}>
          <p className="eyebrow">Treine com a gente</p>
          <h2 id="schedule-title">Grade de horários</h2>
          <p>Encontre a turma ideal para sua rotina e venha treinar.</p>
        </header>

        <div role="group" aria-label="Filtrar por turma" className={styles.filters}>
          {['Todas', 'Adultos', 'Kids'].map((group) => (
            <motion.button
              key={group}
              type="button"
              aria-pressed={groupFilter === group}
              onClick={() => setGroupFilter(group)}
              className={styles.filter}
              whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.04 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 24 }}
            >
              {group}
            </motion.button>
          ))}
        </div>

        <div className={styles.dayList}>
          {weeklySchedule.map(({ day, sessions }) => {
            const visibleSessions = sessions
              .filter(({ group }) => matchesFilter(group, groupFilter))
              .sort((a, b) => getStartMinutes(a.time) - getStartMinutes(b.time))

            return (
              <section key={day} className={styles.dayBlock} aria-labelledby={`horario-${day}`}>
                <h3 id={`horario-${day}`} className={styles.dayTitle}>
                  {day}
                </h3>
                {visibleSessions.length > 0 ? (
                  <ul className={styles.sessionList}>
                    {visibleSessions.map(({ time, group }) => (
                      <li
                        key={`${day}-${time}`}
                        className={`${styles.sessionRow} ${
                          group === 'Kids' ? styles.kidsRow : styles.adultsRow
                        }`}
                      >
                        <span className={styles.sessionTime}>{time}</span>
                        <span className={styles.sessionGroup}>{group}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className={styles.emptyDay}>Sem treino neste filtro</p>
                )}
              </section>
            )
          })}
        </div>

        <div className={styles.tableCard}>
          <table className={styles.table} aria-label="Grade de horários das aulas por dia da semana">
            <thead>
              <tr>
                <th scope="col" className={styles.timeHeader}>
                  Horário
                </th>
                {weeklySchedule.map(({ day }) => (
                  <th key={day} scope="col" className={styles.dayHeader}>
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((time) => (
                <tr key={time} className={styles.tableRow}>
                  <th scope="row" className={styles.timeCell}>
                    {time}
                  </th>
                  {weeklySchedule.map(({ day, sessions }) => {
                    const session = sessions.find(
                      (item) => item.time === time && matchesFilter(item.group, groupFilter),
                    )

                    return (
                      <td
                        key={`${day}-${time}`}
                        className={
                          session
                            ? `${styles.sessionCell} ${
                                session.group === 'Kids' ? styles.kidsCell : styles.adultsCell
                              }`
                            : styles.emptyCell
                        }
                      >
                        {session ? (
                          <span className={styles.badge}>{session.group}</span>
                        ) : (
                          <span aria-label="Sem treino" className={styles.noClass}>
                            —
                          </span>
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Schedule
