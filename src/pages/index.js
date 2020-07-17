import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MainBanner from '../components/MainBanner/MainBanner';
import Collaborations from "../components/Collaborations/Collaborations";


const IndexPage = () => (
  <Layout>
    <MainBanner />
    <Collaborations />
  </Layout>
)

export default IndexPage
