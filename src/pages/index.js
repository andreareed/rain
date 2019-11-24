import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Rain from "../components/rain"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <Rain />
    </Layout>
  </>
)

export default IndexPage
