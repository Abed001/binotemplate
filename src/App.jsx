import { useState } from 'react'
import Home from "./pages/Home"
import Aboutus from './pages/Aboutus'
import Portfolio from './pages/Portfolio'
import Header from './components/Header'

function App() {


  return (


    <div className='relative flex flex-col w-[100%] h-screen gap-y-5 '>
    { /* <div className='z-100 fixed'> <Header /></div>*/}

      <Home />
      <div className=' border-t-[0.5px] border-grayishblue h-[100vh] mt-[100vh] md:mt-[20vh] lg:mt-[10vh]'>
        <Aboutus />
      </div>

      <div className='  h-[100vh] mt-[100vh] md:mt-[20vh] lg:mt-[120vh]'>
        <Portfolio />
      </div>

    </div>
  
  )
}

export default App
