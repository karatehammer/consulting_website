import React, {Component} from 'react'
import Layout from "../components/layout";
import OurTeamPics from '../components/OurTeamPics/OurTeamPics'

class Team extends Component{

    render(){
        return(
            <Layout>
                <OurTeamPics />
            </Layout>
        )
    }
}

export default Team;