import React from 'react';
import '../../App.css';
import DashboardTitle from './DashboardTitle';
import CompanyProfile from './CompanyProfile';
import CompanyNav from './CompanyNav';

function CompanyDashboard() {
  return (
    <div className="App">
        {/* styled div to create a card wrapper */}
        <div>
            <DashboardTitle />
            <CompanyProfile />
            <CompanyNav />
        </div>
    </div>
  );
}

export default CompanyDashboard;