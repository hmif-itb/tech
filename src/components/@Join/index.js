import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./index.scss";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Helmet>
          <title> Join HMIF Tech </title>
        </Helmet>

        <div className="page join">
            <h1 className="font-weight-bold text-center">Join #HMIF<span className="text-white">Tech</span>!</h1>
            <div className="text-center font-italic">Dare to contribute?</div>
            <div className="button font-weight-bold">
                <a href="https://bit.ly/pemimpi-n">Click here!</a>
            </div>
            <div className="border" />
        </div>
      </div>
    );
  }
}
