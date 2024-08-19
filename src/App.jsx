import { useState, useEffect } from 'react'
import Home from "./pages/Home"
import Aboutus from './pages/Aboutus'
import Portfolio from './pages/Portfolio'
import Pricing from './pages/Pricing'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Loading from './components/preloader/Loading'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'



function App() {
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      window.scrollTo(0, 0);
    });

    return () => {
      window.removeEventListener('beforeunload', () => {
        window.scrollTo(0,
          0);
      });
    };
  }, [])

  useEffect(() => {
    setTimeout(() => setLoading(false), 3300)
  }, [])

  if (loading) {
    return <Loading />
  }


  return (
    <ReactLenis root>

      <div className='relative flex flex-col w-[100%]  gap-y-5 '>

        <div id="link1" className='mb-[700px] md:mb-10 lg:mb-40 '>
           <Home /></div>

        <div id="link2" className='border-t-[0.5px] border-grayishblue mb-[200px] lg:mb-40'>
          <Aboutus />
        </div>

        <div id="link3">
          <Portfolio />
        </div>

        <div id="link4" className='mb-[200px] lg:mb-20'>
          <Pricing />
        </div>

        <div id="link5" className='mb-[50px]'>
          <Team />
        </div>

        <div id="link6" className=''>
          <Contact />
        </div>

        <div className=''>
          <Footer />
        </div>

      </div>
    </ReactLenis>
  )
}

export default App;
