import React, { Component } from 'react'
import { Grid } from '@material-ui/core'

import styles from './MainBanner.module.css'

class MainBanner extends Component {

    render() {
        return (
            <div className={styles.mainBanner}>
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={12} sm={12} className={styles.textBox}>
                        <h2 className={styles.bannerHeader}>When you get a Hammer, all of your code challenges turn into nails.</h2>
                    </Grid>
                    <Grid item xs={12} sm={12} className={styles.textBox}>
                        <p className={styles.bannerText}>
                            HammerQA has spent the past 15 years building automated testing frameworks for various clients.</p>

                        <p className={styles.bannerText}>Whether your business is global or just starting up.  HammerQA can provide guidance and testing expertise
                            for your organization.  </p>

                        <p className={styles.bannerText}>We have a proven track record of building great software and testing frameworks.</p>

                        <p className={styles.bannerText}>When you work with HammerQA, you get decisive, efficient, and proven testing quality across your SDLC.
                            </p>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default MainBanner