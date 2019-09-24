import React from "react"
import { Link } from "gatsby"
import { IconContext } from "react-icons"
import { FaFacebook, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa"
import footerStyle from "./footer.module.css"

export default function Footer() {
  return (
    <footer style={footerStyle} id="page-footer">
      <div>
        <h3>Links</h3>
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
      <div>
        <h3>Contact Us</h3>
        <ul>
          <li>
            <IconContext.Provider value={{ size: "2rem" }}>
              <FaEnvelope />
            </IconContext.Provider>
            <br />
            email@email.com
          </li>
          <li>
            <IconContext.Provider value={{ size: "2rem" }}>
              <FaPhone />
            </IconContext.Provider>
            <br />
            01234 567890
          </li>
        </ul>
      </div>
      <div>
        <h3 style={{ marginBottom: "1rem" }}>Follow Us</h3>
        <a href="https://www.facebook.com">
          <IconContext.Provider
            value={{
              size: "3.5rem",
              style: { margin: "0 1rem" },
              className: "footer-facebook-icon",
            }}
          >
            <FaFacebook />
          </IconContext.Provider>
        </a>
        <a href="https://www.twitter.com">
          <IconContext.Provider
            value={{
              size: "3.5rem",
              style: { margin: "0 1rem" },
              className: "footer-twitter-icon",
            }}
          >
            <FaTwitter />
          </IconContext.Provider>
        </a>
      </div>
    </footer>
  )
}
