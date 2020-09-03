import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Header } from 'components/elements'

const StyledHeader = styled(Header)`
    color: rgba(51, 51, 51, 0.32);
`

export const NoOpenPositionsHeader = ({ children, mb }) => (
    <StyledHeader align="center" size="var(--text-size-l)" as="h4" mb={mb}>
        {children}
    </StyledHeader>
)

NoOpenPositionsHeader.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    mb: PropTypes.string,
}
