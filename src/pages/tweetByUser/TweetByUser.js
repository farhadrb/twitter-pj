import { Divider } from '@material-ui/core';
import React, { useEffect, useState } from 'react'; 
import TweetList from '../home/components/TweetList';
import useStyles from '../home/style';
import PersonIcon from '@material-ui/icons/Person';
import Header from '../../components/header/Header';
import { withRouter } from 'react-router-dom';
import { getAllTweet, getUsers } from '../../api/apiTweet';

const TweetByUser = (props) => {

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
            {console.log(props)}
            <Header title={props.match.params.users} icon={<PersonIcon/>}/>
            <Divider className={classes.divider}/>
            <TweetList data={tweet}/>
        </div>
     );
}
 
export default withRouter(TweetByUser);