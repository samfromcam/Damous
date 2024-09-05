import './common/Section.css'
import Banner from './common/Banner'

// SolutionSection component using styled-components
const SolutionSection = () => {
    return (
        <>
            <div className="section-container">
                <Banner title="The Solution" />
                <h2 className="section-title">
                    Damous Provided a Google Maps and Twitter User Complaints
                    Dataset
                </h2>
                <p className="section-description">
                    Summing to a total of 320,000 user reviews, Damous curated
                    the clean and diverse dataset spanning across 13 cities and
                    all 5 continents comprising of data from the two following
                    sites:
                </p>
                <ul className="section-list">
                    <li className="section-list-item">
                        Google Maps Reviews: User reviews related to subway
                        stations, focusing on key attributes such as ratings,
                        review content, and geographical location.
                    </li>
                    <li className="section-list-item">
                        Twitter Data: Relevant tweets concerning public
                        transportation discomfort that tagged targeted transport
                        agencies or contains a set of predetermined keywords.
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SolutionSection
