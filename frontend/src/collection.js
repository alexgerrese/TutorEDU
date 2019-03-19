import React, { Component } from 'react';
import TutorCard from './TutorCard';
import NavBar from './NavBar';


const tutors = [{
  name: "Justin Robinson",
  bio: "I’m a senior studying Computer Science and pursuing a PhD in machine learning. I love helping others learn!",
  availabilities: "Mon-Fri 10am-1:30pm, Sat 4pm-6pm",
  courses: ["CS290","I&E342"]
},
{
  name: "Alex Gerrese",
  bio: "I’m a senior studying Computer Science and pursuing a PhD in machine learning. I love helping others learn!",
  availabilities: "Mon-Fri 10am-1:30pm, Sat 4pm-6pm",
  courses: ["CS290","I&E342"]
},
{
  name: "Bro Gerrese",
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
                        bio={tutor.bio}
                        availabilities={tutor.availabilities}/>
          ))}
          </div>
        </div>
      )
    }
  }

export default Collection;
