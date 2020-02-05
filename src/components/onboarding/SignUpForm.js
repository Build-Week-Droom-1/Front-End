import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";
import Title from "./Title";
import Navigation from "./Navigation";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  margin: 50px auto;
  border-radius: 3px;
`;

const StyledInput = styled.input`
  width: 300px;
  height: 25px;
  margin: 5px 0;
  border-radius: 3px;
`;

const StyledSubmit = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  width: 100px;
  color: #182d42;
  background: #caa767;
  border: none;
  border-radius: 3px;
`;

const StyledRadioDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
  color: #caa767;
  margin: 10px 0;
  font-size: 15px;
`;

export default function SignUpForm(props) {
  const { register, handleSubmit, errors, watch } = useForm();
  const onSubmit = data => {
    console.log(data);
    console.log(data.role);
    if (data.role === "Company")
      axios
        .post(
          "https://droom-project-lambda.herokuapp.com/api/auth/register",
          data
        )
        .then(res => {
          console.log("success", res);
          // setStatus(res.data);
          //reset form?
          props.history.push("/signup/company");
        })
        .catch(err => console.log(err.response));
    else
      axios
        .post(
          "https://droom-project-lambda.herokuapp.com/api/auth/register",
          data
        )
        .then(res => {
          console.log("success", res);
          // setStatus(res.data);
          //reset form?
          props.history.push("/signup/job-seeker");
        })
        .catch(err => console.log("err", err));
  };

  return (
    <div>
      <Title />
      <Navigation />
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          type="text"
          placeholder="Email"
          name="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && "Email is required"}

        <StyledInput
          type="text"
          placeholder="Username"
          name="username"
          ref={register({
            required: true
          })}
        />
        {errors.username && "Username is required"}

        <StyledInput
          type="password"
          placeholder="Password"
          name="password"
          ref={register({ required: true })}
        />

        <StyledRadioDiv>
          <label>
            <input
              name="role"
              type="radio"
              value="Job Seeker"
              ref={register({ required: true })}
            />
            Job Seeker
          </label>
          <label>
            <input
              name="role"
              type="radio"
              value="Company"
              ref={register({ required: true })}
            />
            Company
          </label>
        </StyledRadioDiv>
        {errors.role && "Choose a role"}

        <StyledSubmit type="submit" value="Sign Up" />
      </StyledForm>
    </div>
  );
}
