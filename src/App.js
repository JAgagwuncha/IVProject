import React from "react";
import "./App.css";
import Corruption2019 from "./components/Corruption2019";
import Corruption2018 from "./components/Corruption2018";
import Corruption2017 from "./components/Corruption2017";
import Corruption2016 from "./components/Corruption2016";
import Corruption2015 from "./components/Corruption2015";
import Difference1516 from "./components/Difference1516";
import Difference1617 from "./components/Difference1617";
import Difference1718 from "./components/Difference1718";
import Difference1819 from "./components/Difference1819";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet'

const TITLE = 'Corruption Map'

function App() {
  return (
    
    <BrowserRouter>
      <Navbar />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
        <Route path="/Info">
            <Info />
          </Route>
        <Route path="/Difference1819">
            <Difference1819 />
          </Route>
          <Route exact path="/">
            <Corruption2019 />
          </Route>
          <Route path="/Corruption2018">
            <Corruption2018 />
          </Route>
          <Route path="/Difference1718">
            <Difference1718 />
          </Route>
          <Route path="/Difference1617">
            <Difference1617 />
          </Route>
          <Route path="/Corruption2017">
            <Corruption2017 />
          </Route>
          <Route path="/Difference1516">
            <Difference1516 />
          </Route>
          <Route path="/Corruption2016">
            <Corruption2016 />
          </Route>
          <Route path="/Corruption2015">
            <Corruption2015 />
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