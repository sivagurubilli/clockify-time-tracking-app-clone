import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/HomePage/Navbar'
import { TopSection } from '../components/HomePage/TopSection'

const Home = () => {
  return (
    <div>
      {/* <h1>home</h1> */}
      <Navbar />
      <TopSection />
      <Footer />
    </div>
  )
}

export default Home
