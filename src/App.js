import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute"
import BubblePage from "./components/BubblePage"
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
      <Route exact path="/" component={Login}/>
      <PrivateRoute exact path="/protected" component={BubblePage}/>
        <header>
         Color Picker Sprint Challenge
        <a data-testid="logoutButton" href="#">logout</a>
        </header> 
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.