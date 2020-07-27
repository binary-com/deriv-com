import React from 'react'
import styled from 'styled-components'
import { Header, Text } from 'components/elements'
import { SectionContainer } from 'components/containers'
import { localize } from 'components/localization'

const NumberSection = styled(SectionContainer)`
    display: flex;
    background-color: var(--color-grey-25);
    padding: 4rem 12rem;
    align-items: center;
    justify-content: center;
`
const Splitter = styled.div`
    height: 6rem;
    width: 0.1rem;
    background-color: var(--color-grey-26);
`

const Numbers = () => {
    return (
        <NumberSection>
            <Header max_width="14.9rem" mr="2.4rem" as="h2">
                {localize('330K+')}
            </Header>
            <Splitter />
            <Text max_width="11.6rem" width="100%" mr="19.8rem" ml="2.4rem">
                {localize('clients on DMT5')}
            </Text>
            <Header max_width="11.6rem" mr="2.4rem" as="h2">
                {localize('100+')}
            </Header>
            <Splitter />
            <Text max_width="11.6rem" width="100%" mr="19.8rem" ml="2.4rem">
                {localize('tradable assets')}
            </Text>
            <Header max_width="11rem" mr="2.4rem" as="h2">
                {localize('24/7')}
            </Header>
            <Splitter />
            <Text max_width="11.6rem" width="100%" ml="2.4rem">
                {localize('trading')}
            </Text>
        </NumberSection>
    )
}
export default Numbers
