import React from 'react'
import Hero from "../components/Hero"
import Upload from "../components/Upload"
import About from "../components/About"
import Support from "../components/Support"
import Footer from "../components/Footer"


const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Upload/>
        <Support/>
        <Footer/>
    </div>
  )
}

export default Home