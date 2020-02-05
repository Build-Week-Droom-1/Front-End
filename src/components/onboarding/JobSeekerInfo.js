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
  margin: 50px auto;
  border-radius: 3px;
`;

const StyledInput = styled.input`
  width: 400px;
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
  width: 400px;
  height: 25px;
  margin: 5px 0;
  border-radius: 3px;
`;

const StyledTextArea = styled.textarea`
  width: 400px;
  height: 100px;
  margin: 5px 0;
  border-radius: 3px;
  font-family: 'Segoe UI', 'Roboto', 'Ubuntu', sans-serif;
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
        props.history.push("/jobseeker-profile");
      })
      .catch(err => console.log("error", err.response));
  };

  return (
    <div>
      <Title />
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <label>
        <StyledInput
          type="text"
          placeholder="Full name"
          name="name"
          ref={register({ required: true })}
        /></label>
        {errors.name && "Name is required"}
        <label>
        <StyledInput
          type="text"
          placeholder="Location"
          name="location"
          ref={register({ required: true })}
        /></label>
        {errors.location && "location is required"}
        <label>
        <StyledInput
          type="text"
          placeholder="Occupation"
          name="occupation"
          ref={register({ required: true })}
        /></label>
        {errors.occupation && "occupation is required"}
        <label>
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
        </StyledDropDown></label>
        {errors.education && "education is required"}
        <label>
        <StyledTextArea
          name="workExperience"
          placeholder="Add work experience"
          ref={register({ required: true })}
        /></label>
        {errors.workExperience && "work experience is required"}
        <label>
        <StyledTextArea
          name="skills"
          placeholder="Add skills"
          ref={register({ required: true })}
        /></label>
        {errors.skills && "skills are required"}
        <label>
        <StyledTextArea
          name="interests"
          placeholder="Add interests"
          ref={register({ required: true })}
        /></label>
        {errors.interests && "interests are required"}

        <StyledSubmit type="submit" />
      </StyledForm>
    </div>
  );
}
