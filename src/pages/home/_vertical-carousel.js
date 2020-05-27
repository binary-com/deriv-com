import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Header } from 'components/elements'
import { Flex, Box } from 'components/containers'

const VerticalCarouselWrapper = styled(Flex)`
    position: relative;
    margin-top: 2rem;
    overflow: hidden;
    height: 130px;
`
const VerticalCarouselContainer = styled(Box)`
    transform: translateY(${(props) => props.transform}px);
    transition-duration: 1s;
    transition-property: transform;
    visibility: ${(props) => props.visibility};
`
const StyledHeader = styled(Header)`
    opacity: ${(props) => (props.active_header == props.index ? '1' : '0.5')};
    font-size: ${(props) =>
        props.active_header == props.index ? 'var(--text-size-l)' : 'var(--text-size-m)'};
    transition-property: opacity, font-size;
    transition-duration: 1s;
`

const VerticalCarousel = ({ contents }) => {
    const [active_header, setActiveHeader] = React.useState(contents.length - 1)
    const [transform, setTransform] = React.useState(-90)
    const [visibility, setVisibility] = React.useState('hidden')

    const startVerticalCarousel = (active_header = 5, transform = -90) => {
        if (active_header > 0) {
            setActiveHeader(active_header - 1)
            setTransform(transform + 31)
            setTimeout(() => startVerticalCarousel(active_header - 1, transform + 31), 3000)
        } else {
            startVerticalCarousel(5, -121)
        }
    }

    React.useEffect(() => {
        setTimeout(() => setVisibility('inherit'), 500)
        setTimeout(() => startVerticalCarousel(active_header, transform), 3000)
    }, [])

    return (
        <VerticalCarouselWrapper direction="column">
            <VerticalCarouselContainer transform={transform} visibility={visibility}>
                {contents.map((content, index) => (
                    <StyledHeader
                        color="white"
                        active_header={active_header}
                        index={index}
                        key={content}
                        lh="1.6"
                    >
                        {content}
                    </StyledHeader>
                ))}
            </VerticalCarouselContainer>
        </VerticalCarouselWrapper>
    )
}

VerticalCarousel.propTypes = {
    contents: PropTypes.array,
}
export default VerticalCarousel
