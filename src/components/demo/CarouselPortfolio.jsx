import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { FaRegLightbulb } from "react-icons/fa";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const slides = [
    {
        title: "accumulate creative ideas",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat modi aitaque quod obcaecati temporibus nisi ullam consequatur non vitae, reiciendis expedita quos.",
        buttons: [
            { text: "read more", style: " px-10 py-4 bg-brickred" },
        ]
    },
    {
        title: "accumulate creative ideas",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat modi aitaque quod obcaecati temporibus nisi ullam consequatur non vitae, reiciendis expedita quos.",
        buttons: [
            { text: "read more", style: " px-10 py-4 bg-brickred" },
        ]
    },

    {
        title: "accumulate creative ideas",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat modi aitaque quod obcaecati temporibus nisi ullam consequatur non vitae, reiciendis expedita quos.",
        buttons: [
            { text: "read more", style: " px-10 py-4 bg-brickred" },
        ]
    },

];

function CarouselPortfolio() {
    return (
        <Carousel className="border-4 border-brickred h-[80vh] flex items-center  bg-white opacity-80 lg:opacity-100  text-white max-w-[350px] lg:max-w-[90vh]">
            <CarouselContent>
                {slides.map((slide, index) => (
                    <CarouselItem className=" flex flex-col justify-center items-center text-grey" key={index}>
                        <div className="p-1">
                            <Card className="border-0">
                                <CardContent className=" h-full flex flex-col  items-center justify-center p-6">
                                    {/*card*/}
                                    <section className=' icon-wrapper mt-5 flex flex-col items-center gap-y-10 '>
                                        <div className=" icon-wrapper ">
                                            <div className="icon-content">
                                                <FaRegLightbulb />
                                            </div>
                                            <div className="border-square absolute -top-6 -left-6"></div>
                                        </div>
                                        <p className='textbrickred uppercase mt-5 font-bold'>creative ideas</p>
                                        <div className="w-[50px] rounded-md border-b-4 border-grey"> </div>
                                        <p className='min-w-60 text-center text-[0.7rem] leading-10'>Lorem ipsum dolor sit ame pariatur ipsa assumenda expedita numquam, quas eligendi optio mag
                                            Lorem ipsum dolor sit ame pariatur ipsa assumenda expedita numquam, quas eligendi optio mag
                                            Lorem ipsum dolor sit ame pariatur ipsa assumenda expedita numquam, quas eligendi optio mag.
                                        </p>
                                    </section>


                                    <div className="text-[0.7rem] mt-5 flex justify-center text-white font-bold min-w-[300px] ">
                                        {slide.buttons.map((button, index) => (
                                            <button key={index} className={button.style}>{button.text}</button>
                                        ))}
                                    </div>


                                </CardContent>

                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>


        </Carousel>

    )
}

export default CarouselPortfolio
