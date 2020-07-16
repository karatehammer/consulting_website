import React, { Component } from 'react'
import styles from './Contact.module.css'
import { Grid } from '@material-ui/core'

export class Contact extends Component {
    render() {
        return (
            <Grid className={styles.textBox}>
                <h1> For inquiries or job opportunities, please email:</h1>
                <h1> <a href="mailto:hammer.consulting.mn@gmail.com">hammer.consulting.mn@gmail.com</a> </h1>
            </Grid>
        )
    }
}

export default Contact

