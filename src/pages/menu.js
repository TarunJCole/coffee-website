import React from "react"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./menu.css"

export default function Menu({ data }) {
  return (
    <Layout>
      <SEO title="Menu" />
      <div id="menu">
        <section className="title">
          <h1>Our Menu</h1>
        </section>
        <section className="menu">
          <p>Menu here</p>
        </section>
      </div>
    </Layout>
  )
}

// export const query = graphql``

Menu.propTypes = {
  data: PropTypes.object.isRequired,
}
