import React from 'react'
import ReactDOM from 'react-dom'

import Main from 'views/main'

if (Meteor.isClient) {
    Meteor.startup(() => {
        ReactDOM.render(<Main />, document.getElementById('render-target'))
    })
}
