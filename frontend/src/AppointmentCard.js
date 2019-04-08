import React, { Component } from 'react';
import './styles.css';
import styled from 'styled-components';
import axios from "axios";

const EditButton = styled.button`
  height: 40px;
  width: 125px;
  border: 2px solid #D9E2FF;
  border-radius: 4px;
  font-family: Avenir-Heavy;
  font-size: 12px;
  color: #1C3A9F;
  letter-spacing: 0;
  text-align: center;
  justifyContent: center;
  alignItems: center;
  margin: 8px;

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

const CancelButton = styled.button`
  height: 40px;
  width: 125px;
  border: 2px solid #EDB7B7;
  border-radius: 4px;
  font-family: Avenir-Heavy;
  font-size: 12px;
  color: #C93131;
  letter-spacing: 0;
  text-align: center;
  justifyContent: center;
  alignItems: center;
  margin: 8px;

  :hover {
    color: white;
    border: 0px;
    background-color: #C93131;
  }

  :image {
    flex: 1,
    aspectRatio: 1.5,
    resizeMode: contain,
  }
`;

class AppointmentCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      courseName: "CS342",
      tutorName: "Joe Schmoe",
      hourlyRate: 40,
      clientName: "Yo Mammababa",
    };

  }

// TODO: UNCOMMENT WHEN API IS READY
  componentDidMount() {
    // getCourseNameFromId(this.props.appointment.course_id)
    this.getTutorFromId(this.props.appointment.tutor_id)
    this.getClientNameFromId(this.props.appointment.client_id)
    console.log("TUTORID: " + this.props.appointment.tutor_id)
    console.log("CLIENTID: " + this.props.appointment.client_id)
  }
  //
  // getCourseNameFromId(courseId) {
  //   axios
  //     .get("/api/v1/courses/" + courseId)
  //     .then(res => this.setState({ courseName: res.data.name }))
  //     .catch(err => console.log(err));
  // }
  //
  getTutorFromId(tutorId) {
    axios
      .get("/user/" + tutorId)
      .then(res => {
        this.setState({ tutorName: res.data.name })
        this.setState({ hourlyRate: res.data.hourly_rate })
      })
      .catch(err => console.log(err));
  }

  getClientNameFromId(clientId) {
    axios
      .get("/user/" + clientId)
      .then(res => this.setState({ clientName: res.data.name }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="appointment-card-container">
        <div className="appointment-card-card">
          <div className="appointment-card-left">
            <img className="appointment-card-profpic" src={"https://randomuser.me/api/portraits/men/" + this.props.appointment.tutor_id + ".jpg"} alt="Tutor Profile Pic"/>
            <div className="appointment-card-text">
              <h3 className="appointment-card-name">{this.state.tutorName}</h3>
              <p className="appointment-card-details">{this.state.courseName} • ${this.state.hourlyRate}/HOUR</p>
            </div>
          </div>
          <div className="appointment-card-right">
            <EditButton>Edit Request</EditButton>
            <CancelButton>Cancel Request</CancelButton>
          </div>
        </div>
      </div>
    )
  }
}

export default AppointmentCard;
