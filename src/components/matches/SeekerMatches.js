import React from 'react';
import JobMatch from './JobMatch';
import styled from 'styled-components';

const StyledMatchesDiv = styled.div`
    width: 50%;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    color: #caa767;
    justify-content: center;
    align-items: center;
`;

const SeekerMatches = () => {
    return (
        <StyledMatchesDiv>
            <h3>Matches</h3>

            {/* for each match, return JobMatch card below */}
            <JobMatch />
            <JobMatch />
            <JobMatch />
            <JobMatch />
            <JobMatch />
            {/* will replace hardcoded cards above with a map method when we have data flowing in */}
        </StyledMatchesDiv>

    )
}

export default SeekerMatches;