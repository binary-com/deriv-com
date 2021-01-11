import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { SmallContainer } from './_style'
import { Show } from 'components/containers'
import { Carousel } from 'components/elements'
import device from 'themes/device'

const Background = styled.div`
    width: 100%;
    background: var(--color-green-2);
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

const Item = ({ children, ...props }) => (
    <div {...props} style={{ height: '100%' }}>
        {children}
    </div>
)

Item.propTypes = {
    children: PropTypes.node,
}

const MarketsCarousel = ({ children }) => {
    const carousel_props = {
        options: {
            align: 'start',
            containScroll: 'trimSnaps',
        },
        container_style: {
            width: '90%',
            position: 'relative',
            margin: '0 auto',
        },
        slide_style: {
            flex: '0 0 50%',
            position: 'relative',
            margin: '4rem 0',
        },
        chevron_style: {
            chevron_color: 'red',
        },
    }

    return (
        <>
            <Wrapper>
                <Background />
                <Carousel {...carousel_props}>{children.map((child) => child)}</Carousel>
            </Wrapper>
            <Show.Mobile min_width={'bp680'}>
                <MobileBackground>
                    <SmallContainer fd="column">{children}</SmallContainer>
                    <GreenBG />
                </MobileBackground>
            </Show.Mobile>
        </>
    )
}

MarketsCarousel.propTypes = {
    children: PropTypes.node,
}

MarketsCarousel.Item = Item

export default MarketsCarousel
