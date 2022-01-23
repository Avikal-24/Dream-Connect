import React from 'react'
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>

    <Router>
      <Navbar />

      <Switch>

        <Route exact path="/">
          <Home/>
        </Route>


      </Switch>

    </Router>
  </>
  );
}

export default App;
