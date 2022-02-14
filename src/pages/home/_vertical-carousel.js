import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Carousel, Header } from 'components/elements'

const StyledHeader = styled(Header)`
    height: 36px;
    margin: 10px 0;
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
            margin: '2.4rem 0 3.2rem',
        },
        slide_style: {
            position: 'relative',
        },
        vertical_container: {
            flexDirection: 'column',
            height: '43px',
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
