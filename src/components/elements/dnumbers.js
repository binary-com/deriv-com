import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Container, { SectionContainer } from 'components/containers/container.js'

const StyledContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
`
const DNumbers = props => {
    return (
        <SectionContainer padding="4.3rem">
            <StyledContainer>{props.children}</StyledContainer>
        </SectionContainer>
    )
}
DNumbers.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
}
export default DNumbers
