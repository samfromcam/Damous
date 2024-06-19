import React from 'react';

import TestimonialImage01 from '../images/testimonial-01.jpg';

function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Testimonial</h2>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img className="rounded-full" src={TestimonialImage01} width="48" height="48" alt="Testimonial 01" />
                    <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">"I recently had the pleasure of working with Dylan from Damous on a data collection project, and I couldn't be more satisfied with the service he provided. Dylan was incredibly fast at gathering the requested reviews from the desired social media platforms, consistently delivering results promptly. Throughout the project, I made several changes to the instructions and had new requests popping up regularly. Dylan was not only accommodating to all these adjustments but also quick and comprehensive in providing the appropriate solutions. His ability to adapt to my evolving needs showcased his creativity and extensive knowledge of data sourcing. The data was delivered in a highly professional manner, complete with detailed descriptions and updates for all the clarifications I requested. Dylan’s thoroughness and attention to detail ensured that the final product met all my expectations and more. Overall, working with Dylan was a great pleasure. His professionalism, expertise, and willingness to go the extra mile make him an outstanding service provider. I highly recommend Damous to anyone in need of data curation services.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Giorgia Chinazzo</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Assistant Professor at Northwestern University</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;
