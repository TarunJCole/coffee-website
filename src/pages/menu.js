import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./menu.css"

const Menu = ({ data }) => {
  return (
    <Layout>
      <SEO title="Menu" />
      <div id="menu">
        <section className="title">
          <h1>Our Menu</h1>
          <p>Choose from our selection of delicious coffees.</p>
        </section>
        <section className="menu">
          <div className="menu-items">
            <div className="menu-card">
              <Img fluid={data.menu1.childImageSharp.fluid} />
              <div className="menu-card-text">
                <h2>Light Roast</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  quam velit voluptate veniam dolore quaerat laudantium
                  veritatis. Atque nisi at laborum sunt eveniet earum distinctio
                  minima vero. Voluptatum, a quasi?
                </p>
              </div>
            </div>
            <div className="menu-card">
              <Img fluid={data.menu2.childImageSharp.fluid} />
              <div className="menu-card-text">
                <h2>Dark Roast</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  quam velit voluptate veniam dolore quaerat laudantium
                  veritatis. Atque nisi at laborum sunt eveniet earum distinctio
                  minima vero. Voluptatum, a quasi?
                </p>
              </div>
            </div>
            <div className="menu-card">
              <Img fluid={data.menu3.childImageSharp.fluid} />
              <div className="menu-card-text">
                <h2>Iced Coffee</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  quam velit voluptate veniam dolore quaerat laudantium
                  veritatis. Atque nisi at laborum sunt eveniet earum distinctio
                  minima vero. Voluptatum, a quasi?
                </p>
              </div>
            </div>
            <div className="menu-card">
              <Img fluid={data.menu4.childImageSharp.fluid} />
              <div className="menu-card-text">
                <h2>Ground Coffee</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  quam velit voluptate veniam dolore quaerat laudantium
                  veritatis. Atque nisi at laborum sunt eveniet earum distinctio
                  minima vero. Voluptatum, a quasi?
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    menu1: file(relativePath: { eq: "menu1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    menu2: file(relativePath: { eq: "menu2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    menu3: file(relativePath: { eq: "menu3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    menu4: file(relativePath: { eq: "menu4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

Menu.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Menu
