import './common/Section.css'
import Banner from './common/Banner'

const ResultSection = () => {
    return (
        <>
            <div className="section-container">
                <Banner title="The Result" />
                <h2 className="section-title">
                    Impactful Research Paper on Improving Comfort in Underground
                    Urban Transport Stations
                </h2>
                <p className="section-description">
                    Our services benefited the client in their process of data
                    analysis and aided in the writing of their research paper
                    and conference presentation. The data collection service
                    helped the client save precious time that was spent in the
                    more impactful field research and data analysis preparation
                    stages.
                </p>
                <a
                    href="https://docs.google.com/document/d/1gbNY0a0AzqPUkapzBtC06jo8yDAgYQe-l2ne96mz6sA/edit#heading=h.nq2dkxu5lwu2"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="section-button">
                        View Full Report -&gt;
                    </button>
                </a>
            </div>
        </>
    )
}

export default ResultSection
