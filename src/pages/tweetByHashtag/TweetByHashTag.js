import { Divider } from '@material-ui/core';
import React, { useEffect, useLayoutEffect, useState } from 'react'; 
import { getAllTweet, getHashtags } from '../../api/apiTweet';
import Header from '../../components/header/Header';
import TweetList from '../home/components/TweetList';
import useStyles from '../home/style';

const TweetByHashTag = (props) => {

    const classes = useStyles();

    const [tweet, setTweet] = useState("");
    // const tweet = [
    //     // {
    //     //     sender:{
    //     //         name: "Xiaomi",
    //     //         id: "@xiaomi",
    //     //         img: "/images/xiaomi.png"
    //     //     },
    //     //     text:"adfwsvfwsrvwervwrfwrfwrfwrdvesrd"
    //     // },
    //     // {
    //     //     sender:{
    //     //         name: "فرهاد ربیعی",
    //     //         id: "@farhad",
    //     //         img: "/images/koooh_user.png"
    //     //     },
    //     //     text:"adfwsvfwsrvwervwrfwrfwrfwrdvesrd"
    //     // },
    //     // {
    //     //     sender:{
    //     //         name: "Xiaomi",
    //     //         id: "@xiaomi",
    //     //         img: "/images/xiaomi.png"
    //     //     },
    //     //     text:"adfwsvfwsrvwervwrfwrfwrfwrdvesrd"
    //     // },
    //     // {
    //     //     sender:{
    //     //         name: "فرهاد ربیعی",
    //     //         id: "@farhad",
    //     //         img: "/images/koooh_user.png"
    //     //     },
    //     //     text:"adfwsvfwsrvwervwrfwrfwrfwrdvesrd"
    //     // },
    // ]

    useEffect(() => {
        getAllTweet((isok,data)=>{
            if(!isok){
                return alert(data.message)
            }else{
                setTweet(data)
            }
        })
    }, []);

    return ( 
        <div className={classes.root}>
                        {console.log(props.match.params.hashtag)}

            <Header title={props.match.params.hashtag} icon={<img src={"/images/hashtag.png"}/>}/>
            <Divider className={classes.divider}/>
            <TweetList data={tweet}/>
        </div>
     );
}
 
export default TweetByHashTag;