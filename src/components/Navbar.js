import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbar: {
        onWindowTop: true,
        isNavOpen: false,
      },
    };
  }
  componentDidMount() {
    // Listening for a scroll event when the page mount
    window.addEventListener("scroll", this.handlePageScroll);
  }

  componentWillUnmount() {
    // Remove the scroll event when the page unmount
    window.removeEventListener("scroll", this.handlePageScroll);
  }

  handlePageScroll = () => {
    // Determine if the navbar is positioned at zero
    const scrollPosition = window.pageYOffset;

    scrollPosition > 1
      ? this.setState({ navbar: { ...this.state.navbar, onWindowTop: false } })
      : this.setState({ navbar: { ...this.state.navbar, onWindowTop: true } });
  };

  handleHamburgerClick = () => {
    // Toggle the status of the navbar
    const navbarStatus = !this.state.navbar.isNavOpen;
    this.setState({
      navbar: { ...this.state.navbar, isNavOpen: navbarStatus },
    });
  };

  render() {
    return (
      <div
        className={
          this.state.navbar.onWindowTop ? "navbar" : "navbar navbar--active"
        }
      >
        <div className="navbar__mainContainer">
          <div className="navbar__container">
            <div
              className={
                this.state.navbar.isNavOpen
                  ? "hamburger hamburger--toX"
                  : "hamburger"
              }
              onClick={this.handleHamburgerClick}
            >
              <div className="hamburger__middleBar"></div>
            </div>
            <img
              className="navbar__logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
              alt="Netflix Logo"
            ></img>
          </div>
          <ul
            className={
              this.state.navbar.isNavOpen
                ? "navbar__items navbar__items--open"
                : "navbar__items"
            }
          >
            <li className="navbar__item">
              <NavLink
                exact
                className="navbar__link"
                activeClassName="navbar__link--active"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                className="navbar__link"
                activeClassName="navbar__link--active"
                to="/tvshows"
              >
                TV Shows
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                className="navbar__link"
                activeClassName="navbar__link--active"
                to="/movies"
              >
                Movies
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                className="navbar__link"
                activeClassName="navbar__link--active"
                to="/latest"
              >
                Latest
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                className="navbar__link"
                activeClassName="navbar__link--active"
                to="/mylist"
              >
                My List
              </NavLink>
            </li>
          </ul>
        </div>
        <ul className="navbar__icons">
          <li className="navbar__icon">
            <i class="fas fa-search"></i>
          </li>
          <NavLink className="navbar__icon" to="/referfriends">
            <i class="fas fa-gift"></i>
          </NavLink>
          <li className="navbar__icon">
            <i class="fas fa-bell"></i>
          </li>
          <img
            className="navbar__avatar"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png"
            alt=" User Avatar"
          ></img>
        </ul>
      </div>
    );
  }
}

export default Navbar;
