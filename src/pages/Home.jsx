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
      <TopSection head={'The most popular free'} head2={'time tracker'} head3={'for teams'} para={'Time tracking software used by millions. Clockify is a time tracker and timesheet app that lets you track work hours across projects. Unlimited users, free forever.'} />
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
