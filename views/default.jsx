const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>¡HOLA! TRAVEL LOG APP</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
  }

module.exports = Def