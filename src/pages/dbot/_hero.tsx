import React from 'react'
import styled from 'styled-components'
import DerivBotLogo from 'images/svg/dbot/deriv-bot-banner-logo.svg'
import DBotBanner from 'images/common/dbot/dbot-banner.png'
import CommonHeaderSection from 'components/elements/common-header-section'
import device from 'themes/device'
import useBreakpoints from 'components/hooks/use-breakpoints'
import useHandleSignup from 'components/hooks/use-handle-signup'
import useAuthCheck from 'components/hooks/use-auth-check'
import { LinkButton } from 'components/form'
import { Localize } from 'components/localization'
import { handleGetTrading } from 'components/layout/nav/util/nav-methods'
import Shape from 'components/custom/_hero-shape'
import Button from 'components/custom/_button'
import { isBrowser } from 'common/utility'

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
    max-width: 843px;
    width: inherit;
    src: ${({ src }) => src};

    @media ${device.tablet} {
        width: 80%;
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
    width: 50%;

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
    max-width: 775px;
    width: 100%;
    display: flex;
    gap: 30px;
    flex-direction: column;
    padding-left: 120px;

    @media ${device.tablet} {
        padding: 0 16px 64px;
    }
`
const StyledLogo = styled.img`
    width: 248px;
    height: 64px;

    @media ${device.tablet} {
        width: 119px;
        height: 32px;
    }
`
const DHero = ({ join_us_for_free, is_live_demo, image_name }: DHeroProps) => {
    const getLinkType = () => (image_name === 'dbot' ? 'dbot' : 'deriv_app')
    const { is_mobile } = useBreakpoints()
    const handleSignup = useHandleSignup()
    const [is_logged_in] = useAuthCheck()
    const screenSize = isBrowser() && screen.width <= 767

    return (
        <BackgroundStyle>
            <ContentWrapperStyle>
                <Content>
                    <StyledLogo src={DerivBotLogo} />
                    <CommonHeaderSection
                        title="_t_Automate your trading ideas without writing code_t_"
                        title_font_size={is_mobile || screenSize ? '32px' : '64px'}
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
                <Shape angle={is_mobile || screenSize ? 101 : 163} width="50%">
                    <ImageWrapper>
                        <ImageStyle src={DBotBanner} />
                    </ImageWrapper>
                </Shape>
            </HeroImageWrapper>
        </BackgroundStyle>
    )
}

export default DHero
