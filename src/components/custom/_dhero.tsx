import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { Button, LinkButton } from 'components/form'
import device from 'themes/device'
import useHandleSignup from 'components/hooks/use-handle-signup'
import { useCountryRule } from 'components/hooks/use-country-rule'

type DHeroProps = {
    background_alt?: string
    background_image_name?: string
    background_svg?: string
    content?: string | JSX.Element
    go_to_live_demo?: boolean
    image_name?: string
    is_mobile?: boolean | string
    join_us_for_free?: boolean
    Logo?: string
    title?: string | JSX.Element
}

const Wrapper = styled.div`
    position: relative;
    background-color: var(--color-black);
    width: 100%;
    display: flex;
    padding: 9rem 12rem;
    min-height: 575px;

    @media ${device.desktopS} {
        padding-left: 18%;
    }

    @media ${device.laptopM} {
        min-height: unset;
        padding: 8rem 12rem 8rem 4rem;
    }
    @media ${device.tabletL} {
        flex-direction: column;
    }
    @media ${device.tablet} {
        flex-direction: column-reverse;
        align-items: center;
        padding: 16px 16px 40px;
    }
`
const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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
    right: 12rem;
    bottom: 50%;
    left: auto;
    display: flex;
    align-items: center;

    @media ${device.desktop} {
        max-width: 606px;
    }

    @media ${device.laptopM} {
        max-width: 500px;
        right: 8rem;
    }
    @media ${device.laptop} {
        max-width: 450px;
        right: 10rem;
    }
    @media ${device.tabletL} {
        max-width: 390px;
        right: 2rem;
    }
    @media ${device.tabletS} {
        max-width: 380px;
    }
    @media ${device.tablet} {
        max-width: 328px;
        top: auto;
        right: auto;
        bottom: 50%;
        left: auto;
        position: relative;
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
        width: 100%;
    }

    @media (max-width: 360px) {
        white-space: nowrap;
    }
`
const DemoButton = styled(Button)`
    padding: 14px 16px;
    width: auto;
    font-size: 14px;
    margin-right: 1.6rem;
    border: unset;

    @media ${device.mobileL} {
        white-space: nowrap;
        margin-bottom: 1.6rem;
        margin-right: unset;
        width: 100%;
    }
`

const BackgroundSVG = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 600px;

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
        width: 60%;
        height: 250px;
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
    }
    @media ${device.tablet} {
        width: 100%;
        margin-top: 8rem;
    }
    @media ${device.mobileL} {
        max-width: 328px;
    }
`

const DLogo = styled.img`
    width: 32px;
    height: 32px;
    margin-right: 1.6rem;
`

const query = graphql`
    {
        dbot: file(relativePath: { eq: "dbot/dbot_trade.png" }) {
            ...fadeIn
        }
        dmt5: file(relativePath: { eq: "dmt5/dmt5_trade.png" }) {
            ...fadeIn
        }
        dtrader: file(relativePath: { eq: "dtrader/dtrader_trade.png" }) {
            ...fadeIn
        }
        dtrader_eu: file(relativePath: { eq: "dtrader/dtrader_trade_eu.png" }) {
            ...fadeIn
        }
        dbot_mobile: file(relativePath: { eq: "dbot/dbot_trade_mobile.png" }) {
            ...fadeIn
        }
        dmt5_mobile: file(relativePath: { eq: "dmt5/dmt5_trade_mobile.png" }) {
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
    join_us_for_free,
    go_to_live_demo,
    Logo,
}: DHeroProps) => {
    const data = useStaticQuery(query)
    const getLinkType = () => (image_name === 'dbot' ? 'dbot' : 'deriv_app')
    const handleSignup = useHandleSignup()
    const { is_eu } = useCountryRule()

    return (
        <Wrapper>
            <BackgroundSVG src={background_svg} alt="background svg" />

            <InformationWrapper height="unset" direction="column">
                <StyledHeader as="h4" weight="normal">
                    <DLogo src={Logo} alt="logo" width="32" height="32" />
                    {title}
                </StyledHeader>
                <HeroContent>
                    <Header as="h1" type="display-title" color="white" mt="1.5rem">
                        {content}
                    </Header>
                </HeroContent>
                <LinkWrapper>
                    {join_us_for_free && (
                        <DemoButton onClick={handleSignup} id="dm-hero-signup-1" secondary>
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
                    <QueryImage
                        data={data[is_eu ? 'dtrader_eu' : 'dtrader']}
                        alt={background_alt}
                    />
                ) : (
                    <QueryImage data={data[image_name]} alt={background_alt} />
                )}
            </LottieWrapper>
        </Wrapper>
    )
}

export default DHero
