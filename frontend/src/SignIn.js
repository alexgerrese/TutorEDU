import React, { Component } from 'react';
import './styles.css';
import styled from 'styled-components';
import axios from "axios";
import { Link } from "react-router-dom";
import background from './images/duke.png'

const PrimaryButton = styled.button`
  height: 44px;
  width: 160px;
  background-color: #1C3A9F;
  border-radius: 4px;
  font-family: Avenir-Heavy;
  font-size: 12px;
  color: white;
  letter-spacing: 0;
  text-align: center;
  justifyContent: center;
  alignItems: center;
  margin-top: 36px;
  margin-right: 12px;

  :hover {
    color: white;
    border: 0px;
    background-color: #1C3A9F;
  }
`;

const SecondaryButton = styled.button`
  height: 44px;
  width: 160px;
  border: 2px solid #D9E2FF;
  border-radius: 4px;
  font-family: Avenir-Heavy;
  font-size: 12px;
  color: #1C3A9F;
  letter-spacing: 0;
  text-align: center;
  justifyContent: center;
  alignItems: center;
  margin-top: 12px;

  :hover {
    color: white;
    border: 0px;
    background-color: #1C3A9F;
  }
`;

class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    };
  }

  componentDidMount() {
    if (this.state.logged_in) {

    }
  }

  handleLogin() {

    const credentials = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    }

    axios.post('/rest-auth/login/', credentials)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    //
    // fetch('http://localhost:8000/token-auth/', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // })
    //   .then(res => res.json())
    //   .then(json => {
    //     localStorage.setItem('token', json.token);
    //     this.setState({
    //       logged_in: true,
    //       displayed_form: '',
    //       username: json.user.username
    //     });
    //   });
  }

  render() {
    return (
      <div className="signin">
        <div className="signin-left">
          <img className="signin-background" src={background} alt="Duke University campus"/>
        </div>
        <div className="signin-right">
          <h2 className="signin-title">Sign in</h2>
          <p className="signin-input">Username</p>
          <input className="signin-input-box" id="username" type="text" placeholder="">
          </input>
          <p className="signin-input">Password</p>
          <input className="signin-input-box" id="password" type="password" placeholder="">
          </input>
          <div>
            <PrimaryButton onClick={() => {this.handleLogin()}}>Sign In</PrimaryButton>
            <SecondaryButton>Sign Up</SecondaryButton>
          </div>
        </div>
      </div>
    )
  }
}

export default SignIn;
