import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";




class App extends Component {
  render() {
    return (

        <Provider store={store}>
            <Router>
                <React.Fragment>

                </React.Fragment>
            </Router>

        </Provider>



    );
  }
}

export default App;
