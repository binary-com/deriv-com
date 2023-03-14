import React from 'react'
import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Button } from 'components/form'
import { Text, LocalizedLinkText } from 'components/elements'
import { Localize } from 'components/localization'
import device from 'themes/device'
import { useCookieBanner } from 'components/hooks/use-cookie-banner'

const Wrapper = styled.div<{ visible: boolean }>`
    pointer-events: all;
    width: 384px;
    min-height: 188px;
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

const StyledText = styled(Text)`
    font-size: 14px;
    margin-bottom: 16px;

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

const CookieBanner = () => {
    const cookie = useCookieBanner()
    const [is_visible, setIsVisible] = React.useState(false)

    // Todo: Should simplify this useEffect and get rid of the duplicated state and find another solution
    // for removing the element from the DOM after the animation completes.
    React.useEffect(() => {
        if (is_visible !== cookie.should_show) {
            if (cookie.should_show) {
                setIsVisible(cookie.should_show)
            } else {
                setTimeout(() => setIsVisible(cookie.should_show), 200)
            }
        }
    }, [cookie.should_show, is_visible])

    if (is_visible)
        return (
            <Wrapper visible={cookie.should_show}>
                <StyledText>
                    <Localize translate_text="_t_Cookies help us to give you a better experience and personalised content on our site. _t_" />
                    <Localize
                        translate_text="_t_If you agree to our use of cookies, click on Accept. For more information, <0>see our policy</0>._t_"
                        components={[
                            <LinkText key={0} to="/terms-and-conditions/#clients" color="red" />,
                        ]}
                    />
                </StyledText>
                <Flex>
                    <StyledButton tertiary onClick={cookie.decline} mr="0.8rem">
                        <Localize translate_text="_t_Don't accept_t_" />
                    </StyledButton>
                    <StyledButton secondary onClick={cookie.accept}>
                        <Localize translate_text="_t_Accept_t_" />
                    </StyledButton>
                </Flex>
            </Wrapper>
        )

    return <></>
}

export default CookieBanner
