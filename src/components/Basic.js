import React from 'react'
import { Button, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  helloThereStyle: {
    fontStyle: 'oblique',
    color: 'red',
    fontSize: '2.5rem'
  },
})

const Basic = () => {
  const classes = useStyles()
  return (
    <div>
    <Typography
    className={classes.helloThereStyle}
    variant="h1"
  >
    Welcome to Material-UI
  </Typography>
  <Button color="primary" variant="outlined">
    Hi I'm a Button
  </Button>
  <div>
    <Button color="secondary" variant="outlined">
      Hi I'm a Button
    </Button>
  </div>
    </div>
  )
}

export default Basic
