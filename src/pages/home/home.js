import { Divider } from '@material-ui/core';
import React, { useEffect, useState } from 'react'; 
import Header from '../../components/header/Header';
import NewTweet from './components/newTweet';
import TweetList from './components/TweetList';
import useStyles from './style';
import HomeIcon from '@material-ui/icons/Home';
import axios from 'axios';
import { getAllTweet } from '../../api/apiTweet';


const Home = () => {

    const classes = useStyles();

    const [tweet, setTweet] = useState("");

    // const tweet = [
    //     // {
    //     //     sender:{
    //     //         name: "Xiaomi",
    //     //         id: "@xiaomi",
    //     //         img: "images/xiaomi.png"
    //     //     },
    //     //     text:"farhad"
    //     // },
    //     // {
    //     //     sender:{
    //     //         name: "فرهاد ربیعی",
    //     //         id: "@farhad",
    //     //         img: "images/koooh_user.png"
    //     //     },
    //     //     text:"#farhad"
    //     // },
    //     // {
    //     //     sender:{
    //     //         name: "Xiaomi",
    //     //         id: "@xiaomi",
    //     //         img: "images/xiaomi.png"
    //     //     },
    //     //     text:"farhad"
    //     // },
    //     // {
    //     //     sender:{
    //     //         name: "فرهاد ربیعی",
    //     //         id: "@farhad",
    //     //         img: "images/koooh_user.png"
    //     //     },
    //     //     text:"farhad"
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
            <Header title={"خانه"} icon={<HomeIcon/>}/>
            <Divider className={classes.divider}/>
            <NewTweet/>
            <TweetList data={tweet}/>
        </div>
     );
}
 
export default Home;