import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin: 50px auto;
  border-radius: 3px;
`;

const StyledHeading = styled.h2`
  color: #caa767;
  font-size: 20px;
`;


const StyledInput = styled.input`
  width: 500px;
  height: 25px;
  margin: 5px 0;
  border-radius: 3px;
`;

const StyledRadioDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 500px;
  color: #caa767;
  margin: 10px 0;
  font-size: 15px;
`;

const StyledTextArea = styled.textarea`
  width: 500px;
  height: 300px;
  margin: 5px 0;
  border-radius: 3px;
  font-family: 'Segoe UI', 'Roboto', 'Ubuntu', sans-serif;
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

export default function PostJob() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <div>
    <StyledHeading>Create New Job</StyledHeading>
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <label>
      <StyledInput
        type="text"
        placeholder="Job title"
        name="jobTitle"
        ref={register({ required: true })}
      /></label>
      {errors.jobTitle && "job title is required"}
      <label>
      <StyledInput
        type="text"
        placeholder="Salary"
        name="salary"
        ref={register}
      /></label>
      <label>
      <StyledInput
        type="text"
        placeholder="Location"
        name="location"
        ref={register({ required: true })}
      /></label>
      {errors.location && "location is required"}


      <StyledRadioDiv>
        Is relocation assistance available for this position?
        <label>
          <input
            name="relocation"
            type="radio"
            value="Yes"
            ref={register({ required: true })}
          />
          Yes
        </label>
        <label>
          <input
            name="relocation"
            type="radio"
            value="No"
            ref={register({ required: true })}
          />
          No
        </label>
      </StyledRadioDiv>
      {errors.relocation && "relocation field is required"}
<label>
      <StyledTextArea
        name="description"
        placeholder="Add job description here"
        ref={register({ required: true })}
      /></label>
      {errors.description && "description is required"}
      <label>
      <StyledTextArea
        name="requirements"
        placeholder="Add position requirements here"
        ref={register({ required: true })}
      /></label>
      {errors.requirements && "position requirements are required"}
      <StyledSubmit type="submit" value="Create Job"/>
    </StyledForm>
    </div>
  );
}
