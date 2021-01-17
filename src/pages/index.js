import React from "react"
import { Link } from "gatsby"
import config from "../config/config"
import SEO from "../components/seo"

const IndexPage = ({ c }) => (
  <>
    <SEO title="Home" />
    <h1>{c("titleName")}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </>
)

export default config(IndexPage)
