import React, {Component} from 'react'
import {Grid} from '@material-ui/core'

import styles from './Collaborations.module.css'

import ThomsonReuters from '../../images/ThomsonReuters_400x400.jpg';
import LeadPages from '../../images/leadpages-icon.jpg';
import BrightPeak from '../../images/brightpeak-icon.png';
import BIWorldwide from '../../images/BI-Worldwide_400x400.jpg';

class Collaborations extends Component{

    render(){
        return(
            <div className={styles.collabDiv}>
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={10} sm={10} md={10}>

                        <Grid item xs={12} sm={12} md={12}>
                            <h1 className={styles.collabHeader}>We've proudly worked for the following clients</h1>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <p className={styles.collabDescription}>
                                We'd like to add you to this list.
                            </p>
                        </Grid>
                        
                        <Grid item xs={12} sm={12} md={12}>
                            <Grid item xs={12} sm={3} md={3} className={styles.imgContainer}>
                                <img
                                    src={ThomsonReuters}
                                    alt="Thomson Reuters"
                                    className={styles.imgFluid}
                                />
                            </Grid>                             

                            <Grid item xs={12} sm={3} md={3} className={styles.imgContainer}>
                                <img
                                    src={LeadPages}
                                    alt="Lead Pages"
                                    className={styles.imgFluid}
                                />
                            </Grid>

                            <Grid item xs={12} sm={3} md={3} className={styles.imgContainer}>
                                <img
                                    src={BrightPeak}
                                    alt="Bright Peak Financial"
                                    className={styles.imgFluid}
                                />
                            </Grid>

                            <Grid item xs={12} sm={3} md={3} className={styles.imgContainer}>
                                <img
                                    src={BIWorldwide}
                                    alt="BI Worldwide"
                                    className={styles.imgFluid}
                                />
                            </Grid>
                        </Grid>
                    </Grid>                    
                </Grid>                
            </div>
        )
    }
}

export default Collaborations