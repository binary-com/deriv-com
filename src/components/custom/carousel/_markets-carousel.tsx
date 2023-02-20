import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container } from 'components/containers'
import { Carousel, CarouselProps } from 'components/elements'
import device from 'themes/device'
import { useLangDirection } from 'components/hooks/use-lang-direction'
import useBreakpoints from 'components/hooks/use-breakpoints'

const SmallContainer = styled(Container)`
    width: 60%;
    max-width: 62.5rem;

    @media ${device.desktop} {
        max-width: 1200px;
        width: 100%;
    }
    @media ${device.laptopL} {
        width: 100%;
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

const Wrapper = styled(SmallContainer)`
    position: relative;

    @media (max-width: 770px) {
        width: 81%;
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
    const { is_mobile_or_tablet } = useBreakpoints()

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
            flex: is_mobile_or_tablet ? '0 0 100%' : '0 0 33.33%',
            position: 'relative',
            margin: '4rem 0',
        },
        chevron_style: {
            chevron_color: 'black-9',
        },
        navigation_style: {
            nav_color: 'red',
            height: '10px',
            bottom_offset: '0',
        },
        navigation_css: [
            {
                display: is_mobile_or_tablet ? 'flex' : 'none',
            },
        ],
    }

    return (
        <>
            <Wrapper>
                <Carousel {...carousel_props}>{children.map((child) => child)}</Carousel>
            </Wrapper>
        </>
    )
}

MarketsCarousel.propTypes = {
    children: PropTypes.node,
}

MarketsCarousel.Item = Item

export default MarketsCarousel
