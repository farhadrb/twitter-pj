import { Button, Grid, IconButton } from '@material-ui/core';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { newTweetRec } from '../../../api/apiTweet';
import useStyles from '../style';

const NewTweet = () => {
    const classes = useStyles();

    // const hashtag = e=>{
    //      const hashtag = e.target.value;
    //      if(hashtag.includes('#')){
            
    //      }
    
    // }






    //  const input = useRef();

    //  const [tweet, settweet] = useState()

    // //  settweet({__html:"text"})
    // const rendertweet = (text)=>{
    //     return {__html: text.replace(/#\S+/g,"<span style='color:blue'>$&</span>")}
    // }
    //  useEffect(() => {
    //      input.current.addEventListener("input",function(e){
    //          settweet(rendertweet(e.target.innerHTML))
    //          window.cursorManager.setEndOfContenteditable(e.target);
    //      },false)
    //  }, []);

    newTweetRec((isok)=>{
        if(!isok){
            return alert("ok")
        }else{
            return alert("no")
        }
    })

    return (
        <div className={classes.NewTweet}>
            <Grid container>
                <img src={"images/user img.png"} />
                <div contentEditable className={classNames(classes.textarea,"editable")} data-placeholder={"توییت کن..."}/>
                {/* <textarea className={classes.textarea} placeholder={"edit me"} onChange={event=>hashtag(event)}/> */}
            </Grid>
            <Grid container direction={"row-reverse"} style={{ marginTop: 16 }}>
                <Button variant={"contained"} color={"primary"} className={classes.newtweetbtn}>توییت</Button>
                <IconButton className={classes.newTweetimgBtn}>
                    <img src={"images/tweetpic.png"}/>
                </IconButton>
            </Grid>
        </div>
    );
}

export default NewTweet;