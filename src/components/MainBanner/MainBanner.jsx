import React, {Component} from 'react'
import {Grid} from '@material-ui/core'
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"

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
                            <p className={styles.bannerText}>This is our motto!</p>
                        </Grid>
                </Grid>
            </div>
        )
    }
}

export default MainBanner