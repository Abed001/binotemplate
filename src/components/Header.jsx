import React, { useState } from 'react'
import logo from '../images/logo.png'
import { Pivot as Hamburger } from 'hamburger-react'

function header() {
  const [isOpen, setOpen] = useState(false)
  const [selectedLink, setSelectedLink] = useState('link1')

  const handleLinkClick = (link) => {
    setSelectedLink(link)
  }
  return (
    <>


      <div className='w-[100%] h-3 absolute top-5 right-[-10px] mt-2 ml-10 z-20 lg:hidden flex justify-between items-center p-5'>

        <img className=' max-w-[100px]' src={logo} alt="logo" />
        <Hamburger color='#5E4288' easing="ease-in" size={20} duration={0.3} toggled={isOpen} toggle={setOpen} />

      </div>
      {isOpen &&
        <div className='w-[50%] border-4 border-white flex justify-start absolute z-10 top-5 right-0 h-[70vh]'>

          <ul className='border-4 border-purple font-semibold tracking-tighter lg:hidden  bg-brickred text-white cursor-pointer uppercase flex flex-col items-center gap-y-5 py-20 w-[100%] '>
            <a href="#link1" onClick={() => handleLinkClick('link1')} className={`${selectedLink === 'link1' ? 'bg-white text-brickred  transition-all duration-500 px-4 py-2 rounded-lg' : ''}`}>Home</a>
            <a href="#link2" onClick={() => handleLinkClick('link2')} className={`${selectedLink === 'link2' ? 'bg-white text-brickred  transition-all duration-500 px-4 py-2 rounded-lg' : ''}`}>About US</a>
            <a href="#link3" onClick={() => handleLinkClick('link3')} className={`${selectedLink === 'link3' ? 'bg-white text-brickred  transition-all duration-500 px-4 py-2 rounded-lg' : ''}`}>portfolio</a>
            <a href="#link4" onClick={() => handleLinkClick('link4')} className={`${selectedLink === 'link4' ? 'bg-white text-brickred  transition-all duration-500 px-4 py-2 rounded-lg' : ''}`}>pricing</a>
            <a href="#link5" onClick={() => handleLinkClick('link5')} className={`${selectedLink === 'link5' ? 'bg-white text-brickred  transition-all duration-500 px-4 py-2 rounded-lg' : ''}`}>team</a>
            <a href="#link6" onClick={() => handleLinkClick('link6')} className={`${selectedLink === 'link6' ? 'bg-white text-brickred  transition-all duration-500 px-4 py-2 rounded-lg' : ''}`}>blog</a>
            <a href="#link7" onClick={() => handleLinkClick('link7')} className={`${selectedLink === 'link7' ? 'bg-white text-brickred  transition-all duration-500 px-4 py-2 rounded-lg' : ''}`}>contact</a>
          </ul>

        </div>
      }



      <div className='font-semibold tracking-tighter sticky top-10 flex justify-center hidden-on-phone hidden-on-tablet '>
        <div className='items-center justify-between w-full mx-40 flex '>
          <img className=' max-w-[100px]' src={logo} alt="logo" />
          <ul className='text-white cursor-pointer uppercase flex  gap-x-5 '>
            <a href="#link1" onClick={() => handleLinkClick('link1')} className={`${selectedLink === 'link1' ? 'border-b-2 border-brickred text-brickred h-[40px] transition-all duration-500' : ''}`}>Home</a>
            <a href="#link2" onClick={() => handleLinkClick('link2')} className={`${selectedLink === 'link2' ? 'border-b-2 border-brickred text-brickred h-[40px] transition-all duration-500' : ''}`}>About US</a>
            <a href="#link3" onClick={() => handleLinkClick('link3')} className={`${selectedLink === 'link3' ? 'border-b-2 border-brickred text-brickred h-[40px]  transition-all duration-500' : ''}`}>portfolio</a>
            <a href="#link4" onClick={() => handleLinkClick('link4')} className={`${selectedLink === 'link4' ? 'border-b-2 border-brickred text-brickred h-[40px]  transition-all duration-500' : ''}`}>pricing</a>
            <a href="#link5" onClick={() => handleLinkClick('link5')} className={`${selectedLink === 'link5' ? 'border-b-2 border-brickred text-brickred h-[40px]  transition-all duration-500' : ''}`}>team</a>
            <a href="#link6" onClick={() => handleLinkClick('link6')} className={`${selectedLink === 'link6' ? 'border-b-2 border-brickred text-brickred h-[40px]  transition-all duration-500' : ''}`}>blog</a>
            <a href="#link7" onClick={() => handleLinkClick('link7')} className={`${selectedLink === 'link7' ? 'border-b-2 border-brickred text-brickred h-[40px]  transition-all duration-500' : ''}`}>contact</a>
          </ul>
        </div>

      </div>
    </>
  )
}

export default header
