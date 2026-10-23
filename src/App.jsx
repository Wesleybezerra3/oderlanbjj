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
  return (
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
  )
}

export default App
