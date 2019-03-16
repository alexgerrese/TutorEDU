import React, { Component } from 'react';
import Movie from './movie';
//import logo from "./images/Unknown-1.jpeg";
// testing for git
class Collection extends Component {
  constructor() {
    super();
    this.state = { //what is the state of this component?  We added a copy of the movies array so we could modify movies in it based off our filter.
      movies: [],
      filtered: []
    };
  }

  async componentDidMount() {
    //const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=e83c646d73f735bd6ce57c5238782f4c&language=en-US&page=1");
    const json = [{poster_path: "./images/Unknown-1.jpeg",
    department: "Computer Science"}, {poster_path: "./images/Unknown-2.jpeg",
    department: "Art History"}, {poster_path: "./images/Unknown-3.jpeg",
    department: "Biology"}, {poster_path: "./images/Unknown-4.jpeg",
    department: "Chemistry"}, {poster_path: "./images/Unknown-5.jpeg",
    department: "Computer Science"}, {poster_path: "./images/Unknown-6.jpeg",
    department: "Economics"}, {poster_path: "./images/Unknown-7.jpeg",
    department: "Economics"}, {poster_path: "./images/Unknown-8.jpeg",
    department: "English"}, {poster_path: "./images/Unknown-9.jpeg",
    department: "Public Policy"}, {poster_path: "./images/Unknown-10.jpeg",
    department: "Political Science"}, {poster_path: "./images/Unknown-11.jpeg",
    department: "ECE"}, {poster_path: "./images/Unknown-12.jpeg",
    department: "BME"}, {poster_path: "./images/Unknown-13.jpeg",
    department: "Cultural Anthropology"}, {poster_path: "./images/Unknown-14.jpeg",
    department: "French"}, {poster_path: "./images/Unknown-15.jpeg",
    department: "Spanish"}, {poster_path: "./images/Unknown-16.jpeg",
    department: "Italian"}, {poster_path: "./images/Unknown-17.jpeg",
    department: "Math"}, {poster_path: "./images/Unknown-18.jpeg",
    department: "Statistics"}, {poster_path: "./images/Unknown-19.jpeg",
    department: "Statistics"}, {poster_path: "./images/Unknown-20.jpeg",
    department: "English"}]//await response.json();
    this.setState({ movies: json, filtered: json});
  }
  //takes movies array and takes all the departments equal to department and sets the filtered state into that temporary state.
  //re-renders state variable based on filter when we call filter in render.
  filter(department) {
      const tempArray = [];
      for (const movie in this.state.movies) {
          if (movie.department === department) {
              tempArray.append(movie);
          }
      }
      this.setState ({
          filtered: tempArray
      })
  }

  render() {
    return  (
      <div className="collection">
        {console.log(this.state.filtered)}
        {this.state.filtered.map(movie => (
          <Movie poster= {(movie.poster_path)} name={ movie.title } />
        ))}
      </div>
    )
  }
}

export default Collection;
