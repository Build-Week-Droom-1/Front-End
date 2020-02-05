import React from 'react';
import '../../App.css';
import CompanyProfile from './CompanyProfile';
import CompanyEdit from './CompanyEdit';
import {Route} from 'react-router-dom';



function CompanyDashboard() {
  return (
    <div className="App">
        <Route exact path='/company-profile' component={CompanyProfile} />
        <Route path='/company-profile/edit' component={CompanyEdit} />
    </div>
  );
}

export default CompanyDashboard;