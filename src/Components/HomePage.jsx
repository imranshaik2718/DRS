import React from 'react'
import Navbar from './NavBar'
import Hero from './Hero'
import Bike from './Bike'
import Blog from './Blog'
import Tag from './Tag'
import About from './About'
import Contact from './Contact'




function HomePage() {
  return (
    <div className='bg-white'>
      <Navbar/>
      <Hero/>
      <Bike/>
      <About/>
      <Blog/>
     {/* <Demo/> */}
     <Contact/>
          <Tag/>
    </div>
  )
}

export default HomePage
