import React from 'react'
import team1 from '/images/team1.jpg'
import team2 from '/images/team2.jpg'
import team3 from '/images/team3.jpg'
import team4 from '/images/team4.jpg'
import clogo1 from '/images/clogo1.png'
import clogo2 from '/images/clogo2.png'
import clogo3 from '/images/clogo3.png'
import clogo4 from '/images/clogo4.png'
import clogo5 from '/images/clogo5.png'
import clogo6 from '/images/clogo6.png'
import clogo7 from '/images/clogo7.png'
import clogo8 from '/images/clogo8.png'


const images = [
  {
    image: '/images/clogo1.png',

  },
  {
    image: '/images/clogo2.png',

  },
  {
    image: '/images/clogo3.png',


  },
  {
    image: '/images/clogo4.png',

  },
  {
    image: '/images/clogo5.png',

  },
  {
    image: '/images/clogo6.png',

  },
  {
    image: '/images/clogo7.png',

  },

  {
    image: '/images/clogo8.png',

  },
];


function Team() {
  return (
    <>
      <div className='  relative bg-teambg w-[100%] h-[100vh] bg-center bg-no-repeat bg-cover'>
        <div className='gap-y-5 flex flex-col justify-center items-center text-white  '>
          <p className='pt-20 font-bold text-4xl uppercase'>our team</p>
          <p className='max-w-[70%] lg:max-w-[90%] text-center text-[1rem] text-lightergrey font-semibold tracking-wide'>Meet the craziest team. Share your thoughts with them</p>

          <div className="mb-10">
            <div className="dotteam"></div>

          </div>
        </div>

        <div className="image-container hidden-on-phone bg-teambg2 w-[100%] bg-center bg-no-repeat bg-cover absolute bottom-0 left-0 h-[100vh]">
          <div className='absolute top-[50%] left-0 right-0 flex justify-around'>
            <img className='absolute lg:top-[20%] md:-top-10 left-[10%] rounded-full size-14 lg:size-20 object-cover' src={team1} />
            <img className=' absolute -top-12 left-[30%] rounded-full size-14 lg:size-20 object-cover' src={team2} />
            <img className=' absolute -top-5 left-[60%] rounded-full size-14 lg:size-20 object-cover' src={team3} />
            <img className='absolute lg:-top-11 left-[90%] md:top-[20%] rounded-full size-14 lg:size-20 object-cover' src={team4} />

          </div>
        </div>

        <div className="image-container lg:hidden md:hidden bg-teambg2 w-[100%] bg-center bg-no-repeat bg-cover absolute bottom-0 left-0 h-[100vh]">
          <div className='absolute top-[50%] left-0 right-0 flex justify-around'>
            <img className='absolute -top-10 left-[5%] rounded-full size-14 lg:size-20 object-cover' src={team1} />
            <img className=' absolute -top-10 left-[28%] rounded-full size-14 lg:size-20 object-cover' src={team2} />
            <img className=' absolute -top-10 left-[50%] rounded-full size-14 lg:size-20 object-cover' src={team3} />
            <img className='absolute -top-5 left-[75%] rounded-full size-14 lg:size-20 object-cover' src={team4} />

          </div>
        </div>

      </div>
      <div className='bg-ivory flex flex-col justify-center items-center'>
        <div className='text-center gap-y-5 flex flex-col justify-center items-center text-grey  '>
          <p className='pt-20 font-bold text-3xl lg:text-4xl uppercase'>Great Integrations with Others</p>
          <p className='max-w-[70%] lg:max-w-[90%] text-center text-[0.7rem] lg:text-[1rem] text-grey'>Suspendisse sed eros mollis, tincidunt felis eget, interdum erat. Nullam sit amet odio eu est aliquet euismod a a urna. Proin eu urna suscipit, dictum quam nec.</p>

          <div className="mb-10">
            <div className="dotport"></div>

          </div>
        </div>
        <div className='mb-20  mt-10 px-10 grid grid-cols-2 gap-y-10 gap-x-10 lg:grid-cols-4 lg:grid-rows-2'>
          {images.map((image, index) => (
            <div key={index} className='p-5 shadow-md bg-white w-1/1 lg:min-w-[90%] lg:min-h-[80%] flex justify-center items-center'>
              <img  className=' object-cover' src={image.image} />
            </div>
          ))}

        </div>
      </div>

    </>
  )
}

export default Team
