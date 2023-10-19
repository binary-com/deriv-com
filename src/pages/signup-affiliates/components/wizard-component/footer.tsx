import React from 'react'
import styled from 'styled-components'
import { Analytics } from '@deriv/analytics'
import Button from 'components/form/button'
import { Localize } from 'components/localization'
import { WizardComponentTypes } from 'pages/signup-affiliates/_types'
import { isBrowser } from 'common/utility'

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
}: WizardComponentTypes) => {
    const getCodeName = (num: number) => {
        switch (num) {
            case 1:
                return 'Account type'
            case 2:
                return 'Address details'
            case 3:
                return 'Phone number'
            case 4:
                return 'Personal details'
            case 5:
                return 'Terms of use'
        }
    }
    const analyticsData: Parameters<typeof Analytics.trackEvent>[1] = {
        form_source: isBrowser() && window?.location.hostname,
        form_name: 'default_diel_deriv',
        step_num: step,
        step_codename: getCodeName(step),
    }

    const buttonHandler = React.useCallback(
        (button_type: ButtonType): void => {
            if (button_type === ButtonType.Previous) {
                Analytics?.trackEvent('ce_partner_account_signup_form', {
                    action: 'step_back',
                    ...analyticsData,
                })
                step > 1 && setStep(step - 1)
                setNextBtnEnabled(true)
            }
            if (button_type === ButtonType.Next) {
                Analytics?.trackEvent('ce_partner_account_signup_form', {
                    action: 'step_passed',
                    ...analyticsData,
                })
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
