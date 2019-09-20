import React from "react"
import { Link } from "gatsby"

export default function not_found() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ fontSize: "5rem", marginBottom: "1rem" }}>404</h1>
      <h2 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Page Not Found</h2>
      <Link
        to="/"
        style={{ fontSize: "3rem", color: "blue", textDecoration: "underline" }}
      >
        Go Home
      </Link>
    </div>
  )
}
