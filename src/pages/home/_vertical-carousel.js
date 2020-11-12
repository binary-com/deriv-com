import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Carousel, Header } from 'components/elements'

const StyledHeader = styled(Header)`
    font-size: var(--text-size-m);
    line-height: 1.5;
    height: 36px;
`

const VerticalCarousel = ({ contents }) => {
    const settings = {
        options: {
            loop: true,
            axis: 'y',
            draggable: false,
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
        <Carousel has_autoplay autoplay_interval={4000} {...settings}>
            {contents.map((content, index) => (
                <StyledHeader
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
