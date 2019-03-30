import React, { Component } from 'react';
import TutorCard from './TutorCard';
import TutorProfile from './TutorProfile';
import NavBar from './NavBar';


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
  }

  render() {
    return  (
      <div className="app">
        <div className="navbar">
          <NavBar/>
        </div>
        <div className="collection">
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
