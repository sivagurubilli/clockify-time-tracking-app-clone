import React from 'react'
import Footer from '../components/Footer/Footer'
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
      <Footer />
    </div>
  )
}

export default Home
