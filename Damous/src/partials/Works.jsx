import React from 'react';
import Slider from 'react-slick';

import Work1 from '../images/work-01.jpg';
import Work2 from '../images/work-01.jpg';
import Work3 from '../images/work-01.jpg';  // Make sure this is the intended image.

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';


function Works() {
  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Featured Works</h2>
            <p className="text-xl text-gray-400">Explore how we've helped businesses harness the power of data.</p>
          </div>

          {/* Case Studies Carousel */}
          <Slider {...settings}>
            {/* Case Study 1 */}
            <div className="group relative">
              <img className="w-full h-full object-cover" src={Work1} alt="Case Study Image 1"/>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50"></div>
              <div className="p-6 absolute bottom-0 left-0 z-10">
              <Link to="/case-study">
                <h4 className="text-lg md:text-3xl text-white hover:text-gray-300">Enhancing Urban Transport Insights with Customized Data Solutions</h4>
              </Link>

               
                <p className="text-sm text-gray-100">Enhance the analysis of civilian comfort in underground public transportation systems across thirteen major cities.</p>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="group relative">
              <img className="w-full h-full object-cover" src={Work2} alt="Case Study Image 2"/>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50"></div>
              <div className="p-6 absolute bottom-0 left-0 z-10">
                <h4 className="text-lg text-white">Co-Designing Soluna, California’s Youth Behavioral Health App</h4>
                <p className="text-sm text-gray-100">Kooth works to transform how young people enrich their mental health.</p>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="group relative">
              <img className="w-full h-full object-cover" src={Work3} alt="Case Study Image 3"/>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50"></div>
              <div className="p-6 absolute bottom-0 left-0 z-10">
                <h4 className="text-lg text-white">Reinventing Cervical Cancer Screenings</h4>
                <p className="text-sm text-gray-100">Teal Health creates a device for patients to safely collect their own samples at home.</p>
              </div>
            </div>
          </Slider>

        </div>
      </div>
    </section>
  );
}

export default Works;
