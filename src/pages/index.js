import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello world</h1>
  </Layout>
)

export default IndexPage
