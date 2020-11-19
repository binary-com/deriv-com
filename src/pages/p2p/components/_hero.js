import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { Flex, Container, Show } from 'components/containers'
import { Header, QueryImage, ImageWrapper } from 'components/elements'
import { localize } from 'components/localization'
import { Background } from 'components/elements/background-image'
import { LinkButton } from 'components/form'
import device from 'themes/device.js'

const BackgroundWrapper = styled(Background)`
    height: 100%;
    width: 100%;
`

const Wrapper = styled(Container)`
    justify-content: space-between;
    background-color: transparent;
    width: 80%;
    height: 700px;

    @media ${device.tabletL} {
        height: 95.4rem;
        flex-direction: column-reverse;
        justify-content: center;
    }
    @media ${device.mobileM} {
        height: 678px;
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
    max-width: 48.6rem;
    z-index: 1;

    @media ${device.tabletL} {
        max-width: 40rem;
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
    }
    @media ${device.laptopM} {
        ${Header} {
            font-size: 22px;
        }
    }
    @media ${device.tabletL} {
        ${Header} {
            font-size: 16px;
        }
    }
    @media ${device.mobileL} {
        ${Header} {
            font-size: 20px;
            line-height: 25px;
            margin-top: 16px;
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
        width: 40rem;
        font-size: 6rem;
        line-height: 8rem;
    }
    @media ${device.tabletL} {
        margin-top: 2rem;
        width: 45rem;
        font-size: 40px;
        line-height: 6rem;
    }
    @media ${device.mobileL} {
        width: 250px;
        line-height: 50px;
    }
`

const TryButton = styled(LinkButton)`
    padding: 14px 16px;
    width: 125px;
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

const HeroComponent = ({ title, content, background_data, img_data }) => {
    return (
        <BackgroundWrapper data={background_data}>
            <Wrapper>
                <InformationWrapper height="unset" direction="column">
                    <StyledHeader as="h1" weight={500}>
                        {title}
                    </StyledHeader>
                    <HeroContent>
                        <Header as="h1">{content}</Header>
                    </HeroContent>
                    <TryButton
                        secondary="true"
                        to="/cashier/P2P"
                        external="true"
                        is_deriv_app_link
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {localize('Try DP2P now')}
                    </TryButton>
                </InformationWrapper>
                <ImgWrapper>
                    <QueryImage
                        data={img_data}
                        alt={'p2p background'}
                        height={'700px'}
                        width={'576px'}
                    />
                </ImgWrapper>
            </Wrapper>
        </BackgroundWrapper>
    )
}

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

const Hero = ({ title, content }) => {
    const data = useStaticQuery(query)

    return (
        <div>
            <Show.Desktop min_width="992">
                <HeroComponent
                    title={title}
                    content={content}
                    background_data={data['p2p_hero_background']}
                    img_data={data['p2p_hero_img']}
                />
            </Show.Desktop>
            <Show.Mobile>
                <HeroComponent
                    title={title}
                    content={content}
                    background_data={data['p2p_hero_background_mobile']}
                    img_data={data['p2p_hero_img']}
                />
            </Show.Mobile>
        </div>
    )
}

HeroComponent.propTypes = {
    background_data: PropTypes.any,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    img_data: PropTypes.any,
    title: PropTypes.string,
}

Hero.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    title: PropTypes.string,
}

export default Hero
