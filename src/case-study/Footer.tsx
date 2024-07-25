import React from 'react';
import styled from 'styled-components';

// Main container for the footer
const FooterContainer = styled.footer`
    position: absolute;
    width: 900px;
    height: 88px;
    left: 550px;
    top: 2261px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #000;
    color: #FFFFFF;
`;

// Container for contact info
const ContactInfo = styled.div`
    position: relative;
    width: 144px;
    height: 76px;
    left: 0px;
    top: 12px;
`;

// Styled component for the Damous text logo in the footer
const FooterLogo = styled.h1`
    position: absolute;
    width: 90px;
    height: 30px;
    left: 0px;
    top: 12px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    background: linear-gradient(90deg, #3946C1 0%, #5661CF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

// Styled component for contact emails
const ContactEmails = styled.p`
    position: absolute;
    width: 144px;
    height: 36px;
    left: 0px;
    top: 52px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    color: #B1ADAD;
`;

// Styled component for the inquiry text
const InquiryText = styled.div`
    position: absolute;
    width: 373px;
    height: 23px;
    left: 411px;
    top: 42px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
    color: #FFFFFF;
`;

// Styled component for the "Talk to Us" button
const TalkButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 15px;
    position: absolute;
    width: 90px;
    height: 33px;
    left: 804px;
    top: 35px;
    background: #CFF5F8;
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    color: #000;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        background: #bfe2e5;
    }
`;

// Styled component for the horizontal line
const Line = styled.div`
    position: absolute;
    width: 900px;
    height: 0px;
    left: 0px;
    top: 0px;
    border: 1px solid #FFFFFF;
    transform: rotate(0deg);
`;

const Footer = () => {
    return (
        <FooterContainer>
            <Line />
            <ContactInfo>
                <FooterLogo>Damous</FooterLogo>
                <ContactEmails>
                    info@damous.com<br />
                    contact@damous.com
                </ContactEmails>
            </ContactInfo>
            <InquiryText>Can’t find the Data you need? Let us get it for you</InquiryText>
            <TalkButton href="/contact">Talk to Us</TalkButton>
        </FooterContainer>
    );
}

export default Footer;
