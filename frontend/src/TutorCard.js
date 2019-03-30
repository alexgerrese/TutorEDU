import React, { Component } from 'react';
import './styles.css';
import styled from 'styled-components';
import TutorProfile from './TutorProfile';
import {withRouter} from "react-router-dom";

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

  handleClick = () => {
    this.props.history.push("/tutorProfile");
  }

  render() {
    return (
      <div className="tutor-card">
        <img  src={ this.props.profpicURL }
              alt={ "TUTOR NAME" }
              className="tutor-profpic" />
        <h3 className="tutor-name">{this.props.name}</h3>
        <p>{this.props.bio}</p>
        <h4 className="tutor-availabilities">AVAILABILITIES</h4>
        <p>{this.props.availabilities}</p>
        <Button onClick={this.handleClick}>View Profile</Button>

      </div>
    )
  }
}

export default withRouter(TutorCard);
