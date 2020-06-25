import React from 'react'
import { observer } from 'mobx-react-lite'
import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

import blockData from 'lib/data/blockData'

import TabBlock from 'components/blocks/tab/tabBlock'

const Lesson = () => {
    const classes = useStyles()

    return (
        <Grid container className={classes.mainContainer} justify="center" alignContent="center">
            <TabBlock title="Tab Block" data={blockData} />
        </Grid>
    )
}

export default observer(Lesson)

const useStyles = makeStyles(theme => ({
    mainContainer: {
        padding: '3em'
    }
}))