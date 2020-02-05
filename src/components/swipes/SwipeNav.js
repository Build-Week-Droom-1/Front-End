import React from 'react';
import styled from 'styled-components';
import Cross from '../../images/cross128.png';
import Check from '../../images/check128.png';

const StyledImg = styled.img`
    height: 75px;
    width: auto;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    border-radius: 50%;
`;

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 450px;
    margin: 15px auto;
`;

// add onclick functions when we have the data flowing, to mark cards as either yes or no


const SwipeNav = () => {
    return (
        <StyledNav>            
            <StyledImg src={Cross} alt="no" />
            <StyledImg src={Check} alt="yes" />            
        </StyledNav>
    )
}

export default SwipeNav;