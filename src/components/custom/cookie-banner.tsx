import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Flex } from 'components/containers'
import { Button } from 'components/form'
import { Text, LocalizedLinkText } from 'components/elements'
import { Localize, localize } from 'components/localization'
import device from 'themes/device'

type CookieBannerProps = {
    is_open?: boolean
    onAccept?: () => void
    onDecline?: () => void
}

type WrapperProps = {
    is_open?: boolean
}

const FadeInDown = keyframes`
    from {
        opacity: 0;
        transform: translateY(0);
    }
    to {
        opacity: 1;
        transform: translateY(-18.4rem);
    }
`
const FadeOutUp = keyframes`
    from {
        opacity: 1;
        transform: translateY(-18.4rem);
    }
    to {
        opacity: 0;
        transform: translateY(0);
    }
`

const Wrapper = styled.div<WrapperProps>`
    position: fixed;
    width: 384px;
    min-height: 188px;
    padding: 24px;
    left: 2.4rem;
    bottom: -9rem;
    transition: translate 0.3s ease-in-out, opacity 0.3s ease-in-out;
    z-index: 200;
    border-radius: 8px;
    box-shadow: 0 0 12px 0 rgba(14, 14, 14, 0.16);
    background-color: var(--color-white);
    animation-name: ${(props) => (props.is_open ? FadeInDown : FadeOutUp)};
    animation-fill-mode: both;
    animation-duration: 0.3s;

    @media ${device.laptopM} {
        bottom: -7rem;
    }
    @media (max-width: 1269px) {
        bottom: -6rem;
    }
    @media ${device.tabletL} {
        bottom: -4rem;
    }
    @media ${device.tablet} {
        width: 100%;
        height: 14.6rem;
        padding: 16px;
        left: unset;
        border-radius: unset;
        min-height: unset;
        bottom: -6.1rem;
    }
    @media (max-width: 711px) {
        bottom: -7.7rem;
    }
    @media (max-width: 539px) {
        bottom: -4.5rem;
    }
    @media ${device.mobileS} {
        bottom: -4.5rem;
        height: 16.8rem;
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

const CookieBanner = ({ onAccept, onDecline, is_open }: CookieBannerProps) => {
    return (
        <Wrapper is_open={is_open}>
            <StyledText>
                <Localize translate_text="Cookies help us to give you a better experience and personalised content on our site. " />
                <Localize
                    translate_text="If you agree to our use of cookies, click on Accept. For more information, <0>see our policy</0>."
                    components={[
                        <LinkText key={0} to="/terms-and-conditions/#clients" color="red" />,
                    ]}
                />
            </StyledText>
            <Flex>
                <StyledButton tertiary onClick={onDecline} mr="0.8rem">
                    {localize("Don't accept")}
                </StyledButton>
                <StyledButton secondary onClick={onAccept}>
                    {localize('Accept')}
                </StyledButton>
            </Flex>
        </Wrapper>
    )
}

export default CookieBanner
