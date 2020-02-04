import React from 'react';
import '../../App.css';
import Title from '../onboarding/Title';
import CompanyProfile from './CompanyProfile';
import CompanyNav from './CompanyNav';

function CompanyDashboard() {
  return (
    <div className="App">
        {/* styled div to create a card wrapper */}
        <div>
            <Title />
            <CompanyProfile />
            <CompanyNav />
        </div>
    </div>
  );
}

export default CompanyDashboard;