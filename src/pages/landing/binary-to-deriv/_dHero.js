import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Carousel, Header, QueryImage } from 'components/elements'
import { Container, Flex } from 'components/containers'
import device from 'themes/device.js'

const MainWrapper = styled(Flex)`
    background: linear-gradient(241.35deg, #2a3052 12.86%, #060c11 85.61%, #15212d 85.61%);
    position: relative;
`
const ParentWrapper = styled(Container)`
    position: relative;
    height: 100%;
    z-index: 2;
    padding: 12rem 0;
    justify-content: flex-start;

    @media ${device.tabletL} {
        height: unset;
        max-width: 58.8rem;
        padding: 16px 0 40px;
        flex-direction: column-reverse;
    }
`
const ItemsWrapper = styled(Flex)`
    flex-direction: row;
`
const LeftWrapper = styled(Flex)`
    flex-direction: column;
    align-items: flex-start;
    max-width: 588px;
    max-height: 312px;
    margin-right: 24px;
`

const query = graphql`
    query {
        hero_dmt5_banner: file(relativePath: { eq: "binary-to-deriv/hero-dmt5.png" }) {
            ...fadeIn
        }
        hero_dtrader_banner: file(relativePath: { eq: "binary-to-deriv/hero-dtrader.png" }) {
            ...fadeIn
        }
    }
`

const DHero = () => {
    const data = useStaticQuery(query)
    const settings = {
        options: {
            loop: true,
        },
        container_style: {
            maxWidth: '100%',
            margin: '0 auto',
        },
        slide_style: {
            minWidth: '100%',
            position: 'relative',
        },
    }

    const heroDetails = [
        {
            header: 'It’s so easy to switch to Deriv',
            desc: 'No sign up required — just use your Binary.com credentials',
            img: 'hero_dmt5_banner',
            img_alt: 'dmt5 banner',
        },
        {
            header: 'It’s so easy to switch to Deriv',
            desc: 'You can trade on Deriv just as you do on Binary.com, with added products and benefits.',
            img: 'hero_dtrader_banner',
            img_alt: 'dtrader banner',
        },
    ]

    return (
        <MainWrapper>
            <ParentWrapper>
                <Carousel has_autoplay autoplay_interval={6000} {...settings}>
                    {heroDetails.map((items, index) => {
                        return (
                            <ItemsWrapper key={index}>
                                <LeftWrapper>
                                    <Header type="hero" color="white">
                                        {items.header}
                                    </Header>
                                    <Header
                                        type="heading-3"
                                        color="white"
                                        mt="32px"
                                        weight="normal"
                                    >
                                        {items.desc}
                                    </Header>
                                </LeftWrapper>
                                <Flex>
                                    <QueryImage
                                        data={data[items.img]}
                                        alt={items.img_alt}
                                        width="100%"
                                    />
                                </Flex>
                            </ItemsWrapper>
                        )
                    })}
                </Carousel>
            </ParentWrapper>
        </MainWrapper>
    )
}

export default DHero
