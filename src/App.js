import React from 'react';
import './App.css';
import SignUpForm from './components/onboarding/SignUpForm';
import LogInForm from './components/onboarding/LogInForm';
import Title from './components/onboarding/Title';
import Navigation from './components/onboarding/Navigation';
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
