import React, { Component } from 'react';
import Password from "../src/Components/Password/password";
import HomePage from "../src/Pages/HomePage/homePage";
import Form from "../src/Components/Forms/Form"
import ShippingPage from "../src/Pages/ShippingPage/shippingPage"
import BarrelPage from "../src/Pages/BarrelPage/barrelPage"
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            {/* <Route exact path="/" Component={Password}/> */}
            <Route exact path="/home" Component={HomePage}/> 
            <Route exact path="/form" Component={Form}/> 
            <Route exact path="/shippingpage" Component={ShippingPage}/> 
            <Route exact path="/barrelpage" Component={BarrelPage}/> 


          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
