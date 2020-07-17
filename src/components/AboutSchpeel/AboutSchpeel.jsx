import React, { Component } from 'react'
import { Grid } from '@material-ui/core'

import styles from './AboutSchpeel.module.css';

class AboutSchpeel extends Component {

    render() {
        return (
            <div className={styles.schpeelDaddy}>
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={10} sm={10} md={10}>
                        <h2 className={styles.schpeelHeader}>
                            HammerQA has more than 15 years of Quality Engineering experience
                        </h2>
                        {/* <p className={styles.schpeelText}>
                            Here at HammerQA, we're always looking for a new challenge. </p>

                        <p className={styles.schpeelText}>We help business of all sizes,
                            from Enterprise to small startups. </p>

                        <p className={styles.schpeelText}>We're always looking to connect with great teams and tech leaders
                        for new exciting opportunities.
                        </p> */}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default AboutSchpeel