import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Products } from './components/Products'
import { About } from './components/About'
import { TechStack } from './components/TechStack'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { AnimatedBackground } from './components/AnimatedBackground'
import { ScrollReveal } from './components/ScrollReveal'

function App() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <ScrollReveal><Services /></ScrollReveal>
        <ScrollReveal><Products /></ScrollReveal>
        <ScrollReveal><About /></ScrollReveal>
        <ScrollReveal><TechStack /></ScrollReveal>
        <ScrollReveal><Contact /></ScrollReveal>
        <Footer />
      </div>
    </div>
  )
}

export default App
