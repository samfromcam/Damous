import './Section.css';
import Banner from './Banner';


const ReviewSection = () => {
    return (
            <>
                <div className="section-container">
                    <Banner title='Review' />
                    <h2 className="section-title">Efficient, Accommodating, Professional and Communicative</h2>
                    <div className="section-review">
                        <div className="sidebar">&nbsp;</div>
                        <div className="review-content">
                            <p>“I recently had the pleasure of working with Damous on a data collection project, and I couldn't be more satisfied with the service they provided. They were incredibly fast at gathering the requested reviews from the desired social media platforms, consistently delivering results promptly. <br /> <br />

Throughout the project, I made several changes to the instructions and had new requests popping up regularly. They were not only accommodating to all these adjustments but also quick and comprehensive in providing the appropriate solutions. Their ability to adapt to my evolving needs showcased his creativity and extensive knowledge of data sourcing. <br /> <br />

The data was delivered in a highly professional manner, complete with detailed descriptions and updates for all the clarifications I requested. Their thoroughness and attention to detail ensured that the final product met all my expectations and more.<br /> <br />

Overall, working with Damous was a great pleasure. The professionalism, expertise, and willingness to go the extra mile makes them an outstanding service provider.”</p>
                            <div className="reviewer">
                                <img src="./chinazzo.png"></img>
                                <div className="reviewer-content">
                                    <p className="reviewer-name">Giorgia Chinazzo</p>
                                    <p className="reviewer-company">Professor of Civil Engineering, Northwestern University</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </>
    );
}

export default ReviewSection;
