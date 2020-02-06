import React from "react";
import styled from "styled-components";
import Cross from "../../images/cross128.png";
import Check from "../../images/check128.png";

const StyledImg = styled.input`
  height: 75px;
  width: auto;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 50%;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 450px;
  margin: 15px auto;
`;

const SwipeNav = ({ showNextCard }) => {
  return (
    <StyledNav>
      <StyledImg type="image" src={Cross} alt="no" onClick={showNextCard} />
      <StyledImg type="image" src={Check} alt="yes" onClick={showNextCard} />
    </StyledNav>
  );
};
export default SwipeNav;
