import { createMuiTheme } from "@material-ui/core";


const Theme = createMuiTheme({
    overrides:{
        MuiTypography:{
            root:{
                fontFamily:"shabnam !important",
            }
        }
    }
})

export default Theme;