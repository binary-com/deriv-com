import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { deriv_app_url } from 'common/utility'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import device from 'themes/device.js'

const Wrapper = styled(Flex)`
    position: relative;
    justify-content: flex-start;
    background-color: var(--color-black);
    height: 60.2rem;
    padding: 12rem 12rem 9rem 12rem;

    @media (max-width: 1254px) {
        padding: 8rem 12rem 9rem 4rem;
    }
    @media ${device.laptopM} {
        height: 52.7rem;
        padding: 8rem 12rem 9rem 8rem;
    }
    @media ${device.laptop} {
        height: 56.8rem;
    }
    @media ${device.tabletL} {
        height: 53rem;
    }
    @media ${device.tablet} {
        padding: 0 0 40px;
        height: 95.4rem;
        flex-direction: column-reverse;
    }
    @media ${device.tabletS} {
        height: 89.4rem;
    }
    @media ${device.mobileL} {
        height: 81rem;
    }
    @media ${device.mobileM} {
        height: 75.4rem;
    }
`
const HeroContent = styled(Flex)`
    flex-direction: column;
    justify-content: flex-start;
    height: unset;

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
    @media ${device.tablet} {
        font-size: 20px;
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
    @media ${device.mobileL} {
        max-width: 425px;
        top: 0;
        right: 0;
        margin-bottom: 25px;
    }
`

const LinkWrapper = styled.div`
    display: flex;
    margin-top: 3.2rem;

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
    padding: 1.4rem 1.6rem;
    width: 100%;
    max-width: 20.2rem;
    font-size: 14px;
    max-height: 4rem;
    height: 100%;
    margin-right: 2px;
    border: unset;

    @media ${device.tablet} {
        padding: 1.5rem 1.6rem;
        height: 42px;
        white-space: nowrap;
        display: inline-block;
        max-width: 202px;
        max-height: 40px;
    }
`
const InformationWrapper = styled(Flex)`
    width: 100%;
    max-width: 56.2rem;

    @media (max-width: 1376px) {
        max-width: 44rem;
    }
    @media ${device.tabletL} {
        max-width: 40rem;
    }
    @media ${device.tablet} {
        top: 280px;
        max-width: 328px;
        padding: 0 16px;
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
    const redirectUrl = () => {
        const path = image_name === 'dbot' ? '/bot' : '/'
        return deriv_app_url + path
    }
    const DLogo = styled(Logo)`
        margin-right: 1.6rem;
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
    const BackgroundSVG = styled(background_svg)`
        ${HeroBackground}
        position: absolute;
        top: 170px;
        right: 0;
    `
    const BackgroundSVG2 = styled(background_svg2)`
        ${HeroBackground}
        position: absolute;
        top: 0;
        right: 214px;

        @media ${device.tabletL} {
            right: 120px;
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
                    <Header as="h1">{content}</Header>
                </HeroContent>
                <LinkWrapper>
                    {join_us_for_free && (
                        <StyledLinkButton secondary="true" to="/signup/">
                            {localize('Create free demo account')}
                        </StyledLinkButton>
                    )}
                    {go_to_live_demo && (
                        <StyledLinkButton external secondary="true" to={redirectUrl()}>
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
    go_to_live_demo: PropTypes.bool,
    image_name: PropTypes.string,
    is_mobile: PropTypes.bool,
    join_us_for_free: PropTypes.bool,
    Logo: PropTypes.func,
    title: PropTypes.string,
}

export default DHero
