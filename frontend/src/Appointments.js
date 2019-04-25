import React, { Component } from 'react';
import './styles.css';
import styled from 'styled-components';
import AppointmentCard from './AppointmentCard';
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

class Appointments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      user: null,
    };
  }

  componentDidMount() {

    const { match: { params } } = this.props;

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
          {this.state.appointments.map((appointment,k) => (
            <AppointmentCard  key={k}
                              appointment={appointment}/>
          ))}
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
