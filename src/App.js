import React from 'react';
import './App.css';
import SignUpForm from './components/onboarding/SignUpForm';
import LogInForm from './components/onboarding/LogInForm';
import Title from './components/onboarding/Title';
import Navigation from './components/onboarding/Navigation';
import JobSeekerInfo from './components/onboarding/JobSeekerInfo';
import CompanyInfo from './components/onboarding/CompanyInfo';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Title />
      <Navigation />

      <Route exact path="/">
        <SignUpForm />
      </Route>
      <Route exact path="/signup">
        <SignUpForm />
      </Route>
      <Route path="/signup/job-seeker">
        <JobSeekerInfo />
      </Route>
      <Route path="/signup/company">
        <CompanyInfo />
      </Route>
      <Route path="/login">
        <LogInForm />
      </Route>
    </div>
  );
}

export default App;
