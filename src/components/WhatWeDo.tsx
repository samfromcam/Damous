import './WhatWeDo.css'
import SectionHeader from './common/sectionHeader'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/300.css'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function WhatWeDo() {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://assets.calendly.com/assets/external/widget.js'
        script.async = true
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    const openCalendly = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (window.Calendly) {
            window.Calendly.initPopupWidget({
                url: 'https://calendly.com/damous-info/general-meeting',
            })
        } else {
            console.error('Calendly script not loaded')
        }
    }

    useGSAP(() => {
        gsap.to('.ServiceText1', {
            yPercent: -10,
            ease: 'none',
            scrollTrigger: {
                trigger: '.WhatWeDo',
                start: 'top top', // the default values
                end: 'bottom top',
                scrub: true,
            },
        })

        gsap.to('.ServiceText2', {
            yPercent: 10,
            ease: 'none',
            scrollTrigger: {
                trigger: '.WhatWeDo',
                start: 'top top', // the default values
                end: 'bottom top',
                scrub: true,
            },
        })

        gsap.to('.pImage1', {
            xPercent: -10,
            ease: 'none',
            scrollTrigger: {
                trigger: '.WhatWeDo',
                start: 'top top', // the default values
                end: 'bottom top',
                scrub: true,
            },
        })

        gsap.to('.pImage2', {
            xPercent: 10,
            ease: 'none',
            scrollTrigger: {
                trigger: '.WhatWeDo',
                start: 'top top', // the default values
                end: 'bottom top',
                scrub: true,
            },
        })
    })

    return (
        <div className="WhatWeDo">
            <SectionHeader
                title="WHAT WE DO"
                headline="Data as Commodity"
                description="In today's data-driven economy, obtaining customized datasets can be time-consuming. We help you save time, labor, and money by providing clean, tailored datasets, allowing you to work on what’s important"
            />
            <div className="Service">
                <div className="ServiceText1">
                    <p className="title">
                        <span>Data</span> Procurement
                    </p>
                    <p className="text">
                        Access to high-quality vetted data customized precisely
                        to your needs. We would source the data you require,
                        empowering you to tap into the rich data space and
                        thrive in any industry
                    </p>
                    <button onClick={openCalendly}>Get My Data</button>
                </div>
                <img className="pImage1" src="./data_procurement.png"></img>
            </div>
            <div className="Service">
                <img className="pImage2" src="./data_refinement.png"></img>
                <div className="ServiceText2">
                    <p className="title">
                        <span>Data</span> Refinement
                    </p>
                    <p className="text">
                        Ensure your data is accurate, reliable, and primed for
                        analysis with our expert cleaning / refinement services.
                        Partner with us for seamless integration and expert
                        guidance, enhancing data accuracy and productivity for
                        your advancements
                    </p>
                </div>
            </div>
        </div>
    )
}
