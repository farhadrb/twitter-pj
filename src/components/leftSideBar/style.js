import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    root:{
        backgroundColor:'white',
        width:'25%',
        padding:'1.5rem 1rem'
    },
    proftext:{
        width:'max-content',
        marginLeft:'.5rem',
        direction:'ltr'
    },
    profName:{
        flex:1
    },
    profId:{
        flex:1,
        color:'gray',
        fontSize:'.8rem'
    },
    twitterRoot:{
        backgroundColor:'#f5f8fa',
        marginTop:'3rem',
        padding:'11px 24px',
        borderRadius:'2.5rem'
    },
    twitterTittle:{
        fontSize:'1.1rem',
        fontWeight:'600',
    },
    twetterParentName:{
        width:'max-content',
        marginRight:'.5rem',
    }
 
})


export default useStyles;