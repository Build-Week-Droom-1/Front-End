import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";
import Title from "./Title";

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

const StyledDropDown = styled.select`
  width: 300px;
  height: 25px;
  margin: 5px 0;
  border-radius: 3px;
`;

const StyledTextArea = styled.input`
  width: 300px;
  height: 100px;
  margin: 5px 0;
  border-radius: 3px;
`;

export default function JobSeekerInfo(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    e.preventDefault();
    axiosWithAuth()
      .post(`https://reqres.in/api/register`, data)
      .then(res => {
        console.log("success", res);
        localStorage.setItem("token", res.data);
        props.history.push("/dashboard");
      })
      .catch(err => console.log("error", err.response));
  };

  return (
    <div>
      <Title />
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          type="text"
          placeholder="name"
          name="name"
          ref={register({ required: true })}
        />
        {errors.name && "Name is required"}
        <StyledInput
          type="text"
          placeholder="location"
          name="location"
          ref={register({ required: true })}
        />
        {errors.location && "location is required"}
        <StyledInput
          type="text"
          placeholder="occupation"
          name="occupation"
          ref={register({ required: true })}
        />
        {errors.occupation && "occupation is required"}
        <StyledDropDown name="education" ref={register({ required: true })}>
          <option value="" selected disabled>
            Highest Education
          </option>
          <option value="High-school">High-school</option>
          <option value=" Associate's"> Associate's</option>
          <option value=" Bachelor's"> Bachelor's</option>
          <option value=" Master's"> Master's</option>
          <option value=" PhD"> PhD</option>
          <option value=" Other "> Other </option>
        </StyledDropDown>
        {errors.education && "education is required"}
        <StyledTextArea
          name="workExperience"
          placeholder="work experience"
          ref={register({ required: true })}
        />
        {errors.workExperience && "work experience is required"}
        <StyledTextArea
          name="skills"
          placeholder="skills"
          ref={register({ required: true })}
        />
        {errors.skills && "skills are required"}
        <StyledTextArea
          name="interests"
          placeholder="interests"
          ref={register({ required: true })}
        />
        {errors.interests && "interests are required"}

        <StyledSubmit type="submit" />
      </StyledForm>
    </div>
  );
}
