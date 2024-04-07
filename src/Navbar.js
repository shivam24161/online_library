import React, { Component } from 'react';
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
     <>
    <div className="header">
      <Link to="/" className="logo"><i>Online library</i></Link>
      <div className="header-right">
      <Link to="/" className="active">HOME</Link>
      </div>
    </div>
     </>
    )
  }
}

