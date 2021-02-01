import React from "react"
import { Helmet } from "react-helmet"
import SEO from "../components/seo"
import App from "../sections/App/App"

import "./index.scss"

const IndexPage = ({ c }) => (
  <>
    <SEO title="Home" />
    <Helmet>
      <meta charSet="utf-8" />
      <title>Home</title>
      <meta name="description" content="Personal Site" />
    </Helmet>
    <App />
  </>
)

export default IndexPage
