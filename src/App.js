import React from 'react';
import './App.css';
import SignUpForm from './components/onboarding/SignUpForm';
import LogInForm from './components/onboarding/LogInForm';
import Title from './components/onboarding/Title';
import Navigation from './components/onboarding/Navigation';
import JobSeekerInfo from './components/onboarding/JobSeekerInfo';
import CompanyInfo from './components/onboarding/CompanyInfo';
import {Route} from 'react-router-dom';
import CompanyDashboard from './components/dashboard/CompanyDashboard';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Title />
        <Navigation />
        <SignUpForm />
      </Route>
      <Route exact path="/signup">
        <Title />
        <Navigation />
        <SignUpForm />
      </Route>
      <Route path="/signup/job-seeker">
        <Title />
        <JobSeekerInfo />
      </Route>
      <Route path="/signup/company">
        <Title />
        <CompanyInfo />
      </Route>
      <Route path="/login">
        <Title />
        <Navigation />
        <LogInForm />
      </Route>
      <Route path="/company-profile" component={CompanyDashboard} />
    </div>
  );
}

export default App;
