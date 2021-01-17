import React from "react"
import SEO from "../components/seo"
import App from "../sections/App/App"

import "./index.scss"

const IndexPage = ({ c }) => (
  <>
    <SEO title="Home" />
    <App />
  </>
)

export default IndexPage
