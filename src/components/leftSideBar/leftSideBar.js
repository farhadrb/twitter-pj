import { ButtonBase, Divider, Grid, Typography } from '@material-ui/core';
import React, { Fragment, useState,useEffect} from 'react';
import { Link, withRouter } from 'react-router-dom';
import useStyles from './style';
import { getUsers } from "../../api/apiTweet";


const Twetter = ({ name, id, img }) => {

    const classes = useStyles()
    return <ButtonBase>
        <Grid container alignItems={'center'} direction={'row-reverse'} style={{ direction: 'ltr', marginBottom: '1rem' }}>
            <img src={img} style={{ width: 'max-content' }} />
            <Grid item container direction={'column'} className={classes.twetterParentName}>
                <Typography className={classes.profName}>{name}</Typography>
                <Typography className={classes.profId}>{id}</Typography>
            </Grid>
        </Grid>
    </ButtonBase>
}



const tweeter = [
    {
        name: "Xiaomi",
        id: "@xiaomi",
        img: "/images/xiaomi.png"
    },
    {
        name: "samsung",
        id: "@samsung",
        img: "/images/samsung.png"
    },
    {
        name: "بیل گیتس",
        id: "@BillGates",
        img: "/images/bil.png"
    },
    {
        name: "مایک بای",
        id: "@mMike-IMC",
        img: "/images/mike.png"
    },
    {
        name: "اشرلی ونگ",
        id: "@ُShilrey-iMC",
        img: "/images/shily.png"
    }
]

const LeftSidebar = () => {

    const classes = useStyles()


    const [user, setUser] = useState("");

    useEffect(() => {
        getUsers((isok,data)=>{
            if(!isok){
                return alert(data.message)
            }else{
                setUser(data)
            }
        })
    }, []);
    


    return (
        <div className={classes.root}>
            <Grid container alignItems={'center'} direction={'row-reverse'}>
                <img src={"/images/user img.png"} style={{ width: 'max-content' }} />
                <Grid item container direction={'column'} className={classes.proftext}>
                    <Typography className={classes.profName}><Link to={'/user'}>فرهاد ربیعی</Link></Typography>
                    <Typography className={classes.profId}>farhad.rabiee</Typography>
                </Grid>
            </Grid>
            <Grid item container direction={'column'} className={classes.twitterRoot}>
                <Typography className={classes.twitterTittle}>بهترین خبرنگاران</Typography>
                <Divider style={{ marginLeft: -24, marginRight: -24, marginBottom: '1rem' }} />
                {
                    tweeter.map((item, index) => {
                        return (
                        
                                <Link to={'/users/'+item.name}>
                                    <Twetter name={item.name} id={item.id} img={item.img} />
                                    {index !== tweeter.length - 1 &&
                                        <Divider style={{ marginLeft: -24, marginRight: -24, marginBottom: '1rem' }} />}
                                </Link>
                        )
                    })
                }
            </Grid>
        </div>
    );
}

export default withRouter(LeftSidebar);

