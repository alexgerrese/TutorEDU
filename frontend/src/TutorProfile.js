import React, { Component } from 'react';
import './styles.css';
import styled from 'styled-components';
import axios from "axios";

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

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      userID: null
    };
  }

  componentDidMount() {

    const { match: { params } } = this.props;
    this.setState({ userID: params.userID });

    // axios
    //   .get("/api/v1/users/${userID}")
    //   .then(res => this.setState({ user: res.data }))
    //   .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="tutor">
        <div className="tutor-TutorProfile">
          <div className="tutor-topHeader">
            <img  src={ this.state.user.profpicURL }
                  alt={ this.state.user.name }
                  className="tutor-profpic"/>
            <h3 className="tutor-schoolYearAndRate">{this.state.user.school} CLASS OF {this.state.user.year} • {this.state.user.rate}</h3>
            <h1 className="tutor-name">{this.state.user.name}</h1>
            <p className="tutor-description">{this.state.user.bio}</p>
          </div>
          <div className="tutor-rating">
            <h4 className="tutor-rating">RATING</h4>
            <p>{this.state.user.rating}</p>
          </div>
          <div className="tutor-classes">
            <h4 className="tutor-classes">CLASSES</h4>
            <p>{this.state.user.classes}</p>
          </div>
          <div className="tutor-availability">
            <h4 className="tutor-availability">AVAILABILITIES</h4>
            <p>{this.state.user.availabilities}</p>
          </div>
          <div className="tutor-reportCard">
            <h4 className="tutor-reportCard">REPORT CARD</h4>
            <p>{this.state.user.reportCard}</p>
          </div>
        </div>
        <div className="tutor-appointment">
          <p className="tutor-appointment-main">Schedule an appointment</p>
          <p>Select a course</p>


          <p>Enter your availabilities</p>


          <p>Briefly describe the kind of help you need</p>


          <Button>Submit Request</Button>
          <p>We will get back to you within 24 hours.</p>
        </div>
      </div>
    )
  }
}

export default TutorProfile;
