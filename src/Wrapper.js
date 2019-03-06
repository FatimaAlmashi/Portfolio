import React, { Component } from "react";
import logo from "./images/logo.png";

class Wrapper extends Component {
  render() {
    return (
      <header id="header" class="alt">
        <span class="logo">
          <img src={logo} alt="" height="200" />
        </span>
        <h1>فاطمه آل ماشي</h1>
        <p>اهلا بكم في الصفحة الخاصه بي</p>
        <br />
      </header>
    );
  }
}

export default Wrapper;
