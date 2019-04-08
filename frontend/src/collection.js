import React, { Component } from 'react';
import TutorCard from './TutorCard';
import TutorProfile from './TutorProfile';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import axios from "axios";

// const tutors = [{
//   id: 123,
//   name: "Justin Robinson",
//   profpicURL: "https://randomuser.me/api/portraits/men/4.jpg",
//   bio: "I’m a senior studying Computer Science and pursuing a PhD in machine learning. I love helping others learn!",
//   availabilities: "Mon-Fri 10am-1:30pm, Sat 4pm-6pm",
//   courses: ["CS290","I&E342"],
//   university: "",
//   year: 0
// },
// {
//   id: 222,
//   name: "Farid Salim",
//   profpicURL: "https://randomuser.me/api/portraits/men/7.jpg",
//   bio: "I’m a senior studying Computer Science and pursuing a PhD in machine learning. I love helping others learn!",
//   availabilities: "Mon-Fri 10am-1:30pm, Sat 4pm-6pm",
//   courses: ["CS290","I&E342"],
//   university: "",
//   year: 0
// },
// {
//   id: 541,
//   name: "Alison Bree",
//   profpicURL: "https://randomuser.me/api/portraits/women/8.jpg",
//   bio: "I’m a senior studying Computer Science and pursuing a PhD in machine learning. I love helping others learn!",
//   availabilities: "Mon-Fri 10am-1:30pm, Sat 4pm-6pm",
//   courses: ["CS290","I&E342"],
//   university: "",
//   year: 0
// }]

class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get("/users/")
      .then(res => this.setState({ users: res.data }))
      .catch(err => console.log(err));

      axios.post('/api/users/', {
        id: 100,
        tutor_id: 5,
        client_id: 5,
        course_id: 5,
        additional_comments: "blank",
        date: "2019-04-02",
        location: "blank",
        status: "blank",
        rating: 5
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  render() {
    return  (
      <div className="app">
        <div className="collection">
            {this.state.users.map((user,k) => (
              <TutorCard  key={k}
                          user={user}/>
            ))}
          </div>
        </div>
      )
    }
  }

export default Collection;
