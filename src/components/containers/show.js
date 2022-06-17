import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Media } from 'themes/media'
import { DerivStore } from 'store'
import { useDimensions } from 'common/utility'

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
const Container = styled.div`
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;
    top: ${(props) => props.top}px;
    left: ${(props) => props.left}px;
    x: ${(props) => props.x}px;
    y: ${(props) => props.y}px;
    right: ${(props) => props.right}px;
    bottom: ${(props) => props.bottom}px;
`

export const Eu = ({ children }) => {
    const [ref, dimensions] = useDimensions()

    const { is_eu_country } = React.useContext(DerivStore)

    if (is_eu_country) return <>{children}</>
    else
        return (
            <Container ref={ref} {...dimensions}>
                {JSON.stringify(dimensions)}
            </Container>
        )
}

export const NonEU = ({ children }) => {
    const [ref, dimensions] = useDimensions()

    const { is_eu_country } = React.useContext(DerivStore)

    if (is_eu_country === false) return <>{children}</>
    else
        return (
            <Container ref={ref} {...dimensions}>
                {JSON.stringify(dimensions)}
            </Container>
        )
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

Eu.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

NonEU.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}
