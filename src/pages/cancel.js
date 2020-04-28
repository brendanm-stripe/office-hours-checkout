import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CancelPage = () => (
  <Layout>
    <SEO title="Cancel Page" />
    <h1>Cancel page</h1>
    <p>Sorry you changed your mind!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CancelPage
