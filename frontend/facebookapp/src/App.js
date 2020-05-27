import React from 'react';
import { Counter } from './features/counter/Counter';
import DisplayLogin from './features/loginPage/DisplayLogin'
import LoginNavBar from './features/loginPage/LoginNavBar'
import { Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <LoginNavBar/>
      <Switch>
        <Route exact path={"/"}>
          <DisplayLogin/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
