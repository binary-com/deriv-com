import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { Flex, Container } from 'components/containers'
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
    max-width: 1600px;
    width: 80%;
    height: 700px;

    @media ${device.tabletL} {
        height: 95.4rem;
        flex-direction: column-reverse;
        justify-content: center;
    }
    @media ${device.mobileM} {
        height: 75rem;
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
    @media ${device.mobileM} {
        ${Header} {
            font-size: 14px;
            line-height: 2.8rem;
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
        font-size: 4.5rem;
        line-height: 6rem;
    }
    @media ${device.mobileL} {
        width: 250px;
        font-size: 24px;
        line-height: 4.5rem;
    }
`

const TryButton = styled(LinkButton)`
    padding: 1.4rem 1.6rem;
    width: 125px;
    font-size: 14px;
    margin-top: 3.2rem;
    border: unset;

    @media ${device.mobileL} {
        padding: 1.5rem 1.6rem;
        height: 42px;
        white-space: nowrap;
        margin-bottom: 2rem;
    }
    @media ${device.mobileM} {
        margin-bottom: 4rem;
    }
`

const query = graphql`
    query {
        p2p_hero_background: file(relativePath: { eq: "p2p_hero_background.png" }) {
            ...fadeIn
        }
        p2p_hero_img: file(relativePath: { eq: "p2p_hero_img.png" }) {
            ...fadeIn
        }
    }
`

const Hero = ({ title, content }) => {
    const data = useStaticQuery(query)

    return (
        <BackgroundWrapper data={data['p2p_hero_background']}>
            <Wrapper>
                <InformationWrapper height="unset" direction="column">
                    <StyledHeader as="h1" weight={500}>
                        {title}
                    </StyledHeader>
                    <HeroContent>
                        <Header as="h1">{content}</Header>
                    </HeroContent>
                    <TryButton secondary="true" external is_deriv_app_link to="/cashier/P2P">
                        {localize('Try DP2P now')}
                    </TryButton>
                </InformationWrapper>
                <ImgWrapper>
                    <QueryImage
                        data={data['p2p_hero_img']}
                        alt={'p2p background'}
                        height={'700px'}
                        width={'576px'}
                    />
                </ImgWrapper>
            </Wrapper>
        </BackgroundWrapper>
    )
}

Hero.propTypes = {
    background_alt: PropTypes.string,
    background_image_name: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    go_to_live_demo: PropTypes.bool,
    image_name: PropTypes.string,
    is_mobile: PropTypes.bool,
    join_us_for_free: PropTypes.bool,
    Logo: PropTypes.func,
    title: PropTypes.string,
}

export default Hero
