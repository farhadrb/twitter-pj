import React from 'react';
import farhad from './header.module.css'

import { Typography } from '@material-ui/core';
import useStyles from './style';

const Header = ({title,icon}) => {

    const classes = useStyles()
    return ( 
        <div className={farhad.header}>
            {icon}
            <Typography className={classes.headerTitle}>
                {title}
            </Typography>
        </div>
     );
}
 
export default Header;