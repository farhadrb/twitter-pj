import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    container:{
        backgroundColor:'lightgray',
        width:'30rem',
        margin:'10rem auto',
        display:'flex',
        flexDirection:'column'
    },
    headerText:{
        margin:'1rem',
        alignSelf:'center'
    },
    tab:{
        flex:'1',
        fontFamily:'shabnam'
    },
    containerInput:{
        display:'flex',
        flexDirection:'column',
        padding:'1rem 0.8rem'
    }
})
 
export default useStyles;