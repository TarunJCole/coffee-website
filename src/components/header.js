import React, { Component } from "react"
import { Link } from "gatsby"
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
            <h2>Coffee House</h2>
          </div>
          <div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}
