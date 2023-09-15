import React from 'react'
import styled from 'styled-components'
import Button from 'components/form/button'
import { Localize } from 'components/localization'
import { WizardTypes } from 'pages/signup-affiliates/_types'

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
    onSubmit,
    max_step,
    setNextBtnEnabled,
    next_btn_enabled,
}: WizardTypes) => {
    const buttonHandler = React.useCallback(
        (button_type: ButtonType): void => {
            if (button_type === ButtonType.Previous) {
                step > 1 && setStep(step - 1)
                setNextBtnEnabled(true)
            }
            if (button_type === ButtonType.Next) {
                step < max_step && setStep(step + 1)
                setNextBtnEnabled(false)
            }
        },
        [max_step, setNextBtnEnabled, setStep, step],
    )

    return (
        <StyledFooter>
            {step > 1 && (
                <Button tertiary onClick={() => buttonHandler(ButtonType.Previous)}>
                    <Localize translate_text="_t_Previous_t_" />
                </Button>
            )}
            <Button
                secondary
                disabled={!next_btn_enabled}
                onClick={() => (max_step === step ? onSubmit() : buttonHandler(ButtonType.Next))}
            >
                {max_step === step ? (
                    <Localize translate_text="_t_Submit_t_" />
                ) : (
                    <Localize translate_text="_t_Next_t_" />
                )}
            </Button>
        </StyledFooter>
    )
}

export default Footer
