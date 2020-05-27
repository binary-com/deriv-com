import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Header } from 'components/elements'
import { Flex } from 'components/containers'

const StyledHeader = styled(Header)`
    opacity: ${(props) => (props.active_header == props.index ? '1' : '0.5')};
    font-size: ${(props) =>
        props.active_header == props.index ? 'var(--text-size-l)' : 'var(--text-size-m)'};
`
const VerticalCarousel = ({ contents }) => {
    const [active_header] = React.useState(contents.length - 1)

    return (
        <Flex direction="column">
            {contents.map((content, index) => (
                <StyledHeader
                    color="white"
                    active_header={active_header}
                    index={index}
                    key={content}
                >
                    {content}
                </StyledHeader>
            ))}
        </Flex>
    )
}

VerticalCarousel.propTypes = {
    contents: PropTypes.array,
}
export default VerticalCarousel
