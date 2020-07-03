import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Header } from 'components/elements'
import { Flex, Box } from 'components/containers'
import device from 'themes/device'

const VerticalCarouselWrapper = styled(Flex)`
    position: relative;
    margin: 2.4rem 0 3.2rem;
    overflow: hidden;
    height: 36px;

    @media ${device.tabletL} {
        margin: 2rem 0 3rem;
        height: 28px;
    }
`
const VerticalCarouselContainer = styled(Box)`
    transform: translateY(${(props) => props.transform}px);
    transition-duration: 0.5s;
    transition-property: transform;
    transition-timing-function: linear;
    visibility: ${(props) => props.visibility};
`
const StyledHeader = styled(Header)`
    opacity: ${(props) => (props.active_header == props.index ? '1' : '0.5')};
    font-size: ${(props) =>
        props.active_header == props.index ? 'var(--text-size-m)' : 'var(--text-size-sm)'};
    transition-property: opacity, font-size;
    line-height: 1.5;
    height: 36px;
    transition-duration: 0.5s;
    transition-timing-function: linear;
`

const VerticalCarousel = ({ contents }) => {
    // We have 5 items which height of each of them is 36px.
    // In each step we should +36px to the last item (coordinate of the last item is -72px)
    // This is list of item's coordinate [-72, -36, 0, 36, 72]
    const [active_header, setActiveHeader] = React.useState(contents.length - 1)
    const [transform, setTransform] = React.useState(-72)
    const [visibility, setVisibility] = React.useState('hidden')

    const startVerticalCarousel = (active_header = 5, transform = -72) => {
        if (active_header > 0) {
            setActiveHeader(active_header - 1)
            setTransform(transform + 36)
            setTimeout(() => startVerticalCarousel(active_header - 1, transform + 36), 3000)
        } else {
            // here we should restart the carousel with the first item (which is the last item in the array)
            startVerticalCarousel(5, -108)
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
                        key={index}
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
