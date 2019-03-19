import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import store from "./store";


import ChatBot from 'react-simple-chatbot';
import Chat from "./components/Chat";

class App extends Component {
  render() {
    return (

        <Provider store={store}>
            <Chat/>
        </Provider>



    );
  }
}

export default App;
