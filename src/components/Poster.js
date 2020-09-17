import React, { Component } from "react";
import "../css/Poster.css";

// Stateless Component
class Poster extends Component {
  render() {
    const { title, isPosterLarge, bannerUrl, onMovieClick } = this.props;
    return (
      <img
        className={`poster ${isPosterLarge && "poster--large"}`}
        src={bannerUrl}
        alt={title}
        onClick={() => {
          onMovieClick(title);
        }}
      />
    );
  }
}

export default Poster;
