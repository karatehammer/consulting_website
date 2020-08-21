import React, { Component } from 'react'

import Layout from "../components/layout";
import AboutSchpeel from '../components/AboutSchpeel/AboutSchpeel';
import AboutSpecialties from '../components/AboutSpecialties/AboutSpecialties';

export class About extends Component {
    render() {
        return (
            <Layout>
                <AboutSchpeel />
                <AboutSpecialties />
            </Layout>
        )
    }
}

export default About
