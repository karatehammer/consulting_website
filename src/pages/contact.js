import React, {Component} from 'react'
import {useStaticQuery, graphql} from 'gatsby'

import Layout from "../components/layout";

class AboutPage extends Component{

    render(){
        return(
            <Layout>
                <h1> For any inquiries or job opportunities, please email hammer.consulting.mn@gmail.com </h1>
            </Layout>
        )
    }
}

export default AboutPage;