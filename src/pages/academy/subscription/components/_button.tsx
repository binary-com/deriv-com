import React from 'react'
import styled from 'styled-components'
import { LinkButton } from 'components/form/'
import { localize } from 'components/localization'

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`

const ToAcademyButton = () => {
    return (
        <ButtonContainer>
            <LinkButton secondary="true" to="/academy">
                {localize('Take me to Academy')}
            </LinkButton>
        </ButtonContainer>
    )
}

export default ToAcademyButton
