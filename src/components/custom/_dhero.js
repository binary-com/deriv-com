import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import device from 'themes/device.js'

const Wrapper = styled.div`
    position: relative;
    background-color: var(--color-black);
    width: 100%;
    display: flex;

    /* min-height: 690px; */
    padding: 12rem 12rem 9rem 12rem;

    @media ${device.desktop}{
        /* min-height: 575px; */
    }

    @media ${device.desktopS} {
        padding-left: 18%;
    }

    @media ${device.laptopM} {
        /* max-height: 429px; */
        padding: 8rem 12rem 8rem 4rem;
    }
    @media ${device.tabletL} {
        /* min-height: 304px; */
        flex-direction: column;
    }
    @media ${device.tablet} {
        flex-direction: column-reverse;
        align-items: center;

        /* max-height: 640px; */
        padding: 16px 16px 40px;
    }
`
const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    ${Header} {
        color: var(--color-white);
        display: flex;
        margin-top: 1.5rem;
        line-height: 1.25;
    }

    @media ${device.laptopM} {
        ${Header} {
            font-size: 32px;
        }
    }
`
const StyledHeader = styled(Header)`
    color: var(--color-white);
    display: flex;
    margin-top: 0;
    font-size: 2.4rem;

    @media ${device.laptopM} {
        font-size: 24px;
    }
`

const LottieWrapper = styled.div`
    width: 100%;
    max-width: 730px;
    position: absolute;
    top: 50%;
    bottom:50%;
    right: 12rem;
    display: flex;
    align-items: center;
    
    @media ${device.desktop} {
        max-width:606px;
    }

    @media ${device.laptopM} {
        max-width: 500px;

        /* top: 8rem; */
        right: 8rem;
    }
    @media ${device.laptop} {
        max-width: 450px;
        right: 10rem;
    }
    @media ${device.tabletL} {
        max-width: 390px;

        /* top: 5rem; */
        right: 2rem;
    }
    @media ${device.tabletS} {
        max-width: 380px;

        /* top: 5rem; */
        right: 2rem;
    }
    @media ${device.tablet} {
        max-width: 328px;
        top: unset;
        left: unset;
        right: unset;
        position:relative;
    }
    @media ${device.mobileM} {
        max-width: 280px;
    }
`

const LinkWrapper = styled.div`
    display: flex;
    margin-top: 3.2rem;

    @media (max-width: 1420px) {
        top: 480px;
    }
    @media ${device.laptopM} {
        top: 350px;
    }
    @media ${device.tabletL} {
        top: 236px;
    }
    @media ${device.tablet} {
        position: unset;
        top: unset;
        justify-content: start;
    }
    @media ${device.mobileL} {
        flex-wrap: wrap;
    }
`

const GoToLiveDemo = styled(LinkButton)`
    color: var(--color-white);
    border-color: var(--color-black-5);
    padding: 12px 16px;
    width: auto;

    @media ${device.mobileL} {
        max-width: 100%;
        white-space: nowrap;
        margin-left: 0;
    }

    @media (max-width: 360px) {
        white-space: nowrap;
    }
`
const DemoButton = styled(LinkButton)`
    padding: 14px 16px;
    width: auto;
    font-size: 14px;
    margin-right: 1.6rem;
    border: unset;

    @media ${device.mobileL} {
        white-space: nowrap;
    }
    @media ${device.mobileL} {
        margin-bottom: 1.6rem;
    }
`
const StyledContent = styled(Header)`
    font-size: 6.4rem;

    @media (max-width: 1370px) {
        font-size: 4.2rem;
    }
`

const BackgroundSVG = styled.img`
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 30%;

        @media (max-width: 1680px) {
            width: 40%;
        }

        @media ${device.laptopM} {
            width: 48%;
            max-width: 492px;
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
            display:none;
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

const InformationWrapper = styled(Flex)`
    width: 100%;
    max-width: 562px;

    @media (max-width: 1370px) {
        max-width: 420px;
    }
    @media ${device.laptop} {
        max-width: 390px;
    }
    @media ${device.laptopM} {
        max-width: 410px;
    }
    @media ${device.tabletL} {
        width: 46%;
        max-width: 400px;
        top: 60px;
    }
    @media ${device.tablet} {
        width: 100%;
        top: 350px;
    }
    @media ${device.mobileL} {
        top: 280px;
        max-width: 328px;
    }
    @media ${device.mobileM} {
        top: 230px;
    }
`

const DLogo = styled.img`
        width: 32px !important;
        height: 32px !important;
        margin-right: 1.6rem;
    `

const query = graphql`
    {
        dbot: file(relativePath: { eq: "dbot_trade.png" }) {
            ...fadeIn
        }
        dmt5: file(relativePath: { eq: "dmt5_trade.png" }) {
            ...fadeIn
        }
        dtrader: file(relativePath: { eq: "dtrader_trade.png" }) {
            ...fadeIn
        }
        dbot_mobile: file(relativePath: { eq: "dbot_trade_mobile.png" }) {
            ...fadeIn
        }
        dmt5_mobile: file(relativePath: { eq: "dmt5_trade_mobile.png" }) {
            ...fadeIn
        }
    }
`

const DHero = ({
    title,
    background_alt,
    background_svg,
    content,
    image_name,
    is_mobile,
    join_us_for_free,
    go_to_live_demo,
    Logo,
}) => {
    const data = useStaticQuery(query)
    const getLinkType = () => (image_name === 'dbot' ? 'dbot' : 'deriv_app')

    return (
        <Wrapper>

            <BackgroundSVG src={background_svg} alt="background svg" />

            <InformationWrapper height="unset" direction="column">
                <StyledHeader as="h4" weight="normal">
                    <DLogo src={Logo} alt="logo" width="32" height="32" />
                    {title}
                </StyledHeader>
                <HeroContent>
                    <StyledContent as="h1">{content}</StyledContent>
                </HeroContent>
                <LinkWrapper>
                    {join_us_for_free && (
                        <DemoButton secondary="true" to="/signup/">
                            {localize('Create free demo account')}
                        </DemoButton>
                    )}
                    {go_to_live_demo && (
                        <GoToLiveDemo
                            tertiary
                            external
                            type={getLinkType()}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                        >
                            {localize('Go to live demo')}
                        </GoToLiveDemo>
                    )}
                </LinkWrapper>
            </InformationWrapper>

            <LottieWrapper>
                {image_name === 'dtrader' ? (
                    <QueryImage data={data['dtrader']} alt={background_alt} />
                ) : (
                        <QueryImage
                            data={data[is_mobile ? image_name + '_mobile' : image_name]}
                            alt={background_alt}
                        />
                    )}
            </LottieWrapper>
        </Wrapper>
    )
}

DHero.propTypes = {
    background_alt: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    background_image_name: PropTypes.string,
    background_svg: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    go_to_live_demo: PropTypes.bool,
    image_name: PropTypes.string,
    is_mobile: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    join_us_for_free: PropTypes.bool,
    Logo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    title: PropTypes.string,
}

export default DHero
