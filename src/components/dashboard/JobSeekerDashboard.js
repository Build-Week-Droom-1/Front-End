import React from 'react';
import '../../App.css';
import DashboardTitle from './DashboardTitle';
import JobSeekerProfile from './JobSeekerProfile';
import JobSeekerNav from './JobSeekerNav';

function JobSeekerDashboard() {
  return (
    <div className="App">
        {/* styled div to create a card wrapper */}
        <div>
            <DashboardTitle />
            <JobSeekerProfile />
            <JobSeekerNav />
        </div>
    </div>
  );
}

export default JobSeekerDashboard;