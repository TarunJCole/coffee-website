import React, { Component } from "react"
import { Link } from "gatsby"
import { Link as ScrollLink } from "react-scroll"
import headerStyle from "./header.module.css"

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // navbar bg fade in
    window.onscroll = () => {
      if (window.pageYOffset !== 0) {
        document.querySelector("#page-header nav").classList.add("scrolled")
      } else {
        document.querySelector("#page-header nav").classList.remove("scrolled")
      }
    }
  }

  componentWillUnmount() {
    window.onscroll = null
  }

  render() {
    return (
      <header style={headerStyle} id="page-header">
        <nav>
          <div>
            <ScrollLink to="page-header" smooth={true}>
              <h2>Coffee House</h2>
            </ScrollLink>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/menu/">Menu</Link>
              </li>
              <li>
                <Link to="/contact/">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}
