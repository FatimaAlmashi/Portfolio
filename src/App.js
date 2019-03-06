import React, { Component } from "react";
import "./App.css";
import skills from "./data";
import Wrapper from "./Wrapper";
import MainSection from "./MainSection";
import Hobbies from "./Hobbies";
import Skills from "./Skills";
import Activities from "./Activities";
import Certificates from "./Certificates";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Wrapper />
        <div id="main">
          <MainSection />
          <Hobbies />
          <Skills skills={skills} />
          <Activities />
          <Certificates />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
