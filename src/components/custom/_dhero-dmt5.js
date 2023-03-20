import React from 'react'
import styled from 'styled-components'
import DerivXRow from 'images/common/deriv-x/banner_image_derivx.png'
import CommonHeaderSection from 'components/elements/common-header-section'
import DerivXLogo from 'images/svg/deriv-x/deriv-x-banner-logo.svg'
import device from 'themes/device'
import useBreakpoints from 'components/hooks/use-breakpoints'
import useHandleSignup from 'components/hooks/use-handle-signup'
import useAuthCheck from 'components/hooks/use-auth-check'
import { handleGetTrading } from 'components/layout/nav/util/nav-methods'
import Shape from 'components/custom/_hero-shape'
import Button from 'components/custom/_button'

//TODO: (deriv-rebranding) to make the content section reusable .

const ImageStyle = styled.img`
    z-index: 1;
    src: ${({ src }) => src};

    @media ${device.tablet} {
        width: 100%;
    }
`

const ImageWrapper = styled.div`
    display: flex;
    flex: 1;
    justify-content: right;
    padding: 50px 0;
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

    @media ${device.tablet} {
        flex-direction: column-reverse;
        justify-content: center;
        height: 100%;
    }
`
const ContentWrapperStyle = styled.div`
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
`
const HeroImageWrapper = styled.div`
    width: 60%;

    @media ${device.tablet} {
        width: 100%;
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
    padding-left: 120px;

    @media ${device.tablet} {
        padding: 0 16px 64px;
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
const DCommonBanner = () => {
    const { is_mobile } = useBreakpoints()
    const handleSignup = useHandleSignup()
    const [is_logged_in] = useAuthCheck()
    return (
        <BackgroundStyle>
            <ContentWrapperStyle>
                <Content>
                    <StyledTradingLogin src={DerivXLogo} />
                    <CommonHeaderSection
                        title="_t_The trading platform to fit your style_t_"
                        title_font_size={`${is_mobile ? 32 : 64}px`}
                        color="var(--color-black-9)"
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
                                label="_t_The all-in-one CFD trading platform_t_"
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
                        <ImageStyle src={DerivXRow} />
                    </ImageWrapper>
                </Shape>
            </HeroImageWrapper>
        </BackgroundStyle>
    )
}

export default DCommonBanner
