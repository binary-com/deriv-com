import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const makeResponsiveComponent = (rulesets, tagName = 'div') =>
    styled(tagName)`
        ${buildStyles(rulesets)}
    `

const buildStyles = rulesets =>
    rulesets.reduce(
        (cssString, { constraint, width, rules }) =>
            `${cssString} @media (${constraint}-width: ${width}) { ${rules} }`,
        '',
    )

const buildResponsive = breakpoints => {
    const rulesets = Object.entries(breakpoints).reduce(
        (rulesets, [constraint, width]) => [
            ...rulesets,
            {
                constraint,
                width,
                rules: 'display: none !important;',
            },
        ],
        [],
    )

    return makeResponsiveComponent(rulesets)
}

const Responsive = ({ min, max, children }) => {
    const Component = buildResponsive({ min, max })
    return <Component>{children}</Component>
}

Responsive.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    max: PropTypes.string,
    min: PropTypes.string,
}

export default Responsive
