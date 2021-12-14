import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import device from 'themes/device.js'

const Wrapper = styled(Flex)`
    position: relative;
    justify-content: flex-start;
    background-color: var(--color-black);
    height: unset;
    min-height: ${(props) => props.d_height};
    padding: 2rem 12rem;

    @media ${device.desktopS} {
        padding-left: 18%;
    }
    @media ${device.laptopM} {
        height: ${(props) => props.laptopM_height};
        min-height: unset;
    }
    @media ${device.laptop} {
        height: ${(props) => props.laptop_height};
        padding: 2rem 8rem;
    }
    @media ${device.tabletL} {
        height: ${(props) => props.tabletL_height};
        align-items: center;
    }
    @media ${device.tablet} {
        padding: 0 0 40px;
        height: unset;
        flex-direction: column-reverse;
    }
`
const HeroContent = styled(Flex)`
    flex-direction: column;
    justify-content: flex-start;
    height: unset;

    /* TODO: remove these selectors and have conditional logics all in HeroHeader instead */
    ${Header} {
        color: var(--color-white);
        display: flex;
        margin-top: 10px;
        line-height: 1.25;
    }

    @media ${device.mobileM} {
        ${Header} {
            font-size: ${({ is_ppc }) => is_ppc && '27.5px'};
        }
    }
`
const StyledHeader = styled(Header)`
    color: var(--color-white);
    display: flex;
    align-items: center;
    margin-top: 0;
    font-size: 2.4rem;

    @media ${device.laptopM} {
        font-size: 24px;
    }
    @media ${device.tablet} {
        font-size: 20px;
        font-weight: normal;
    }
`

const HeroHeader = styled(Header)`
    @media (max-width: 1315px) {
        font-size: 4.8rem;
    }
    @media ${device.tablet} {
        font-size: 40px;
        line-height: 50px;
    }
`

const LottieWrapper = styled.div`
    width: 100%;
    max-width: 58rem;
    position: absolute;
    top: 2.3rem;
    right: 12rem;

    @media ${device.laptopM} {
        max-width: 51rem;
    }
    @media ${device.tabletL} {
        max-width: 54rem;
        right: 3rem;
    }
    @media ${device.tablet} {
        position: relative;
    }
    @media ${device.mobileL} {
        max-width: 425px;
        top: 0;
        right: 0;
        margin-bottom: 25px;
    }
`

const LinkWrapper = styled.div`
    display: flex;
    margin-top: 6.3rem;

    @media (max-width: 1420px) {
        top: 480px;
    }
    @media ${device.laptop} {
        top: 350px;
        display: inline-block;
    }
    @media ${device.tabletL} {
        top: 236px;
    }
    @media ${device.tablet} {
        position: unset;
        top: unset;
        justify-content: start;
        margin-top: 40px;
    }
`

const StyledLinkButton = styled(LinkButton)`
    padding: 14px 16px;
    width: fit-content;
    height: 100%;
    margin-right: 2px;
    border: unset;

    @media ${device.tablet} {
        height: 40px;
        white-space: nowrap;
        display: inline-block;
        max-height: 40px;
    }
`
const InformationWrapper = styled(Flex)`
    width: 100%;
    max-width: 56.2rem;
    z-index: 1;

    @media (max-width: 1376px) {
        max-width: 52rem;
    }
    @media (max-width: 1270px) {
        max-width: 46rem;
    }
    @media ${device.laptopM} {
        max-width: 40rem;
    }
    @media ${device.laptop} {
        max-width: 38rem;
    }
    @media ${device.tablet} {
        top: 280px;
        max-width: 450px;
        padding: 0 16px;
        margin-top: 20px;
        align-items: center;
    }
    @media ${device.mobileL} {
        margin-top: 0;
        align-items: unset;
    }
    @media ${device.mobileS} {
        padding: 0 12px;
    }
`

const query = graphql`
    query {
        dbot: file(relativePath: { eq: "dbot/dbot_trade.png" }) {
            ...fadeIn
        }
        dmt5: file(relativePath: { eq: "dmt5/dmt5_trade.png" }) {
            ...fadeIn
        }
        dtrader: file(relativePath: { eq: "dtrader/dtrader_trade.png" }) {
            ...fadeIn
        }
        dtrader_mobile: file(relativePath: { eq: "dtrader/dtrader_trade_mobile.png" }) {
            ...fadeIn
        }
        dbot_mobile: file(relativePath: { eq: "dbot/dbot_trade_mobile.png" }) {
            ...fadeIn
        }
        dmt5_mobile: file(relativePath: { eq: "dmt5/dmt5_trade_mobile.png" }) {
            ...fadeIn
        }
        deriv_x: file(relativePath: { eq: "deriv-x/hero-laptop.png" }) {
            ...bannerImage
        }
        deriv_x_mobile: file(relativePath: { eq: "deriv-x/hero-laptop-mobile.png" }) {
            ...bannerImage
        }
    }
`

