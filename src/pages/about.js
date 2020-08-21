import React, {Component} from 'react'
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