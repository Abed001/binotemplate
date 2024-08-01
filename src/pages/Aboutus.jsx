import React from 'react'
import stab1 from '/images/stab1.png'
import servicerightimg from '/images/servicerightimg.jpg'
import { FcLike } from "react-icons/fc";
function Aboutus() {
  return (
    <section className=' pt-[10%]'>
      <div className='  w-[100%] flex flex-col justify-center md:justify-center lg:flex-row lg:justify-between '>
        <div className='flex-1 mb-10 md:flex md:justify-center md:mb-10 lg:mb-0'>
          <img src={stab1} alt="pc photo" />
        </div>

        <div className='items-center md:items-center lg:items-start gap-y-10 w-[100%] flex-1 flex flex-col  text-grey  '>
          <div className='flex'>
            <span className="mr-10 border-x-[4px] border-brickred"> </span>
            <span className=' font-bold text-4xl uppercase'>our history</span></div>
          <p className='text-center md:text-center lg:text-left text-[0.7rem] min-w-[100%] leading-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cum quasi minus deserunt impedit quis magnam voluptate. Laboriosam dolore ratione id illum labore quis nisi, totam, quia, perspiciatis autem nobis.
            Evenietoluptatum molestiae animi quasi praesentium quis totam corrupti eligendi veniam soluta harum, suscipit deleniti. Accusamus commodi beatae dolorem iure quia.</p>
          <button className=' text-[0.7rem] px-8 py-4 bg-brickred text-white font-bold rounded-sm uppercase lg:mr-auto '>brows our work </button>
        </div>
      </div>
      {/*services*/}
      <div className='w-[100%] flex flex-col lg:flex-row  mt-[10%] text-white '>

        <div className='relative flex flex-1 flex-col bg-onyx p-10 lg:p-20 '>
          <div className='justify-end flex'>
            <span className='mr-5 font-bold text-2xl lg:text-4xl uppercase'>our services</span>
            <p className="lg:ml-10 h-[50px] border-r-[8px] border-brickred"> </p>
          </div>

          <section className='mt-10 gap-y-10 flex flex-col justify-evenly h-[100%]'>

            {/*heart icons*/}
            <div className='hidden-on-phone hidden-on-tablet absolute -right-10 top-10 flex flex-col justify-evenly h-[100%]'>
              <div className='flex justify-center items-center bg-white rounded-full w-20 h-20 border-8 border-lightgrey'><FcLike size={30} /></div>
              <div className='flex justify-center items-center bg-white rounded-full w-20 h-20 border-8 border-lightgrey'><FcLike size={30} /></div>
              <div className='flex justify-center items-center bg-white rounded-full w-20 h-20 border-8 border-lightgrey'><FcLike size={30} /></div>

            </div>

            {/*services name*/}
            <div className='flex gap-x-5'>
              <div className='text-lightgrey text-right'>
                <p className=' uppercase text-brickred text-[1.2rem]'>web design</p>
                <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, nemo? Corporis, nisi illum repudiandae tempore facilis ipsam possimus non similique </p>
              </div>
              <div className='lg:hidden flex justify-center items-center bg-white rounded-full w-10 h-10 p-2 border-4 border-lightgrey'><FcLike size={20} /></div>
              {/*              <div className='hidden-on-phone flex justify-center items-center bg-white rounded-full w-20 h-20 border-8 border-lightgrey'><FcLike size={30} /></div>
*/}            </div>

            <div className='flex gap-x-5'>
              <div className='text-lightgrey text-right'>
                <p className=' uppercase text-brickred text-[1.2rem]'>print design</p>
                <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, nemo? Corporis, nisi illum repudiandae tempore facilis ipsam possimus non similique </p>
              </div>
              <div className='lg:hidden flex justify-center items-center bg-white rounded-full w-10 h-10 p-2 border-4 border-lightgrey'><FcLike size={20} /></div>
              {    /*          <div className='hidden-on-phone flex justify-center items-center bg-white rounded-full w-20 h-20 border-8 border-lightgrey'><FcLike size={30} /></div>
*/}            </div>

            <div className='flex gap-x-5'>
              <div className='text-lightgrey text-right'>
                <p className=' uppercase text-brickred text-[1.2rem]'>photography</p>
                <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, nemo? Corporis, nisi illum repudiandae tempore facilis ipsam possimus non similique </p>
              </div>
              <div className='lg:hidden flex justify-center items-center bg-white rounded-full w-10 h-10 p-2 border-4 border-lightgrey'><FcLike size={20} /></div>
              {/*              <div className='hidden-on-phone flex justify-center items-center bg-white rounded-full w-20 h-20 border-8 border-lightgrey'><FcLike size={30} /></div>
*/}            </div>
          </section>
        </div>




        {/*services image*/}
        <div className='w-[100%] lg:w-[50%]'>
          <img className='w-[100%] h-[100%] object-center object-cover object-no-repeat' src={servicerightimg} alt="services" />
        </div>
      </div>

    </section>

  )
}

export default Aboutus
