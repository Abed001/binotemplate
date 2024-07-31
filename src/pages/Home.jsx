import React from 'react'
import Header from "../components/Header"
import { CarouselDemo } from '@/components/demo/CarouselDemo'
import { FaArrowDown } from "react-icons/fa";
import { FaRegClone } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";



function Home() {
  return (

    <div className=' mb-80 h-[100vh] bg-homelg bg-center lg:bg-bottom bg-cover bg-no-repeat ' >

      <div className='h-screen relative bg-blackc/60'>
      {/*<div className='fixed left-0 top-10'><Header /></div>*/}
      <Header/>
        
        <div className='pt-20 md:pt-40 lg:pt-0 lg:mt-40 flex justify-center'>
          <CarouselDemo />
        </div>

        <div className='w-[100%] flex justify-center  absolute  top-[97%]'>
          < FaArrowDown className='hover:translate-y-2 transition-all duration-500 cursor-pointer text-brickred bg-lightgrey h-[40px] w-[40px] p-2 rounded-full' />
        </div>

{ /*       <div className=' justify-evenly text-grey w-[100%] gap-y-5  mt-[90%] flex flex-col md:flex-row md:mt-[60%] lg:mt-[20%] lg:flex-row lg:gap-x-5 '>
*/}     

   <div className='mt-[50vh] md:mt-[50vh] lg:mt-[30vh] justify-evenly text-grey w-[100%] gap-y-5 flex flex-col md:flex-row lg:flex-row lg:gap-x-5 '>


          {/*card*/}
          <section className='icon-wrapper mt-5 flex flex-col items-center justify-center gap-y-5'>
            <div className=" icon-wrapper ">
              <div className="icon-content">
                <FaRegClone />
              </div>
              <div className="border-square absolute -top-6 -left-6"></div>
            </div>
            <p className='textbrickred uppercase mt-5 font-bold'>sleek design</p>
            <div className="w-[50px] rounded-md border-b-4 border-grey"> </div>
            <p className='max-w-60 md:max-w-40 lg:max-w-60 text-center text-[0.7rem]'>Lorem ipsum dolor sit ame pariatur ipsa assumenda expedita numquam, quas eligendi optio mag.
            </p>
          </section>

          {/*card*/}
          <section className='icon-wrapper mt-5 flex flex-col items-center justify-center gap-y-5'>
            <div className=" icon-wrapper ">
              <div className="icon-content">
                <FaRegHeart />
              </div>
              <div className="border-square absolute -top-6 -left-6"></div>
            </div>
            <p className='textbrickred uppercase mt-5 font-bold'>clean code</p>
            <div className="w-[50px] rounded-md border-b-4 border-grey"> </div>
            <p className='max-w-60 text-center text-[0.7rem]'>Lorem ipsum dolor sit ame pariatur ipsa assumenda expedita numquam, quas eligendi optio mag.
            </p>
          </section>


          {/*card*/}
          <section className='icon-wrapper mt-5 flex flex-col items-center justify-center gap-y-5'>
            <div className=" icon-wrapper ">
              <div className="icon-content">
                <FaRegLightbulb />
              </div>
              <div className="border-square absolute -top-6 -left-6"></div>
            </div>
            <p className='textbrickred uppercase mt-5 font-bold'>creative ideas</p>
            <div className="w-[50px] rounded-md border-b-4 border-grey"> </div>
            <p className='max-w-60 text-center text-[0.7rem]'>Lorem ipsum dolor sit ame pariatur ipsa assumenda expedita numquam, quas eligendi optio mag.
            </p>
          </section>

          {/*card*/}
          <section className='icon-wrapper mt-5 flex flex-col items-center justify-center gap-y-5'>
            <div className=" icon-wrapper ">
              <div className="icon-content">
                <FaRegComments />
              </div>
              <div className="border-square absolute -top-6 -left-6"></div>
            </div>
            <p className='textbrickred uppercase mt-5 font-bold'>free support</p>
            <div className="w-[50px] rounded-md border-b-4 border-grey"> </div>
            <p className='max-w-60 text-center text-[0.7rem]'>Lorem ipsum dolor sit ame pariatur ipsa assumenda expedita numquam, quas eligendi optio mag.
            </p>
          </section>

        </div>


      </div>

    </div>

  )
}

export default Home
