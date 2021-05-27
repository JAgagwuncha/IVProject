import React from "react";
import "./App.css";
import Corruption2019 from "./components/Corruption2019";
import Corruption2018 from "./components/Corruption2018";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Component } from "react";
import { Helmet } from 'react-helmet'

const TITLE = 'Corruption Map'

function App() {
  return (
    
    <BrowserRouter>
      <Navbar />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
          <Route exact path="/">
            <Corruption2019 />
          </Route>
          <Route path="/Corruption2018">
            <Corruption2018 />
          </Route>
        </Switch>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
      </div>
    </BrowserRouter>
  );
}

export default App;