import React from 'react';
import './App.css';
import SignUpForm from './onboarding-components/SignUpForm';
import LogInForm from './onboarding-components/LogInForm';
import Title from './onboarding-components/Title';
import Navigation from './onboarding-components/Navigation';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Title />
      <Navigation />

      <Route exact path="/">
        <SignUpForm />
      </Route>
      <Route path="/signup">
        <SignUpForm />
      </Route>
      <Route path="/login">
        <LogInForm />
      </Route>

    </div>
  );
}

export default App;
