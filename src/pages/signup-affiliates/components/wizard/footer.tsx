import React from 'react'
import styled from 'styled-components'
import Button from 'components/form/button'
import { localize } from 'components/localization'

type FooterProps = {
    step: number
    setStep: React.Dispatch<React.SetStateAction<number>>
    setShowWizard: React.Dispatch<React.SetStateAction<boolean>>
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
    background-color: var(--color-white);
    z-index: 2;
`

const enum ButtonType {
    Previous = 'PREVIOUS',
    Next = 'NEXT',
}

const Footer = ({
    step,
    setStep,
    setShowWizard,
    max_step,
    setEnableNext,
    disabled,
}: FooterProps) => {
    const buttonHandler = React.useCallback(
        (button_type: ButtonType): void => {
            if (button_type === ButtonType.Previous) {
                step > 1 && setStep(step - 1)
            }
            if (button_type === ButtonType.Next) {
                step < max_step && setStep(step + 1)
                setEnableNext(false)
            }
        },
        [max_step, setEnableNext, setStep, step],
    )

    return (
        <StyledFooter>
            {step > 1 && (
                <Button tertiary="true" onClick={() => buttonHandler(ButtonType.Previous)}>
                    {localize('Previous')}
                </Button>
            )}
            <Button
                secondary
                disabled={disabled}
                onClick={() =>
                    max_step === step ? setShowWizard(0) : buttonHandler(ButtonType.Next)
                }
            >
                {max_step === step ? localize('Submit') : localize('Next')}
            </Button>
        </StyledFooter>
    )
}

export default Footer
