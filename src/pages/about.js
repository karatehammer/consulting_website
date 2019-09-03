import React, {Component} from 'react'
import {useStaticQuery, graphql} from 'gatsby'

import Layout from "../components/layout";
import AboutSchpeel from '../components/AboutSchpeel/AboutSchpeel';
import AboutSpecialties from '../components/AboutSpecialties/AboutSpecialties';

class AboutPage extends Component{

    render(){
        return(
            <Layout>
                <AboutSchpeel />
                <AboutSpecialties />
            </Layout>
        )
    }
}

export default AboutPage;