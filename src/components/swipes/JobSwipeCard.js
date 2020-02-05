import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 600px;
  background-color: white;
  color: black;
  width: 500px;
  margin: 0 auto;
`;

const JobSwipeCard = () => {
  return (
    <StyledDiv>
      <h2>Job Title</h2>
      <h3>Company name in Location</h3>
      <h3>Relocation assistance?</h3>
      <h3>Salary</h3>
      <h3>Job Description</h3>
      <p>Insert description here</p>
      <h3>Requirements</h3>
      <p>Insert requirements here</p>
    </StyledDiv>
  );
};

export default JobSwipeCard;
