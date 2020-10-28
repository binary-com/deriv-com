import React from 'react'
import PropTypes from 'prop-types'
import { LocationContext } from '../layout/location-context'
import { Media } from 'themes/media'

export const Desktop = ({ children, max_width, ...props }) => (
    <Media greaterThanOrEqual={max_width || 'tabletL'} {...props}>
        {children}
    </Media>
)
export const Mobile = ({ children, min_width, ...props }) => (
    <Media between={['start', ...(min_width ? [min_width] : ['tabletL'])]} {...props}>
        {children}
    </Media>
)

export const Eu = ({ children }) => {
    const { is_eu_country } = React.useContext(LocationContext)

    if (is_eu_country) return <>{children}</>
    else return null
}

export const NonEU = ({ children }) => {
    const { is_eu_country } = React.useContext(LocationContext)

    if (is_eu_country === false) return <>{children}</>
    else return null
}

export default {
    Eu,
    NonEU,
    Mobile,
    Desktop,
}

Desktop.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    max_width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Mobile.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    min_width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
