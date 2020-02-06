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
  background-color: #fffef2;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  font-size: 15px;
  padding: 5px;
  margin-top: 20px;
`;

const JobSwipeCard = ({ currentCard, cardDeck }) => {
  return (
    <StyledDiv>
      <h2>{cardDeck[currentCard].job_title}</h2>
      {/* <h3>Company name in Location</h3> <- no api endpoints for this yet*/}
      {/* <h3>Relocation assistance?</h3> <-no api endpoints for this yet*/}
      <h3>Salary: {cardDeck[currentCard].salary}</h3>
      <h3>Job Description</h3>
      <p>{cardDeck[currentCard].job_desc}</p>
      {/* <h3>Requirements</h3> <- no endpoints for this yet */}
      {/* <p>Insert requirements here</p> */}
    </StyledDiv>
  );
};

export default JobSwipeCard;
