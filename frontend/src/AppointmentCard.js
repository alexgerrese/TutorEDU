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
      tutor: null,
      appointment: this.props.appointment,
      subjectName: "",
    };

  }

  componentDidMount() {
    this.getSubjectNameFromId(this.props.appointment.subject)
    this.getTutorFromId(this.state.appointment.tutor)
  }

  getSubjectNameFromId(subjectID) {
    axios
      .get("/subjects/" + subjectID)
      .then(res => this.setState({ subjectName: res.data.course_name }))
      .catch(err => console.log(err));
  }

  getTutorFromId(tutorId) {
    axios
      .get("/users/" + tutorId)
      .then(res => {
        this.setState({ tutor: res.data })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="appointment-card-container">
        <div className="appointment-card-card">
          <div className="appointment-card-left">
            <img className="appointment-card-profpic" src={ this.state.tutor != null ? this.state.tutor.image : null } alt="Tutor Profile Pic"/>
            <div className="appointment-card-text">
              <h3 className="appointment-card-name">{ this.state.tutor != null ? this.state.tutor.name : "Loading..." }</h3>
              <p className="appointment-card-details">{ this.state.subjectName } • ${ this.state.tutor != null ? this.state.tutor.hourly_rate : "" }/HOUR</p>
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
