import React, { Component } from 'react';
import TutorCard from './TutorCard';
import TutorProfile from './TutorProfile';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import axios from "axios";

const tutors = [{
  name: "Justin Robinson",
  profpicURL: "https://randomuser.me/api/portraits/men/4.jpg",
  bio: "I’m a senior studying Computer Science and pursuing a PhD in machine learning. I love helping others learn!",
  availabilities: "Mon-Fri 10am-1:30pm, Sat 4pm-6pm",
  courses: ["CS290","I&E342"]
},
{
  name: "Farid Salim",
  profpicURL: "https://randomuser.me/api/portraits/men/7.jpg",
  bio: "I’m a senior studying Computer Science and pursuing a PhD in machine learning. I love helping others learn!",
  availabilities: "Mon-Fri 10am-1:30pm, Sat 4pm-6pm",
  courses: ["CS290","I&E342"]
},
{
  name: "Alison Bree",
  profpicURL: "https://randomuser.me/api/portraits/women/8.jpg",
  bio: "I’m a senior studying Computer Science and pursuing a PhD in machine learning. I love helping others learn!",
  availabilities: "Mon-Fri 10am-1:30pm, Sat 4pm-6pm",
  courses: ["CS290","I&E342"]
}]

class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/v1/users/")
      .then(res => this.setState({ users: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return  (
      <div className="app">
        <div className="collection">
            {this.state.users.map((user,k) => (
              <TutorCard  key={k}
                          name={user.username}
                          profpicURL={""}
                          bio={"hello"}
                          availabilities={"hello"}/>
            ))}
          {tutors.map((tutor,k) => (
            <TutorCard  key={k}
                        name={tutor.name}
                        profpicURL={tutor.profpicURL}
                        bio={tutor.bio}
                        availabilities={tutor.availabilities}/>
          ))}
          </div>
        </div>
      )
    }
  }

export default Collection;
