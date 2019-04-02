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

const appointments = [{
  id: 1,
  tutor_id: 2,
  client_id: 3,
  course_id: 214,
  additional_comments: "I'd like extra help on covalent bonds please!",
  location: "Perkins 1st floor",
  status: "Waiting for response",
  rating: null,
},
{
  id: 2,
  tutor_id: 2,
  client_id: 1,
  course_id: 222,
  additional_comments: "I'd like extra help on math concepts ya kno.",
  location: "Bostock 4th floor",
  status: "Confirmed",
  rating: null,
},
{
  id: 3,
  tutor_id: 2,
  client_id: 3,
  course_id: 214,
  additional_comments: "I'd like extra help on covalent bonds please!",
  location: "CIEMAS",
  status: "Completed",
  rating: null,
},
]

class Appointments extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   user: null,
    // };
  }

  render() {
    return (
      <div className="appointments-container">
        <div className="upcoming-appointments">
          <h2>Upcoming Appointments</h2>
          {appointments.map((appointment,k) => (
            <AppointmentCard  key={k}
                              appointment={appointment}/>
          ))}
        </div>
        <div className="past-appointments">
          <h2>Past Appointments</h2>
        </div>
      </div>
    )
  }
}

export default Appointments;
