import { useState } from 'react'
import { Badge, Table, Theme } from '@radix-ui/themes'
import { motion, useReducedMotion } from 'framer-motion'
import { weeklySchedule } from '../../content/siteContent'
import styles from './Schedule.module.css'

const getStartMinutes = (time) => {
  const match = time.match(/(\d{1,2})h(?:(\d{1,2}))?/i)

  if (!match) return Number.MAX_SAFE_INTEGER

  return Number(match[1]) * 60 + Number(match[2] ?? 0)
}

function Schedule() {
  const [groupFilter, setGroupFilter] = useState('Todas')
  const shouldReduceMotion = useReducedMotion()
  const timeSlots = [
    ...new Set(weeklySchedule.flatMap(({ sessions }) => sessions.map(({ time }) => time))),
  ].sort((a, b) => getStartMinutes(a) - getStartMinutes(b))

  return (
    <Theme accentColor="amber" grayColor="slate" radius="large">
      <section id="horarios" className={`section section--surface ${styles.schedule}`} aria-labelledby="schedule-title">
        <div className="container">
          <header className={`section-header ${styles.header}`}>
            <p className="eyebrow">Treine com a gente</p>
            <h2 id="schedule-title">Grade de horários</h2>
            <p>Encontre a turma ideal para sua rotina e venha treinar.</p>
          </header>

          <div
            role="group"
            aria-label="Filtrar por turma"
            className={styles.filters}
          >
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

          <div className={styles.tableCard}>
            <div className={styles.tableScroll}>
              <Table.Root
                size="3"
                variant="surface"
                className={styles.table}
                aria-label="Grade de horários das aulas por dia da semana"
              >
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeaderCell className={styles.timeHeader}>Horário</Table.ColumnHeaderCell>
                    {weeklySchedule.map(({ day }) => (
                      <Table.ColumnHeaderCell key={day} className={styles.dayHeader}>
                        {day}
                      </Table.ColumnHeaderCell>
                    ))}
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {timeSlots.map((time) => (
                    <Table.Row key={time} className={styles.tableRow}>
                      <Table.RowHeaderCell className={styles.timeCell}>{time}</Table.RowHeaderCell>
                      {weeklySchedule.map(({ day, sessions }) => {
                        const session = sessions.find(
                          (item) =>
                            item.time === time && (groupFilter === 'Todas' || item.group === groupFilter),
                        )

                        return (
                          <Table.Cell
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
                              <Badge color="gray" variant="solid" radius="full" className={styles.badge}>
                                {session.group}
                              </Badge>
                            ) : (
                              <span aria-label="Sem treino" className={styles.noClass}>
                                —
                              </span>
                            )}
                          </Table.Cell>
                        )
                      })}
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>
            </div>
          </div>
        </div>
      </section>
    </Theme>
  )
}

export default Schedule
