import React, { useState, Fragment } from 'react'
import { observer } from 'mobx-react-lite'
import isEmpty from 'lodash.isempty'
import { makeStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const TabBlock = ({ title, data }) => {
    const classes = useStyles()
    const [selectedTab, setSelectedTab] = useState(0)

    const tabLabels = data.map(d=> d.tabLabel)

    return (
        <div>
            <Typography className={classes.title}>{title}</Typography>
            <Paper className={classes.paper}>
                <Tabs 
                    value={selectedTab}
                    onChange={(e, value) => {
                        setSelectedTab(value)
                    }}
                    indicatorColor="primary"
                    className={classes.tabs}
                    variant="scrollable">
                        {tabLabels.map((label, index) => {
                            return <Tab
                                        key={label + index}
                                        className={selectedTab === index ? `${classes.tab} ${classes.selectedTab}` : classes.tab}
                                        label={label.toUpperCase()} />
                        })}
                </Tabs>
                {data.map((d, index) => {
                    if (selectedTab === index) {
                        return (
                            <Grid key={d.id} container className={classes.contentContainer}>
                                <Typography className={classes.contentText}>
                                    {d.tabContent}
                                </Typography>
                                {!isEmpty(d.tabMedia) && 
                                    <img 
                                        className={classes.media}
                                        src={d.tabMedia} 
                                        alt={d.tabLabel} />}
                            </Grid>
                        )
                    }
                })}
            </Paper>
        </div>
    )
}

export default observer(TabBlock)

const useStyles = makeStyles(theme => ({
    mainContainer: {
    },
    title: {
        marginBottom: '2rem',
        fontSize: '2rem',
        color: theme.palette.common.grayText
    },
    paper: {
        border: '1px solid ' + theme.palette.common.border,
        [theme.breakpoints.up('md')]: {
            maxWidth: '45em'
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: '90vw'
        },
    },
    tabs: {
        overflowY: 'scroll'
    },
    tab: {
        border: '.1em solid ' + theme.palette.common.border,
        borderTop: 'none',
        borderLeft: 'none',
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.dark,
        fontWeight: 'bold',
        padding: '1em',
        // [theme.breakpoints.up('md')]: {
        //     fontSize: '.8em'
        // },
        // [theme.breakpoints.down('md')]: {
        //     fontSize: '1.5em'
        // },
    },
    selectedTab: {
        backgroundColor: theme.palette.primary.main,
        borderBottom: 'none',
        color: theme.palette.common.lightGrayText
    },
    contentContainer: {
        padding: '3em'
    },
    contentText: {
        color: theme.palette.common.grayText,
        // [theme.breakpoints.up('md')]: {
        //     fontSize: '1em'
        // },
        //   [theme.breakpoints.down('md')]: {
        //     fontSize: '2.2em'
        // },
    },
    media: {
        height: '20em',
        width: 'auto',
        margin: '3em 0em 2em 0em'
    },
    loadingContainer: {
        padding: '1em'
    }
}))