import React, { Component } from 'react';
import './styles.css';
import styled from 'styled-components';
import axios from "axios";

const SaveButton = styled.button`
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

  handleSave() {

    const updatedFields = {
      additional_comments: document.getElementById('description').value,
      availabilities: document.getElementById('availabilities').value,
    }

    console.log(updatedFields)

    // var config = {
    //   headers: {'Authorization': `JWT ${localStorage.getItem('token')}`},
    //   data: updatedFields,
    // };

    axios
      .put("/appointments/" + this.state.appointment.id, updatedFields)
      .then(res => {
        this.setState({ tutor: res.data })
      })
      .catch(err => console.log(err));
  }

  render() {

    // Conditionally render appointment status
    const appointmentStatus = this.state.appointment.status
    var statusComponent;

    if (appointmentStatus === "Canceled") {
      statusComponent = <p className="appointment-status" style={{"color": "#C93131"}}>{ this.state.appointment.status.toUpperCase() }</p>
    } else if (appointmentStatus === "Confirmed"){
      statusComponent = <p className="appointment-status" style={{"color": "green"}}>{ this.state.appointment.status.toUpperCase() }</p>
    } else {
      statusComponent = <p className="appointment-status" style={{"color": "#898989"}}>{ this.state.appointment.status.toUpperCase() }</p>
    }

    // Check if current user is tutor or client for this appointment and render as such
    const tutorID = this.state.appointment.tutor
    const currentUserID = this.props.currentUserID
    var primaryButtonText = "Save changes"
    var secondaryButtonText = "Cancel Request"
    var detailString = "TUTOR • " + this.state.subjectName + " • $" + (this.state.tutor != null ? this.state.tutor.hourly_rate : "") + "/HOUR"

    if (tutorID === currentUserID) {
      primaryButtonText = "Approve Request"
      secondaryButtonText = "Reject Request"
      detailString = "CLIENT • " + this.state.subjectName
    }

    return (
      <div className="appointment-card-container">
        <div className="appointment-card-card">
          <div className="appointment-card-left">
            <img className="appointment-card-profpic" src={ this.state.tutor != null ? this.state.tutor.image : null } alt="Tutor Profile Pic"/>
            <div className="appointment-card-text">
              { statusComponent }
              <h3 className="appointment-card-name">{ this.state.tutor != null ? this.state.tutor.name : "Loading..." }</h3>
              <p className="appointment-card-details">{ detailString }</p>
              <div className="appointment-card-info">
                <div className="appointment-card-info-left">
                  <p className="schedule-input">Additional Information</p>
                  <textarea className="textarea-input-box" id="description" type="text" defaultValue={this.state.appointment.additional_comments} placeholder="Midterm test prep on integrals..."></textarea>
                </div>
                <div className="appointment-card-info-right">
                  <p className="schedule-input">Availabilities</p>
                  <input className="text-input-box" id="availabilities" type="text" defaultValue={this.state.appointment.availabilities} placeholder="Friday 10am-2pm..."></input>
                </div>
              </div>
            </div>
          </div>
          <div className="appointment-card-right">
            <CancelButton>{ secondaryButtonText }</CancelButton>
            <SaveButton onClick={() => {this.handleSave()}}>{ primaryButtonText }</SaveButton>
          </div>
        </div>
      </div>
    )
  }
}

export default AppointmentCard;
