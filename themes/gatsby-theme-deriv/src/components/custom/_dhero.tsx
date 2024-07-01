import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { useMediaQuery } from 'usehooks-ts'
import Shape from './_hero-shape'
import Button from './_button'
import { handleGetTrading } from './utils'
import {StyledHeaderForPlatform} from 'components/elements/common-header-section'
import DerivTLogo from 'images/svg/dtrader/deriv-trader-banner-logo.svg'
import device from 'themes/device'
import useHandleSignup from 'components/hooks/use-handle-signup'
import useAuthCheck from 'components/hooks/use-auth-check'
import { LinkButton } from 'components/form'
import { Localize, localize } from 'components/localization'
import { Container } from 'components/containers'
import { useIsRtl } from 'components/hooks/use-isrtl'
import useBuildVariant from 'features/hooks/use-build-variant'
import { breakpoints } from 'themes/theme.breakpoints'
import { dtrader_url } from 'common/constants'
import { getLanguage } from 'common/utility'

type DHeroProps = {
    is_live_demo?: boolean
    image_name?: string
    is_mobile?: boolean | string
    join_us_for_free?: boolean
    Logo?: string
}

//TODO: (deriv-rebranding) to make the content section reusable .

const ImageStyle = styled.div`
    z-index: 1;
    max-width: 843px;
    width: inherit;

    @media ${device.tablet} {
        width: 100%;
    }
`
const ImageWrapper = styled.div`
    display: flex;
    padding: 64px 0;
    justify-content: end;
    width: 100%;
    align-self: center;
    flex: 1 1 0%;
    @media ${device.tablet} {
        padding: 64px 0 54px;
    }
`
const BannerButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-block-start: 6px;
    @media ${device.tablet} {
        flex-direction: column;
        justify-content: center;
    }
`
const BackgroundStyle = styled.div`
    background-color: var(--color-white);
    flex: 1;
    height: 93vh;
    display: flex;
    justify-content: flex-end;
    position: relative;
    direction: ltr;
    @media only screen and (min-width: 1920px) {
        min-block-size: 100%;
        block-size: 100rem;
    }
    @media ${device.tablet} {
        flex-direction: column-reverse;
        justify-content: center;
        height: 100%;
    }
`
const ContentWrapperStyle = styled.div<{ is_rtl: boolean }>`
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    max-width: 40%;
    direction: ${(props) => (props.is_rtl ? 'rtl' : 'ltr')};
    @media ${device.tablet} {
        max-width: 100%;
    }
`
const HeroImageWrapper = styled.div`
    width: 60%;
    position: absolute;
    right: 0;
    height: 100%;

    @media ${device.tablet} {
        width: 100%;
        position: relative;
    }
`
const GoToLiveDemo = styled(LinkButton)`
    color: var(--color-red);
    border-color: var(--color-red);
    padding: 11px 16px;
    width: auto;
    border-radius: 16px;

    &:hover {
        background-color: rgba(255, 68, 79, 0.08);
    }
    @media ${device.tablet} {
        max-width: 100%;
        white-space: nowrap;
        margin-left: 0;
        width: 100%;
    }
    @media (max-width: 360px) {
        white-space: nowrap;
    }
`
const CreateAccountButton = styled(Button)`
    min-block-size: 40px;
    text-align: center;
    height: fit-content;
    margin: 0;
    line-height: 1.23;
    max-block-size: 54px;
    @media ${device.tablet} {
        max-width: 100%;
        width: 100%;
    }
    span {
        line-height: 1.23;
    }
`
const Content = styled.div`
    max-width: 632px;
    width: 100%;
    display: flex;
    gap: 30px;
    flex-direction: column;

    @media ${device.tablet} {
        padding: 0 16px 64px;
    }
`
const StyledContainer = styled(Container)`
    max-width: 123.2rem;

    @media ${device.tablet} {
        flex-direction: column-reverse;
        justify-content: center;
        margin: 0;
        width: 100%;
    }
`

const DHero = ({ join_us_for_free, is_live_demo, image_name }: DHeroProps) => {
    const getLinkType = () => (image_name === 'dbot' ? 'dbot' : 'deriv_app')
    const is_mobile = useMediaQuery(breakpoints.xs)
    const {region} = useBuildVariant()
    const handleSignup = useHandleSignup()
    const [is_logged_in] = useAuthCheck()
    const is_rtl = useIsRtl()

    return (
        <BackgroundStyle>
            <StyledContainer jc="flex-start">
                <ContentWrapperStyle is_rtl={is_rtl}>
                    <Content>
                        <img
                            width="237px"
                            height="64px"
                            src={DerivTLogo}
                            alt={localize('_t_Deriv Trader_t_')}
                        />
                        <StyledHeaderForPlatform
                            title="_t_A user-friendly trading platform_t_"
                            title_font_size='64px'
                            font_family_title={
                                is_rtl ? 'Noto Sans, sans-serif' : 'Ubuntu, sans-serif'
                            }
                            line_height_title={is_rtl ? '80px' : 'inherit'}
                            color="var(--color-black-9)"
                        />
                        <BannerButtonWrapper>
                            {join_us_for_free &&
                                (is_logged_in ? (
                                    <CreateAccountButton
                                        onClick={handleGetTrading}
                                        label="_t_Get Trading_t_"
                                        primary
                                        mobileFullWidth
                                    />
                                ) : (
                                    <CreateAccountButton
                                        onClick={handleSignup}
                                        label="_t_Create free demo account_t_"
                                        primary
                                        mobileFullWidth
                                    />
                                ))}
                            {is_live_demo && (
                                <GoToLiveDemo
                                    tertiary
                                    external
                                    to={`https://app.deriv.com/dtrader?lang=${getLanguage()}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Localize translate_text="_t_Go to live demo_t_" />
                                </GoToLiveDemo>
                            )}
                        </BannerButtonWrapper>
                    </Content>
                </ContentWrapperStyle>
                <HeroImageWrapper>
                    <Shape angle={193} angle_mobile={101} width="60%">
                        <ImageWrapper>
                            <ImageStyle>
                                {region === "eu" ? (
                                    <StaticImage
                                        src="../../images/common/dtrader/hero-image-eu.png"
                                        loading="eager"
                                        formats={['avif', 'webp', 'auto']}
                                        alt={localize('_t_banner_t_')}
                                    />
                                ) : (
                                    <StaticImage
                                        src="../../images/common/dtrader/hero-image.png"
                                        loading="eager"
                                        formats={['avif', 'webp', 'auto']}
                                        alt={localize('_t_banner_t_')}
                                    />
                                )}
                            </ImageStyle>
                        </ImageWrapper>
                    </Shape>
                </HeroImageWrapper>
            </StyledContainer>
        </BackgroundStyle>
    )
}

export default DHero
