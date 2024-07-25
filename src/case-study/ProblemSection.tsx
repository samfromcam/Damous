import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
    position: absolute;
    top: 265px;
    left: 1000px;
    width: 680px;
    font-size: 15px;
    line-height: 22px;
    color: #FFFFFF;
    font-family: 'Poppins', sans-serif;

    h2 {
        font-size: 25px;
        line-height: 38px;
        font-weight: 500;
        margin-bottom: 12px;
    }

    p {
        margin-bottom: 10px;
    }

    ul {
        list-style-type: disc;
        margin-left: 20px;
    }
`;

const ProblemSection = () => {
    return (
        <SectionContainer>
            <h2>Professor Giorgia Chinazzo Did Not Have A Diverse Set of Data to Evaluate Comfort in Underground Stations</h2>
            <p>The client, a Civil Engineering Professor at Northwestern, faced significant challenges in gathering diverse and extensive datasets necessary to evaluate civilian comfort in underground subway systems. The primary challenges included:</p>
            <ul>
                <li>Accessing historical user feedback from multiple cities on various social media platforms.</li>
                <li>Analyzing geographical data points from vast amounts of unstructured data.</li>
                <li>Ensuring data accuracy and relevancy for urban transport development.</li>
            </ul>
        </SectionContainer>
    );
};

export default ProblemSection;
