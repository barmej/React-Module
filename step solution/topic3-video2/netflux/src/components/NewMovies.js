import React from 'react';

import image1 from "../img/movie1.svg";
import image2 from "../img/movie2.svg";
import image3 from "../img/movie3.svg";
import image4 from "../img/movie4.svg";

class NewMovies extends React.Component {
  render() {
    return (
      <section className="section movies slider has-arrows is-movies">
        <div className="container">
          <h3 className="section-title">أحدث الأفلام</h3>
          <ul className="moviesGrid">
            <li className="movie">
              <a href="#">
                <img src={image1} />
                <span className="movie-description">
                  The Maze Runner
									<span className="play-icon"><i className="fas fa-play"></i></span>
                </span>
              </a>
            </li>
            <li className="movie">
              <a href="#">
                <img src={image2} />
                <span className="movie-description">
                  Breaking Bad
									<span className="play-icon"><i className="fas fa-play"></i></span>
                </span>
              </a>
            </li>
            <li className="movie">
              <a href="#">
                <img src={image3} />
                <span className="movie-description">
                  Peaky Blinders
									<span className="play-icon"><i className="fas fa-play"></i></span>
                </span>
              </a>
            </li>
            <li className="movie">
              <a href="#">
                <img src={image4} />
                <span className="movie-description">
                  The Good Doctor
									<span className="play-icon"><i className="fas fa-play"></i></span>
                </span>
              </a>
            </li>
            <li className="movie">
              <a href="#">
                <img src={image4} />
                <span className="movie-description">
                  The Maze Runner
									<span className="play-icon"><i className="fas fa-play"></i></span>
                </span>
              </a>
            </li>
            <li className="movie">
              <a href="#">
                <img src={image3} />
                <span className="movie-description">
                  Breaking Bad
									<span className="play-icon"><i className="fas fa-play"></i></span>
                </span>
              </a>
            </li>
            <li className="movie">
              <a href="#">
                <img src={image1} />
                <span className="movie-description">
                  Peaky Blinders
									<span className="play-icon"><i className="fas fa-play"></i></span>
                </span>
              </a>
            </li>
            <li className="movie">
              <a href="#">
                <img src={image2} />
                <span className="movie-description">
                  The Good Doctor
									<span className="play-icon"><i className="fas fa-play"></i></span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default NewMovies;