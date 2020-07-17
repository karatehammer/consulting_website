import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core'

import styles from './MainBanner.module.css'

class MainBanner extends Component {

    render() {
        return (
            <div className={styles.mainBanner}>
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={12} sm={12}>
                        <h2 className={styles.bannerHeader}>At HammerQA your code challenges become our nails.</h2>
                         {/* When you choose Hammer, all of your code challenges turn into nails. */}
                    </Grid>
                </Grid>

            </div>
        )
    }
}

export default MainBanner