import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {Component} from "react"
import {Grid} from '@material-ui/core'

import styles from './Header.module.css'

import Nav from '../Nav/Nav';

class Header extends Component{

  // The Header houses the Nav and the company name which can be edited in the file gatsby-config.js by changing the siteMetadata.title
  
  render(){
    return(      
      <Grid container justify="space-between" className={styles.headerDaddy}>
        <Grid item xs={9} sm={7} m={5} className={styles.titleDaddy}>
          <Link to="/"><h1 className={styles.headerTitle}>{this.props.siteTitle}</h1></Link>
        </Grid>
        <Grid item xs={3} sm={5} m={5} className={styles.linkDaddy}>
          <Nav />
        </Grid>
        <Grid item xs={0} sm={0} md={1}></Grid>
      </Grid>      
    )
  }
}

export default Header
