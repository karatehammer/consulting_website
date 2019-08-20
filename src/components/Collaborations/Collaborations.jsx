import React, {Component} from 'react'
import {Grid} from '@material-ui/core'

import styles from './Collaborations.module.css'

class Collaborations extends Component{

    render(){
        return(
            <div className={styles.collabDiv}>
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={10} sm={10} md={10}>

                        <Grid item xs={12} sm={12} md={12}>
                            <h1 className={styles.collabHeader}>Here be the collaborations</h1>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <p className={styles.collabDescription}>
                                Here are some of the companies we've worked with in the past.
                            </p>
                        </Grid>

                    </Grid>                    
                </Grid>                
            </div>
        )
    }
}

export default Collaborations