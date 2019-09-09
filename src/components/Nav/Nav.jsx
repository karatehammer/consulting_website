import {Link} from 'gatsby';
import React, {Component} from 'react';
import {Grid, List, ListItem, Typography, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import styles from './Nav.module.css';

class Nav extends Component{
    
    smallScreen = window.innerWidth <= 850;

    toggleMenu = () => {
        console.log('doing a thing');
    }

    conditionalNav = () => {
        if(this.smallScreen){
            console.log('screen size: ', window.innerWidth);
           return (
               <IconButton aria-label="Menu" onClick={this.toggleMenu}>
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
            )
        }
        else{
            return (  
                <>              
                    <Link
                        to="/about"
                        className={styles.headerLinks}
                    >
                        Our Team
                    </Link>
                    <Link
                        to="/about"
                        className={styles.headerLinks}
                    >
                        Philosophy
                    </Link>
                    <Link
                        to="/contact"
                        className={styles.headerLinks}
                    >
                        Contact Us
                    </Link>                
                </>
            )
        }
    }
    
    render(){
        return(
            <>                
                {this.conditionalNav()}                
            </>            
        )
    }
}

export default Nav