import React from 'react'
import Advantages from '../components/Footer/Advantages'
import Footer from '../components/Footer/Footer'
import Reviews from '../components/Footer/Reviews'
import Support from '../components/Footer/Support'
import { Features } from '../components/HomePage/Features'
import Navbar from '../components/HomePage/Navbar'
import { TopSection } from '../components/HomePage/TopSection'
import { TrackingApp } from '../components/HomePage/TrackingApp'

const Home = () => {
  return (
    <div>
      {/* <h1>home</h1> */}
      <Navbar />
      <TopSection />
      <Features />
      <TrackingApp />
      <Advantages />
      <Support />
      <Reviews />
      <Footer />
    </div>
  )
}

export default Home
