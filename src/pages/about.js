import React, {Component} from 'react'
import {useStaticQuery, graphql} from 'gatsby'

import Layout from "../components/layout";
import AboutSchpeel from '../components/AboutSchpeel/AboutSchpeel';
import AboutSpecialties from '../components/AboutSpecialties/AboutSpecialties';
import OurTeamPics from '../components/OurTeamPics/OurTeamPics'

class AboutPage extends Component{

    render(){
        return(
            <Layout>
                <AboutSchpeel />
                <AboutSpecialties />
                <OurTeamPics />
            </Layout>
        )
    }
}

export default AboutPage;