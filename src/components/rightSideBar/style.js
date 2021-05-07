import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme=>({
    root:{
        backgroundColor:'white',
        width:'18%',
        padding:'1.5rem 1rem'
    },
    logoType:{
        fontSize:'1.3rem',
        fontWeight:'500',
        marginRight:'1rem',
        color:'#5ea9dd'
    },
    hashtagTitle:{
        fontSize:'1.3rem',
        fontWeight:'500',
        marginTop:'3rem',
        marginButton:'2rem'
    },
    title:{
        marginTop:'1rem'
    },
    hashtag:{
        marginRight:'.8rem'
    },
    hp:{
        margin:'.5rem 0',
        fontSize:'30px'
    }
 
   
}))

export default useStyles;