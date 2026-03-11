import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Products } from './components/Products'
import { About } from './components/About'
import { TechStack } from './components/TechStack'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <About />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
