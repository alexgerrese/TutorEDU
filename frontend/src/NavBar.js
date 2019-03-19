import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return  (
        <div className="navbar">
          <Navbar className="bg-light justify-content-between" expand="lg" fixed="top">
            <Navbar.Brand href="#home">TutorEDU</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#login">Alex Gerrese</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
        </div>
      )
    }
  }

export default NavBar;
