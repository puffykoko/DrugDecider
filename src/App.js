import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import LandingPage from "./pages/LandingPage";
import ResultsPage from "./pages/ResultsPage";
import FormPage from "./pages/FormPage";
import FAQPage from "./pages/FAQPage";

function App() {
  return (
    <Router>
      <div className="App" id="page-container">
        <Header />
        <div id="content-wrap">
          <Route exact path="/" component={LandingPage} />
          <Route path="/results" component={ResultsPage} />
          <Route path="/form" component={FormPage} />
          <Route path="/faq" component={FAQPage} />

          {/* <Route path="/about" component={AboutPage} /> */}
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
