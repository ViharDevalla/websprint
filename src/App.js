import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home'
import Login from "./components/Login"
import Buy from "./components/Buy"
import Rent from "./components/Rent"
import Navbar from "./components/Navbar"
import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/login">
            <Login />
          </Route>
          <Route path="/buy">
            <Buy />
          </Route>
          <Route path="/rent">
            <Rent />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
