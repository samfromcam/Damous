import React from 'react';
import styled from 'styled-components';

// Define the container for the Solution section
const SolutionContainer = styled.section`
    position: absolute;
    top: 708px; // Adjust the positioning as needed based on your layout
    left: 1000px;
    width: 680px;
    color: #FFFFFF;
    font-family: 'Poppins', sans-serif;

    h2 {
        font-size: 25px;
        line-height: 38px;
        font-weight: 500;
        margin-bottom: 20px; // Provide spacing between elements
    }

    p {
        font-size: 15px;
        line-height: 22px;
        font-weight: 500;
        margin-bottom: 10px; // Spacing before the list starts
    }

    ul {
        list-style-type: disc; // Ensuring list items have bullet points
        padding-left: 20px; // Indent list items for better readability
    }
`;

// SolutionSection component using styled-components
const SolutionSection = () => {
    return (
        <SolutionContainer id="solution">
            <h2>Damous Provided a Google Maps and Twitter User Complaints Dataset</h2>
            <p>Summing to a total of 320,000 user reviews, Damous curated the clean and diverse dataset spanning across 13 cities and all 5 continents comprising of data from the two following sites:</p>
            <ul>
                <li>Google Maps Reviews: User reviews related to subway stations, focusing on key attributes such as ratings, review content, and geographical location.</li>
                <li>Twitter Data: Relevant tweets concerning public transportation discomfort that tagged targeted transport agencies or contains a set of predetermined keywords.</li>
            </ul>
        </SolutionContainer>
    );
};

export default SolutionSection;
