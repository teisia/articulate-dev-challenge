import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'

import Theme from '../styles/theme'

const Main = props => {
    const classes = useStyles()
    // we can switch the content based on app state later if needed
    // if this were an app with several nested pages, id implement routes
    let content
    return (
        <MuiThemeProvider theme={Theme}>
            <div className={classes.root}>
                {content}
            </div>
        </MuiThemeProvider>
    )
}

export default Main

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center'
    }
}))