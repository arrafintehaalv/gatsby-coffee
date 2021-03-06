import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import { FaCartArrowDown } from "react-icons/fa"
import "../../components/layout.css"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },

      {
        id: 2,
        path: "/about",
        text: "about",
      },
      {
        id: 3,
        path: "/career",
        text: "career",
      },
    ],
  }

  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({
          navbarOpen: false,
          css: "collapse navbar-collapse",
        })
      : this.setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show",
        })
  }

  render() {
    return (
      <div>
        <nav className="n navbar navbar-expand-sm bg-dark navbar-dark">
          <div className={this.state.css}>
            <ul className="navbar-nav mx-auto">
              {this.state.links.map(link => {
                return (
                  <li key={link.id} className="nav-item">
                    <Link to={link.path} className="nav-link text-capitalize">
                      {link.text}
                    </Link>
                  </li>
                )
              })}
              <li className="nav-item ml-sm-5">
                <FaCartArrowDown className="cart-icon snipcart-checkout" />
              </li>
            </ul>
          </div>
        </nav>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo" />
          </Link>
          {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
            Creative Commons (Attribution 3.0 Unported);
            https://www.iconfinder.com/webalys */}
          <button
            className="pull-right navbar-toggler"
            type="button"
            onClick={this.navbarHandler}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={this.state.css}>
            <ul className="navbar-nav mx-auto">
              {this.state.links.map(link => {
                return (
                  <li key={link.id} className="nav-item">
                    <Link to={link.path} className="nav-link text-capitalize">
                      {link.text}
                    </Link>
                  </li>
                )
              })}
              <li className="nav-item ml-sm-5">
                <FaCartArrowDown className="cart-icon snipcart-checkout" />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
