
import { Divider } from '@material-ui/core';
import React from 'react';
import LeftSidebar from '../leftSideBar/leftSideBar';
import RightSideBar from '../rightSideBar/rightSideBar';
import useStyles from "./style";




const Layout = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <RightSideBar />
            <Divider orientation={"vertical"} className={classes.divider} />
            <div className={classes.content}>
            {props.children}
                {/* <TweetByHashTag/> */}
                {/* <TweetByUser/> */}
            </div>
            <Divider orientation={"vertical"} className={classes.divider} />
            <LeftSidebar />
        </div>
    );
}

export default Layout;