import React from "react"
import { Link } from "gatsby"
import config from "../config/config"
import SEO from "../components/seo"

import "./index.scss"
import Box from "../components/Box"

const IndexPage = ({ c }) => (
  <>
    <SEO title="Home" />
    <h1>{c("titleName")}</h1>
    <p className="n1">Welcome to your new Gatsby site.</p>
    <p className="n2">Welcome to your new Gatsby site.</p>
    <p className="n2">Welcome to your new Gatsby site.</p>
    <Box />
  </>
)

export default config(IndexPage)
