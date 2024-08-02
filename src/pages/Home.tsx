import './Home.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import WhatWeDo from '../components/WhatWeDo'
import HowItWorks from '../components/HowItWorks'
import Customers from '../components/Customers'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/500.css"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);


function Home() {
  useGSAP(
    () => {

        
    }
)
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="sections">
        <Hero />
        <WhatWeDo />
        <HowItWorks />
        <Customers />
        <Projects />
        <Footer />
      </div>
    </>
  )
}

export default Home;
