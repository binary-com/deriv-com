import React from 'react'
import styled from 'styled-components'
import device from 'themes/device'
import PropTypes from 'prop-types'

const MobileRule = styled.div`
    @media ${device.laptopS} {
        display: none;
    }
`
const LaptopRule = styled.div`
    @media ${device.tabletL} {
        display: none;
    }
`

export const MobileOnly = props => <MobileRule>{props.children}</MobileRule>
export const LaptopOnly = props => <LaptopRule>{props.children}</LaptopRule>

LaptopOnly.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
}

MobileOnly.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
}
