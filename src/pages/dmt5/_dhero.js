import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { deriv_app_url } from 'common/utility'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { Button, LinkButton } from 'components/form'
import device from 'themes/device.js'

const Wrapper = styled.div`
    position: relative;
    background-color: var(--color-black);
    width: 100%;
    display: flex;
    height: 602px;
    padding: 12rem 12rem 9rem 12rem;

    @media ${device.mobileL} {
        padding: unset;
        height: 634px;
        flex-direction: column-reverse;
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
    max-width: 580px;
    position: absolute;
    top: 2.3rem;
    right: 12rem;

    @media ${device.mobileL} {
        max-width: 425px;
        top: 0;
        right: 0;
        position: relative;
        margin-bottom: 25px;
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
    @media (max-width: 460px) {
        flex-wrap: wrap;
    }
`

const GoToLiveDemo = styled(Button)`
    color: var(--color-white);
    border-color: var(--color-black-5);
    margin-left: 1.6rem;
    padding: 1.1rem 1.6rem;
    width: auto;

    @media ${device.laptopM} {
        font-size: 14px;
        margin-left: 0;
    }
    @media ${device.mobileL} {
        max-width: 100%;
        padding: 10px 11px;
        white-space: nowrap;
    }
`
const DemoButton = styled(LinkButton)`
    padding: 1.4rem 1.6rem;
    width: auto;
    font-size: 14px;
    margin-right: 2px;
    border: unset;

    @media ${device.mobileL} {
        padding: 1.5rem 1.6rem;
        height: 42px;
        white-space: nowrap;
    }
    @media (max-width: 460px) {
        margin-bottom: 2rem;
    }
`
const StyledContent = styled(Header)`
    font-size: 5.6rem;

    @media (max-width: 1322px) {
        font-size: 4.2rem;
    }
`
const InformationWrapper = styled(Flex)`
    width: 100%;
    max-width: 562px;

    @media ${device.mobileL} {
        top: 280px;
        max-width: 328px;
    }
`

const query = graphql`
    query {
        dbot: file(relativePath: { eq: "dbot_trade.png" }) {
            ...fadeIn
        }
        dmt5: file(relativePath: { eq: "dmt5_trade.png" }) {
            ...fadeIn
        }
        dtrader: file(relativePath: { eq: "dtrader_trade.png" }) {
            ...fadeIn
        }
        dtrader_mobile: file(relativePath: { eq: "dtrader_trade_mobile.png" }) {
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
    background_svg2,
    content,
    image_name,
    is_mobile,
    join_us_for_free,
    go_to_live_demo,
    Logo,
}) => {
    const data = useStaticQuery(query)
    const handleRedirect = () => {
        const path = image_name === 'dbot' ? '/bot' : '/'
        window.open(deriv_app_url + path, '_blank')
    }
    const DLogo = styled(Logo)`
        margin-right: 1.6rem;
    `
    const BackgroundSVG = styled(background_svg)`
        position: absolute;
        top: 170px;
        right: 0;

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
    const BackgroundSVG2 = styled(background_svg2)`
        position: absolute;
        top: 0;
        right: 214px;

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
    return (
        <Wrapper>
            {!is_mobile && (
                <>
                    <BackgroundSVG />
                    <BackgroundSVG2 />
                </>
            )}

            <InformationWrapper height="unset" direction="column">
                <StyledHeader as="h1" weight={500}>
                    <DLogo />
                    {title}
                </StyledHeader>
                <HeroContent>
                    <StyledContent as="h2">{content}</StyledContent>
                </HeroContent>
                <LinkWrapper>
                    {join_us_for_free && (
                        <DemoButton secondary="true" to="/signup/">
                            {localize('Create free demo account')}
                        </DemoButton>
                    )}
                    {go_to_live_demo && (
                        <GoToLiveDemo tertiary onClick={handleRedirect}>
                            {localize('Go to live demo')}
                        </GoToLiveDemo>
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
    go_to_live_demo: PropTypes.bool,
    image_name: PropTypes.string,
    is_mobile: PropTypes.bool,
    join_us_for_free: PropTypes.bool,
    Logo: PropTypes.func,
    title: PropTypes.string,
}

export default DHero
