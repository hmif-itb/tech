import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { ROUTE_BOOTCAMP } from 'routes';
import Photo from 'components/Photo';
import Header from '../Header';
import LogoCTF from 'assets/logo/ctf.png';
import Munir from 'assets/photos/munir.png';

import './index.scss';

export default class BootcampCTF extends Component {
  render() {
    return (
      <div className="bootcamp-ds">
        <Helmet>
          <title> Bootcamp HMIF - CTF </title>
        </Helmet>

        <Header
          logo={LogoCTF}
          title="Capture The Flag"
          quote="" />

        <div className="page container">
          <div className="row d-flex flex-column align-items-center py-5">
            <Photo className="inverted" imageSrc={Munir} size="large" name="M Abdullah Munir" title="Head of Capture The Flag Community" />
          </div>

          {/* <div className="row mb-3">
            <div className="col-12">
              <h2 className="mb-3">What is Capture The Flag?</h2>
              <p>
              Data Science bootcamp is a 3-week event that contains discussion and hands-on about basic data science.
              Hosted by speakers with various experience in data science competition, participants will get a variety of new knowledge about data science.
              </p>
              <p className="text-small">
                <span className="font-italic">The goal is to turn data into information, and information into insight.</span> ~ Carly Fiorina, former CEO, Hewlett-Packard Co
              </p>
            </div>
          </div> */}

          <div className="row mb-3">
            <div className="col-12">
              <h2 className="mb-3">What you will learn</h2>
              <ul className="ml-4">
                <li>Introduction to Capture The Flag</li>
                <li>Website : Header, SQL Injection, Cross Site Scripting, SSTI</li>
                <li>Reverse : Uncompyle, Basic Assembly, SMT Solver</li>
                <li>Forensics : Magic Number, Binwalk, Network Dump</li>
                <li>Pwn : Buffer Overflow, Format String Attack, Shellcode</li>
                <li>Crypto : Simple Crypto, Pseudorandom, RSA, Block Cipher</li>
              </ul>
            </div>
          </div>

          {/* <div className="row mb-3">
            <div className="col-12">
              <h2 className="mb-3">Preferrable Skills</h2>
              <ul className="ml-4">
                <li>Programming language (Python)</li>
                <li>Passion in big data</li>
                <li>Curious to learn new things and explore creative solutions</li>
              </ul>
            </div>
          </div> */}

          <div className="row my-5">
            <div className="col-12">
              <Link to={ROUTE_BOOTCAMP}>
                <button className="button-register font-weight-semibold">
                  Register!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
