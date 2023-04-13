import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { browsers_minimum_required_version, cookie_key } from 'common/constants'
import { CookieStorage } from 'common/storage'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import { Button } from 'components/form'
import { useIsRtl } from 'components/hooks/use-isrtl'
import { useUserBrowser } from 'components/hooks/use-user-browser'
import { Localize } from 'components/localization'
import device from 'themes/device'

const Wrapper = styled.div<{ visible: boolean }>`
    pointer-events: all;
    width: 400px;
    min-height: 132px;
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

const BrowserUpdateBanner = () => {
    const { is_outdated } = useUserBrowser(browsers_minimum_required_version)
    const cookie = new CookieStorage(cookie_key)
    const is_rtl = useIsRtl()

    const [is_visible, setIsVisible] = useState(false)

    useEffect(() => is_outdated && !cookie.get(cookie_key) && setIsVisible(true), [is_outdated])

    const handlePositive = () => {
        const expiration_date = Date.now() + 14 * 86400 * 1000 // 2 weeks later (1209600000 ms)
        cookie.set(cookie_key, true, {
            expires: new Date(expiration_date),
        })
        setIsVisible(false)
    }

    if (is_visible)
        return (
            <OverlayContainer is_rtl={is_rtl}>
                <Wrapper visible={is_visible}>
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

    return <></>
}

export default BrowserUpdateBanner
