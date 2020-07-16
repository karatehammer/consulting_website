import React, { Component } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout";

class AboutPage extends Component {

    render() {
        return (
            <Layout>
                <h1> For inquiries or job opportunities, please email:</h1>
                <h1> <a href="mailto:hammer.consulting.mn@gmail.com">hammer.consulting.mn@gmail.com</a> </h1>
            </Layout>
        )
    }
}

export default AboutPage;