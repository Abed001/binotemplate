import React, { useEffect, useState } from 'react'
import { GalleryData } from "../GalleryData";
import study from '/images/study.jpg'
import CarouselPortfolio from '@/components/demo/CarouselPortfolio.jsx';

function Portfolio() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(GalleryData);
    }, [])


    return (
        <div className=''>
            <div className='justify-center items-center flex flex-col gap-y-10'>
                <p className=' font-bold text-4xl uppercase text-grey'>recent works</p>
                <p className='max-w-[70%] text-center text-[1rem] text-grey'>It has survived not only five centuries, but also the leap scrambled it to make a type.</p>
                <div className=" mb-10">
                    <div className="dotport"></div>
                </div>
                <div className='uppercase flex gap-x-5 font-bold'>
                    { /* {data.map((item) => (
                        <p key={item.id} className='text-brickred '>{item.title}</p>
                    ))}*/}
                </div>
                <div className='lg:mb-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    {
                        data.map((item) =>
                            <div className="container">
                                <img className='w-[100%] image' key={item.id} src={item.image} />
                                <div className="middle">
                                    <div className="text">Project</div>
                                </div>
                            </div>
                        )

                    }


                </div>


            </div>

            <div className='border-4 border-purple bg-ivory  flex flex-col w-[100%] justify-center items-center'>

                <div className='border-4 relative gap-y-5 flex flex-col lg:w-[100%] justify-center items-center'>
                    <p className='pt-20 font-bold text-4xl uppercase text-grey'>case study</p>
                    <p className='max-w-[70%] text-center text-[1rem] text-grey'>A brief story about how this process works, keep an eye till the end.</p>

                    <div className="mb-10">
                        <div className="dotport"></div>

                    </div>

                    {/*large screen*/}
                    <div className='hidden-on-phone bg-ivory h-[100vh]  w-[100%] lg:flex mb-40 '>
                        <div className=' z-40 absolute top-80 lg:left-60'>
                            <CarouselPortfolio />
                        </div>

                        <img className='h-[100vh] min-w-[40%] z-20 absolute lg:right-40' src={study} alt="study" />
                    </div>

                    {/*small screen*/}
                    <div className='relative w-[100%] lg:hidden bg-ivory  flex flex-col justify-center items-center mb-40 '>
                        <div className='absolute flex flex-col justify-center items-center'>
                            <CarouselPortfolio />
                        </div>

                        <img className='w-full object-center object-cover object-no-repeat ' src={study} alt="study" />
                    </div>
                </div>







            </div>
        </div >
    )
}

export default Portfolio
