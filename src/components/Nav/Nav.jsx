import {Link} from 'gatsby';
import React, {Component} from 'react';
import {Grid, List, ListItem, Typography, Menu, MenuItem, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import styles from './Nav.module.css';

class Nav extends Component {
  state = {
    anchorEl: null,
    smallScreen: false
  }

  componentDidMount() {
    this.updateNav()
    window.addEventListener("resize", this.updateNav)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateNav)
  }

  updateNav = () => {
      this.setState({
          ...this.state,
          smallScreen : window.innerWidth <= 850
      })
  }  

  toggleMenu = event => {
    this.setState({
      ...this.state,
      anchorEl: event.currentTarget,
    })
  }

  handleClose = () => {
    this.setState({
      ...this.state,
      anchorEl: null,
    })
  }

  conditionalNav = () => {
    if (this.state.smallScreen) {
      console.log("screen size: ", window.innerWidth)
      return (
        <>
          <IconButton
            alignItems="flex-end"
            className={styles.menuButton}
            aria-label="Menu"
            onClick={this.toggleMenu}
          >
            <MenuIcon />
            {/* <List>
                        <ListItem component={Link} to="/about" button>
                            <MenuIcon />
                        </ListItem>
                        <ListItem component={Link} to="/about" button>
                            <Typography variant="p" className={styles.headerLinks}>About</Typography>
                        </ListItem>
                        <ListItem component={Link} to="/about" button>
                            <Typography variant="p" className={styles.headerLinks}>Another</Typography>
                        </ListItem>
                    </List> */}
          </IconButton>
          <Menu
            anchorEl={this.state.anchorEl}
            keepMounted
            open={Boolean(this.state.anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>
              <Link to="/about" className={styles.menuLinks}>
                Our Team
              </Link>
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              <Link to="/about" className={styles.menuLinks}>
                Philosophy
              </Link>
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              <Link to="/about" className={styles.menuLinks}>
                Contact Us
              </Link>
            </MenuItem>
          </Menu>
        </>
      )
    } else {
      return (
        <Grid container justify="center" className={styles.navGrid}>
          <Grid item xs={4} className={styles.navItem}>
            <Link to="/about" className={styles.headerLinks}>
              Our Team
            </Link>
          </Grid>
          <Grid item xs={4} className={styles.navItem}>
            <Link to="/about" className={styles.headerLinks}>
              Philosophy
            </Link>
          </Grid>
          <Grid item xs={4} className={styles.navItem}>
            <Link to="/contact" className={styles.headerLinks}>
              Contact Us
            </Link>
          </Grid>
        </Grid>
      )
    }
  }

  render() {
    return <>{this.conditionalNav()}</>
  }
}

export default Nav