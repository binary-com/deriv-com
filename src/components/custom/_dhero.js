import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { deriv_app_url, isBrowser } from 'common/utility'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { Button, LinkButton } from 'components/form'
import device, { size } from 'themes/device.js'

const Wrapper = styled.div`
    position: relative;
    background-color: var(--color-black);
    width: 100%;
    display: flex;
    height: 575px;
    padding: 12rem 12rem 9rem 12rem;

    @media ${device.laptopM} {
        max-height: 429px;
    }
    @media ${device.laptopM} {
        padding: 0 0 0 5rem;
    }
    @media ${device.tabletL} {
        max-height: 349px;
        flex-direction: column;
    }
    @media ${device.tablet} {
        flex-direction: column-reverse;
        max-height: unset;
        max-height: 640px;
        padding: 0 16px 40px 13px;
    }
`
const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 58.4rem;

    ${Header} {
        color: var(--color-white);
        display: flex;
        margin-top: 1.5rem;
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
`

const LottieWrapper = styled.div`
    width: 100%;
    max-width: 606px;
    position: absolute;
    top: 10.8rem;
    right: 12rem;

    @media ${device.laptopM} {
        right: 0;
        top: 5rem;
        width: 58%;
    }
    @media ${device.laptop} {
        width: 88%;
    }
    @media ${device.tabletL} {
        width: 50%;
    }
    @media ${device.tablet} {
        width: 66%;
        top: 34px;
        left: 50%;
        right: unset;
        transform: translateX(-50%);
    }
    @media ${device.tabletS} {
        width: 75%;
    }
    @media ${device.mobileM} {
        width: 91%;
    }
`

const GoToLiveDemo = styled(Button)`
    color: var(--color-white);
    border-color: var(--color-black-5);
    margin-left: 1.6rem;
    min-height: 40px;
    max-width: 139px;
    width: 100%;

    @media ${device.laptopM} {
        font-size: 14px;
        margin-left: 0;
    }
    @media ${device.mobileL} {
        max-width: 160px;
    }
`
const DemoButton = styled(LinkButton)`
    min-height: 40px;
    max-width: 202px;
    width: 100%;

    @media ${device.laptopM} {
        font-size: 14px;
        margin-right: 2px;
    }
    @media ${device.tablet} {
        max-width: 172px;
    }
`
const StyledContent = styled(Header)`
    font-size: 5.6rem;
`
const InformationWrapper = styled(Flex)`
    width: 66%;
    max-width: 399px;
    position: absolute;
    top: 120px;

    @media ${device.laptop} {
        width: 77%;
    }
    @media ${device.tabletL} {
        width: 52%;
    }
    @media ${device.tablet} {
        width: 100%;
        top: 350px;
    }
    @media ${device.mobileL} {
        top: 260px;
    }
`

const LinkWrapper = styled.div`
    position: absolute;
    top: 444px;
    width: 100%;

    @media ${device.laptopM} {
        top: 350px;
    }
    @media ${device.tabletL} {
        top: 270px;
    }
    @media ${device.tablet} {
        position: unset;
        top: unset;
        justify-content: start;
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
        height: 100%;

        @media ${device.laptopM} {
            max-width: 492px;
        }
        @media ${device.tabletL} {
            max-width: 400px;
            height: 350px;
        }
        @media ${device.tabletS} {
            max-width: 340px;
            height: 296px;
        }
        @media ${device.mobileL} {
            height: unset;
            top: 0;
        }
    `
    const [is_mobile, setMobile] = useState(false)
    const [is_tablet, setTablet] = useState(false)
    const handleResizeWindow = () => {
        setMobile(isBrowser() ? window.screen.width <= size.mobileL : false)
        setTablet(isBrowser() ? window.screen.width <= size.tabletL : false)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResizeWindow)
    })
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
                        {is_tablet
                            ? localize('Create demo account')
                            : localize('Create free demo account')}
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
    join_us_for_free: PropTypes.bool,
    Logo: PropTypes.func,
    title: PropTypes.string,
}

export default DHero
