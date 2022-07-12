import React from 'react'
import styled from 'styled-components'
import Button from '../button'
import { StepContext } from '.'
import { localize } from 'components/localization'

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
    border-top: 1px solid #dddddd;
    width: 100%;
`

const Footer = ({ disabled }: { disabled: boolean }) => {
    const { step, setStep, max_step } = React.useContext(StepContext)

    return (
        <StyledFooter>
            <Button
                tertiary="true"
                disabled={step <= 1}
                onClick={() => step > 1 && setStep(step - 1)}
            >
                {localize('Previous')}
            </Button>
            <Button
                secondary="true"
                disabled={disabled}
                onClick={() => step < 5 && setStep(step + 1)}
            >
                {max_step === step ? localize('Submit') : localize('Next')}
            </Button>
        </StyledFooter>
    )
}

export default Footer
