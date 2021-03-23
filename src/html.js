import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
    return (
        <html {...props.htmlAttributes}>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <link rel="preload" as="script" href="https://static.deriv.com/scripts/cookie.js" />
                {props.headComponents}
            </head>
            <body {...props.bodyAttributes}>
                {props.preBodyComponents}
                <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
                {props.postBodyComponents}
            </body>
        </html>
    )
}

HTML.propTypes = {
    body: PropTypes.string,
    bodyAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    htmlAttributes: PropTypes.object,
    postBodyComponents: PropTypes.array,
    preBodyComponents: PropTypes.array,
}
