import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Header } from 'components/elements'

const StyledHeader = styled(Header)`
    height: 36px;
    margin: 10px 0;
`

const VerticalCarousel = ({ contents }) => {
    return (
        <StyledHeader as="h4" type="sub-section-title" color="white">
            {contents[0]}
        </StyledHeader>
    )
}

VerticalCarousel.propTypes = {
    contents: PropTypes.array,
}
export default VerticalCarousel
