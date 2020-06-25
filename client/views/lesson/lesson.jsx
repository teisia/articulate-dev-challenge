import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

import blockData from 'lib/data/blockData'

import TabBlock from 'components/blocks/tab/tabBlock'

const Lesson = () => {
    const classes = useStyles()

    return (
        <Grid container className={classes.mainContainer} justify="center" alignContent="center">
            <TabBlock title="The Beatles' Albums" data={blockData} />
        </Grid>
    )
}

export default Lesson

const useStyles = makeStyles(theme => ({
    mainContainer: {
        padding: '3em'
    }
}))