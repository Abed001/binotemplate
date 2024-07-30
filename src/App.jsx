import { useState } from 'react'
import Home from "./pages/Home"
import Aboutus from './pages/Aboutus'

function App() {


  return (

    <div className=' flex flex-col w-[100%] h-screen gap-y-5 '>
      <Home />
      <div className='px-5 lg:px-10 border-t-[0.5px] border-grayishblue h-[100vh] mt-[100vh] md:mt-[20vh] lg:mt-[10vh]'>
        <Aboutus />
      </div>

    </div>

  )
}

export default App
