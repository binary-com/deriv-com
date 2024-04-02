import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { handleRedirectToTradersHub } from './utils'
import {StyledHeaderForPlatform} from 'components/elements/common-header-section'
import DerivMT5Logo from 'images/svg/dmt5/dmt5-banner-logo.svg'
import device from 'themes/device'
import useHandleSignup from 'components/hooks/use-handle-signup'
import useAuthCheck from 'components/hooks/use-auth-check'
import Shape from 'components/custom/_hero-shape'
import Button from 'components/custom/_button'
import { useIsRtl } from 'components/hooks/use-isrtl'
import { Container } from 'components/containers'
import { localize } from 'components/localization'
import useBuildVariant from 'features/hooks/use-build-variant'
import useBreakpoints from 'components/hooks/use-breakpoints'

//TODO: (deriv-rebranding) to make the content section reusable .

const ImageStyle = styled.div`
    z-index: 1;
    max-width: 843px;
    width: inherit;

    @media ${device.tablet} {
        width: 92%;
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
        padding: 32px 0 5px;
    }
`
const BannerButtonWrapper = styled.div`
    display: flex;
    align-items: center;

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
const CreateAccountButton = styled(Button)`
    @media ${device.tablet} {
        max-width: 100%;
        width: 100%;
    }
`
const Content = styled.div`
    max-width: 632px;
    width: 100%;
    display: flex;
    gap: 30px;
    flex-direction: column;

    @media ${device.tablet} {
        padding: 0 16px 40px;
    }
`
const StyledTradingLogin = styled.img`
    width: 205px;
    height: 64px;

    @media ${device.tablet} {
        width: 119px;
        height: 32px;
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

const DCommonBanner = () => {
    const is_mobile = useBreakpoints()
    const handleSignup = useHandleSignup()
    const [is_logged_in] = useAuthCheck()
    const { region } = useBuildVariant()
    const is_rtl = useIsRtl()

    return (
        <BackgroundStyle>
            <StyledContainer jc="flex-start">
                <ContentWrapperStyle is_rtl={is_rtl}>
                    <Content>
                        <StyledTradingLogin src={DerivMT5Logo} alt={localize('_t_Deriv MT5_t_')} />
                        <StyledHeaderForPlatform
                            title="_t_The all-in-one CFD trading platform_t_"
                            title_font_size='64px'
                            color="var(--color-black-9)"
                            font_family_title={
                                is_rtl ? 'Noto Sans, sans-serif' : 'Ubuntu, sans-serif'
                            }
                            line_height_title={is_rtl ? '80px' : 'inherit'}
                        />
                        <BannerButtonWrapper>
                            {is_logged_in ? (
                                <CreateAccountButton
                                    onClick={handleRedirectToTradersHub}
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
                            )}
                        </BannerButtonWrapper>
                    </Content>
                </ContentWrapperStyle>
                <HeroImageWrapper>
                    <Shape
                        angle={194}
                        angle_mobile={101}
                        width='60%'
                        width_mobile='55%'
                        color="#0364B9"
                    >
                        <ImageWrapper>
                            <ImageStyle>
                                {region === "eu" ? (
                                    <StaticImage
                                        src="../../images/common/dmt5/banner_image_eu.png"
                                        loading="eager"
                                        formats={['avif', 'webp', 'auto']}
                                        alt={localize('_t_banner_t_')}
                                    />
                                ) : (
                                    <StaticImage
                                        src="../../images/common/dmt5/banner_image_row.png"
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

export default DCommonBanner
