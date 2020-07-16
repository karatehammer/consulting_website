import React, { Component } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout";
import Contact from "../components/Contact/Contact.jsx"

class AboutPage extends Component {

    render() {
        return (
            <Layout>
                <Contact/>
            </Layout>
        )
    }
}

export default AboutPage;