import React, { FC, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Button } from 'components/form'
import { LocalizedLinkText, Header } from 'components/elements'
import { Localize, localize } from 'components/localization'
import device from 'themes/device'
import { useCookieBanner } from 'components/hooks/use-cookie-banner'
import { browsers_minimum_required_version, cookie_key, bannerTypes } from 'common/constants'
import { CookieStorage } from 'common/storage'
import { useUserBrowser } from 'components/hooks/use-user-browser'
import { useIsRtl } from 'components/hooks/use-isrtl'

type TProps = {
    bannerType: string
}
type TBannerDimensionProps = {
    width: string
    minHeight: string
}

const cookieBannerProps: TBannerDimensionProps = { width: '384', minHeight: '188' }

const Wrapper = styled.div<{ visible: boolean; width: string; minHeight: string }>`
    pointer-events: all;
    width: ${({ width = 400 }) => width}px;
    min-height: ${({ minHeight = 130 }) => minHeight}px;
    padding: 24px;
    transition: translate 0.2s ease-in-out, opacity 0.2s ease-in-out;
    border-radius: 8px;
    box-shadow: 0 0 12px 0 rgba(14, 14, 14, 0.16);
    background-color: var(--color-white);
    margin: 0 2.4rem 2.4rem 2.4rem;
    animation: ${({ visible }) => (visible ? 'fadeIn' : 'fadeOut')} 0.2s;
    align-self: flex-start;
    position: absolute;
    bottom: 7.5rem;

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(50%);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(50%);
        }
    }

    @media ${device.tablet} {
        width: 100%;
        height: 14.6rem;
        padding: 16px;
        border-radius: unset;
        min-height: unset;
        margin: unset;
        align-self: unset;
        position: unset;
        bottom: unset;
    }
`

const StyledButton = styled(Button)`
    @media ${device.tablet} {
        font-size: 1.4rem;
        padding: 3px 8px;
    }
`

const StyledText = styled(Header)`
    font-size: 14px;
    margin-bottom: 16px;
    font-weight: normal;

    @media ${device.tablet} {
        font-size: 12px;
        margin-bottom: 8px;
    }
    @media ${device.mobileL} {
        font-size: 10px;
        margin-bottom: 8px;
    }
`

const LinkText = styled(LocalizedLinkText)`
    font-size: 14px;

    @media ${device.tablet} {
        font-size: 12px;
    }
    @media ${device.mobileL} {
        font-size: 10px;
    }
`

const OverlayContainer = styled.div<{ is_rtl: boolean }>`
    pointer-events: none;
    position: fixed;
    inset: 0;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: ${({ is_rtl }) => (is_rtl ? 'flex-start' : 'flex-end')};
`

const BannerAlert: FC<TProps> = ({ bannerType }) => {
    const cookie = useCookieBanner()
    const cookie_browser_update = new CookieStorage(cookie_key)
    const [is_visible, setIsVisible] = useState(false)
    const { is_outdated } = useUserBrowser(browsers_minimum_required_version)
    const is_rtl = useIsRtl()

    //cookie banner
    // Todo: Should simplify this useEffect and get rid of the duplicated state and find another solution
    // for removing the element from the DOM after the animation completes.
    useEffect(() => {
        if (bannerTypes.cookieBanner === bannerType) {
            if (is_visible !== cookie.should_show) {
                if (cookie.should_show) {
                    setIsVisible(cookie.should_show)
                } else {
                    setTimeout(() => setIsVisible(cookie.should_show), 200)
                }
            }
        }
    }, [cookie.should_show, is_visible])

    //outdated browser banner
    useEffect(
        () =>
            bannerTypes.outdatedBrowserBanner === bannerType &&
            is_outdated &&
            !cookie_browser_update.get(cookie_key) &&
            setIsVisible(true),
        [is_outdated],
    )

    const handlePositive = () => {
        const expiration_date = Date.now() + 14 * 86400 * 1000 // 2 weeks later (1209600000 ms)
        cookie_browser_update.set(cookie_key, true, {
            expires: new Date(expiration_date),
        })
        setIsVisible(false)
    }

    const generateBanner = useMemo(() => {
        switch (bannerType) {
            case bannerTypes.cookieBanner:
                return (
                    <Wrapper
                        visible={cookie.should_show}
                        width={cookieBannerProps.width}
                        minHeight={cookieBannerProps.minHeight}
                    >
                        <StyledText>
                            <Localize translate_text="_t_Cookies help us to give you a better experience and personalised content on our site._t_" />
                            <Localize
                                translate_text="_t_If you agree to our use of cookies, click on Accept. For more information, <0>see our policy</0>._t_"
                                components={[
                                    <LinkText
                                        key={0}
                                        to="/terms-and-conditions/#clients"
                                        color="red"
                                    />,
                                ]}
                            />
                        </StyledText>
                        <Flex>
                            <StyledButton tertiary onClick={cookie.decline} mr="0.8rem">
                                {localize("_t_Don't accept_t_")}
                            </StyledButton>
                            <StyledButton secondary onClick={cookie.accept}>
                                {localize('_t_Accept_t_')}
                            </StyledButton>
                        </Flex>
                    </Wrapper>
                )

            case bannerTypes.outdatedBrowserBanner:
                return (
                    <OverlayContainer is_rtl={is_rtl}>
                        <Wrapper
                            visible={is_visible}
                            width={cookieBannerProps.width}
                            minHeight={cookieBannerProps.minHeight}
                        >
                            <StyledText>
                                <Localize translate_text="_t_Update your browser to get the best Deriv experience_t_" />
                            </StyledText>
                            <Flex>
                                <StyledButton secondary onClick={handlePositive}>
                                    <Localize translate_text="_t_Close_t_" />
                                </StyledButton>
                            </Flex>
                        </Wrapper>
                    </OverlayContainer>
                )

            default:
                return <></>
        }
    }, [bannerType])

    return is_visible ? generateBanner : <></>
}

export default BannerAlert
