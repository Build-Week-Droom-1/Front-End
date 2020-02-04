import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
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

const JobSeekerProfile = () => {
    return (
        <ProfileContainer>
            <ProfileName><span>Name Icon</span>{' '}Job Seeker Name Here</ProfileName>
            <ProfileDetails><span>Location Icon</span>{' '}Location Here</ProfileDetails>
            <ProfileDetails><span>Occupation Icon</span>{' '}Occupation Here</ProfileDetails>
            <ProfileDetails><span>Education Icon</span>{' '}Education Here</ProfileDetails>
            <DescriptionDiv>
                <h3>Work Experience</h3>
                <p>Actual Work Experience</p>
            </DescriptionDiv>
            <DescriptionDiv>
                <h3>Skills</h3>
                <p>Actual Skills</p>
            </DescriptionDiv>
            <DescriptionDiv>
                <h3>Interests</h3>
                <p>Actual Interests</p>
            </DescriptionDiv>
        </ProfileContainer>
    );
}

export default JobSeekerProfile;