import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {Component} from "react"
import {Grid} from '@material-ui/core'

import styles from './Header.module.css'

import Nav from '../Nav/Nav';

class Header extends Component{

  render(){
    return(      
      <Grid container justify="center" className={styles.headerDaddy}>
        <Grid item xs={10} sm={8} m={6} className={styles.titleDaddy}>
          <h1 className={styles.headerTitle}>{this.props.siteTitle}</h1>
        </Grid>
        <Grid item xs={2} sm={4} m={6} className={styles.linkDaddy}>
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
