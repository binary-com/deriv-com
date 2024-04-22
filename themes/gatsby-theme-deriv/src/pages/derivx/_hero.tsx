import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { StyledHeaderForDerivxHero } from 'components/elements/common-header-section'
import { DerivXBannerLogo } from 'images/svg/deriv-x'
import device from 'themes/device'
import useHandleSignup from 'components/hooks/use-handle-signup'
import useAuthCheck from 'components/hooks/use-auth-check'
import { handleRedirectToTradersHub } from 'components/custom/utils'
import Shape from 'components/custom/_hero-shape'
import { useIsRtl } from 'components/hooks/use-isrtl'
import Button from 'components/custom/_button'
import { Container } from 'components/containers'
import { mobileOSDetect } from 'common/os-detect'
import {
    deriv_go_huaweiappgallery_url,
    deriv_go_ios_url,
    deriv_go_playstore_url,
} from 'common/constants'
import { localize } from 'components/localization'

//TODO: (deriv-rebranding) to make the content section reusable .

const ImageStyle = styled.div`
    z-index: 1;
    max-width: 843px;
    width: inherit;

    @media ${device.tablet} {
        width: 100%;
    }
    &.mobile-img {
        display: none;
        @media ${device.tablet} {
            display: block;
        }
    }
    &.desktop-img {
        display: block;
        @media ${device.tablet} {
            display: none;
        }
    }
`

const ImageWrapper = styled.div`
    display: flex;
    padding: 64px 0;
    justify-content: end;
    width: 100%;
    align-self: center;
    flex: 1 1 0%;
    padding-left: 1rem;
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
    gap: 16px;
    flex-direction: column;
    overflow-wrap: break-word;

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
    const handleSignup = useHandleSignup()
    const [is_logged_in] = useAuthCheck()
    const is_rtl = useIsRtl()

    const handleGetTradingDesktop = () => {
        const targetComponent = document.getElementById('target-component')
        if (targetComponent) {
            targetComponent.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
    }

    const handleGetTradingMobile = () => {
        const os = mobileOSDetect()

        switch (os) {
            case 'Android':
                window.open(deriv_go_playstore_url, '_blank')
                break
            case 'iOS':
                window.open(deriv_go_ios_url, '_blank')
                break
            case 'Huawei':
                window.open(deriv_go_huaweiappgallery_url, '_blank')
                break
        }
    }

    return (
        <BackgroundStyle>
            <StyledContainer jc="flex-start">
                <ContentWrapperStyle is_rtl={is_rtl}>
                    <Content>
                        <StyledTradingLogin
                            src={DerivXBannerLogo}
                            alt={localize('_t_Deriv X_t_')}
                        />
                        <StyledHeaderForDerivxHero
                            title="_t_The trading platform to fit your style_t_"
                            title_font_size="64px"
                            font_family_title={
                                is_rtl ? 'Noto Sans, sans-serif' : 'Ubuntu, sans-serif'
                            }
                            line_height_title={is_rtl ? '80px' : 'inherit'}
                            color="var(--color-black-9)"
                            margin_title="0"
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
                    <Shape angle={168} angle_mobile={101} width="55%">
                        <ImageWrapper>
                            <ImageStyle className="mobile-img">
                                <StaticImage
                                    src="../../images/common/deriv-x/banner_image_derivx_mobile.png"
                                    loading="eager"
                                    formats={['avif', 'webp', 'auto']}
                                    alt="Banner"
                                />
                            </ImageStyle>
                            <ImageStyle className="desktop-img">
                                <StaticImage
                                    src="../../images/common/deriv-x/banner_image_derivx.png"
                                    loading="eager"
                                    formats={['avif', 'webp', 'auto']}
                                    alt="Banner"
                                />
                            </ImageStyle>
                        </ImageWrapper>
                    </Shape>
                </HeroImageWrapper>
            </StyledContainer>
        </BackgroundStyle>
    )
}

export default DCommonBanner
