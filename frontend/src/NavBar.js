import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import axios from "axios";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: localStorage.getItem('token') ? true : false,
      user: null
    };
  }

  componentDidMount() {
    if (this.state.isLoggedIn) {
      this.getCurrentUser()
    }
  }

  getCurrentUser() {
    var config = {
      headers: {'Authorization': `JWT ${localStorage.getItem('token')}`}
    };

    axios
      .get('/current_user', config)
      .then(res => {
        this.setState({
          user: res.data,
        })
        console.log(res);
      })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return  (
        <div className="navbar">
          <Navbar className="bg-light justify-content-between" expand="lg" fixed="top">
            <Navbar.Brand href="/">TutorEDU</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className="navbar-appointments">
                <a href="/appointments">Appointments</a>
              </Navbar.Text>
              {isLoggedIn ? (
                <Navbar.Text>
                  Signed in as: <a href="/signin">{ this.state.user != null ? this.state.user.name : "Loading..."}</a>
                </Navbar.Text>
              ) : (
                <Navbar.Text>
                  <a href="/signin">Sign up/Sign in</a>
                </Navbar.Text>
              )}
            </Navbar.Collapse>
          </Navbar>
        </div>
      )
    }
  }

export default NavBar;
