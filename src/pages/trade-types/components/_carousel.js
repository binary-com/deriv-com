import React from 'react'
import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { SmallContainer } from './_style'
import { Show, Flex } from 'components/containers'
import device from 'themes/device'
import Chevron from 'images/svg/carousel-chevron.svg'

const NoArrowWrapper = styled(Flex)`
    & > *:first-child {
        margin-right: 2.4rem;
    }
`

const SliderWrapper = styled.div`
    width: 100%;
    position: relative;
    margin-top: 4rem;

    & .swiper-wrapper {
        align-items: center;
    }
`
const StyledChevron = styled(Chevron)`
    opacity: ${(props) => (props.is_disabled ? '0.32' : '1')};
    height: 16px;
    width: 16px;

    g {
        g {
            fill: var(--color-red);
        }
    }
`
const ChevronRight = styled(StyledChevron)`
    transform: rotate(180deg);
`
const ChevronLeft = StyledChevron

const Next = styled.div`
    z-index: 10;
    position: absolute;
    top: 50%;
    right: 38px;
    width: 31px;
`
const Prev = styled.div`
    z-index: 10;
    position: absolute;
    top: 50%;
    left: 38px;
    width: 31px;
`

const Button = styled.button`
    border: none;
    background: transparent;

    &:hover {
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }
`

const Background = styled.div`
    width: 100%;
    background: var(--color-green-2);
    border-radius: 16px;
    max-height: 15.4rem;
    margin-bottom: 23rem;
`

const Wrapper = styled(SmallContainer)`
    @media (max-width: 680px) {
        display: none;
    }
`

const MobileBackground = styled.div`
    position: relative;
    padding-top: 1.6rem;
    padding-bottom: 0.8rem;
`

const GreenBG = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    background: var(--color-green-2);
    border-radius: 16px;
    width: 30%;

    @media ${device.mobileL} {
        width: 184px;
    }
`

const Item = ({ children, ...props }) => <div {...props}>{children}</div>

Item.propTypes = {
    children: PropTypes.node,
}

const Carousel = ({ children, ...props }) => {
    const ref = React.useRef(null)
    const [is_beginning, setBeginning] = React.useState(true)
    const [is_end, setEnd] = React.useState(false)
    const slides_per_view = 2
    const children_count = React.Children.toArray(children).length // React.children.count has a bug in it
    const show_arrow = children_count > slides_per_view

    React.useEffect(() => {
        if (ref.current !== null && ref.current.swiper !== null) {
            ref.current.swiper.on('slideChange', () => {
                setBeginning(ref.current.swiper.isBeginning)
                setEnd(ref.current.swiper.isEnd)
            })
        }
    }, [ref.current])

    React.useEffect(() => {
        return () => {
            if (ref.current !== null && ref.current.swiper !== null) {
                ref.current.swiper.off('slideChange')
            }
        }
    }, [])

    const goNext = () => {
        if (ref.current !== null && ref.current.swiper !== null) {
            ref.current.swiper.slideNext()
        }
    }

    const goPrev = () => {
        if (ref.current !== null && ref.current.swiper !== null) {
            ref.current.swiper.slidePrev()
        }
    }
    const params = {
        lazy: true,
        slidesPerView: slides_per_view,
        spaceBetween: 24,
        loop: false,
        height: '100%',
        noSwiping: !show_arrow,
    }
    return (
        <>
            <Helmet>
                <link rel="stylesheet" type="text/css" href="/css/swiper.css" />
            </Helmet>
            <Wrapper>
                <Background {...props}>
                    <SliderWrapper>
                        {show_arrow && (
                            <>
                                <Next>
                                    <Button onClick={goNext}>
                                        <ChevronRight is_disabled={is_end} />
                                    </Button>
                                </Next>
                                <Prev>
                                    <Button onClick={goPrev}>
                                        <ChevronLeft is_disabled={is_beginning} />
                                    </Button>
                                </Prev>
                            </>
                        )}
                        <div style={{ maxWidth: '60rem', margin: '0 auto' }}>
                            {show_arrow ? (
                                <Swiper {...params} ref={ref}>
                                    {children}
                                </Swiper>
                            ) : (
                                <NoArrowWrapper>{children}</NoArrowWrapper>
                            )}
                        </div>
                    </SliderWrapper>
                </Background>
            </Wrapper>
            <Show.Mobile min_width={680}>
                <MobileBackground>
                    <SmallContainer fd="column">{children}</SmallContainer>
                    <GreenBG />
                </MobileBackground>
            </Show.Mobile>
        </>
    )
}

Carousel.propTypes = {
    children: PropTypes.node,
}

Carousel.Item = Item

export default Carousel
