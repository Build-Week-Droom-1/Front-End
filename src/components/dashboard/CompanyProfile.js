import React from 'react';
import styled from 'styled-components';
import DashboardTitle from './DashboardTitle';
import CompanyNav from './CompanyNav';

const Card = styled.div`
  max-width: 60%;
  margin: 1% auto;
  padding: 0;
  border: 1px solid #caa767;
  border-radius: 5px;
  background-color: #FFFEF2;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`
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
const ProfileLocation = styled.h3`
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

const CompanyProfile = () => {
    return (
        <>
            <Card>
                <DashboardTitle />
                <ProfileContainer>
                    <ProfileName><span>Name Icon</span>{' '}Company Name Here</ProfileName>
                    <ProfileLocation><span>Location Icon</span>{' '}Location Here</ProfileLocation>
                    <DescriptionDiv>
                        <h3>Description</h3>
                        <p>Actual Description</p>
                    </DescriptionDiv>
                    <DescriptionDiv>
                        <h3>Mission Statement</h3>
                        <p>Actual Mission Statement</p>
                    </DescriptionDiv>
                </ProfileContainer>
                <CompanyNav />
            </Card>
        </>
        
    );
}

export default CompanyProfile;