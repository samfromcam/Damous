import './common/Section.css'
import Banner from './common/Banner'

const ProblemSection = () => {
    return (
        <div className="section-container">
            <Banner title="The Problem" />
            <h2 className="section-title">
                Professor Giorgia Chinazzo Did Not Have A Diverse Set of Data to
                Evaluate Comfort in Underground Stations
            </h2>
            <p className="section-description">
                The client, a Civil Engineering Professor at Northwestern, faced
                significant challenges in gathering diverse and extensive
                datasets necessary to evaluate civilian comfort in underground
                subway systems. The primary challenges included:
            </p>
            <ul className="section-list">
                <li className="section-list-item">
                    Accessing historical user feedback from multiple cities on
                    various social media platforms.
                </li>
                <li className="section-list-item">
                    Analyzing geographical data points from vast amounts of
                    unstructured data.
                </li>
                <li className="section-list-item">
                    Ensuring data accuracy and relevancy for urban transport
                    development.
                </li>
            </ul>
        </div>
    )
}

export default ProblemSection
