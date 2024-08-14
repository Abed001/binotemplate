import { useState } from 'react'
import Home from "./pages/Home"
import Aboutus from './pages/Aboutus'
import Portfolio from './pages/Portfolio'
import Pricing from './pages/Pricing'
import { useRef } from 'react';

function App() {
 

  return (


    <div className='relative flex flex-col w-[100%] h-screen gap-y-5 '>
      <div  id="link1" className='mb-[700px] md:mb-10 lg:mb-40'> <Home /></div>

      <div id="link2" className='border-t-[0.5px] border-grayishblue mb-[200px] lg:mb-40'>
        <Aboutus />
      </div>

      <div  id="link3">
        <Portfolio />
      </div>

      <div id="link4" className='mb-[200px] lg:mb-20'>
        <Pricing />
      </div>

    </div>

  )
}

export default App
