import { useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import ScrollReveal from 'scrollreveal'
import Header from './sections/Header/Header'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Classes from './sections/Classes/Classes'
import Schedule from './sections/Schedule/Schedule'
import TrialClass from './sections/TrialClass/TrialClass'
import Testimonials from './sections/Testimonials/Testimonials'
import Location from './sections/Location/Location'
import FAQ from './sections/FAQ/FAQ'
import FinalCta from './sections/FinalCta/FinalCta'
import Footer from './sections/Footer/Footer'

function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const scrollReveal = ScrollReveal()
    scrollReveal.reveal('main section', {
      distance: '24px',
      duration: 700,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      interval: 100,
      origin: 'bottom',
      reset: false,
    })

    return () => scrollReveal.destroy()
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <>
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">
          <Hero />
          <About />
          <Classes />
          <Schedule />
          <TrialClass />
          <Testimonials />
          <Location />
          <FAQ />
          <FinalCta />
        </main>
        <Footer />
      </>
    </MotionConfig>
  )
}

export default App
