import React from 'react'
import { SectionContainer } from 'components/containers'
import { Header } from 'components/elements/typography'
import { localize } from 'components/localization'
const DerivIBProgramme = () => {
    return (
        <SectionContainer>
            <Header font_size='3.6rem' align='center'>{localize('Deriv IB Programme')}</Header>
        </SectionContainer>
    )
}

export default DerivIBProgramme