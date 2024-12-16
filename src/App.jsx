import React from 'react'
import Nav from './sections/Nav'
import NewArrival from './sections/NewArrival'
import BestSeller from './sections/BestSeller'
import OurPolicies from './sections/OurPolicies'
import NewsLetter from './sections/NewsLetter'
import Footer from './components/Footer'
// import Hero from './sections/Hero'

const App = () => {
  return (
    <main className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Nav/>
      {/* <Hero/> */}
      <NewArrival/>
      <BestSeller/>
      <OurPolicies/>
      <NewsLetter/>
      <Footer/>
    </main>
  )
}

export default App