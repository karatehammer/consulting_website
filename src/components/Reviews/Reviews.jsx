import React, {Component} from 'react'
import {Grid} from '@material-ui/core'
import {Link} from 'gatsby'

import styles from './Reviews.module.css'

class Reviews extends Component{

    render(){
        return(
            <div className={styles.reviewDiv}>
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={10} sm={10} md={10} className={styles.reviewContent}>

                        <Grid item xs={12} sm={12} md={12}>
                            <h1 className={styles.reviewHeader}>Client Reviews</h1>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <p className={styles.reviewText}>
                                "My experience working with Hammer Software was stellar. They answered all my
                                questions throughout the process and were very nice. I'll definitely be working
                                with Hammer Software again in the future!"
                            </p>
                            <h4 className={styles.reviewGiver}>
                                Stefen Menzel - Web Developer | August 2019
                                <span className={styles.reviewUppercase}>Application Development</span>
                            </h4>
                        </Grid>
                        {/* <Grid item xs={12} sm={12} md={12}>
                            <p className={styles.reviewText}>
                                "We had an excellent experience working with Hammer Software, especially when we changed
                                everything last minute and made everything much more complicated. Hammer Software was patient
                                with all our changes and offered guidance and wisdom throughout the project. I'd recommend
                                working with Hammer Software again in the future."
                            </p>
                            <h4 className={styles.reviewGiver}>
                                President...THE president - Dog Hotel Company | September 2019
                                <span className={styles.reviewUppercase}>Dev Ops</span>
                            </h4>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <Link className={styles.linkButton}>View More</Link>
                        </Grid> */}

                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Reviews