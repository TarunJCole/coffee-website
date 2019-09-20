import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section id="landing">
      <div className="title">
        <h1>Coffee House</h1>
        <p className="lead">
          Freshly brewed coffee. Warm and friendly atmosphere.
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
