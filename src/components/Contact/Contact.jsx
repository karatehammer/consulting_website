import React, { Component } from 'react'
import styles from './Contact.module.css'
import { Grid } from '@material-ui/core'

export class Contact extends Component {
    render() {
        return (
            <div>
                <Grid className={styles.mainBanner}>
                    <Grid item xs={12} sm={12}>
                        <h1 className={styles.contactHeader}>Are you ready to take your project all the way?</h1>
                        {/* When you choose Hammer, all of your code challenges turn into nails. */}
                    </Grid>
                </Grid>
            <Grid className={styles.textBox}>
                <h1> To put HammerQA into your companies tool kit, please email:</h1>
                <h1> <a href="mailto:hammer.consulting.mn@gmail.com">hammer.consulting.mn@gmail.com</a> </h1>
            </Grid>
            </div>
        )
    }
}

export default Contact

