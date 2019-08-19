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
                            <img
                                src={forbes}
                                alt="accolade1"
                                className={styles.imgFluid}
                            />
                            <img
                                src={forbes}
                                alt="accolade2"
                                className={styles.imgFluid}
                            />                            
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <h2 className={styles.bannerHeader}>When all you have is a hammer, all code challenges are nails.</h2>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <p className={styles.bannerText}>
                                Our expert developers make all the best code type stuff. We are definitely
                                the best you've ever worked with. Several definitely credible publications have listed
                                us the best of the best. We have a proven track record of making all the best stuff.
                                When you work with HammerSoft, it's hammertime!
                            </p>                            
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <div className={styles.linkContainer}>
                                <Link className={styles.linkButton}>A Page</Link>
                                <Link className={styles.linkButton}>Another Page</Link>
                                <Link className={styles.linkButton}>A Third Page</Link>
                            </div>                            
                        </Grid>
                </Grid>
            </div>
        )
    }
}

export default MainBanner