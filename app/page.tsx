import React from 'react'
import HomePageContent from './components/HomePageContent'
import CreativeServices from './components/CreativeServices'
import About from './components/About'
import Contact from './components/Contact' // if you have it

const Home = () => {
  return (
    <div>
      {/* HOME */}
      <section id="home">
        <HomePageContent />
      </section>

      {/* SERVICES PREVIEW */}
      <CreativeServices />

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>
      
    </div>
  )
}

export default Home
