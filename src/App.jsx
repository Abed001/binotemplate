import { useState } from 'react'
import Home from "./pages/Home"
import Aboutus from './pages/Aboutus'
import Portfolio from './pages/Portfolio'
import Header from './components/Header'

function App() {


  return (


    <div className='relative flex flex-col w-[100%] h-screen gap-y-5 '>
      <div className='mb-[700px] md:mb-10 lg:mb-40'> <Home /></div>
   
{/*      <div className=' border-t-[0.5px] border-grayishblue h-[100vh] mt-[100vh] md:mt-[20vh] lg:mt-[10vh]'>
*/}    
<div className='border-t-[0.5px] border-grayishblue mb-[200px] lg:mb-40'> 
    <Aboutus />
      </div>

      <div className=' '>
        <Portfolio />
      </div>

    </div>
  
  )
}

export default App
