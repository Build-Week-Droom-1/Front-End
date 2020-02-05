import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

const CardContainer = styled.div`
  max-width: 80%;
  margin: 1% auto;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: space-evenly;
`;
const Card = styled.div`
  width: 30%;
  margin: 1% auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border: 1px solid #caa767;
  border-radius: 5px;
  background-color: #fffef2;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;

const JobPosting = () => {
  const [job, setJob] = useState({});
  const { job_id } = useParams();

  useEffect(() => {
    const id = job_id;
    axios
      .get(`http://localhost:5000/api/jobs/${id}`)
      .then(res => {
        console.log(res);
        setJob(res.data);
      })
      .catch(err => console.log(err));
  }, [job_id]);

  return (
    <div className="job">
      {[job].map((item, index) => {
        return (
          <CardContainer key={index}>
            <Card>
              <h1>Job Title: {item.title}</h1>
              <h3>Salary: {item.salary} </h3>
              <div>
                <h3>Job Description</h3>
                <p>{item.description}</p>
              </div>
              <img src={item.img_url} alt="job" width="100%"></img>
            </Card>
          </CardContainer>
        );
      })}
    </div>
  );
};
export default JobPosting;
