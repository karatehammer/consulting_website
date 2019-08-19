import React, {Component} from 'react';
import {Grid} from '@material-ui/core';

import styles from './Footer.module.css';

class Footer extends Component{

    render(){
        return(
            <div className={styles.siteFooter}>
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={9} sm={9}>
                        <p className={styles.footerText}>
                            © {new Date().getFullYear()} Hammer Software
                        </p>                        
                    </Grid>
                </Grid>                
            </div>            
        )
    }
}

export default Footer