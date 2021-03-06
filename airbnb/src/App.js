import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';

import UserLogin from "./components/UserLogin";
import UserRegister from "./components/UserRegister";
import Listings from "./components/Listings";
import PrivateRoute from "./components/PrivateRoute";
import AddListing from './components/AddListing';
import EditListing from "./components/EditListing";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

import logo from "../src/Mock-Logo.png"

import { connect } from "react-redux";


function App() {
  return (
    <Router>
     <div className="App">
        <div className="container">
          <HomeOutlinedIcon font-size='large' href='https://topchill.org' />
        <a href="https://topchill.org/">
        <img src={logo} alt="logo"></img>
        </a>
      <Switch>
      <Route exact path="/login" component={UserLogin} />
      <Route exact path="/register" component={UserRegister} />
      <PrivateRoute exact path="/listings/user/:id" component={Listings} />
      <PrivateRoute exact path="/add-listing" component={AddListing} />
      <PrivateRoute exact path="/listings/:id" component={EditListing} />
      </Switch>
      <nav>
        </nav>
        </div>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    listings: state.listings
  }
}

export default connect(mapStateToProps, {})(App)
