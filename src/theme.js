import { createMuiTheme } from '@material-ui/core'
import { purple, green, orange, blue } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
  },
  status: {
    danger: orange,
  },
})

export default theme
