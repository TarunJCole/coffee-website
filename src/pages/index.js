import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.css"

const IndexPage = ({ data }) => (
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
    <section className="cards">
      <div className="card">
        <div className="card-text">
          <h2>Expertly Roasted & Brewed Coffee</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
            ipsum blanditiis voluptas atque alias laudantium! Sapiente cumque
            atque nulla hic voluptatibus, id facere, omnis nihil itaque ad sint
            aliquid inventore? Numquam voluptates dolorem eveniet quam quos,
            esse reprehenderit eum nesciunt laboriosam iure doloribus molestiae
            obcaecati debitis quasi temporibus culpa cupiditate!
          </p>
        </div>
        <Img fluid={data.coffee2.childImageSharp.fluid} />
      </div>
      <div className="card">
        <div className="card-text">
          <h2>Warm Atmosphere & Great Company</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            esse tempora fuga iste explicabo voluptate, dolores repudiandae
            mollitia voluptatem blanditiis? Unde voluptatibus magnam, accusamus
            voluptatem illum nam exercitationem itaque dignissimos perspiciatis
            dolore deleniti doloribus nulla architecto quos rem nisi placeat vel
            a ut! Vel sunt quisquam quae explicabo. Voluptate, officia!
          </p>
        </div>
        <Img fluid={data.coffeeShop.childImageSharp.fluid} />
      </div>
    </section>
  </Layout>
)

export const query = graphql`
  {
    coffee2: file(relativePath: { eq: "coffee2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    coffeeShop: file(relativePath: { eq: "coffee-shop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage
