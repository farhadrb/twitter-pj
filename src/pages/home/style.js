import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        backgroundColor: '#e6e6e6',
        direction:'rtl'
    },
    header:{
        backgroundColor:'white',
        padding:'18px',
        display:'flex',
    },
    headerTitle:{
        fontWeight:'600',
        fontSize:'1.2rem',
    },
    divider:{
        backgroundColor:'7EBAFF',
        filter:'opacity(0.4)'
    },
    NewTweet:{
        backgroundColor:'white',
        display:'flex',
        flexDirection:'column',
        padding:'18px',
    },
    tweetItem:{
        backgroundColor:'white',
        display:'flex',
        flexDirection:'column',
        padding:'18px',
        marginTop:'7px'
    },
    textarea:{
        marginRight:'2rem',
        border:'none',
        flex:'1',
        "&:focus":{
            outline:'unset'
        }
    },
    newtweetbtn:{
        color:'white',
        borderRadius:'1rem',
        minHeight:"30px",
        height:"30px",
        fontFamily:"shabnam",
        lineHeight:"1rem",
        minWidth:'5rem'
    },
    newTweetimgBtn:{
        padding:'unset',
        marginLeft:'.5rem',
        borderRadius:'50%',
        padding:'.3rem',
        border:'.5px solid #3337',
    },
    tweetItemName:{
        fontWeight:600,
        marginRight:'1rem'
    },
    tweetItemId:{
        fontSize:'.8rem',
        marginRight:'0.5rem',
        color:'grey',
        paddingTop:'.2rem'
    }
})


export default useStyles;