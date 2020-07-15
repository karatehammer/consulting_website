import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {Component} from "react"
import {Grid} from '@material-ui/core'

import styles from './Header.module.css'

import Nav from '../Nav/Nav';

class Header extends Component{

  render(){
    return(      
      <Grid container justify="space-between" className={styles.headerDaddy}>
        <Grid item xs={9} sm={7} m={5} className={styles.titleDaddy}>
          {/* use site title to link to home screen */}
          <Link to="/"><h1 className={styles.headerTitle}>{this.props.siteTitle}</h1></Link>
        </Grid>
        <Grid item xs={3} sm={5} m={5} className={styles.linkDaddy}>
          <Nav />
          {/* <Link 
            to="/about"
            className={styles.headerLinks}
          >
            About
          </Link>
          <Link
            to="/about"
            className={styles.headerLinks}
          >
            Another
          </Link>  */}
        </Grid>
        <Grid item xs={0} sm={0} md={1}></Grid>
      </Grid>      
    )
  }
}

// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>

//         <Link
//          to="/about"
//         >
//           about
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
