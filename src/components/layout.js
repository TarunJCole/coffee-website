import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"

import "./global.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
