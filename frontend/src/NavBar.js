import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: localStorage.getItem('token') ? true : false,
      name: ""
    };
  }

  componentDidMount() {
    if (this.state.isLoggedIn) {

    }
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
                  Signed in as: <a href="signin">Alex Gerrese</a>
                </Navbar.Text>
              ) : (
                <Navbar.Text>
                  <a href="signin">Sign up/Sign in</a>
                </Navbar.Text>
              )}
            </Navbar.Collapse>
          </Navbar>
        </div>
      )
    }
  }

export default NavBar;
