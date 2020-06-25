const MEDIA_QUERIES = {
    SCREEN_MOBILE_PORTRAIT: {
        break: '450px',
        name: 'xsmall'
    },
    SCREEN_MOBILE_LANDSCAPE: {
        break: '568px',
        name: 'small'
    },
    SCREEN_TABLET_PORTRAIT: {
        break: '768px',
        name: 'medium'
    },
    SCREEN_TABLET_LANDSCAPE: {
        break: '1024px',
        name: 'large'
    },
    SCREEN_DESKTOP: {
        break: '1150px',
        name: 'xlarge'
    },
    SCREEN_DESKTOP_LARGE: {
        break: '1681px',
        name: 'xxlarge'
    }
}

export const BREAKPOINTS = Object.values(MEDIA_QUERIES)
    .reduce((acc, val) => {
        const value = val.break.replace('px', '')
        acc[val.name] = Number(value)
        return acc
    }, {})

export const makeMediaQuery = () =>
    Object.keys(MEDIA_QUERIES).reduce((acc, key) => {
        const current = MEDIA_QUERIES[key]
        acc[current.name] = `@media screen and (min-width: ${current.break})`
        return acc
    }, {})
