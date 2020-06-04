import React from 'react';
import { Counter } from './features/counter/Counter';
import DisplayLogin from './features/loginPage/DisplayLogin'
import LoginNavBar from './features/loginPage/LoginNavBar'
import DisplayHome from './features/homePage/DisplayHome'
import Navbar from './features/universal/NavBar'
import { Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Switch>
        <Route exact path={"/"}>
          <LoginNavBar/>
          <DisplayLogin/>
        </Route>
        <Route exact path={"/home"}>
          <DisplayHome/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
