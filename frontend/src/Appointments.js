import React, { Component } from 'react';
import './styles.css';
import AppointmentCard from './AppointmentCard';
import axios from "axios";

class Appointments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      user: null,
    };
  }

  componentDidMount() {
    this.getCurrentUser()
  }

  getCurrentUser() {
    var config = {
      headers: {'Authorization': `JWT ${localStorage.getItem('token')}`}
    };

    axios
      .get('/current_user', config)
      .then(res => {
        console.log(res);
        this.setState({
          user: res.data,
        })
        this.getAppointments(this.state.user.id)
      })
  }

  getAppointments(userID) {
    axios
      .get("/appointments/", userID)
      .then(res => this.setState({ appointments: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="appointments-container">
        <div className="upcoming-appointments">
          <h2 className="upcoming-appointments-text">Upcoming Appointments</h2>
          {this.state.appointments.length > 0 ? (
            this.state.appointments.map((appointment,k) => (
              <AppointmentCard  key={k}
                                appointment={appointment}/>
            ))
          ) : (
            <p className="tutor-results">No upcoming appointments</p>
          )}
        </div>
        <div className="past-appointments">
          <h2 className="past-appointments-text">Past Appointments</h2>
          <p className="tutor-results">No past appointments</p>
        </div>
      </div>
    )
  }
}

export default Appointments;
