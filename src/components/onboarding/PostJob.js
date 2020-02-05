import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin: 50px auto;
  border-radius: 3px;
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
`;
const StyledTextArea = styled.input`
  width: 500px;
  height: 300px;
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
export default function PostJob() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
      console.log(data);
      axios
          .post("https://droombw.herokuapp.com/api/jobs", data)
          .then(res => {
              console.log("data for addform", res);
              handleSubmit(res.data);
          })
          .catch(err => console.log(err.response));
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        type="text"
        placeholder="job title"
        name="jobTitle"
        ref={register({ required: true })}
      />
      {errors.jobTitle && "job title is required"}
      <StyledInput
        type="text"
        placeholder="salary"
        name="salary"
        ref={register}
      />
      <StyledInput
        type="text"
        placeholder="location"
        name="location"
        ref={register({ required: true })}
      />
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

      <StyledTextArea
        name="description"
        placeholder="job description"
        ref={register({ required: true })}
      />
      {errors.description && "description is required"}
      <StyledTextArea
        name="requirements"
        placeholder="position requirements"
        ref={register({ required: true })}
      />
      {errors.requirements && "position requirements are required"}
      <StyledSubmit type="submit" />
    </StyledForm>
  );
}
