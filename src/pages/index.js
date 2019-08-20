import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MainBanner from '../components/MainBanner/MainBanner';
import Collaborations from "../components/Collaborations/Collaborations";
import Reviews from '../components/Reviews/Reviews';

const IndexPage = () => (
  <Layout>
    <MainBanner />
    {/* <Link to="/page-2/">Go to page 2</Link> */}
    <Collaborations />
    <Reviews />
  </Layout>
)

export default IndexPage
