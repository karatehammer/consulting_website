import React, {Component} from 'react'
import {useStaticQuery, graphql} from 'gatsby'

import Layout from "../components/layout";
import AboutSchpeel from '../components/AboutSchpeel/AboutSchpeel';

class AboutPage extends Component{

    render(){
        return(
            <Layout>
                <AboutSchpeel />
            </Layout>
        )
    }
}

export default AboutPage;