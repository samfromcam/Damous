import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import ResultSection from './ResultSection';
import Header from './Header';
import SidebarHeader from './SidebarHeader';
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/500.css"

function CaseStudyPage() {
    return (
            <>
                <Header />
                <SidebarHeader />
                <ProblemSection />
                <SolutionSection />
                <ResultSection />
            </>
    );
}

export default CaseStudyPage;
