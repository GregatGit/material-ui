import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded'

const useStyles = makeStyles(() => ({
  typographyStyle : {
    flex: 1
  }
}))

const Header = () => {
  const classes = useStyles()
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyle} varient="h1">
          Greg Duncan!
        </Typography>
        <AcUnitRoundedIcon />
      </Toolbar>
    </AppBar>
  )
}

export default Header
