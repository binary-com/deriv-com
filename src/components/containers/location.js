import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Cookies from 'js-cookie'
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

Location.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    to: PropTypes.oneOf(['eu', 'non-eu']),
}

export default Location
