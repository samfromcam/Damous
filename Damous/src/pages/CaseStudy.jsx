import React from 'react';
import { Link } from 'react-router-dom';
import HeaderImage from '../images/work-01.jpg'; // Ensure this is the correct path to your header image

function CaseStudy() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Header Image */}
          <div className="mb-10">
            <img src={HeaderImage} alt="Urban Transport Insights" className="w-full object-cover h-64 rounded-lg shadow-md"/>
          </div>

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h2 mb-4">Case Study: Enhancing Urban Transport Insights with Damous.co’s Customized Data Solutions</h1>
            <p className="text-xl text-gray-400">How we enhanced analysis of civilian comfort in underground public transportation across major cities.</p>
          </div>

          {/* Content Sections */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Introduction</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Damous.co specializes in providing tailored data services that empower businesses to focus on development by handling the complexities of data procurement and refinement. This case study illustrates how Damous.co leveraged its expertise to enhance the analysis of civilian comfort in underground public transportation systems across thirteen major cities.
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500"><strong>Business Challenges</strong></dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    The client, a Civil Engineering Professor at Northwestern, faced significant challenges in gathering diverse and extensive datasets necessary to evaluate civilian comfort in underground subway systems. The primary challenges included:
                    <ul>
                      <li><strong>1. Accessing historical user feedback from multiple cities on various social media platforms.</strong></li>
                      <li><strong>2. Analyzing geographical data points from vast amounts of unstructured data.</strong></li>
                      <li><strong>3. Ensuring data accuracy and relevancy for urban transport development.</strong></li>
                    </ul>
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500"><strong>Solution Offered</strong></dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Damous.co addressed these challenges through providing two complete datasets:
                    <ul>
                      <li><strong>1. Google Maps Reviews: Utilized a headless WebDriver to scrape user reviews related to subway stations, focusing on key attributes such as ratings, review content, and geographical location.</strong></li>
                      <li><strong>2. Twitter Data: Deployed the Twscrape tool with API access, using advanced proxy settings and controlled query batches to extract relevant tweets concerning public transportation discomfort.</strong></li>
                    </ul>
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500"><strong>Implementation</strong></dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    The implementation process followed a structured approach:
                    <ol>
                      <li><strong>1. Collaborate with the client to identify specific data needs, project direction, and the desired volume of data.</strong></li>
                      <li><strong>2. Perform data collection, in this case, using various webscraping techniques and API access while maintaining within ethical boundaries.</strong></li>
                      <li><strong>3. Hold intermediate meetings, maintain consistent communication and provide consistent updates with the client. Updating and changing our data collection methods as needed under the request of the client after viewing sample datasets collected.</strong></li>
                      <li><strong>4. Deliver a consolidated dataset, comprising over 320,000 entries in various formats, as requested, ready for further analysis by the client. A data report document detailing the data collection process as well as a comprehensive guide to the data structure and column names are also provided to the client.</strong></li>
                      <li><strong>5. Continued support for the client if any question regarding the dataset arises or any new changes are required for the dataset.</strong></li>
                    </ol>
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500"><strong>Results</strong></dt>
                  <dd className="mt-1 text-sm text-blue-900 sm:mt-0 sm:col-span-2">
                    <a href="https://docs.google.com/document/d/1gbNY0a0AzqPUkapzBtC06jo8yDAgYQe-l2ne96mz6sA/edit#heading=h.nq2dkxu5lwu2" target="_blank" rel="noopener noreferrer">Data Report</a>
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500"><strong>Testimonials</strong></dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    "I recently had the pleasure of working with Dylan from Damous on a data collection project, and I couldn't be more satisfied with the service he provided. Dylan was incredibly fast at gathering the requested reviews from the desired social media platforms, consistently delivering results promptly. Throughout the project, I made several changes to the instructions and had new requests popping up regularly. Dylan was not only accommodating to all these adjustments but also quick and comprehensive in providing the appropriate solutions. His ability to adapt to my evolving needs showcased his creativity and extensive knowledge of data sourcing. The data was delivered in a highly professional manner, complete with detailed descriptions and updates for all the clarifications I requested. Dylan’s thoroughness and attention to detail ensured that the final product met all my expectations and more. Overall, working with Dylan was a great pleasure. His professionalism, expertise, and willingness to go the extra mile make him an outstanding service provider. I highly recommend Damous to anyone in need of data curation services. 
                    <br /><br />
                    Giorgia Chinazzo, Assistant Professor at Northwestern University”
                  </dd>
                </div>
              </dl>
            </div>
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Conclusion</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Our services benefited the client in their process of data analysis and aided in the writing of their research paper and conference presentation. The data collection service helped the client save precious time that was spent in the more impactful field research and data analysis preparation stages. 
              </p>
            </div>
          </div>

          {/* Back to works link */}
          <div className="mt-5">
            <Link to="/" className="text-base font-medium text-blue-600 hover:text-blue-500">
              ← Back to Home
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CaseStudy;
