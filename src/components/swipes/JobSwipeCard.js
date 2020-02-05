import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  min-height: 700px;
  background-color: white;
  color: black;
  width: 500px;
  margin: 0 auto;
  border: 1px solid #caa767;
  border-radius: 5px;
  background-color: #FFFEF2;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  font-size: 15px;
  padding: 5px;
  margin-top: 20px;
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
