import './CaseStudy.css'
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import ResultSection from '../components/ResultSection';
import ReviewSection from '../components/ReviewSection';
import Header from '../components/Header';
import SidebarHeader from '../components/SidebarHeader';
import Footer from '../components/Footer';
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/500.css"

function CaseStudyPage() {
    return (
            <div className='case'>
                <div className="blocker">&nbsp;</div>
                <div className="sidebar-container">
                    <div className="header-container">
                        <Header />
                    </div>
                    <SidebarHeader />
                </div>
                
                <div className="content">
                    <div id="problem"><ProblemSection /></div>
                    <div id="solution"><SolutionSection /></div>
                    <div id="result"><ResultSection /></div>
                    <div id="review"><ReviewSection /></div>
                </div>
                <Footer />
            </div>
    );
}

export default CaseStudyPage;
