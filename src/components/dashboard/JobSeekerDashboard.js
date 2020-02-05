import React from 'react';
import '../../App.css';
import {Route} from 'react-router-dom';
import JobSeekerProfile from './JobSeekerProfile';
import JobSeekerEdit from './JobSeekerEdit';


function JobSeekerDashboard() {
  return (
    <div className="App">
        <Route exact path='/jobseeker-profile' component={JobSeekerProfile} />
        <Route path='/jobseeker-profile/edit' component={JobSeekerEdit} />
    </div>
  );
}

export default JobSeekerDashboard;