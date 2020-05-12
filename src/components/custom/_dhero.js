import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { deriv_app_url } from 'common/utility'
import { localize } from 'components/localization'
import { Container, Show, Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { Button, LinkButton } from 'components/form'
import device from 'themes/device.js'

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
`
const StyledHeader = styled(Header)`
    color: var(--color-white);
    display: flex;
    margin-top: 0;
    font-size: 2.4rem;
`
const Wrapper = styled.div`
    position: relative;
    overflow: hidden;
    background-color: var(--color-black);
    width: 100%;
    padding: 10rem 0;
    display: flex;
    flex-direction: column;
`

const TryForFree = styled(LinkButton)`
    @media ${device.tabletL} {
        margin-right: 0.2rem;
        font-size: 1.55rem;
        margin-bottom: 2.4rem;
        padding: 1.2rem 1.6rem;
    }
`
const StyledContainer = styled(Container)`
    position: relative;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    font-size: 5.6rem;
`
const LottieWrapper = styled.div`
    width: 100%;
    height: 100%;
    max-width: 584px;
    max-height: 375px;
`
const GoToLiveDemo = styled(Button)`
    color: var(--color-white);
    border-color: var(--color-black-5);
    margin-left: 2.4rem;

    @media ${device.tabletL} {
        margin-left: 0;
        padding: 1rem 2.9rem;
        font-size: 1.55rem;
    }
`
const StyledContent = styled(Header)`
    font-size: 5.6rem;

    @media ${device.mobileL} {
        font-size: 4.8rem;
    }
    @media ${device.mobileS} {
        font-size: 4rem;
    }
`
const InformationWrapper = styled(Flex)`
    min-height: 36rem;
    @media ${device.tabletL} {
        align-items: flex-start;
    }
`
const LinkWrapper = styled.div`
    @media ${device.tabletL} {
        margin-top: 12rem;
        text-align: center;
        display: flex;
        flex-wrap: wrap;
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
        height: 109%;
    `
    return (
        <Wrapper>
            <Show.Desktop>
                <BackgroundSVG />
            </Show.Desktop>
            <StyledContainer>
                <InformationWrapper direction="column" jc="space-between">
                    <div>
                        <StyledHeader as="h1" weight={500}>
                            <DLogo />
                            {title}
                        </StyledHeader>
                        <HeroContent>
                            <StyledContent as="h2">{content}</StyledContent>
                        </HeroContent>
                    </div>
                    <div>
                        <LinkWrapper>
                            {join_us_for_free ? (
                                <TryForFree secondary="true" to="/signup/">
                                    {localize('Create free demo account')}
                                </TryForFree>
                            ) : null}
                            {go_to_live_demo ? (
                                <GoToLiveDemo tertiary onClick={handleRedirect}>
                                    {localize('Go to live demo')}
                                </GoToLiveDemo>
                            ) : null}
                        </LinkWrapper>
                    </div>
                </InformationWrapper>
                <div>
                    <Show.Desktop>
                        <LottieWrapper>
                            <QueryImage
                                data={data[image_name]}
                                alt={background_alt}
                                width="58.4rem"
                            />
                        </LottieWrapper>
                    </Show.Desktop>
                </div>
            </StyledContainer>
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
