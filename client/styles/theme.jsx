import { createMuiTheme } from '@material-ui/core/styles'
import { makeMediaQuery } from 'lib/makeMediaQuery'

export default createMuiTheme({
    palette: {
        primary: { 
            main: '#FFFF'
        },
        secondary: {
            main: '#F5F5F5'
        },
        common: {
            dark: '#000',
            grayText: '#55585A',
            lightGrayText: '#747A7E',
            border: '#DDD',
            heading: '#3B3F41'
        }
    },
    mq: makeMediaQuery()
})
