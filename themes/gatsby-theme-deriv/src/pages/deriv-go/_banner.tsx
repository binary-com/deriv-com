import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { StyledHeaderForPlatform } from 'components/elements/common-header-section'
import DerivGOLogo from 'images/svg/deriv-go/deriv-go-banner-logo.svg'
import device from 'themes/device'
import useHandleSignup from 'components/hooks/use-handle-signup'
import useAuthCheck from 'components/hooks/use-auth-check'
import useBreakpoints from 'components/hooks/use-breakpoints'
import Shape from 'components/custom/_hero-shape'
import Button from 'components/custom/_button'
import { useIsRtl } from 'components/hooks/use-isrtl'
import { Container } from 'components/containers'
import { breakpoints } from 'themes/theme.breakpoints'
import { mobileOSDetect } from 'common/os-detect'
import {
    deriv_go_huaweiappgallery_url,
    deriv_go_ios_url,
    deriv_go_playstore_url,
} from 'common/constants'

//TODO: (deriv-rebranding) to make the content section reusable .

const ImageWrapper = styled.div`
    flex: 1;
    justify-content: center;
    &.mobile-img {
        display: none;
        @media ${device.tablet} {
            display: flex;
        }
    }
    &.tablet-img {
        display: none;
        @media ${breakpoints.sm} {
            display: flex;
        }
        @media ${breakpoints.md} {
            display: flex;
        }
    }
    &.desktop-img {
        display: none;
        @media screen and (min-width: 1201px) {
            display: flex;
        }
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
    max-width: 50%;
    direction: ${(props) => (props.is_rtl ? 'rtl' : 'ltr')};
    @media ${device.tablet} {
        max-width: 100%;
    }
`
const HeroImageWrapper = styled.div`
    width: 50%;
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
        padding: 0 16px 64px;
    }
`
const StyledTradingLogin = styled.img`
    width: 237px;
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

const DHero = () => {
    const handleSignup = useHandleSignup()
    const [is_logged_in] = useAuthCheck()
    const is_rtl = useIsRtl()
    const { is_mobile } = useBreakpoints()

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
                window.open('https://play.google.com/store/apps/details?id=com.deriv.app', '_blank')
                window.open(deriv_go_playstore_url, '_blank')
                break
            case 'iOS':
                window.open(
                    'https://apps.apple.com/my/app/deriv-go-online-trading-app/id1550561298',
                    '_blank',
                )
                window.open(deriv_go_ios_url, '_blank')

                break
            case 'Huawei':
                window.open('https://appgallery.huawei.com/app/C103801913', '_blank')
                window.open(deriv_go_huaweiappgallery_url, '_blank')
        }
    }

    return (
        <BackgroundStyle>
            <StyledContainer jc="flex-start">
                <ContentWrapperStyle is_rtl={is_rtl}>
                    <Content>
                        <StyledTradingLogin src={DerivGOLogo} alt="Deriv Go" />
                        <StyledHeaderForPlatform
                            title="_t_A trading platform for on-the-go traders_t_"
                            title_font_size="64px"
                            font_family_title={
                                is_rtl ? 'Noto Sans, sans-serif' : 'Ubuntu, sans-serif'
                            }
                            line_height_title={is_rtl ? '80px' : 'inherit'}
                            color="var(--color-black-9)"
                        />
                        <BannerButtonWrapper>
                            {is_logged_in ? (
                                <CreateAccountButton
                                    onClick={
                                        is_mobile ? handleGetTradingMobile : handleGetTradingDesktop
                                    }
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
                    <Shape angle={163} angle_mobile={101} width={'60%'} width_tablet="55%">
                        <ImageWrapper className="mobile-img">
                            <StaticImage
                                src="../../images/common/deriv-go/deriv-go-mobile.png"
                                loading="eager"
                                formats={['avif', 'webp', 'auto']}
                                alt="banner"
                            />
                        </ImageWrapper>
                        <ImageWrapper className="tablet-img">
                            <StaticImage
                                src="../../images/common/deriv-go/banner_image_tablet.png"
                                loading="eager"
                                formats={['avif', 'webp', 'auto']}
                                alt="banner"
                                imgStyle={{ objectFit: 'contain' }}
                            />
                        </ImageWrapper>
                        <ImageWrapper className="desktop-img">
                            <StaticImage
                                src="../../images/common/deriv-go/banner_image.png"
                                loading="eager"
                                formats={['avif', 'webp', 'auto']}
                                alt="banner"
                                imgStyle={{ objectFit: 'contain' }}
                            />
                        </ImageWrapper>
                    </Shape>
                </HeroImageWrapper>
            </StyledContainer>
        </BackgroundStyle>
    )
}

export default DHero
