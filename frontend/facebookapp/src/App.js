import React, { useState } from 'react';
import { Counter } from './features/counter/Counter';
import { useHistory, useLocation } from 'react-router-dom'
import DisplayLogin from './features/loginPage/DisplayLogin'
import LoginNavBar from './features/loginPage/LoginNavBar'
import DisplayHome from './features/homePage/DisplayHome'
import Navbar from './features/universal/NavBar'
import { Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  
  // const showNav = () => {
  //   let location = useLocation();

  //   if (location.pathname === "/") {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  return (
    <div className="App">
      {/* {showNav() ? <Navbar/> : null} */}

      <Switch>
        <Route exact path={"/"}>
          <LoginNavBar/>
          <DisplayLogin/>
        </Route>
        <Route exact path={"/home"}>
        <Navbar/>
          <DisplayHome/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
