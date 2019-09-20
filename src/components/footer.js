import React from "react"
import { Link } from "gatsby"
import footerStyle from "./footer.module.css"

export default function Footer() {
  return (
    <footer style={footerStyle} id="page-footer">
      <div>
        <h3>Links</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <h3>Contact Us</h3>
        <ul>
          <li>
            Email: <br />
            email@email.com
          </li>
          <li>
            Phone: <br />
            01234 567890
          </li>
        </ul>
      </div>
      <div>Social</div>
    </footer>
  )
}
