import React, { Component } from 'react';
import TutorCard from './TutorCard';
import axios from "axios";

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
  }

  render() {
    return  (
      <div className="app">
        <div className="collection">
          <h2 className="upcoming-appointments-text">Browse Tutors</h2>
            {this.state.users.map((user,k) => (
              <TutorCard  key={k}
                          user={user}/>
            ))}
            <p className="tutor-results">{this.state.users.length} tutors found.</p>
          </div>
        </div>
      )
    }
  }

export default Collection;
