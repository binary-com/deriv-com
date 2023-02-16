import React from 'react'
import styled from 'styled-components'
import Shape from './_hero-shape'
import Button from './_button'
import DerivTraderRow from 'images/common/dtrader/hero-image.png'
import DerivTraderEu from 'images/common/dtrader/hero-image-eu.png'
import CommonHeaderSection from 'components/elements/common-header-section'
import DerivTLogo from 'images/svg/dtrader/deriv-trader-banner-logo.svg'
import device from 'themes/device'
import useBreakpoints from 'components/hooks/use-breakpoints'
import useHandleSignup from 'components/hooks/use-handle-signup'
import useAuthCheck from 'components/hooks/use-auth-check'
import { LinkButton } from 'components/form'
import { Localize } from 'components/localization'
import { handleGetTrading } from 'components/layout/nav/util/nav-methods'
import useRegion from 'components/hooks/use-region'

type DHeroProps = {
    background_alt?: string
    background_image_name?: string
    background_svg?: string
    content?: string | JSX.Element
    is_live_demo?: boolean
    image_name?: string
    is_mobile?: boolean | string
    hide_signup_login?: boolean
    join_us_for_free?: boolean
    Logo?: string
    title?: string | JSX.Element
}

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
    padding: 64px 0;
    flex: 1;
    justify-content: end;
    @media ${device.tablet} {
        padding: 64px 0 54px;
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
const GoToLiveDemo = styled(LinkButton)`
    color: var(--color-red);
    border-color: var(--color-red);
    padding: 11px 16px;
    width: auto;
    border-radius: 16px;

    &:hover {
        color: var(--color-white);
        background-color: var(--color-red);
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

const DHero = ({ join_us_for_free, is_live_demo, image_name }: DHeroProps) => {
    const getLinkType = () => (image_name === 'dbot' ? 'dbot' : 'deriv_app')
    const { is_mobile } = useBreakpoints()
    const { is_eu, is_row } = useRegion()
    const handleSignup = useHandleSignup()
    const [is_logged_in] = useAuthCheck()
    return (
        <BackgroundStyle>
            <ContentWrapperStyle>
                <Content>
                    <img width="237px" height="64px" src={DerivTLogo} />
                    <CommonHeaderSection
                        title="_t_A user-friendly trading platform_t_"
                        title_font_size={`${is_mobile ? 32 : 64}px`}
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
                                type={getLinkType()}
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                            >
                                <Localize translate_text="Go to live demo" />
                            </GoToLiveDemo>
                        )}
                    </BannerButtonWrapper>
                </Content>
            </ContentWrapperStyle>
            <HeroImageWrapper>
                <Shape angle={is_mobile ? 101 : 193}>
                    <ImageWrapper>
                        <ImageStyle src={is_eu ? DerivTraderEu : DerivTraderRow} />
                    </ImageWrapper>
                </Shape>
            </HeroImageWrapper>
        </BackgroundStyle>
    )
}

export default DHero
