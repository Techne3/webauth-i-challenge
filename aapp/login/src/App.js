import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import Navbar from './components/Navbar'
import {withRouter} from 'react-router'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Users from './components/Users';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route path="/Login" component={Login} />
      <Route path="/Register" component={Register} />
      <Route path="/Users" component={Users} />
    </div>
  );
}

export default withRouter(App);
