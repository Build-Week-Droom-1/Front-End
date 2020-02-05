import React from 'react';
import styled from 'styled-components';
import DashboardTitle from './DashboardTitle';
import { useForm } from "react-hook-form";
// import axiosWithAuth from "../utils/axiosWithAuth";

const Card = styled.div`
  max-width: 60%;
  margin: 1% auto;
  padding: 0;
  border: 1px solid #caa767;
  border-radius: 5px;
  background-color: #FFFEF2;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`
const ProfileContainer = styled.form`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
const ProfileName = styled.h1`
    margin: 0 0 1rem 0;
    width: 80%;
    border-bottom: 1px solid #caa767;
    font-size: 1.6rem;
    color: #182d42;
`
const ProfileDetails = styled.h3`
    margin: 0 0 1rem 0;
    width: 80%;
    border-bottom: 1px solid #caa767;
    font-size: 1.2rem;
    color: #182d42;
`
const DescriptionDiv = styled.div`
    margin: 0 0 1rem 0;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 1rem;
    color: #182d42;

    h3 {
        border-bottom: 1px solid #caa767;
    }
`
const StyledInput = styled.input`
  width: 300px;
  height: 25px;
  margin: 5px 0;
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
const NavLinkContainer = styled.div`
    width: 80%;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const StyledSubmit = styled.input`
    font-size: 1.05rem;
    color: #182d42;
    text-decoration: none;
    width: 100%;
    padding: 1rem 0;
    margin: 0.5rem 0;
    border: 1px solid #caa767;
    border-radius: 10px;
    
    &:hover {
        cursor: pointer;
        background-color: #caa767;
        box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
    }
`;

const JobSeekerEdit = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data, e) => {
        console.log(data);
        e.preventDefault();
            // axiosWithAuth()
            //     .post(`https://reqres.in/api/register`, data)
            //     .then(res => {
            //         console.log("success", res);
            //         localStorage.setItem("token", res.data);
            //         props.history.push("/dashboard");
            //     })
            //     .catch(err => console.log("error", err.response));
  };

    return (
        <>
            <Card>
                <DashboardTitle />
                <ProfileContainer onSubmit={handleSubmit(onSubmit)}>
                    <ProfileName><span>Name Icon</span>{' '}
                        <StyledInput
                            type="text"
                            placeholder="name"
                            name="name"
                            ref={register({ required: true })}
                        />
                        {errors.name && "Name is required"}
                    </ProfileName>
                    <ProfileDetails><span>Location Icon</span>{' '}
                        <StyledInput
                            type="text"
                            placeholder="location"
                            name="location"
                            ref={register({ required: true })}
                        />
                        {errors.location && "location is required"}
                    </ProfileDetails>
                    <ProfileDetails><span>Occupation Icon</span>{' '}
                        <StyledInput
                            type="text"
                            placeholder="occupation"
                            name="occupation"
                            ref={register({ required: true })}
                        />
                        {errors.occupation && "occupation is required"}
                    </ProfileDetails>
                    <ProfileDetails><span>Education Icon</span>{' '}
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
                    </ProfileDetails>
                    <DescriptionDiv>
                        <h3>Work Experience</h3>
                        <StyledTextArea
                            name="workExperience"
                            placeholder="work experience"
                            ref={register({ required: true })}
                        />
                        {errors.workExperience && "work experience is required"}
                    </DescriptionDiv>
                    <DescriptionDiv>
                        <h3>Skills</h3>
                        <StyledTextArea
                            name="skills"
                            placeholder="skills"
                            ref={register({ required: true })}
                        />
                        {errors.skills && "skills are required"}
                    </DescriptionDiv>
                    <DescriptionDiv>
                        <h3>Interests</h3>
                        <StyledTextArea
                            name="interests"
                            placeholder="interests"
                            ref={register({ required: true })}
                        />
                        {errors.interests && "interests are required"}
                    </DescriptionDiv>
                </ProfileContainer>
                <NavLinkContainer>
                    <StyledSubmit type="submit" />
                </NavLinkContainer>
            </Card>
        </>
    );
}

export default JobSeekerEdit;