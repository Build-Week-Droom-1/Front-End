import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

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

const StyledTextArea = styled.input`
  width: 300px;
  height: 100px;
  margin: 5px 0;
  border-radius: 3px;
`;

export default function CompanyInfo() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput type="text" placeholder="name" name="name" ref={register({required: true, pattern: /^[\\p{L} .'-]+$/i})} />
      {errors.name && "name is required"}
      <StyledInput type="text" placeholder="location" name="location" ref={register({required: true, pattern: /^[\\p{L} .'-]+$/i})} />
      {errors.location && "location is required"}
      <StyledTextArea name="description" placeholder="company description" ref={register({required: true})} />
      {errors.description && "description is required"}
      <StyledTextArea name="mission" placeholder="mission statement" ref={register({required: true})} />
      {errors.mission && "mission is required"}
      <StyledSubmit type="submit" />
    </StyledForm>
  );
}