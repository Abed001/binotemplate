import React, { useState, useRef } from 'react'
import { Pivot as Hamburger } from 'hamburger-react'
import logo from '/images/logo.png'
import { motion } from "framer-motion"

function header() {
  const [isOpen, setOpen] = useState(false)
  const [selectedLink, setSelectedLink] = useState('link1')
  const ref = useRef(null)

  const handleLinkClick = (link) => {
    setSelectedLink(link)
    setOpen(false)
  }


  return (
    <>

    

        <div className=' w-[100%] h-3 fixed top-5 right-[-3px] mt-2 ml-10 z-20 lg:hidden flex justify-between items-center p-5'>
          <img className=' max-w-[100px]' src={logo} alt="logo" />

          <Hamburger color='#ffff' easing="ease-in" size={20} duration={0.3} toggled={isOpen} toggle={setOpen} />

        </div>
        {isOpen &&
          <motion.div transition={{ duration: 0.7, ease: "easeInOut" }} initial={{ opacity: 0 }}
            animate={{ x: -5, opacity: 1 }} exit={{ opacity: 0 }} className='w-[50%] flex justify-start fixed z-10 top-5 right-0 h-[70vh]'>

            <ul ref={ref} className=' font-semibold tracking-tighter lg:hidden  bg-brickred text-white cursor-pointer uppercase flex flex-col items-center gap-y-5 py-20 w-[100%] '>
              <a href="#link1" onClick={() => handleLinkClick('link1')} className={`${selectedLink === 'link1' ? 'bg-white text-brickred  transition-all duration-500 px-4 py-2 rounded-lg' : ''}`}>Home</a>
              <a href="#link2" onClick={() => handleLinkClick('link2')} className={`${selectedLink === 'link2' ? 'bg-white text-brickred  transition-all duration-500 px-4 py-2 rounded-lg' : ''}`}>About US</a>
              <a href="#link3" onClick={() => handleLinkClick('link3')} className={`${selectedLink === 'link3' ? 'bg-white text-brickred  transition-all duration-500 px-4 py-2 rounded-lg' : ''}`}>portfolio</a>
              <a href="#link4" onClick={() => handleLinkClick('link4')} className={`${selectedLink === 'link4' ? 'bg-white text-brickred  transition-all duration-500 px-4 py-2 rounded-lg' : ''}`}>pricing</a>
              <a href="#link5" onClick={() => handleLinkClick('link5')} className={`${selectedLink === 'link5' ? 'bg-white text-brickred  transition-all duration-500 px-4 py-2 rounded-lg' : ''}`}>team</a>
              <a href="#link6" onClick={() => handleLinkClick('link6')} className={`${selectedLink === 'link6' ? 'bg-white text-brickred  transition-all duration-500 px-4 py-2 rounded-lg' : ''}`}>blog</a>
              <a href="#link7" onClick={() => handleLinkClick('link7')} className={`${selectedLink === 'link7' ? 'bg-white text-brickred  transition-all duration-500 px-4 py-2 rounded-lg' : ''}`}>contact</a>
            </ul>

          </motion.div>
        }



        <div className='bg-blackc/2 w-[100%] font-semibold tracking-tighter fixed top-10 flex justify-between hidden-on-phone hidden-on-tablet '>
          <div className='border-4 border-purple items-center justify-between w-[100%] mx-40 flex '>
            <img className=' max-w-[100px]' src={logo} alt="logo" />
            <ul className='text-white cursor-pointer uppercase flex   gap-x-5 '>
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
