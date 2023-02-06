import React, { ElementType } from 'react'
import styled from 'styled-components'
import { Localize } from 'components/localization'
import { Container, SectionContainer } from 'components/containers'
import { Header } from 'components/elements'
import device from 'themes/device'
import { TString } from 'types/generics'

type DHowItWorksProps = {
    title?: TString
    Video?: ElementType
}

const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        text-align: center;
        ${(props) =>
            props.as === 'h4' ? 'font-size: var(--text-size-sm);' : 'font-size: var(--text-size-l)'}
    }
`

const DHowItWorks = ({ Video, title }: DHowItWorksProps) => {
    return (
        <SectionContainer>
            <Container justify="center" direction="column">
                <StyledHeader as="h4" type="sub-section-title" align="center" weight="500">
                    <Localize translate_text="_t_How it works_t_" />
                </StyledHeader>
                <StyledHeader as="h2" type="page-title" align="center" mt="0.9rem">
                    <Localize translate_text={title} />
                </StyledHeader>
                <Video />
            </Container>
        </SectionContainer>
    )
}

export default DHowItWorks
