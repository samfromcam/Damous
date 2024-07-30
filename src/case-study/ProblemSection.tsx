import './Problem.css';

const ProblemSection = () => {
    return (
        <div className="problem-container">
            <div className="problem-banner">The Problem</div>
            <h2 className="problem-title">Professor Giorgia Chinazzo Did Not Have A Diverse Set of Data to Evaluate Comfort in Underground Stations</h2>
            <p className="problem-description">The client, a Civil Engineering Professor at Northwestern, faced significant challenges in gathering diverse and extensive datasets necessary to evaluate civilian comfort in underground subway systems. The primary challenges included:</p>
            <ul className="problem-list">
                <li className="problem-list-item">Accessing historical user feedback from multiple cities on various social media platforms.</li>
                <li className="problem-list-item">Analyzing geographical data points from vast amounts of unstructured data.</li>
                <li className="problem-list-item">Ensuring data accuracy and relevancy for urban transport development.</li>
            </ul>
        </div>
    );
};

export default ProblemSection;
