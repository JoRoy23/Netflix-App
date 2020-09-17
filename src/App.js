import React, { Component } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import "./css/App.css";
import GlobalFonts from "./font/font";

class App extends Component {
  render() {
    return (
      <div className="app">
        <GlobalFonts />
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Home />}></Route>
          <Route path="/tvshows"></Route>
          <Route path="/movies"></Route>
          <Route path="/latest"></Route>
          <Route path="/mylist"></Route>
          <Route path="/referfriends"></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
