import { motion, useReducedMotion } from 'framer-motion'

function MotionLink({ children, ...props }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.a
      {...props}
      whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 24 }}
    >
      {children}
    </motion.a>
  )
}

export default MotionLink
