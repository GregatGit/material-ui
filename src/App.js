import React from 'react'
import { Grid } from '@material-ui/core'
import Header from './components/Header'

function App() {
  
  return (
    <Grid container direction="column">
      <Grid item><Header /></Grid>
      <Grid item container>
        <Grid item xs={0} sm={2} />
        <Grid item xs={12} sm={8}>Blah Blah Blah this is where the content isthis is where the content isthis is where the content isthis is where the content isthis is where the content isthis is where the content isthis is where the content isthis is where the content isthis is where the content isthis is where the content isthis is where the content isthis is where the content isvthis is where the content isthis is where the content isthis is where the content isthis is where the content isthis is where the content isthis is where the content isthis is where the content isthis is where the content is</Grid>
        <Grid item xs={0} sm={2} />
      </Grid>
    </Grid>
  )
}

export default App
