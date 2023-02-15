import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container, Mobile } from 'components/containers'
import { Carousel, CarouselProps } from 'components/elements'
import device from 'themes/device'
import { useLangDirection } from 'components/hooks/use-lang-direction'
import useBreakpoints from 'components/hooks/use-breakpoints'

const SmallContainer = styled(Container)`
    width: 60%;
    max-width: 62.5rem;

    @media ${device.desktop} {
        max-width: 800px;
    }
    @media ${device.laptopL} {
        width: 60%;
    }
    @media ${device.desktopL} {
        max-width: 1000px;
    }
    @media ${device.tabletL} {
        width: 90%;
        padding-left: 0;
        padding-right: 0;
    }
`
const Background = styled.div`
    width: 100%;
    background: var(--color-red);
    border-radius: 16px;
    height: 15.4rem;
    position: absolute;
    top: 0;
`

const Wrapper = styled(SmallContainer)`
    width: 70%;
    position: relative;

    @media (max-width: 770px) {
        width: 81%;
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
    background: var(--color-red);
    border-radius: 16px;
    width: 30%;

    @media ${device.mobileL} {
        width: 184px;
    }
`

const Item = ({ children, ...props }) => (
    <div {...props} style={{ height: '100%' }}>
        {children}
    </div>
)

Item.propTypes = {
    children: PropTypes.node,
}

type MarketsCarouselProps = {
    children: React.ReactNode[]
}

const MarketsCarousel = ({ children }: MarketsCarouselProps) => {
    const lang_direction = useLangDirection()
    const { is_mobile } = useBreakpoints()

    const carousel_props: CarouselProps = {
        options: {
            align: 'start',
            containScroll: 'trimSnaps',
            direction: lang_direction,
        },
        container_style: {
            width: '90%',
            position: 'relative',
            margin: '0 auto',
        },
        slide_style: {
            flex: is_mobile ? '0 0 100%' : '0 0 50%',
            position: 'relative',
            margin: '4rem 0',
        },
        chevron_style: {
            chevron_color: 'red',
        },
        navigation_style: {
            nav_color: 'red',
            height: '10px',
            bottom_offset: '0',
        },
    }

    return (
        <>
            <Wrapper>
                <Carousel {...carousel_props}>{children.map((child) => child)}</Carousel>
            </Wrapper>
            {/* <Mobile breakpoint={'bp680'}>
                <MobileBackground>
                    <SmallContainer fd="column">{children}</SmallContainer>
                </MobileBackground>
            </Mobile> */}
        </>
    )
}

MarketsCarousel.propTypes = {
    children: PropTypes.node,
}

MarketsCarousel.Item = Item

export default MarketsCarousel
