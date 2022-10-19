import React from 'react'
import PropTypes from 'prop-types'
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

export default {
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
