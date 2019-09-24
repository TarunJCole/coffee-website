import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact" />
      <div id="contact">
        <section className="title">
          <h1>Contact Us</h1>
        </section>
        <section className="menu">
          <p>Contact Here</p>
        </section>
      </div>
    </Layout>
  )
}
