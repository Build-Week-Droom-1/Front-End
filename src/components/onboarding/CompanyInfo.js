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

const StyledTextArea = styled.textarea`
  width: 400px;
  height: 100px;
  margin: 5px 0;
  border-radius: 3px;
  font-family: 'Segoe UI', 'Roboto', 'Ubuntu', sans-serif;
`;

export default function CompanyInfo(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    e.preventDefault();
    axiosWithAuth()
      .post(`https://reqres.in/api/users`, data)
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
        <label>
        <StyledInput
          type="text"
          placeholder="Company name"
          name="name"
          ref={register({ required: true })}
        /></label>
        {errors.name && "name is required"}
        <label>
        <StyledInput
          type="text"
          placeholder="Location"
          name="location"
          ref={register({ required: true })}
        /></label>
        {errors.location && "location is required"}
        <label>
        <StyledTextArea
          name="description"
          placeholder="Company description"
          ref={register({ required: true })}
        /></label>
        {errors.description && "description is required"}
        <label>
        <StyledTextArea
          name="mission"
          placeholder="Company mission statement"
          ref={register({ required: true })}
        /></label>
        {errors.mission && "mission is required"}
        <StyledSubmit type="submit" />
      </StyledForm>
    </div>
  );
}
