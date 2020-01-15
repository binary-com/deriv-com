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

export const Eu = props => <Location {...props} to="eu" />

export const NonEu = props => <Location {...props} to="non-eu" />

const MaxWidth = styled.div`
    @media (max-width: ${props => props.max_width}px) {
        display: none !important;
    }
`

const MinWidth = styled.div`
    @media (min-width: ${props => props.min_width}px) {
        display: none !important;
    }
`

export const Desktop = ({ children, ...props }) => (
    <MaxWidth max_width={size.tabletL} {...props}>
        {children}
    </MaxWidth>
)
export const Mobile = ({ children, ...props }) => (
    <MinWidth min_width={size.tabletL} {...props}>
        {children}
    </MinWidth>
)

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

Desktop.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

Mobile.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}
