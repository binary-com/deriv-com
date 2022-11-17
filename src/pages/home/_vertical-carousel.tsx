import React from 'react'
import styled from 'styled-components'
import { TContent } from './_types'
import { Carousel, Header } from 'components/elements'
import { Localize } from 'components/localization'

const StyledHeader = styled(Header)`
    height: 36px;
    line-height: 36px;
`

type VerticalCarouselProps = {
    contents: TContent[]
}

const VerticalCarousel = ({ contents }: VerticalCarouselProps) => {
    const settings = {
        options: {
            loop: true,
            axis: 'y',
            draggable: false,
            speed: 7,
        },
        container_style: {
            maxWidth: 'auto',
            margin: '24px 0 32px',
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
    return (
        <Carousel has_autoplay autoplay_delay={6000} autoplay_interval={2500} {...settings}>
            {contents.map((content) => (
                <StyledHeader
                    as="h3"
                    type="sub-section-title"
                    color="white"
                    index={content.id}
                    key={content.id}
                >
                    <Localize translate_text={content.text} />
                </StyledHeader>
            ))}
        </Carousel>
    )
}

export default VerticalCarousel
