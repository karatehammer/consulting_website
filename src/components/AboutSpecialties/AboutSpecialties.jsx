import React, { Component } from 'react'
import { Grid } from '@material-ui/core'

import styles from './AboutSpecialties.module.css';

class AboutSpecialties extends Component {

    render() {
        return (
            <div className={styles.specialtiesDiv}>
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={10} sm={10} md={10}>
                        <Grid item xs={12} sm={12} md={12}>
                            <div className={styles.specialtiesDescription}>
                                <h1 className={styles.specialtiesHeader}>
                                    Here at HammerQA, we're always looking for a new challenge. </h1>
                                <p className={styles.specialtiesText}>
                                    Our passion for Quality helps teams and tech leaders manifest their visions.</p>
                                <p className={styles.specialtiesText}>
                                    We help businesses of all sizes, from Enterprise to startups. </p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <h1 className={styles.specialtiesHeader}>We specialize in the following services</h1>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <ul className={styles.specialtiesDescription}>
                                <li>Quality Assurance</li>
                                <li>Quality Engineering</li>
                                <li>Web Application Testing</li>
                                <li>Mobile Application Testing</li>
                                <li>User Experience Testing</li>
                                <li>Usability Testing</li>
                                <li>Software Disaster Recovery</li>
                                <li>Project Management</li>
                            </ul>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default AboutSpecialties