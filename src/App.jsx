import React from 'react'
import Nav from './sections/Nav'
import NewArrival from './sections/NewArrival'
import BestSeller from './sections/BestSeller'
import OurPolicies from './sections/OurPolicies'
import NewsLetter from './sections/NewsLetter'
// import Hero from './sections/Hero'

const App = () => {
  return (
    <main>
      <Nav/>
      {/* <Hero/> */}
      <NewArrival/>
      <BestSeller/>
      <OurPolicies/>
      <NewsLetter/>
    </main>
  )
}

export default App