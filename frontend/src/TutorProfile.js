import React, { Component } from 'react';
import './styles.css';
import styled from 'styled-components';
import axios from "axios";
import { Link } from "react-router-dom";

const StyledDropdown = styled.select`
  height: 40px;
  width: 250px;
  border: 2px solid #D9E2FF;
  border-radius: 4px;
  font-family: Avenir-Heavy;
  font-size: 12px;
  color: #1C3A9F;
  letter-spacing: 0;
  text-align: center;
  justifyContent: center;
  alignItems: center;
`;

const Button = styled.button`
  height: 40px;
  width: 250px;
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
      user: {
        id: -1,
        name: "Alex Gerrese",
        profpicURL: "https://randomuser.me/api/portraits/men/4.jpg",
        bio: "This is fake data for this bio. This is fake data for this bio. This is fake data for this bio.",
        availabilities: "4-9pm on Wednesdays and Fridays",
        courses: "Econ 174, Econ 256, CS 201, CS 230, CS 290",
        university: "Duke University",
        rating: "4.7/5",
        reportCard: "Econ 174: A-, Econ 256: A, CS 201: A, CS 230: A-, CS 290: A",
        year: 2020,
        hourly_rate: 40
      }
    };
    this.scheduleAppointment.bind(this);
  }

  componentDidMount() {

    const { match: { params } } = this.props;

    axios
      .get("/user/" + params.userID)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  scheduleAppointment() {

    var appointment = {
      id: Math.floor(Math.random() * 100000),
      tutor_id: this.state.user.id,
      client_id: this.state.user.id,
      course_id: 5,
      additional_comments: document.getElementById('description').value,
      date: document.getElementById('availabilities').value,
      location: "blank",
      status: "Waiting for response",
      rating: 5
    }

    console.log(appointment);

    axios.post('/api/users/', appointment)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  render() {
    return (
      <div className="tutor">
        <div className="tutor-TutorProfile">
          <div className="tutor-topHeader">
            <div className="tutor-picture">
            <img  src={ "https://randomuser.me/api/portraits/men/" + this.state.user.id + ".jpg" }
                  alt={ console.log(this.state.user) }
                  className="tutor-profpicture"/>
            </div>
            <p></p>
            <div className="tutor-info">
            <h3 className="tutor-schoolYearAndRate">{this.state.user.university.toUpperCase()} • CLASS OF {this.state.user.year} • ${this.state.user.hourly_rate}/HOUR</h3>
            <h1 className="tutor-named">{this.state.user.name}</h1>
            <p className="tutor-description">{this.state.user.bio}</p>
            </div>
          </div>
          <div className="tutor-stats">
            <div className="tutor-rating">
              <p></p>
              <h4 className="tutor-rating">RATING</h4>
              <p className="rating-details">
              {this.state.user.tutor_rating}/5</p>
            </div>
            <div className="tutor-classes">
              <h4 className="tutor-classes">CLASSES</h4>
              <p className="class-details">
              {this.state.user.courses}</p>
            </div>
            <div className="tutor-availability">
              <h4 className="tutor-availability">AVAILABILITIES</h4>
              <p className="availability-details">
              {this.state.user.availabilities}</p>
            </div>
            <div className="tutor-reportCard">
              <h4 className="tutor-reportCard">REPORT CARD</h4>
              <p className="RCdetails">
              {this.state.user.reportCard}</p>
            </div>
            </div>
        </div>
        <div className="tutor-appointment">
          <p className="tutor-appointment-main">Schedule an appointment</p>
          <p className="schedule-input">Select a course</p>
          <StyledDropdown>
            <option value="5">PUBPOL 310</option>
            <option value="3">COMPSCI 230</option>
            <option value="1">SPANISH 220</option>
            <option value="2">COMPSCI 250</option>
          </StyledDropdown>
          <p></p>

          <p className="schedule-input">Enter your availabilities</p>
          <input className="text-input-box" id="availabilities" type="text" placeholder="Friday 10am-2pm...">
          </input>
          <p></p>

          <p className="schedule-input">Briefly describe the kind of help you need</p>
          <input className="text-input-box" id="description" type="text" placeholder="Midterm test prep on integrals...">
          </input>
          <p></p>
          <Link to={{ pathname: "/appointments/" }}>
            <Button class="submit-request" onClick={() => {this.scheduleAppointment()}}>Submit Request</Button>
          </Link>
          <p></p>
          <p>We will get back to you within 24 hours.</p>
        </div>
      </div>
    )
  }
}

export default TutorProfile;
