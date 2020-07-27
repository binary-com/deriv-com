import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import StartPoint from 'images/svg/start-point.svg'
import Show from 'components/containers/show'
import device from 'themes/device'

const StyledHeader = styled(Header)`
    cursor: pointer;
`
const StyledText = styled(Text)`
    cursor: pointer;
`
const Line = styled.div`
    width: 0.2rem;
    height: 49.4rem;
    background-color: rgba(255, 68, 79, 0.48);
`
const Arrow = styled.i`
    width: 12px;
    height: 12px;
    margin-top: 1.6rem;
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    cursor: pointer;
`
const StyledStartPoint = styled(StartPoint)`
    position: absolute;
    top: ${(props) => (props.slide_index === 0 ? '0' : '21%')};
    left: 24%;
`
const GreyCircle = styled.div`
    position: absolute;
    top: ${(props) => props.top + 'px' || '0'};
    left: 39%;
    height: 10px;
    width: 10px;
    background-color: var(--color-grey-21);
    border-radius: 50%;
    display: inline-block;
`

const ImageWrapper = styled.div`
    margin-right: 9rem;
    width: 38.6rem;
    display: flex;
    margin-top: 50px;
    justify-content: center;

    @media ${device.tablet} {
        width: 21.6rem;
        margin-top: 35px;
        margin-right: 0;
    }
`
const Carousel = ({ slides }) => {
    let [slide_index, setSlideIndex] = useState(0)
    let [inner_slide_index, setInnerSlideIndex] = useState(0)
    const downClick = () => {
        slides[slide_index].inner_slides
            ? ((inner_slide_index =
                  inner_slide_index >= slides[slide_index].inner_slides.length - 1
                      ? -1 // using this flag to control the end of the inner sileds and continuing with outer slides
                      : inner_slide_index + 1),
              setInnerSlideIndex(inner_slide_index))
            : ((slide_index =
                  slide_index + 1 >= slides.length - 1 ? slides.length - 1 : slide_index + 1),
              setSlideIndex(slide_index))
    }
    const yearClick = (index) => {
        setSlideIndex(index)
    }
    const handleScroll = (e, index) => {
        if (e.wheelDelta > 0) {
            index - 1 < 0 ? 0 : yearClick(index - 1)
        }
        if (e.wheelDelta <= 0) downClick()
    }

    return (
        <>
            <Show.Desktop>
                <Flex jc="center" max-width="99.6rem">
                    <ImageWrapper>
                        {slides[slide_index].inner_slides
                            ? inner_slide_index === -1
                                ? (setSlideIndex(slide_index + 1), setInnerSlideIndex(0))
                                : slides[slide_index].inner_slides[inner_slide_index].image
                            : slides[slide_index].image}
                    </ImageWrapper>

                    <Flex
                        position="relative"
                        direction="column"
                        width="4.4rem"
                        ai="center"
                        mr="9.2rem"
                    >
                        <Line>
                            <GreyCircle />
                            <StyledStartPoint slide_index={slide_index} />
                        </Line>
                        <Arrow onClick={downClick}></Arrow>
                        <StyledText onClick={downClick} mt="0.8rem" weight="bold">
                            {localize('scroll')}
                        </StyledText>
                    </Flex>
                    <Flex
                        onWheel={() => handleScroll(event, slide_index)}
                        jc="flex-start"
                        overflow="hidden"
                        height="49.8rem"
                        direction="column"
                        width="unset"
                    >
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

                        {slides[slide_index].inner_slides
                            ? inner_slide_index === -1
                                ? (setSlideIndex(slide_index + 1), setInnerSlideIndex(0))
                                : slides[slide_index].inner_slides[inner_slide_index].body
                            : slides[slide_index].body}

                        {slide_index + 1 >= slides.length ? undefined : (
                            <>
                                <StyledHeader
                                    onClick={() => yearClick(slide_index + 1)}
                                    mb="4.8rem"
                                    as="h3"
                                    color="grey-17"
                                    lh="1.13"
                                >
                                    {slides[slide_index + 1].header}
                                </StyledHeader>
                            </>
                        )}
                        {slide_index + 2 >= slides.length ? undefined : (
                            <>
                                <StyledHeader
                                    onClick={() => yearClick(slide_index + 2)}
                                    as="h3"
                                    color="grey-17"
                                    lh="1.13"
                                >
                                    {slides[slide_index + 2].header}
                                </StyledHeader>
                            </>
                        )}
                    </Flex>
                </Flex>
            </Show.Desktop>
            <Show.Mobile>
                <Flex jc="center" max-width="99.6rem">
                    <Flex
                        position="relative"
                        direction="column"
                        width="4.4rem"
                        ai="center"
                        mr="9.2rem"
                    >
                        <Line>
                            <GreyCircle />
                            <StyledStartPoint slide_index={slide_index} />
                        </Line>
                        <Arrow onClick={downClick}></Arrow>
                        <StyledText onClick={downClick} mt="0.8rem" weight="bold">
                            {localize('scroll')}
                        </StyledText>
                    </Flex>
                    <Flex
                        onWheel={() => handleScroll(event, slide_index)}
                        jc="flex-start"
                        overflow="hidden"
                        height="49.8rem"
                        direction="column"
                        width="unset"
                    >
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

                        {slides[slide_index].inner_slides
                            ? inner_slide_index === -1
                                ? (setSlideIndex(slide_index + 1), setInnerSlideIndex(0))
                                : slides[slide_index].inner_slides[inner_slide_index].body
                            : slides[slide_index].body}
                        <ImageWrapper>
                            {slides[slide_index].inner_slides
                                ? inner_slide_index === -1
                                    ? (setSlideIndex(slide_index + 1), setInnerSlideIndex(0))
                                    : slides[slide_index].inner_slides[inner_slide_index].image
                                : slides[slide_index].image}
                        </ImageWrapper>

                        {slide_index + 1 >= slides.length ? undefined : (
                            <>
                                <StyledHeader
                                    onClick={() => yearClick(slide_index + 1)}
                                    mb="4.8rem"
                                    as="h3"
                                    color="grey-17"
                                    lh="1.13"
                                >
                                    {slides[slide_index + 1].header}
                                </StyledHeader>
                            </>
                        )}
                        {slide_index + 2 >= slides.length ? undefined : (
                            <>
                                <StyledHeader
                                    onClick={() => yearClick(slide_index + 2)}
                                    as="h3"
                                    color="grey-17"
                                    lh="1.13"
                                >
                                    {slides[slide_index + 2].header}
                                </StyledHeader>
                            </>
                        )}
                    </Flex>
                </Flex>
            </Show.Mobile>
        </>
    )
}
Carousel.propTypes = {
    slides: PropTypes.array,
}

export default Carousel
