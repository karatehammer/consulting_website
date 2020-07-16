import React, {Component} from 'react'
import {useStaticQuery, graphql} from 'gatsby'

import Layout from "../components/layout";
import OurTeamPics from '../components/OurTeamPics/OurTeamPics'

class AboutPage extends Component{

    render(){
        return(
            <Layout>
                <OurTeamPics />
            </Layout>
        )
    }
}

export default AboutPage;