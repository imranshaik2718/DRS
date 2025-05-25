import React from 'react'
import Navbar from './NavBar'
import Hero from './Hero'
import Bike from './Bike'
import Blog from './Blog'
import Tag from './Tag'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Advertisement from './Advertisement'
// import Membership from './Membership'
// import Map from './Map'




function HomePage() {
  return (
    <div className='bg-white'>
      <Navbar/>
      <Hero/>
      <Bike/>
      <About/>
     {/* <Membership/> */}
      <Blog/>
          <Advertisement/>
     <Contact/>
          <Tag/>
          {/* <Map/> */}
          <Footer/>
    </div>
  )
}

export default HomePage



