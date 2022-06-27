import React from 'react'
import styled from 'styled-components'
import Button from '../button'
import { StepContext, FormContext } from '.'
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

const Footer = () => {
    const { step, setStep } = React.useContext(StepContext)
    const { form_data } = React.useContext(FormContext)
    const { account_type } = form_data

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
                disabled={!account_type}
                onClick={() => step < 5 && setStep(step + 1)}
            >
                {localize('Next')}
            </Button>
        </StyledFooter>
    )
}

export default Footer
