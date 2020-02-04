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

const JobMatch = () => {
    return (
        
            <StyledContentDiv>
            <h4>Job Title</h4>
            <p>Company name</p>
            <p>Location</p>
            </StyledContentDiv>
     
    )
}

export default JobMatch;