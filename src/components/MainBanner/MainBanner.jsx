import React, {Component} from 'react'
import {Grid} from '@material-ui/core'
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"
import {Link} from "gatsby"

import forbes from '../../images/forbes_white.png';

import styles from './MainBanner.module.css'

class MainBanner extends Component{
    
    render(){
        return(
            <div className={styles.mainBanner}>
                <Grid container justify="center" alignItems="center">
                        <Grid item xs={12} sm={12} className={styles.accolades}>
                            {/* <img
                                src={forbes}
                                alt="accolade1"
                                className={styles.imgFluid}
                            />
                            <img
                                src={forbes}
                                alt="accolade2"
                                className={styles.imgFluid}
                            />                             */}
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <h2 className={styles.bannerHeader}>When you get a Hammer, all of your code challenges turn into nails.</h2>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <p className={styles.bannerText}>
                                HammerQA has spent the past 15 years building automated testing frameworks for various clients.
                                Whether your business is global or just starting up.  HammerQA can provide guidance and testing expertise 
                                for your organization.  We have a proven track record of building great software and testing frameworks.
                                When you work with HammerQA, you get decisive, efficient, and proven testing quality across your SDLC.
                            </p>                            
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <div className={styles.linkContainer}>
                                {/* <Link className={styles.linkButton}>A Page</Link>
                                <Link className={styles.linkButton}>Another Page</Link>
                                <Link className={styles.linkButton}>A Third Page</Link> */}
                            </div>                            
                        </Grid>
                </Grid>
            </div>
        )
    }
}

export default MainBanner