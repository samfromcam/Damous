import React from 'react';
import styled from 'styled-components';
import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import ResultSection from './ResultSection';
import ReviewSection from './ReviewSection';
import Header from './Header';
import Footer from './Footer';

// Main container for the case study page
const PageContainer = styled.div`
    position: relative;
    height: 2368px;
    background: #000000;
    color: #F0F0F0;
    font-family: 'Poppins', sans-serif;
`;

// Component for reusable banner with dynamic top positioning
const Banner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: ${props => props.top};  // Dynamically set top position
    left: 985px;
    width: 171px;
    height: 18px;
    background: linear-gradient(90deg, #131B30 0%, #161F39 100%);
    border-radius: 20px;
    color: #918383;
    padding: 12px 15px;
`;

function CaseStudyPage() {
    return (
        <PageContainer>
            <Header />
            <Banner id="problem" top="208px">The Problem</Banner>
            <ProblemSection />
            <Banner id="solution" top="648px">The Solution</Banner>
            <SolutionSection />
            <Banner id="result" top="1074px">The Result</Banner>
            <ResultSection />
            <Banner id="review" top="1465px">The Review</Banner>
            <ReviewSection />
            <Footer />
        </PageContainer>
    );
}

export default CaseStudyPage;
