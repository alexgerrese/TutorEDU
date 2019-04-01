import React, { Component } from 'react';
import './styles.css';
import styled from 'styled-components';

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
  justifyContent: center;
  alignItems: center;

  :hover {
    color: white;
    border: 0px;
    background-color: #1C3A9F;
  }

  :image {
    flex: 1,
    aspectRatio: 1.5,
    resizeMode: contain,
  }
`;

class TutorProfile extends Component {

  render() {
    return (
      <div className="tutor">
        <div className="tutor-TutorProfile">
          <div className="tutor-topHeader">
            <img  src={ "https://randomuser.me/api/portraits/med/men/4.jpg" }
                  alt={ "TUTOR NAME" }
                  className="tutor-profpic"/>
            <h3 className="tutor-schoolYearAndRate">{this.props.school} CLASS OF {this.props.year} • {this.props.rate}</h3>
            <h1 className="tutor-name">{this.props.name}</h1>
            <p className="tutor-description">{this.props.bio}</p>
          </div>
          <div className="tutor-rating">
            <h4 className="tutor-rating">RATING</h4>
            <p>{this.props.rating}</p>
          </div>
          <div className="tutor-classes">
            <h4>CLASSES</h4>
            <p>{this.props.classes}</p>
          </div>
          <div className="tutor-availabilities">
            <h4>AVAILABILITIES</h4>
            <p>{this.props.availabilities}</p>
          </div>
          <div className="tutor-reportCard">
            <h4>{this.props.reportCard}</h4>
            <p>{this.props.reportCard}</p>
          </div>
        </div>
        <div className="tutor-appointment">
          <h2>SCHEDULE AN APPOINTMENT</h2>
          <p>Select a course</p>
          <p>Enter your availabilities</p>
          <p>Briefly describe the kind of help you need</p>
          <p>{this.props.availabilities}</p>
          <Button>Submit Request</Button>
          <p>{this.props.name} will get back to you within 24 hours.</p>
        </div>
      </div>
    )
  }
}

export default TutorProfile;
