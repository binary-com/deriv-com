import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import CommonHeaderSection from 'components/elements/common-header-section'
import DerivXLogo from 'images/svg/deriv-x/deriv-x-banner-logo.svg'
import device from 'themes/device'
import useBreakpoints from 'components/hooks/use-breakpoints'
import useHandleSignup from 'components/hooks/use-handle-signup'
import useAuthCheck from 'components/hooks/use-auth-check'
import { handleGetTrading } from 'components/custom/utils'
import Shape from 'components/custom/_hero-shape'
import { useIsRtl } from 'components/hooks/use-isrtl'
import Button from 'components/custom/_button'
import { Container } from 'components/containers'

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
    height: 90vh;
    display: flex;
    justify-content: flex-end;
    position: relative;
    direction: ltr;

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
    @media ${device.tablet} {
        flex-direction: column-reverse;
        justify-content: center;
        margin: 0;
        width: 100%;
    }
`
const DCommonBanner = () => {
    const { is_mobile } = useBreakpoints()
    const handleSignup = useHandleSignup()
    const [is_logged_in] = useAuthCheck()
    const is_rtl = useIsRtl()

    return (
        <BackgroundStyle>
            <StyledContainer jc="flex-start">
                <ContentWrapperStyle is_rtl={is_rtl}>
                    <Content>
                        <StyledTradingLogin src={DerivXLogo} />
                        <CommonHeaderSection
                            title="_t_The trading platform to fit your style_t_"
                            title_font_size={`${is_mobile ? 32 : 64}px`}
                            font_family_title={
                                is_rtl ? 'Noto Sans, sans-serif' : 'Ubuntu, sans-serif'
                            }
                            color="var(--color-black-9)"
                            margin_title={is_mobile ? '0 0 5px 0' : '0'}
                        />
                        <BannerButtonWrapper>
                            {is_logged_in ? (
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
                            )}
                        </BannerButtonWrapper>
                    </Content>
                </ContentWrapperStyle>
                <HeroImageWrapper>
                    <Shape angle={is_mobile ? 101 : 163} width="60%">
                        <ImageWrapper>
                            <ImageStyle>
                                <StaticImage
                                    src="../../images/common/deriv-x/banner_image_derivx.png"
                                    loading="eager"
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
