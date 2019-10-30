import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import ResultsPage from "./pages/ResultsPage";
import FormPage from "./pages/FormPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={LandingPage} />
        <Route path="/results" component={ResultsPage} />
        <Route path="/form" component={FormPage} />
        {/* <Route path="/about" component={AboutPage} /> */}
      </div>
    </Router>
  );
}

export default App;
