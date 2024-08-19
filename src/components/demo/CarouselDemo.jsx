
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import gsap from 'gsap';
import { useLayoutEffect, useRef } from "react"


const slides = [
  {
    title: "Our Clients Are Our First Priority",
    heading: "Welcome to Bino",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat modi aitaque quod obcaecati temporibus nisi ullam consequatur non vitae, reiciendis expedita quos.",
    buttons: [
      { text: "Get Started Now", style: "uppercase px-5 py-2 bg-brickred" },
      { text: "Learn More", style: "hover:bg-brickred transition-all duration-500 hover:translate-y-2 uppercase border-[1px] border-white px-5 py-2" }
    ]
  },
  {
    title: "Another Title",
    heading: "Another Heading",
    description: "Another description for this slide.",
    buttons: [
      { text: "Get Started Now", style: "uppercase px-5 py-2 bg-brickred" },
      { text: "Learn More", style: "hover:bg-brickred transition-all duration-500 hover:translate-y-2 uppercase border-[1px] border-white px-5 py-2" }
    ]
  },

  {
    title: "Another Title",
    heading: "Another Heading",
    description: "Another description for this slide.",
    buttons: [
      { text: "Get Started Now", style: "uppercase px-5 py-2 bg-brickred" },
      { text: "Learn More", style: "hover:bg-brickred transition-all duration-500 hover:translate-y-2 uppercase border-[1px] border-white px-5 py-2" }
    ]
  },

];
const CarouselDemo = () => {

  const comp = useRef(null)
  const comp2 = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from(["#carousel1", "#carousel2", "#carousel3", "#carousel4", "#button"], {
        opacity: 0,
        yPercent: -50,
        duration: 1,
        delay: 0.1,
        stagger: 0.1,
      })

    }, comp)
    return () => ctx.revert()
  }, [])


  return (
    <Carousel ref={comp} className=" text-white w-[80%]">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="border-0">
                <CardContent className=" flex flex-col  items-center justify-center p-6">
                  <span id="carousel1" className="mb-5 lg:mb-0">{slide.title}</span>
                  <h1 id="carousel2" className="text-5xl text-center md:text-7xl lg:text-7xl font-semibold uppercase mb-5 tracking-wider">{slide.heading}</h1>
                  <div id="carousel3" className="line-with-dot mb-10">
                    <div className="dot"></div>
                  </div>
                  <span id="carousel4" className="text-sm md:text-lg lg:text-lg text-center max-w-[500px]">{slide.description}</span>


                  <div id="button" className="text-[0.7rem] mt-5 flex justify-between text-white font-bold min-w-[300px] ">
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
      <div  className="mt-20 hidden-on-phone">
        <CarouselPrevious  className="hover:bg-brickred text-white transition-all duration-500" />
        <CarouselNext className="hover:bg-brickred text-white transition-all duration-500" /></div>

    </Carousel>
  )
}
export default CarouselDemo;