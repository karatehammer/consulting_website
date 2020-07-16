import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core'

import styles from './MainBanner.module.css'

class MainBanner extends Component {

    render() {
        return (
            <div className={styles.mainBanner}>
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={12} sm={12}>
                        <h2 className={styles.bannerHeader}>When you have HammerQA, all of your code challenges turn into nails.</h2>
                    </Grid>
                </Grid>

            </div>
        )
    }
}

export default MainBanner