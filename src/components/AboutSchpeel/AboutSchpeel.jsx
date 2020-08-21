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
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default AboutSchpeel