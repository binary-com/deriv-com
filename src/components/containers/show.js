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

export const EU = ({ children }) => {
    const { is_eu } = React.useContext(LocationContext)

    if (is_eu) return <>{children}</>
    else return null
}

export const NonEU = ({ children }) => {
    const { is_eu } = React.useContext(LocationContext)

    if (!is_eu && typeof is_eu === 'boolean') return <>{children}</>
    else return null
}

export default {
    EU,
    Mobile,
    Desktop,
}

Desktop.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

Mobile.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}
