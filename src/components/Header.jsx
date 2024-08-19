import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { Pivot as Hamburger } from 'hamburger-react'
import logo from '/images/logo.png'
import { motion } from "framer-motion"
import ScrollIntoView from 'react-scroll-into-view'
import { Link, animateScroll as scroll } from 'react-scroll';



function header() {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setOpen] = useState(false)
  const [selectedLink, setSelectedLink] = useState('link1')
  const Ref = useRef(null);
  const ref = useRef(null);


  const handleLinkClick = (link) => {
    setSelectedLink(link)
    setOpen(false)
  }

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setScrolling(true);
      $('#myElement').addClass('fadeIn');
    } else {
      setScrolling(false);
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

    <header>

      <div className='w-[100%] h-3 fixed top-5 right-[-3px] mt-2 ml-10 z-20 lg:hidden flex justify-between items-center p-5'>
        <img className=' max-w-[100px]' src={logo} alt="logo" />

        <Hamburger color='#FF1A1A' easing="ease-in" size={20} duration={0.3} toggled={isOpen} toggle={setOpen} />

      </div>
      {isOpen &&
        <motion.div transition={{ duration: 0.7, ease: "easeInOut" }} initial={{ opacity: 0 }}
          animate={{ x: -5, opacity: 1 }} exit={{ opacity: 0 }} className='w-[50%] flex justify-start fixed z-10 top-5 right-0 h-[70vh]'>

          <ul ref={ref} className=' font-semibold tracking-tighter lg:hidden  bg-white border-4 border-brickred text-brickred cursor-pointer uppercase flex flex-col items-center py-20  w-[100%] gap-y-5 md:gap-y-10 md:text-[1.7rem]'>
            
            <ScrollIntoView selector="#link1">
              <p href="#link1" onClick={() => handleLinkClick('link1')} className={`${selectedLink === 'link1' ? 'bg-brickred text-white  transition-all duration-500 px-4 py-2 rounded-lg' : ''}`}>Home</p>
            </ScrollIntoView>

            <ScrollIntoView selector="#link2">
              <p href="#link2" onClick={() => handleLinkClick('link2')} className={`${selectedLink === 'link2' ? 'bg-brickred text-white  transition-all duration-500 px-4 py-2 rounded-lg' : ''}`}>About US</p>
            </ScrollIntoView>

            <ScrollIntoView selector="#link3">
              <p href="#link3" onClick={() => handleLinkClick('link3')} className={`${selectedLink === 'link3' ? 'bg-brickred text-white  transition-all duration-500 px-4 py-2 rounded-lg' : ''}`}>portfolio</p>
            </ScrollIntoView>

            <ScrollIntoView selector="#link4">
              <p href="#link4" onClick={() => handleLinkClick('link4')} className={`${selectedLink === 'link4' ? 'bg-brickred text-white  transition-all duration-500 px-4 py-2 rounded-lg' : ''}`}>pricing</p>
            </ScrollIntoView>

            <ScrollIntoView selector="#link5">
              <p href="#link5" onClick={() => handleLinkClick('link5')} className={`${selectedLink === 'link5' ? 'bg-brickred text-white  transition-all duration-500 px-4 py-2 rounded-lg' : ''}`}>team</p>
            </ScrollIntoView>

            <ScrollIntoView selector="#link6">
              <p href="#link6" onClick={() => handleLinkClick('link6')} className={`${selectedLink === 'link6' ? 'bg-brickred text-white  transition-all duration-500 px-4 py-2 rounded-lg' : ''}`}>contact</p>
            </ScrollIntoView >

          </ul >

        </motion.div >
      }


      <div id="myElement" className={`ml-8 rounded-full bg-blackc/2 w-[95%] font-semibold tracking-tighter fixed top-10 flex justify-between hidden-on-phone hidden-on-tablet ${scrolling ? 'navbar-scroll top-2' : ''}`}>
        <div className=' items-center justify-between w-[100%] mx-40 flex '>
          <img className=' max-w-[100px]' src={logo} alt="logo" />
          <ul className='text-white cursor-pointer uppercase flex gap-x-5 '>

            <ScrollIntoView selector="#link1">
              <p ref={Ref} href="#link1" onClick={() => {
                handleLinkClick('link1');
              }} className={`${selectedLink === 'link1' ? ' border-b-2 border-brickred text-brickred h-[40px] transition-all duration-500' : ''}`}>Home
              </p>
            </ScrollIntoView>

            <ScrollIntoView selector="#link2">
              <p ref={Ref} href="#link2" onClick={() => {
                handleLinkClick('link2');
              }} className={`${selectedLink === 'link2' ? 'border-b-2 border-brickred text-brickred h-[40px] transition-all duration-500' : ''}`}>About US
              </p>
            </ScrollIntoView>

            <ScrollIntoView selector="#link3">
              <p href="#link3"
                onClick={() => handleLinkClick('link3')}
                className={`${selectedLink === 'link3' ? 'border-b-2 border-brickred text-brickred h-[40px]  transition-all duration-500' : ''}`}>portfolio
              </p>
            </ScrollIntoView>


            <ScrollIntoView selector="#link4">
              <p href="#link4"
                onClick={() => handleLinkClick('link4')}
                className={`${selectedLink === 'link4' ? 'border-b-2 border-brickred text-brickred h-[40px]  transition-all duration-500' : ''}`}>pricing
              </p>
            </ScrollIntoView>

            <ScrollIntoView selector="#link5">
              <p href="#link5"
                onClick={() => handleLinkClick('link5')}
                className={`${selectedLink === 'link5' ? 'border-b-2 border-brickred text-brickred h-[40px]  transition-all duration-500' : ''}`}>team
              </p>
            </ScrollIntoView>

            <ScrollIntoView selector="#link6">
              <p href="#link6"
                onClick={() => handleLinkClick('link6')}
                className={`${selectedLink === 'link6' ? 'border-b-2 border-brickred text-brickred h-[40px]  transition-all duration-500' : ''}`}>contact
              </p></ScrollIntoView>


          </ul>
        </div>

      </div >


    </header >
  )
}

export default header
