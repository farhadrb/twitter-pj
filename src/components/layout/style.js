import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    root:{
         display:'flex',
         width:'100%',
         height:'100vh',
         direction:'rtl'
    },
    divider:{
        minHeight:'100vh',
        width:'1',
        backgroundColor:'blue'
    },
    content:{
        flex:1,
        overflowY:'auto'
    }
})


export default useStyles;