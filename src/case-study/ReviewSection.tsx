import React from 'react';
import styled from 'styled-components';
import profile_pic from '../assets/chinazzo.png';

const ReviewContainer = styled.section`
    position: relative;
    width: 680px;
    left: 1000px;
    top: 1523px; // Adjust this value if necessary to fit the flow of the document or consider using top margin for spacing.
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    color: #FFFFFF;
    padding-bottom: 50px; // Add padding to encapsulate contents within the container.

    h2 {
        font-size: 25px;
        font-weight: 500;
        margin-bottom: 10px;
    }
`;

const StyledBlockquote = styled.blockquote`
    position: relative;
    margin: 20px 0; // Adjust vertical spacing between headline and blockquote.
    padding: 20px 20px 20px 40px;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    color: #FFFFFF;
    white-space: pre-line;

    &::before {
        content: '';
        position: absolute;
        left: 10px;
        top: 0;
        bottom: 0;
        width: 10px;
        background: linear-gradient(133.16deg, #C9C8F8 48.81%, #F7E8E8 106.16%);
        border-radius: 10px;
    }
`;

const ProfileImage = styled.div`
    position: absolute;
    width: 69px;
    height: 69px;
    left: 40px; // Ensure alignment with the design or adjust accordingly.
    top: 500px;
    background-image: url(${profile_pic});
    background-size: cover;
    border-radius: 150px;
`;

const AuthorName = styled.div`
    position: absolute;
    width: 256px;
    height: 23px;
    left: 140px;
    top: 500px;
    font-size: 15px;
    line-height: 22px;
    font-weight: 500;
    color: #FFFFFF;
`;

const AuthorTitle = styled.div`
    position: absolute;
    width: 324px;
    height: 18px;
    left: 140px;
    top: 530px;
    font-size: 12px;
    line-height: 18px;
    font-weight: 500;
    color: #A9A4A4;
`;

const ReviewSection = () => {
    return (
        <ReviewContainer id="review">
            <h2>Efficient, Accommodating, Professional and Communicative</h2>
            <StyledBlockquote>
                “I recently had the pleasure of working with Damous on a data collection project, and I couldn't be more satisfied with the service they provided. They were incredibly fast at gathering the requested reviews from the desired social media platforms, consistently delivering results promptly.
                Throughout the project, I made several changes to the instructions and had new requests popping up regularly. They were not only accommodating to all these adjustments but also quick and comprehensive in providing the appropriate solutions. Their ability to adapt to my evolving needs showcased his creativity and extensive knowledge of data sourcing.
                The data was delivered in a highly professional manner, complete with detailed descriptions and updates for all the clarifications I requested. Their thoroughness and attention to detail ensured that the final product met all my expectations and more.
                Overall, working with Damous was a great pleasure. The professionalism, expertise, and willingness to go the extra mile makes them an outstanding service provider.”
            </StyledBlockquote>
            <ProfileImage />
            <AuthorName>Giorgia Chinazzo</AuthorName>
            <AuthorTitle>Professor of Civil Engineering, Northwestern University</AuthorTitle>
        </ReviewContainer>
    );
}

export default ReviewSection;
