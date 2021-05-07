import { Button, Input, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import useStyles from './style';
import { loginApi } from "../../api/api_auth";
import { regiApi } from "../../api/api_auth";



const LOG_TAB_VALUE = 1
const REG_TAB_VALUE = 2

const AuthPage = () => {

    const classes = useStyles()

    const [tab, settab] = useState(LOG_TAB_VALUE);

    // login
    const [userNameLOgin, setuserNameLogin] = useState();
    const [passwordLOgin, setpasswordLogin] = useState();
    // register
    const [fullNameRegi, setfullNameRegi] = useState();
    const [userNameRegi, setuserNameRegi] = useState();
    const [passwordRegi, setpasswordRegi] = useState();
    const [confpasswordRegi, setconfpasswordRegi] = useState();


    const hanldeChangeTab = (e, newValue) => {
        settab(newValue)
    }

    const handlelogin = () => {
        const user = {
            username: userNameLOgin,
            password: passwordLOgin
        }
        const error = validatLogin(user)
        if (error) {
            return toast.warn(error)
        }
        console.log(user)
        loginApi(user, (isok, data) => {
            if (!isok)
                return toast.error(data)
            toast.success("کاربر با موفقیت وارد شد")    
            localStorage.setItem("name",data.name)
            localStorage.setItem("image",data.image)
            localStorage.setItem("usernamd",data.username)
            localStorage.setItem("x-auth-token",data["x-auth-token"])
        })
    }

    const validatLogin = (user) => {
        if (!user.username) {
            return ("باید یوزر نیم را وارد کنید")
        }
        if (!user.password) {
            return ("باید پسورد را وارد کنید")
        }
    }
    const validateRegi = (user) => {
        if (!user.username) {
            return ("باید یوزر نیم را وارد کنید")
        }
        if (!user.name) {
            return ("باید  نام خود را وارد کنید")
        }
        if (!user.password) {
            return ("باید پسورد را وارد کنید")
        }
        if (user.password!==user.confpassword) {
            return ("رمزها باید مشابه باشند")
        }
    }



    const handleRegister = ()=>{
        const user={
            name:fullNameRegi,
            username:userNameRegi,
            password:passwordRegi,
            confpassword:confpasswordRegi
        }
        const error = validateRegi(user)
        if(error){
            return toast.warn(error)
        }
        user.confpassword = undefined
        regiApi(user,(isok,data)=>{
            if(!isok){
                return toast.error(data)
            }
        })
    }




    return (
        <Paper className={classes.container}>
            <Typography className={classes.headerText}>
                welcome
            </Typography>
            <Tabs
                value={tab}
                indicatorColor="primary"
                textColor="primary"
                onChange={hanldeChangeTab}
                aria-label="disabled tabs example"
            >
                <Tab label="ورود" value={LOG_TAB_VALUE} className={classes.tab} />
                <Tab label="ثبت نام" value={REG_TAB_VALUE} className={classes.tab} />
            </Tabs>
            {tab === LOG_TAB_VALUE &&
                <div className={classes.containerInput}>
                    <Typography>نام کاربری</Typography>
                    <Input value={userNameLOgin} onChange={e => setuserNameLogin(e.target.value)}></Input>
                    <Typography>رمز عبور</Typography>
                    <Input value={passwordLOgin} onChange={e => setpasswordLogin(e.target.value)}></Input>
                    <Button variant={"contained"} color={"primary"} style={{ fontFamily: 'shabnam' }} onClick={handlelogin}>ورود</Button>
                </div>
            }
            {tab === REG_TAB_VALUE &&
                <div className={classes.containerInput}>
                    <Typography>نام کامل</Typography>
                    <Input value={fullNameRegi} onChange={e => setfullNameRegi(e.target.value)}></Input>
                    <Typography>نام کاربری</Typography>
                    <Input value={userNameRegi} onChange={e => setuserNameRegi(e.target.value)}></Input>
                    <Typography>رمز عبور</Typography>
                    <Input value={passwordRegi} onChange={e => setpasswordRegi(e.target.value)}></Input>
                    <Typography> تکرار رمز عبور </Typography>
                    <Input value={confpasswordRegi} onChange={e => setconfpasswordRegi(e.target.value)}></Input>
                    <Button variant={"contained"} color={"primary"} style={{ fontFamily: 'shabnam' }} onClick={handleRegister} >ورود  </Button>
                </div>
            }
        </Paper>
    );
}

export default AuthPage;



