import React, { Component } from "react";
import { truncate } from "../helpers";
import "../css/Banner.css";

//Stateless Component
class Banner extends Component {
  render() {
    const { movieDescription, backdropPath, title } = this.props;
    return (
      <header className="banner">
        <img className="banner__image" src={backdropPath} alt={title} />
        <div className="banner__content">
          <h1 className="banner__title">{title}</h1>
          <h1 className="banner__description">{truncate(movieDescription)}</h1>
          <div className="banner__buttons">
            <button className="banner__button banner__button--play">
              <i class="fas fa-play"></i>Play
            </button>
            <button className="banner__button banner__button--moreInfo">
              <i class="fas fa-info"></i>More Info
            </button>
          </div>
        </div>
        <div className="banner--fadeBottom"></div>
      </header>
    );
  }
}

export default Banner;
