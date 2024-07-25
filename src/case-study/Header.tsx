import React from 'react';
import styled from 'styled-components';
import logo from '../assets/northwestern_logo.png';

// Main container for the header
const HeaderContainer = styled.header`
    position: absolute;
    width: 338px;
    height: 797px;
    left: 380px;
    top: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    jsutify-content: space-between;
    padding: 198px 0px 200px;
    gap: 20px;
    background-color: #000;  // Ensure it blends with the overall page
    z-index: 1;  // Ensure it is on top of other elements
`;

// Styled component for the main title and subtitles
const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: ${(props) => props.weight || 700};
    font-size: ${(props) => props.size || '40px'};
    line-height: ${(props) => props.lineHeight || '60px'};
    background: ${(props) => props.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: ${(props) => props.shadow};
    margin: 0;
    z-index: 2;
`;

// Styled component for the image
const Logo = styled.img`
    position: relative;
    width: 236px;
    height: 73px;
    left: 0px;
    top: 0px;
    z-index: 2;
`;

// Styled component for the navigation
const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    position: relative;
    width: 158px;
    left: 0px;
    top: 60px;
    height: 212px;
    z-index: 2;
`;

// Styled component for the navigation buttons
const NavButton = styled.button`
    background: none;
    border: none;
    color: #FFCBCB;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    text-decoration: underline;
    cursor: pointer;
    text-align: left;
    padding: 0;
    width: 100%;
    z-index: 2;
`;

// Styled component for the Damous text logo
const LogoTitle = styled.h1`
    position: absolute;
    width: 250px;
    height: 70px;
    left: 380px;
    top: 59px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 50px;
    line-height: 75px;
    background: linear-gradient(90deg, #3946C1 0%, #5661CF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 2;
`;

const Header = () => {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            <a href="/"><LogoTitle>Damous</LogoTitle></a>
            <HeaderContainer>
                <Title size="40px" weight="500" lineHeight="60px" gradient="linear-gradient(91.36deg, #C9C8F8 0.67%, #F7E8E8 28.92%)">
                    Civilian Comfort in Underground Urban Transport
                </Title>
                <Logo src={logo} alt="Northwestern Logo" />
                <Nav>
                    <NavButton onClick={() => scrollToSection('problem')}>The Problem</NavButton>
                    <NavButton onClick={() => scrollToSection('solution')}>The Solution</NavButton>
                    <NavButton onClick={() => scrollToSection('result')}>The Result</NavButton>
                    <NavButton onClick={() => scrollToSection('review')}>Review</NavButton>
                </Nav>
            </HeaderContainer>
        </>
    );
}

export default Header;
