import React, { Component } from 'react';
import './styles.css';
import styled from 'styled-components';
import TutorProfile from './TutorProfile';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

const Button = styled.button`
  height: 40px;
  width: 230px;
  border: 2px solid #D9E2FF;
  border-radius: 4px;
  font-family: Avenir-Heavy;
  font-size: 12px;
  color: #1C3A9F;
  letter-spacing: 0;
  text-align: center;

  :hover {
    color: white;
    border: 0px;
    background-color: #1C3A9F;
  }
`;

class TutorCard extends Component {
  render() {
    return (
        <div className="tutor-card">
          <img  src={ this.props.user.profpicURL }
                alt={ "TUTOR NAME" }
                className="tutor-profpic" />
          <h3 className="tutor-name">{this.props.user.name}</h3>
          <p>{this.props.user.bio}</p>
          <h4 className="tutor-availabilities">AVAILABILITIES</h4>
          <p>{this.props.user.availabilities}</p>
            <Link to={{ pathname: "/tutors/" + this.props.user.userID }}>
              <Button>View Profile</Button>
            </Link>
        </div>
    )
  }
}

export default TutorCard;
