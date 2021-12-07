import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Carousel, Header } from 'components/elements'

const StyledHeader = styled(Header)`
    height: 36px;
    line-height: 36px;
`

const VerticalCarousel = ({ contents }) => {
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
        <Carousel has_autoplay autoplay_interval={2500} {...settings}>
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

VerticalCarousel.propTypes = {
    contents: PropTypes.array,
}
export default VerticalCarousel
