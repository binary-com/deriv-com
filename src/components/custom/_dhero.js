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
    height: 575px;
    padding: 12rem 12rem 9rem 12rem;

    @media ${device.laptopM} {
        max-height: 429px;
        padding: 8rem 12rem 8rem 4rem;
    }
    @media ${device.tabletL} {
        max-height: 304px;
        flex-direction: column;
    }
    @media ${device.tablet} {
        flex-direction: column-reverse;
        max-height: 640px;
        padding: 0 16px 40px 16px;
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
    max-width: 606px;
    position: absolute;
    top: 10.8rem;
    right: 12rem;

    @media ${device.laptopM} {
        max-width: 500px;
        top: 8rem;
        right: 8rem;
    }
    @media ${device.laptop} {
        max-width: 450px;
        right: 10rem;
    }
    @media ${device.tabletL} {
        max-width: 390px;
        top: 5rem;
        right: 2rem;
    }
    @media ${device.tabletS} {
        max-width: 380px;
        top: 5rem;
        right: 2rem;
    }
    @media ${device.mobileL} {
        max-width: 328px;
        top: 34px;
        left: 50%;
        right: unset;
        transform: translateX(-50%);
    }
`

const LinkWrapper = styled.div`
    position: absolute;
    top: 444px;
    display: flex;

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
    @media (max-width: 359px) {
        flex-wrap: wrap;
    }
`

const GoToLiveDemo = styled(Button)`
    color: var(--color-white);
    border-color: var(--color-black-5);
    margin-left: 1.6rem;
    height: 40px;
    max-width: 139px;
    width: 100%;

    @media ${device.laptopM} {
        font-size: 14px;
        margin-left: 0;
    }
    @media ${device.mobileL} {
        max-width: 128px;
        padding: 10px 11px;
        height: 42px;
    }
`
const DemoButton = styled(LinkButton)`
    padding: 1.3rem 0;
    height: 40px;
    min-height: 40px;
    width: 202px;
    font-size: 14px;
    margin-right: 2px;
    border: unset;

    @media ${device.mobileL} {
        padding: 1.5rem 1.6rem;
        height: 42px;
    }
`
const StyledContent = styled(Header)`
    font-size: 5.6rem;
`
const InformationWrapper = styled(Flex)`
    width: 100%;
    max-width: 562px;
    position: absolute;
    top: 120px;

    @media (max-width: 1420px) {
        width: 77%;
        max-width: 385px;
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
    @media ${device.mobileS} {
        top: 230px;
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
        top: 0;
        right: 0;
        height: 112%;

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
    `
    return (
        <Wrapper>
            <BackgroundSVG />
            <InformationWrapper height="unset" direction="column">
                <StyledHeader as="h1" weight={500}>
                    <DLogo />
                    {title}
                </StyledHeader>
                <HeroContent>
                    <StyledContent as="h2">{content}</StyledContent>
                </HeroContent>
            </InformationWrapper>
            <LinkWrapper>
                {join_us_for_free ? (
                    <DemoButton secondary="true" to="/signup/">
                        {localize('Create free demo account')}
                    </DemoButton>
                ) : null}
                {go_to_live_demo ? (
                    <GoToLiveDemo tertiary onClick={handleRedirect}>
                        {localize('Go to live demo')}
                    </GoToLiveDemo>
                ) : null}
            </LinkWrapper>
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
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    go_to_live_demo: PropTypes.bool,
    image_name: PropTypes.string,
    is_mobile: PropTypes.bool,
    join_us_for_free: PropTypes.bool,
    Logo: PropTypes.func,
    title: PropTypes.string,
}

export default DHero
