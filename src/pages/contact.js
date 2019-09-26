import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./contact.css"

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact" />
      <div id="contact">
        <section className="title">
          <h1>Contact Us</h1>
        </section>
        <section className="contact">
          <div className="sidebar">
            <ul className="contact-list">
              <li className="contact-item">Email</li>
              <li className="contact-item">Phone</li>
              <li className="contact-item">Facebook</li>
              <li className="contact-item">Twitter</li>
            </ul>
          </div>
          <div className="contact-form">
            <form action="">
              <input
                type="text"
                name="name"
                id="nameInput"
                placeholder="Your Name"
              />
              <input
                type="email"
                name="email"
                id="emailInput"
                placeholder="Your Email"
              />
              <input
                type="text"
                name="subject"
                id="subjectInput"
                placeholder="Subject"
              />
              <textarea
                name="message"
                id="messageInput"
                cols="30"
                rows="10"
                placeholder="Your Message"
              ></textarea>
              <input type="submit" value="Send" />
            </form>
          </div>
        </section>
      </div>
    </Layout>
  )
}
