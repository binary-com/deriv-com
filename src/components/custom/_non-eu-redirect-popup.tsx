import React from 'react'
import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Button } from 'components/form'
import { Text } from 'components/elements'
import { Localize, localize } from 'components/localization'
import device from 'themes/device'
import { deriv_com_url } from 'common/constants'
import type { PopupModalTypes } from 'types/generics'

const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: var(--color-black);
    opacity: 0.4;
`
const ModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 200;
`
const ModalCard = styled.div`
    position: relative;
    z-index: 210;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    width: 384px;
    height: 172px;
    max-width: 44rem;
    background: var(--color-white);
    padding: 24px;

    @media ${device.mobileL} {
        width: 90%;
        height: auto;
    }
`

const ButtonWrapper = styled(Flex)`
    justify-content: flex-end;
    margin-top: 20px;
`

const StyledText = styled.div`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
`

const StyledButtonText = styled(Text)`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;

    /* identical to box height, or 143% */

    text-align: center;

    /* dark/1 - prominent (text) */

    color: #ffffff;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`
const RedirectNonEuLogin = () => {
    window.location.href = `https://${deriv_com_url}`
}
const NonEuRedirectPopUp = ({ is_open, setShowNonEuPopup }: PopupModalTypes) => {
    const closePopup = () => setShowNonEuPopup(false)
    return (
        is_open && (
            <ModalWrapper>
                <ModalCard>
                    <StyledText>
                        <Localize translate_text="It seems you’re not in the EU, so we’re taking you to our website for non-EU visitors, where you can log in or sign up (if you don’t have a Deriv account)." />
                    </StyledText>
                    <ButtonWrapper>
                        <StyledButtonText>
                            <Button secondary onClick={RedirectNonEuLogin}>
                                {localize('Take me there')}
                            </Button>
                        </StyledButtonText>
                    </ButtonWrapper>
                </ModalCard>
                <Background onClick={closePopup} />
            </ModalWrapper>
        )
    )
}

export default NonEuRedirectPopUp
