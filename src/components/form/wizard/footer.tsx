import React from 'react'
import styled from 'styled-components'
import Button from '../button'
import { localize } from 'components/localization'

type FooterProps = {
    step: number
    setStep: React.Dispatch<React.SetStateAction<number>>
    max_step: number
    setEnableNext: React.Dispatch<React.SetStateAction<boolean>>
    disabled: boolean
}

const StyledFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 24px;
    gap: 8px;
    position: absolute;
    height: 72px;
    right: 0;
    bottom: 0;
    border-top: 1px solid var(--color-grey-43);
    width: 100%;
`

const enum ButtonType {
    Previous = 'PREVIOUS',
    Next = 'NEXT',
}

const Footer = ({ step, setStep, max_step, setEnableNext, disabled }: FooterProps) => {
    const buttonHandler = React.useCallback(
        (button_type: ButtonType): void => {
            if (button_type === ButtonType.Previous) {
                step > 1 && setStep(step - 1)
            }
            if (button_type === ButtonType.Next) {
                step < max_step && setStep(step + 1)
            }
            setEnableNext(true)
        },
        [max_step, setEnableNext, setStep, step],
    )

    return (
        <StyledFooter>
            {step > 1 && (
                <Button tertiary onClick={() => buttonHandler(ButtonType.Previous)}>
                    {localize('Previous')}
                </Button>
            )}
            <Button secondary disabled={disabled} onClick={() => buttonHandler(ButtonType.Next)}>
                {max_step === step ? localize('Submit') : localize('Next')}
            </Button>
        </StyledFooter>
    )
}

export default Footer
