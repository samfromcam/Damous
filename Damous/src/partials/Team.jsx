import React from 'react';

import TeamImage01 from '../images/dylan_wu.webp';
import TeamImage02 from '../images/samnang_nuonsinoeun.webp';

function Team() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">The Team</h2>
            <p className="text-xl text-gray-400">Our experienced team is dedicated to helping you unlock the true power of data. Whether you're looking for data to finetune/build new models, perform data analysis, or develop novel algorithms, we have the expertise and tools to make it happen.</p>
          </div>

          {/* Team */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-1 lg:grid-cols-2 lg:gap-6 items-start lg:max-w-none">

            {/* 1st member */}
            <div className="flex flex-col h-full p-6 bg-gray-800 justify-center items-center" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img className="rounded" src={TeamImage01} width="256" height="256" alt="Dylan Wu" />
                  
                </div>
                
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className="text-gray-200 not-italic">Dylan Wu</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Co-founder</a>
                </div>
              </div>
            </div>

            {/* 2nd member */}
            <div className="flex flex-col h-full p-6 bg-gray-800 justify-center items-center" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img className="rounded" src={TeamImage02} width="256" height="256" alt="Samnang Nuonsinoeun" />
                  
                </div>
                
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className="text-gray-200 not-italic">Samnang Nuonsinoeun</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Co-founder</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
