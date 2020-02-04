import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";

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

export default function LogInForm(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("", data) //add api endpoint
      .then(response => {
        console.log("logged in", response.data);
        localStorage.setItem("token", response.data.token); //retreiving token from api
        props.history.push(""); // add path to dashboard
      })
      .catch(err => {
        console.log("login error", err);
      });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        type="text"
        placeholder="Email"
        name="email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && "Email is required"}

      <StyledInput
        type="password"
        placeholder="Password"
        name="password1"
        ref={register({ required: true })}
      />
      <StyledSubmit type="submit" value="Log In" />
    </StyledForm>
  );
}
