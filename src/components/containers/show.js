import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Cookies from 'js-cookie'
import { useMediaQuery } from 'react-responsive'
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

export const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: size.tabletL })
    return isMobile ? children : null
}

export const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: size.tabletL })
    return isDesktop ? children : null
}

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
