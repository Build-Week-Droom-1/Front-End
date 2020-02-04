import React from 'react';
import styled from 'styled-components';



const StyledContentDiv = styled.div`
    border-bottom: 1px solid #caa767;
    display: flex;
    flex-direction: column;
    line-height: 0.25rem;
    align-items: flex-start;
    width: 500px;
`;

const SeekerMatch = () => {
    return (
        
            <StyledContentDiv>
            <h4>Name</h4>
            <p>Current job title in Location</p>
            <p><span>Job Matched</span></p>
            </StyledContentDiv>
     
    )
}

export default SeekerMatch;