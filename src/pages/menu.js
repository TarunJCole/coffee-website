import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Menu() {
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
