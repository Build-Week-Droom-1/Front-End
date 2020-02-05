import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 700px;
  background-color: white;
  color: black;
  width: 600px;
  margin: 0 auto;
`;

const JobSeekerSwipeCard = () => {
  return (
    <StyledDiv>
      <h2>Name</h2>
      <h3>Occupation</h3>
      <h3>Location</h3>
      <h3>Education</h3>
      <p>Insert education here</p>
      <h3>Work Experience</h3>
      <p>Insert work experience here</p>
      <h3>Skills</h3>
      <p>Insert skills here</p>
      <h3>Interests</h3>
      <p>Insert interests here</p>
    </StyledDiv>
  );
};

export default JobSeekerSwipeCard;
