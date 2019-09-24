import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function About() {
  return (
    <Layout>
      <SEO title="About" />
      <section className="title">
        <h1>About Us</h1>
      </section>
      <section className="about">
        <div>
          <h2>Who We Are</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            perferendis, atque nesciunt ad placeat minima praesentium porro, ea
            cumque distinctio enim quae id consectetur veritatis! Quaerat
            pariatur rerum laboriosam vero est eaque cupiditate similique
            assumenda enim autem dolore ratione iure, quis eius minima facilis
            quos. Itaque tenetur reprehenderit tempora rem necessitatibus quos
            qui sed totam vero explicabo, quasi libero laboriosam, voluptatum
            sapiente dolorum tempore, veniam ducimus eius at nulla sequi.
          </p>
        </div>
        <div>
          <h2>What We Do</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            earum, porro vitae consequatur debitis in. Incidunt quia deleniti
            corrupti vel quas voluptas porro. Facilis commodi ullam magni,
            perspiciatis, quisquam voluptatibus itaque doloremque porro ut
            labore recusandae obcaecati necessitatibus earum. Nemo fugit soluta
            sequi labore architecto libero perferendis modi ratione rem
            excepturi accusamus voluptas officiis hic quia, facere temporibus!
            Quis ut nisi sit eaque, deleniti hic ratione totam! Quisquam, amet
            maiores?
          </p>
        </div>
      </section>
    </Layout>
  )
}
