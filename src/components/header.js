import React from "react"
import { Link } from "gatsby"
import headerStyle from "./header.module.css"

export default function Header() {
  return (
    <header style={headerStyle} id="page-header">
      <nav>
        <div>
          <h1>Coffee House</h1>
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
