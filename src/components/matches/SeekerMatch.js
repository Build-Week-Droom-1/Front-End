import React from 'react';
import styled from 'styled-components';


const Card = styled.div`
    width: 500px;
    margin: 1% auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    color: black;
    border: 1px solid #caa767;
    border-radius: 5px;
    background-color: #FFFEF2;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    font-size: 15px;

`
const StyledSpan = styled.span`
    color: #caa767;
`;

const SeekerMatch = () => {
    return (
        
            <Card>
            <h4>Name</h4>
            <p>Current job title in Location</p>
            <p><StyledSpan>Job Matched</StyledSpan></p>
            </Card>
     
    )
}

export default SeekerMatch;