import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Profil from "./components/Profil/Profil";
import Home from "./components/Home/Home";
import Messages from "./components/Messages/Messages";
import Header from "./components/Header/Header";
import Annonces from "./components/Annonces/Annonces";

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route  path="/profil" component={Profil}/>
      <Route path="/messages" component={Messages}/>
      <Route path="/annonces" component={Annonces}/>
    </div>
  );
}

export default App;
