import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Carousel, Header, QueryImage } from 'components/elements'
import { Container, Flex } from 'components/containers'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import { LinkButton } from 'components/form'
import device from 'themes/device.js'
import hero_desktop from 'images/common/binary-to-deriv/hero_desktop.png'
import hero_mobile from 'images/common/binary-to-deriv/hero_mobile.png'

const MainWrapper = styled(Flex)`
    position: relative;
`
const BackgroundWrapper = styled(Flex)`
    background-image: url(${(props) => props.bg_image});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
`
const ParentWrapper = styled(Container)`
    position: relative;
    z-index: 2;
    padding: 192px 0 120px;
    justify-content: flex-start;

    @media (max-width: 1366px) {
        width: 90%;
    }

    @media ${device.tabletL} {
        padding: 86px 0 80px;
    }
`
const ItemsWrapper = styled(Flex)`
    flex-direction: row;
    height: 478px;

    @media ${device.desktopL} {
        height: 500px;
    }

    @media ${device.tabletL} {
        flex-direction: column-reverse;
        height: auto;
        max-width: 58.8rem;
    }
`
const LeftWrapper = styled(Flex)`
    flex-direction: column;
    align-items: flex-start;
    width: 588px;
    max-height: 312px;
    margin-right: 24px;

    @media ${device.desktopL} {
        max-height: 100%;
    }
    @media (max-width: 1222px) {
        max-height: unset;
        padding-bottom: 80px;
    }
    @media ${device.tabletL} {
        width: 100%;
        margin-right: 0;
        max-height: unset;
        justify-content: center;
        padding-bottom: 0;
    }
`
const RightWrapper = styled(Flex)`
    width: 540px;

    @media ${device.tabletL} {
        width: 100%;
        margin: 0 auto;
    }
`
export const DesktopWrapper = styled(Flex)`
    @media ${device.tablet} {
        display: none;
    }
`
export const MobileWrapper = styled.div`
    display: none;

    @media ${device.tablet} {
        display: flex;
        justify-content: center;
        width: 100%;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.desktopL} {
        font-size: 80px;
    }
    @media ${device.tablet} {
        font-size: 32px;
        line-height: 40px;
    }
`
const StyledSmallHeader = styled(Header)`
    @media ${device.tablet} {
        font-size: 18px;
        line-height: 26px;
    }
`
const BtnWrapper = styled(Flex)`
    margin-top: 24px;
    justify-content: flex-start;
`
const StyledLinkButton = styled(LinkButton)`
    padding: 10px 16px;
    background: var(--color-green-3);
    border: 2px solid var(--color-green-3);
`
const query = graphql`
    query {
        hero_dmt5_banner: file(relativePath: { eq: "binary-to-deriv/hero-dmt5.png" }) {
            ...fadeIn
        }
        hero_dtrader_banner: file(relativePath: { eq: "binary-to-deriv/hero-dtrader.png" }) {
            ...fadeIn
        }
        hero_dmt5_banner_mobile: file(
            relativePath: { eq: "binary-to-deriv/hero-dmt5-mobile.png" }
        ) {
            ...fadeIn
        }
        hero_dtrader_banner_mobile: file(
            relativePath: { eq: "binary-to-deriv/hero-dtrader-mobile.png" }
        ) {
            ...fadeIn
        }
    }
`

const DHero = () => {
    const [is_mobile] = useBrowserResize()
    const background_url = !is_mobile ? hero_desktop : hero_mobile
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
            img_mobile: 'hero_dmt5_banner_mobile',
            img_alt_mobile: 'dmt5 banner mobile',
        },
        {
            header: 'It’s so easy to switch to Deriv',
            desc: 'You can trade on Deriv just as you do on Binary.com, with added products and benefits.',
            img: 'hero_dtrader_banner',
            img_alt: 'dtrader banner',
            img_mobile: 'hero_dtrader_banner_mobile',
            img_alt_mobile: 'dtrader banner mobile',
        },
    ]

    return (
        <MainWrapper>
            <ParentWrapper>
                <Carousel has_autoplay autoplay_interval={6000} {...settings}>
                    {heroDetails.map((items, index) => {
                        return (
                            <Flex key={index}>
                                <ItemsWrapper>
                                    <LeftWrapper>
                                        <StyledHeader
                                            type="hero"
                                            color="white"
                                            mb="32px"
                                            mt="24px"
                                            tabletL={{
                                                max_width: '58.8rem',
                                                mb: '16px',
                                                mt: '16px',
                                            }}
                                        >
                                            {items.header}
                                        </StyledHeader>
                                        <StyledSmallHeader
                                            type="heading-3"
                                            color="white"
                                            weight="normal"
                                            tabletL={{ max_width: '58.8rem' }}
                                        >
                                            {items.desc}
                                        </StyledSmallHeader>
                                        <MobileWrapper>
                                            <BtnWrapper>
                                                <StyledLinkButton
                                                    to="https://deriv.com/"
                                                    rel="noopener noreferrer"
                                                    secondary="true"
                                                    external="true"
                                                >
                                                    Take me to Deriv
                                                </StyledLinkButton>
                                            </BtnWrapper>
                                        </MobileWrapper>
                                    </LeftWrapper>
                                    <RightWrapper>
                                        <DesktopWrapper>
                                            <QueryImage
                                                data={data[items.img]}
                                                alt={items.img_alt}
                                                width="100%"
                                            />
                                        </DesktopWrapper>
                                        <MobileWrapper>
                                            <QueryImage
                                                data={data[items.img_mobile]}
                                                alt={items.img_alt_mobile}
                                                width="100%"
                                            />
                                        </MobileWrapper>
                                    </RightWrapper>
                                </ItemsWrapper>
                            </Flex>
                        )
                    })}
                </Carousel>
            </ParentWrapper>
            <BackgroundWrapper bg_image={background_url} />
        </MainWrapper>
    )
}

export default DHero
