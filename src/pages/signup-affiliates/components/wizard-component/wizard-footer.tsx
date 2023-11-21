import React from 'react'
import styled from 'styled-components'
import { Analytics } from '@deriv/analytics'
import Button from 'components/form/button'
import { Localize } from 'components/localization'
import { WizardComponentTypes } from 'pages/signup-affiliates/_types'
import { isBrowser } from 'common/utility'
import device from 'themes/device'

const StyledFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 16px;
    gap: 8px;
    position: absolute;
    right: 0;
    bottom: 0;
    border-top: 1px solid var(--color-grey-43);
    inline-size: 100%;
    background-color: var(--color-white);
    z-index: 2;

    @media ${device.tabletL} {
        position: unset;
        justify-content: center;
    }
`
const PartnersButton = styled(Button)`
    @media ${device.tabletL} {
        inline-size: 100%;
        max-inline-size: 160px;
    }
`
const enum ButtonType {
    Previous = 'PREVIOUS',
    Next = 'NEXT',
}
const getCodeName = (num: number) => {
    switch (num) {
        case 1:
            return 'Account type'
        case 2:
            return 'Account plan'
        case 3:
            return 'Address'
        case 4:
            return 'Details'
        case 5:
            return 'Terms of use'
    }
}
const WizardFooter = ({
    step,
    setStep,
    onSubmit,
    max_step,
    setNextBtnEnabled,
    next_btn_enabled,
}: WizardComponentTypes) => {
    const analyticsData: Parameters<typeof Analytics.trackEvent>[1] = {
        form_source: isBrowser() && window?.location.hostname,
        form_name: 'default_diel_deriv',
    }

    const buttonHandler = React.useCallback(
        (button_type: ButtonType): void => {
            if (button_type === ButtonType.Previous) {
                Analytics?.trackEvent('ce_partner_account_signup_form', {
                    action: 'step_back',
                    step_num: step,
                    step_codename: getCodeName(step),
                    ...analyticsData,
                })
                step > 1 && setStep(step - 1)
                setNextBtnEnabled(true)
            }
            if (button_type === ButtonType.Next) {
                Analytics?.trackEvent('ce_partner_account_signup_form', {
                    action: 'step_passed',
                    step_num: step,
                    step_codename: getCodeName(step),
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
                <PartnersButton tertiary onClick={() => buttonHandler(ButtonType.Previous)}>
                    <Localize translate_text="_t_Back_t_" />
                </PartnersButton>
            )}
            <PartnersButton
                secondary
                disabled={!next_btn_enabled}
                onClick={() => (max_step === step ? onSubmit() : buttonHandler(ButtonType.Next))}
            >
                {max_step === step ? (
                    <Localize translate_text="_t_Submit_t_" />
                ) : (
                    <Localize translate_text="_t_Next_t_" />
                )}
            </PartnersButton>
        </StyledFooter>
    )
}

export default WizardFooter
