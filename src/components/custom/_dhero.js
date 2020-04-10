import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { deriv_app_url } from 'common/utility'
import { localize } from 'components/localization'
import { Container, Show, Flex } from 'components/containers'
import { Header, Image } from 'components/elements'
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
        width: 100%;
        margin-top: 18.5rem;
        max-width: 47rem;
        margin-bottom: 2.4rem;
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
    }
    @media ${device.tabletL} {
        width: 100%;
        max-width: 47rem;
    }
`
const StyledContent = styled(Header)`
    font-size: 5.6rem;
`
const InformationWrapper = styled(Flex)`
    min-height: 36rem;
`
const LinkWrapper = styled.div`
    @media ${device.tabletL} {
        text-align: center;
        display: flex;
        flex-direction: column;
    }
`
const DHero = ({
    title,
    background_alt,
    background_svg,
    background_image_name,
    content,
    join_us_for_free,
    go_to_live_demo,
    Logo,
}) => {
    const handleRedirect = () => {
        window.open(deriv_app_url, '_blank')
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
                            <Image
                                img_name={background_image_name}
                                alt={background_alt}
                                width="54.3rem"
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
    join_us_for_free: PropTypes.bool,
    Logo: PropTypes.func,
    title: PropTypes.string,
}

export default DHero
