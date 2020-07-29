import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { LocationContext } from '../layout/location-context'
import { size } from 'themes/device'

const MaxWidth = styled.div`
    @media (max-width: ${(props) => props.max_width}px) {
        display: none !important;
    }
`

const MinWidth = styled.div`
    @media (min-width: ${(props) => props.min_width}px) {
        display: none !important;
    }
`

export const Desktop = ({ children, max_width, ...props }) => (
    <MaxWidth max_width={max_width || size.tabletL} {...props}>
        {children}
    </MaxWidth>
)
export const Mobile = ({ children, min_width, ...props }) => (
    <MinWidth min_width={min_width || size.tabletL} {...props}>
        {children}
    </MinWidth>
)

export const Eu = ({ children }) => {
    const { is_eu_country } = React.useContext(LocationContext)

    if (is_eu_country) return <div>{children}</div>
    else return null
}

export const NonEU = ({ children }) => {
    const { is_eu_country } = React.useContext(LocationContext)

    if (is_eu_country === false) return <div>{children}</div>
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
