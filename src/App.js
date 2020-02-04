import React from "react";
import "./App.css";
import SignUpForm from "./components/onboarding/SignUpForm";
import LogInForm from "./components/onboarding/LogInForm";
import Title from "./components/onboarding/Title";
import Navigation from "./components/onboarding/Navigation";
import JobSeekerInfo from "./components/onboarding/JobSeekerInfo";
import CompanyInfo from "./components/onboarding/CompanyInfo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/onboarding/privateRoute";
function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Navigation />
        <Route exact path="/" component={SignUpForm} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route path="/signup/job-seeker" component={JobSeekerInfo} />

        <Route path="/signup/company" component={CompanyInfo} />
        <Route path="/login" component={LogInForm} />
      </div>
    </Router>
  );
}

export default App;
