import React from 'react'

function Pricing() {
    return (
        <section>
            <div className='pt-20 mt-[-20px] flex flex-col justify-center items-center'>
                <div className='gap-y-5 flex flex-col justify-center items-center  '>
                    <p className='pt-20 font-bold text-4xl uppercase text-grey'>our pricing</p>
                    <p className='max-w-[70%] lg:max-w-[90%] text-center text-[1rem] text-grey'>A 30 days free trial for all.A brief history about how this process works,keep an eye till the end.</p>

                    <div className="mb-10">
                        <div className="dotport"></div>

                    </div>
                </div>


                <div className=' p-10 gap-y-10 lg:gap-x-10 w-[100%] mt-[10%] lg:mt-[5%] flex lg:flex-row flex-col justify-center items-center'>


                    {/*pricing card*/}
                    <div className='cardhover relative flex flex-col justify-center items-center max-w-[100%] md:max-w-[80%] lg:max-w-[30%] h-[100%] lg:h-[80%]'>
                        <div className='bg-lightgrey h-[30vh] w-[100%] text-center'>
                            <p className='pt-10 text-[1.5rem] uppercase text-white'>starter</p>
                        </div>

                        {/*rounded plan price*/}
                        <div className=' neon-button absolute top-[20%]  bg-white rounded-full p-[15%] flex justify-center items-center text-lightgrey flex-col'>
                            <p className='text-4xl font-bold'>$19</p>
                            <p className='semi-bold'>per month</p>
                        </div>


                        <div className=' px-10 h-[50vh] md:h-[40vh] lg:pt-[20%] lg:h-[60vh] 2xl:h-[60vh]  bg-lightergrey flex flex-col justify-center items-center  '>
                            <p className='lg:text-[0.7rem] xl:text-[1.1rem]  2xl:text-[1.5rem]  font-normal text-lightgrey text-center leading-10 '>Competition Analysis Methods
                                All Ranked URLs
                                International Support System
                                Social Media Tracking</p>
                            <button className='text-[0.7rem] mt-10 uppercase text-white bg-grey py-4 px-6 rounded-sm'>choose plan</button>
                        </div>
                    </div>


                    {/*pricing card*/}
                    <div className='cardhover relative flex flex-col justify-center items-center max-w-[100%] h-[100%] md:max-w-[80%] lg:max-w-[30%] lg:h-[80%]'>
                        <div className='bg-brickred h-[30vh] w-[100%] text-center'>
                            <p className='pt-10 text-[1.5rem] uppercase text-white'>premium</p>
                        </div>

                        {/*rounded plan price*/}
                        <div className=' neon-button absolute top-[20%]  bg-white rounded-full p-[15%] flex justify-center items-center text-lightgrey flex-col'>
                            <p className='text-4xl font-bold text-brickred'>$39</p>
                            <p className='semi-bold'>per month</p>
                        </div>


                        <div className=' px-10 h-[50vh] md:h-[40vh] lg:pt-[20%] lg:h-[60vh] 2xl:h-[60vh] bg-lightergrey flex flex-col justify-center items-center  '>
                            <p className='lg:text-[0.7rem] xl:text-[1.1rem]  2xl:text-[1.5rem]  font-normal text-lightgrey text-center leading-10 '>Competition Analysis Methods
                                All Ranked URLs
                                International Support System
                                Social Media Tracking</p>
                            <button className='text-[0.7rem] mt-10 uppercase text-white bg-brickred py-4 px-6 rounded-sm'>choose plan</button>
                        </div>
                    </div>


                    {/*pricing card*/}
                    <div className='cardhover relative flex flex-col justify-center items-center max-w-[100%] h-[100%] md:max-w-[80%] lg:max-w-[30%] lg:h-[80%]'>
                        <div className='bg-lightgrey h-[30vh] w-[100%] text-center'>
                            <p className='pt-10 text-[1.5rem] uppercase text-white'>business</p>
                        </div>

                        {/*rounded plan price*/}
                        <div className=' neon-button absolute top-[20%]  bg-white rounded-full p-[15%] flex justify-center items-center text-lightgrey flex-col'>
                            <p className='text-4xl font-bold'>$99</p>
                            <p className='semi-bold'>per month</p>
                        </div>


                        <div className=' px-10 h-[50vh] md:h-[40vh]  lg:pt-[20%] lg:h-[60vh] 2xl:h-[60vh]  bg-lightergrey flex flex-col justify-center items-center  '>
                            <p className='lg:text-[0.7rem] xl:text-[1.1rem]  2xl:text-[1.5rem]  font-normal text-lightgrey text-center leading-10 '>Competition Analysis Methods
                                All Ranked URLs
                                International Support System
                                Social Media Tracking</p>
                            <button className='text-[0.7rem] mt-10 uppercase text-white bg-grey py-4 px-6 rounded-sm'>choose plan</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Pricing
