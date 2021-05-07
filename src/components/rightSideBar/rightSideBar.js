import { ButtonBase, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getHashtags } from '../../api/apiTweet';
import useStyles from "./style";


const RightSideBar = () => {

    const classes = useStyles();

    const [hashtags, setHashtag] = useState(["farhad","farzin"]);
    // 
    useEffect(() => {
        getHashtags((isok,data)=>{
            if(!isok){
                return alert(data.message)
            }else{
                setHashtag(data)
            }
        })
    }, []);


    return (
        <div className={classes.root}>
            <Link to={'/'}>
                <Grid container direction={"row"} className={classes.grid} alignItems={'center'}>
                    <Grid item>
                        <img src={"/images/logo.png"} />
                    </Grid>
                    <Grid item>
                        <Typography className={classes.logoType}>
                            توییتر فارسی
                    </Typography>
                    </Grid>
                </Grid>
            </Link>
            <Typography className={classes.hashtagTitle}>
                داغ ترین هشتگ ها
            </Typography>
            <Grid container direction={"column"} className={classes.title}>
                {hashtags.map(item => <ButtonBase className={classes.hp}>
                    <Link to={'/hashtag/'+item} style={{width:'100%'}}>
                        <Grid item container alignItems={'center'}>
                            <img src={"/images/hashtag.png"} />
                            <Typography className={classes.hashtag}>
                                {item}
                            </Typography>
                        </Grid>
                    </Link>
                </ButtonBase>)}


            </Grid>
        </div>
    );
}

export default RightSideBar;