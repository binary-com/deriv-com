import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Cookies from 'js-cookie'
import { size } from 'themes/device'
import { isEuCountry } from 'common/country-base'

const handleEu = (setVisible, to) => is_eu_country => {
    switch (to) {
        case 'eu':
            setVisible(is_eu_country)
            break
        case 'non-eu':
            setVisible(!is_eu_country)
            break
        default:
            break
    }
}

const Location = ({ children, to }) => {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        if (!to) return

        const clients_country = Cookies.get('clients_country')
        const showEu = handleEu(setVisible, to)
        showEu(isEuCountry(clients_country))
    })
    return visible ? <>{children}</> : null
}

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

export const Eu = props => <Location {...props} to="eu" />

export const NonEu = props => <Location {...props} to="non-eu" />

export const Mobile = props => <Responsive {...props} min={`${size.tabletL}px`} />

export const Desktop = props => <Responsive {...props} max={`${size.tabletL}px`} />

export default {
    Eu,
    NonEu,
    Mobile,
    Desktop,
}

Location.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    to: PropTypes.oneOf(['eu', 'non-eu']),
}

Responsive.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    max: PropTypes.string,
    min: PropTypes.string,
}
