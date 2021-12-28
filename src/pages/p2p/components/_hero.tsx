import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Flex, Container } from 'components/containers'
import { Header, QueryImage, ImageWrapper } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { Background } from 'components/elements/background-image'
import { LinkButton } from 'components/form'
import device from 'themes/device.js'
import { useBrowserResize } from 'components/hooks/use-browser-resize'

const BackgroundWrapper = styled(Background)`
    height: 100%;
    width: 100%;
`

const Wrapper = styled(Container)`
    justify-content: space-between;
    background-color: transparent;
    height: unset;

    @media ${device.tabletL} {
        flex-direction: column-reverse;
        justify-content: center;
    }
`

const ImgWrapper = styled.div`
    width: 100%;
    height: 100%;
    max-width: 576px;
    max-height: 700px;

    .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
    }
    ${ImageWrapper} {
        width: 100%;
        height: 100%;

        picture > img {
            object-fit: contain !important;
        }
    }

    @media ${device.tabletL} {
        max-width: 313px;
        max-height: 380px;
    }
    @media ${device.mobileL} {
        max-width: 240px;
        max-height: 292px;
    }
`

const InformationWrapper = styled(Flex)`
    width: 100%;
    max-width: 60.5rem;
    z-index: 1;

    @media ${device.tabletL} {
        max-width: 42rem;
    }
    @media ${device.tablet} {
        top: 280px;
        max-width: 350px;
        padding: 0 16px;
    }
    @media ${device.mobileL} {
        max-width: 328px;
    }
    @media ${device.mobileM} {
        padding: 0;
    }
`

const HeroContent = styled(Flex)`
    flex-direction: column;
    justify-content: flex-start;
    height: unset;

    ${Header} {
        font-size: 24px;
        font-weight: 200;
        color: var(--color-white);
        display: flex;
        margin-top: 1.6rem;
        line-height: 3.6rem;
        max-width: 78%;
    }
    @media ${device.laptopM} {
        ${Header} {
            font-size: 22px;
        }
    }
    @media ${device.tabletL} {
        ${Header} {
            font-size: 16px;
            max-width: 100%;
        }
    }
    @media ${device.mobileL} {
        ${Header} {
            font-size: 20px;
            line-height: 25px;
            margin-top: 16px;
        }
    }
    @media ${device.mobileS} {
        ${Header} {
            max-width: 98%;
        }
    }
`
const StyledHeader = styled(Header)`
    color: var(--color-white);
    line-height: 10rem;
    font-weight: 600;
    display: flex;
    font-size: 8rem;

    @media ${device.laptopM} {
        width: 100%;
        font-size: 6rem;
        line-height: 8rem;
    }
    @media ${device.tabletL} {
        margin-top: 2rem;
        font-size: 40px;
        line-height: 6rem;
    }
    @media ${device.mobileL} {
        line-height: 50px;
    }
`

const TryButton = styled(LinkButton)`
    padding: 14px 16px;
    width: min-content;
    white-space: nowrap;
    font-size: 14px;
    margin-top: 3.2rem;
    margin-bottom: 40px;
    border: unset;

    @media ${device.mobileL} {
        padding: 1.5rem 1.6rem;
        height: 42px;
        white-space: nowrap;
        margin-bottom: 2rem;
    }
    @media ${device.mobileL} {
        margin-top: 24px;
        margin-bottom: 40px;
    }
`

const query = graphql`
    query {
        p2p_hero_background: file(relativePath: { eq: "p2p/p2p_hero_background.png" }) {
            ...fadeIn
        }
        p2p_hero_background_mobile: file(
            relativePath: { eq: "p2p/p2p_hero_background_mobile.png" }
        ) {
            ...fadeIn
        }
        p2p_hero_img: file(relativePath: { eq: "p2p/p2p_hero_img.png" }) {
            ...fadeIn
        }
    }
`

const Hero = () => {
    const data = useStaticQuery(query)
    const [is_mobile] = useBrowserResize()
    const background = is_mobile ? data['p2p_hero_background_mobile'] : data['p2p_hero_background']

    return (
        <BackgroundWrapper data={background}>
            <Wrapper>
                <InformationWrapper height="unset" direction="column">
                    <StyledHeader as="h1" weight={500}>
                        {localize('Hassle-free deposits and withdrawals')}
                    </StyledHeader>
                    <HeroContent>
                        <Header as="h2">
                            {
                                <Localize translate_text="Use your local currency to make deposits into and withdrawals from your Deriv account." />
                            }
                        </Header>
                    </HeroContent>
                    <TryButton
                        secondary="true"
                        to="/cashier/p2p"
                        external="true"
                        type="deriv_app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {localize('Try Deriv P2P now')}
                    </TryButton>
                </InformationWrapper>

                <ImgWrapper>
                    <QueryImage
                        data={data['p2p_hero_img']}
                        alt={'Deriv’s P2P mobile app'}
                        height={'700px'}
                        width={'576px'}
                    />
                </ImgWrapper>
            </Wrapper>
        </BackgroundWrapper>
    )
}

export default Hero
