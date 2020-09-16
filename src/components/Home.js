import React, { Component } from "react";
import Row from "./Row";
import Banner from "./Banner";
import axios from "../axios";
import { choice } from "../helpers";
import { basePosterUrl, bannerRequest, rowInformation } from "../config";
import { v4 as uuidv4 } from "uuid";
import "../css/Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    // State of his children component ("row", "banner")
    this.state = {
      movieRows: this.initializingRows(),
      banner: {},
    };
  }

  async componentDidMount() {
    // Fetching the data for the banner
    const request = await axios.get(bannerRequest.fetchUrl);
    const banner = choice(request.data.results);

    this.setState({ banner });
  }

  handleClickLeftArrow = (rowId) => {
    const newArr = this.state.movieRows.map((row) => {
      if (rowId === row.id) {
        let xPosition = row.xPosition + Math.floor(window.innerWidth / 2);
        if (xPosition > 0) {
          row.xPosition = 0;
        } else {
          row.xPosition = xPosition;
        }
        return row;
      }
      return row;
    });
    this.setState({ movieRows: newArr });
  };

  handleClickRightArrow = (rowId) => {
    const newArr = this.state.movieRows.map((row) => {
      if (rowId === row.id) {
        let xPosition = row.xPosition - Math.floor(window.innerWidth / 2);
        if (xPosition < -1700) {
          row.xPosition = -1700;
        } else {
          row.xPosition = xPosition;
        }
        return row;
      }
      return row;
    });
    this.setState({ movieRows: newArr });
    // this.setState((prevState) => {
    //   let rowWidth = this.state.posters.length * 150;

    //   if (window.innerWidth - rowWidth > xPosition) {
    //     xPosition = window.innerWidth - rowWidth - 1200;
    //   }
    //   return { rowPositionX: xPosition };
    // });
  };

  bannerUrl(backdropPath) {
    // Creating the url for every movie poster
    if (backdropPath) {
      const bannerUrl = `${basePosterUrl}${backdropPath}`;
      return bannerUrl;
    }
    return "";
  }

  initializingRows() {
    // Initializing the state of rows when the component is mount
    const movieRows = rowInformation.map((row) => {
      return { ...row, id: uuidv4() };
    });
    return movieRows;
  }

  renderingRows() {
    // Rendering multiple rows for different movie gender
    const row = this.state.movieRows.map((row) => (
      <Row
        key={row.id}
        row={row}
        onRightArrowClick={this.handleClickRightArrow}
        onLeftArrowClick={this.handleClickLeftArrow}
      />
    ));
    return row;
  }

  render() {
    return (
      <div className="home">
        <React.Fragment>
          <Banner
            movieDescription={this.state.banner.overview}
            backdropPath={this.bannerUrl(this.state.banner.backdrop_path)}
            title={
              this.state.banner.title ||
              this.state.banner.name ||
              this.state.banner.original_name
            }
          />
          {this.renderingRows()}
        </React.Fragment>
      </div>
    );
  }
}

export default Home;