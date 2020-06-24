import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import { localize } from 'components/localization'

// const UpButton = styled.button`
//     width: 200px;
// `
const DownButton = styled.button`
    width: 200px;
`
const StyledHeader = styled(Header)`
    cursor: pointer;
`
const Carousel = ({ slides }) => {
    let [slide_index, setSlideIndex] = useState(0)
    let [inner_slide_index, setInnerSlideIndex] = useState(0)
    const downClick = () => {
        slides[slide_index].inner_slides
            ? ((inner_slide_index =
                  inner_slide_index >= slides[slide_index].inner_slides.length - 1
                      ? -2 // using this flag to control the end of the inner sileds and continuing with outer slides
                      : inner_slide_index + 1),
              setInnerSlideIndex(inner_slide_index))
            : ((slide_index =
                  slide_index + 1 >= slides.length - 1 ? slides.length - 1 : slide_index + 1),
              setSlideIndex(slide_index))
    }
    // const upClick = () => {
    //     setSlideIndex(slide_index - 1 === -1 ? 0 : slide_index - 1)
    // }
    const yearClick = (index) => {
        setSlideIndex(index)
    }

    return (
        <>
            <Flex jc="flex-start" overflow="hidden" height="47.2rem" direction="column">
                {slide_index - 1 < 0 ? undefined : (
                    <StyledHeader
                        onClick={() => yearClick(slide_index - 1)}
                        as="h3"
                        mb="4.8rem"
                        color="grey-17"
                        lh="1.13"
                    >
                        {slides[slide_index - 1].header}
                    </StyledHeader>
                )}
                {slides[slide_index].inner_slides ? (
                    inner_slide_index === -2 ? (
                        (setSlideIndex(slide_index + 1), setInnerSlideIndex(0))
                    ) : (
                        <div>{slides[slide_index].inner_slides[inner_slide_index].body}</div>
                    )
                ) : (
                    <div>{slides[slide_index].body}</div>
                )}

                {slide_index + 1 >= slides.length ? undefined : (
                    <StyledHeader
                        onClick={() => yearClick(slide_index + 1)}
                        mb="4.8rem"
                        as="h3"
                        color="grey-17"
                        lh="1.13"
                    >
                        {slides[slide_index + 1].header}
                    </StyledHeader>
                )}
                {slide_index + 2 >= slides.length ? undefined : (
                    <StyledHeader
                        onClick={() => yearClick(slide_index + 2)}
                        as="h3"
                        color="grey-17"
                        lh="1.13"
                    >
                        {slides[slide_index + 2].header}
                    </StyledHeader>
                )}
            </Flex>
            <DownButton onClick={downClick}>{localize('down')}</DownButton>
        </>
    )
}
Carousel.propTypes = {
    slides: PropTypes.array,
}

export default Carousel
