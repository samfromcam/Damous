import React from 'react';
import styled from 'styled-components';

// Define the container for the Result section
const ResultContainer = styled.section`
    position: absolute;
    top: 1134px; // Adjust the positioning as needed based on your layout
    left: 1000px;
    width: 680px;
    color: #FFFFFF;
    font-family: 'Poppins', sans-serif;


    h2 {
        font-size: 25px; // Appropriate size for section headings
        font-weight: 500; // Medium weight for clear visibility
        margin-bottom: 10px; // Space below the heading for separation
    }

    p {
        font-size: 15px; // Standard text size
        line-height: 1.6; // Increased line height for better readability
        margin-bottom: 20px; // Margin before any buttons or additional content
    }

    button {
        background: linear-gradient(90deg, #131B30 0%, #161F39 100%); // Stylish gradient for buttons
        color: #FFF; // Button text color
        border: none; // No border for a clean look
        border-radius: 20px; // Rounded corners for the button
        width: 180px; // Width of the button
        padding: 10px 15px; // Padding inside the button
        font-size: 15px; // Text size within the button
        cursor: pointer; // Cursor to indicate it's clickable
        transition: opacity 0.3s; // Smooth transition for hover effect

        &:hover {
            opacity: 0.8; // Slight transparency on hover for visual effect
        }
    }
`;

const ResultSection = () => {
    return (
        <ResultContainer id="result">
            <h2>Impactful Research Paper on Improving Comfort in Underground Urban Transport Stations</h2>
            <p>Our services benefited the client in their process of data analysis and aided in the writing of their research paper and conference presentation. The data collection service helped the client save precious time that was spent in the more impactful field research and data analysis preparation stages.</p>
            <a href="https://docs.google.com/document/d/1gbNY0a0AzqPUkapzBtC06jo8yDAgYQe-l2ne96mz6sA/edit#heading=h.nq2dkxu5lwu2" target="_blank" rel="noopener noreferrer">
                <button>View Full Report</button>
            </a>
        </ResultContainer>
    );
}

export default ResultSection;