const DHero = ({
    title,
    background_alt,
    background_svg,
    background_svg2,
    content,
    image_name,
    is_mobile,
    join_us_for_free,
    go_to_live_demo,
    is_ppc,
    Logo,
    d_height,
    laptopM_height,
    laptop_height,
    tabletL_height,
}) => {
    const data = useStaticQuery(query)
    const getLinkType = () => (image_name === 'dbot' ? 'dbot' : 'deriv_app')

    const DLogo = styled.img`
        width: 32px !important;
        height: 32px !important;
        margin-right: 1.6rem;
        margin-bottom: 6px;
        @media ${device.tabletS} {
            margin-right: 1rem;
        }
    `
    const HeroBackground = css`
        @media ${device.laptopM} {
            width: 48%;
            max-width: 492px;
            height: initial;
        }
        @media ${device.laptop} {
            width: 50%;
        }
        @media ${device.tabletL} {
            width: 45%;
            max-width: 350px;
        }
        @media ${device.tablet} {
            width: 70%;
        }
        @media ${device.tabletS} {
            width: 80%;
            max-width: 337px;
        }
        @media ${device.mobileL} {
            max-width: 250px;
            min-height: 244px;
        }
        @media ${device.mobileM} {
            max-width: 205px;
            min-height: 0;
        }
    `
    const BackgroundSVG = styled.img`
        ${HeroBackground}
        position: absolute;
        bottom: 0;
        right: 0;

        @media ${device.tablet} {
            top: 170px;
        }
    `
    const BackgroundSVG2 = styled.img`
        ${HeroBackground}
        position: absolute;
        top: 0;
        right: 214px;

        @media ${device.tabletL} {
            right: 120px;
        }
    `

    return (
        <Wrapper
            d_height={d_height}
            laptopM_height={laptopM_height}
            laptop_height={laptop_height}
            tabletL_height={tabletL_height}
        >
            {!is_mobile && (
                <>
                    <BackgroundSVG src={background_svg} alt="background svg" />
                    <BackgroundSVG2 src={background_svg2} alt="background svg 2" />
                </>
            )}

            <InformationWrapper height="unset" direction="column">
                <StyledHeader as="h4" type="sub-section-title" weight={500}>
                    <DLogo src={Logo} alt="logo" width="32" height="32" />
                    {title}
                </StyledHeader>
                <HeroContent is_ppc={is_ppc}>
                    <HeroHeader as="h1" type="display-title">
                        {content}
                    </HeroHeader>
                </HeroContent>
                <LinkWrapper>
                    {join_us_for_free && (
                        <StyledLinkButton
                            id="dm-hero-signup-2"
                            secondary="true"
                            to={is_ppc ? '/landing/signup/' : '/signup/'}
                        >
                            {localize('Create free demo account')}
                        </StyledLinkButton>
                    )}
                    {go_to_live_demo && (
                        <StyledLinkButton
                            external="true"
                            secondary="true"
                            type={getLinkType()}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                        >
                            {localize('Go to live demo')}
                        </StyledLinkButton>
                    )}
                </LinkWrapper>
            </InformationWrapper>

            <LottieWrapper>
                <QueryImage
                    data={data[is_mobile ? image_name + '_mobile' : image_name]}
                    alt={background_alt}
                />
            </LottieWrapper>
        </Wrapper>
    )
}

DHero.propTypes = {
    background_alt: PropTypes.string,
    background_image_name: PropTypes.string,
    background_svg: PropTypes.func,
    background_svg2: PropTypes.func,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    d_height: PropTypes.string,
    go_to_live_demo: PropTypes.bool,
    image_name: PropTypes.string,
    is_mobile: PropTypes.bool,
    is_ppc: PropTypes.bool,
    join_us_for_free: PropTypes.bool,
    laptop_height: PropTypes.string,
    laptopM_height: PropTypes.string,
    Logo: PropTypes.any,
    tabletL_height: PropTypes.string,
    title: PropTypes.string,
}

export default DHero
