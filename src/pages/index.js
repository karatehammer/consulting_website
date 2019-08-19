import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MainBanner from '../components/MainBanner/MainBanner';

const IndexPage = () => (
  <Layout>
    <MainBanner />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
