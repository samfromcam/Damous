import './WhatWeDo.css'
import SectionHeader from './sectionHeader'
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/300.css"

export default function WhatWeDo() {
  return (
    <div className='WhatWeDo'>
      <SectionHeader 
          title="WHAT WE DO"
          headline="Data as Commodity"
          description="In today's data-driven economy, obtaining customized datasets can be time-consuming. We help you save time, labor, and money by providing clean, tailored datasets, allowing you to work on what’s important"
        />
        <div className="Service">
            <div className="ServiceText">
                <p className="title"><span>Data</span> Procurement</p>
                <p className="text">Access to high-quality vetted data customized precisely to your needs. We would source the data you require, empowering you to tap into the rich data space and thrive in any industry</p>
                <button>Get My Data</button>
            </div>
            <img src='./data_procurement.png'></img>
        </div>
        <div className="Service">
            <img src='./data_refinement.png'></img>
            <div className="ServiceText">
                <p className="title"><span>Data</span> Refinement</p>
                <p className="text">Ensure your data is accurate, reliable, and primed for analysis with our expert cleaning/refinement services. Partner with us for seamless integration and expert guidance, enhancing data accuracy and productivity for your advancements</p>
            </div>
        </div>
    </div>
  )
}
