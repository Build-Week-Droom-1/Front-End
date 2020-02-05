import React from "react";
import "./App.css";
import SignUpForm from "./components/onboarding/SignUpForm";
import LogInForm from "./components/onboarding/LogInForm";
import Title from "./components/onboarding/Title";
import Navigation from "./components/onboarding/Navigation";
import JobSeekerInfo from "./components/onboarding/JobSeekerInfo";
import CompanyInfo from "./components/onboarding/CompanyInfo";

import CompanyDashboard from "./components/dashboard/CompanyDashboard";
import JobSeekerDashboard from "./components/dashboard/JobSeekerDashboard";
import CompanySwipe from "./components/swipes/CompanySwipe";
import SeekerSwipe from "./components/swipes/SeekerSwipe";
import SeekerMatches from "./components/matches/SeekerMatches";
import CompanyMatches from "./components/matches/CompanyMatches";

import PostJob from "./components/jobposting/PostJob";

import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/onboarding/privateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={SignUpForm} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route path="/signup/job-seeker" component={JobSeekerInfo} />
        <Route path="/signup/company" component={CompanyInfo} />
        <Route path="/login" component={LogInForm} />

        <Route path="/company-profile" component={CompanyDashboard} />
        <Route path="/jobseeker-profile" component={JobSeekerDashboard} />

        <Route path="/company-matches" component={CompanyMatches} />
        <Route path="/seeker-matches" component={SeekerMatches} />
        <Route path="/company-swipe" component={CompanySwipe} />
        <Route path="/seeker-swipe" component={SeekerSwipe} />
        <Route path="/post-job" component={PostJob} />
      </div>
    </Router>
  );
}

export default App;
