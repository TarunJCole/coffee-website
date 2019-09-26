import React from "react"
import { IconContext } from "react-icons"
import { FaFacebook, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa"

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
              <li className="contact-item">
                <IconContext.Provider value={{ size: "2rem" }}>
                  <FaEnvelope />
                </IconContext.Provider>
                email@email.com
              </li>
              <li className="contact-item">
                <IconContext.Provider value={{ size: "2rem" }}>
                  <FaPhone />
                </IconContext.Provider>
                01234 567890
              </li>
              <li className="contact-item">
                <IconContext.Provider value={{ size: "2rem" }}>
                  <FaFacebook />
                </IconContext.Provider>
                Facebook
              </li>
              <li className="contact-item">
                <IconContext.Provider value={{ size: "2rem" }}>
                  <FaTwitter />
                </IconContext.Provider>
                Twitter
              </li>
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
