import { Button, Grid, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../style';
import FavoriteIcon from '@material-ui/icons/Favorite';


const Tweet = ({data}) => {

    const classes = useStyles();
    const {sender} = data



    const rendertweet = (text)=>{
        return {__html: text.replace(/#\S+/g,"<a href='/tags/farzin' style='color:blue'>$&</a>")}
    }
    return (
        <div className={classes.tweetItem}>
            <Grid container>
                <img src={sender.img} />
                <Typography className={classes.tweetItemName}>{sender.name}</Typography>
                <Typography className={classes.tweetItemId}>{sender.id}</Typography>
            </Grid>
            <Typography dangerouslySetInnerHTML={rendertweet(data.text)} style={{padding:'0 70px',fontSize:'.9rem'}} component={"p"}/>
                
            <Grid container direction={"row-reverse"} style={{ marginTop: 16 }} alignItems={'center'}>
                <IconButton className={classes.newTweetimgBtn}>
                    <img src={"/images/retweet.png"} />
                </IconButton>
                <IconButton className={classes.newTweetimgBtn}>
                    <FavoriteIcon/>
                </IconButton>
                <Typography style={{marginLeft:'.5rem'}}>16</Typography>
            </Grid>
        </div>
    );
}

export default Tweet;