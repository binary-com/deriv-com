import React from 'react'
import styled from 'styled-components'
import { SmallContainer } from '../components/_style'
import { SectionContainer } from 'components/containers'
import { Header } from 'components/elements'
import { localize } from 'components/localization'
// import { LinkButton } from 'components/form'
import Pattern from 'images/common/trade-types/pattern-section.png'

const PatternContainer = styled(SectionContainer)`
    background: url(${Pattern});
`

const WhatAreOptions = () => {
    return (
        <PatternContainer background="white" padding="4rem 0">
            <SmallContainer direction="column" ai="flex-start">
                <Header as="32" mb="4rem">
                    {localize('Start trading options on Deriv')}
                </Header>
            </SmallContainer>
        </PatternContainer>
    )
}

export default WhatAreOptions
