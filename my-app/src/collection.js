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
    department: "Art History"}]//await response.json();
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
