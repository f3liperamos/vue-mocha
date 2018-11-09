require('jsdom-global')()

const rootDiv = window.document.createElement('div')
rootDiv.setAttribute('id', 'app')
window.document.body.appendChild(rootDiv)

global.expect = require('chai').expect
