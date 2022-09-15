import React from 'react'
import styled from 'styled-components'
import { Carousel, Header } from 'components/elements'

const StyledHeader = styled(Header)`
    height: 36px;
    line-height: 36px;
`

type VerticalCarouselProps = {
    contents: unknown[]
}

const settings = {
    options: {
        loop: true,
        axis: 'y',
        draggable: false,
        speed: 7,
    },
    container_style: {
        maxInlineSize: 'auto',
        marginBlockStart: '24px',
        marginBlockEnd: '32px',
        marginInline: '0',
    },
    slide_style: {
        position: 'relative',
        height: '36px',
    },
    vertical_container: {
        flexDirection: 'column',
        height: '36px',
    },
}

const VerticalCarousel = ({ contents }: VerticalCarouselProps) => {
    return (
        <Carousel has_autoplay autoplay_delay={6000} autoplay_interval={2500} {...settings}>
            {contents.map((content, index) => (
                <StyledHeader
                    as="h3"
                    type="sub-section-title"
                    color="white"
                    index={index}
                    key={index}
                >
                    {content}
                </StyledHeader>
            ))}
        </Carousel>
    )
}

export default VerticalCarousel
