import React, {Component} from 'react'
import {Grid} from '@material-ui/core';

import styles from './OurTeamPics.module.css';

import NickHammer from '../../images/NickHammer.jpeg';
import ToddHammer from '../../images/ToddHammer.jpeg';
import StefenMenzel from '../../images/Stefen Menzel.jpg';

class OurTeamPics extends Component{

    render(){
        return (
          <Grid
            container
            justify="center"
            alignContent="center"
            className={styles.teamPicsContainer}
          >
            <Grid
              item
              xs={10}
              sm={10}
              md={10}
              className={styles.leadershipHeader}
            >
              <h2 className={styles.headerText}>Meet the team</h2>
            </Grid>
            <Grid item xs={10} sm={10} md={10} className={styles.picDiv}>
              <Grid item xs={5} sm={5} md={5} className={styles.picContainer}>
                <img
                  src={NickHammer}
                  alt="Nick Hammer"
                  className={styles.ourTeamPic}
                />
                <h4 className={styles.picLabel}>
                  Nick Hammer
                  <span className={styles.picDesc}>Owner/Lead Developer</span>
                </h4>
              </Grid>
            </Grid>

            <Grid item xs={10} sm={10} md={10}>
              <h2 className={styles.headerText}>Our Team</h2>
            </Grid>
            <Grid item xs={10} sm={10} md={10} className={styles.picDiv}>
              <Grid item xs={1} sm={1} md={1}></Grid>
              <Grid item xs={5} sm={5} md={5}>
                <img
                  src={ToddHammer}
                  alt="Todd Hammer"
                  className={styles.ourTeamPic}
                />
                <h4 className={styles.picLabel}>
                  Todd Hammer
                  <span className={styles.picDesc}>IT Specialist</span>
                </h4>
              </Grid>
              <Grid item xs={1} sm={1} md={1}></Grid>
              <Grid item xs={5} sm={5} md={5}>
                <img
                  src={StefenMenzel}
                  alt="Stefen Menzel"
                  className={styles.ourTeamPic}
                />
                <h4 className={styles.picLabel}>
                  Stefen Menzel
                  <span className={styles.picDesc}>Web Designer</span>
                </h4>
              </Grid>
            </Grid>
          </Grid>
        )
    }
}

export default OurTeamPics;