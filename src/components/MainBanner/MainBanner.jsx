import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core'

import styles from './MainBanner.module.css'

class MainBanner extends Component {

    render() {
        return (
            <div className={styles.mainBanner}>
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={12} sm={12}>
                        <h1 className={styles.bannerHeader}>At HammerQA we understand your Quality needs and nail them.</h1>
                         {/* When you choose Hammer, all of your code challenges turn into nails. */}
                    </Grid>
                </Grid>

            </div>
        )
    }
}

export default MainBanner