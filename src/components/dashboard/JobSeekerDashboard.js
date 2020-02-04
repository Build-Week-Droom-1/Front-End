import React from 'react';
import '../../App.css';
import DashboardTitle from './DashboardTitle';
import JobSeekerProfile from './JobSeekerProfile';
import JobSeekerNav from './JobSeekerNav';
import styled from 'styled-components';

const Card = styled.div`
  max-width: 60%;
  margin: 1% auto;
  padding: 0;
  border: 1px solid #caa767;
  border-radius: 5px;
  background-color: #FFFEF2;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`

function JobSeekerDashboard() {
  return (
    <div className="App">
        <Card>
            <DashboardTitle />
            <JobSeekerProfile />
            <JobSeekerNav />
        </Card>
    </div>
  );
}

export default JobSeekerDashboard;