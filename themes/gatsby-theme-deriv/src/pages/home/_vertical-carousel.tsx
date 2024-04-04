import React from 'react'
import styled from 'styled-components'
import { TContent } from './_types'
import { Carousel, CarouselProps, Header } from 'components/elements'
import { Localize } from 'components/localization'

const StyledHeader = styled(Header)`
    height: 36px;
    line-height: 36px;
`

type VerticalCarouselProps = {
    contents: TContent[]
}

const settings: CarouselProps = {
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
            {contents.map((content) => (
                <StyledHeader as="h3" type="sub-section-title" color="white" key={content?.id}>
                    <Localize translate_text={content.text} />
                </StyledHeader>
            ))}
        </Carousel>
    )
}

export default VerticalCarousel
