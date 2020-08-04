import React from 'react'
import styled from 'styled-components'
import InstantAccess from 'images/svg/trade-types/instant-access.svg'
import MinimalRisk from 'images/svg/trade-types/minimal-risk.svg'
import Seven from 'images/svg/trade-types/seven.svg'
import SyntheticIndices from 'images/svg/trade-types/synthetic-indices.svg'
import { localize } from 'components/localization'
import { Header, Text } from 'components/elements'
import { Flex, SectionContainer } from 'components/containers'

const Section = styled(SectionContainer)`
    display: flex;
    flex-direction: column;
    padding: 8rem 12rem;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 1px 0 0 #f2f3f4;
`
const Card = styled(Flex)`
    flex-direction: column;
    max-width: 28.2rem;
    max-height: 28.8rem;
    height: unset;
    padding: 2.4rem 2.4rem 4rem;
    border-radius: 8px;
    border: solid 1px var(--color-grey-21);
    margin-right: 2.4rem;
    justify-content: flex-start;
`

const WhyTrader = () => {
    return (
        <Section>
            <Header align="center" mb="4rem" as="h2">
                {localize('Why trade with DMT5')}
            </Header>
            <Flex>
                <Card>
                    <InstantAccess />
                    <Header mt="0.8rem" mb="0.8rem" as="h4">
                        {localize('Quick demo account sign-up')}
                    </Header>
                    <Text>
                        {localize(
                            'Practise with a demo account preloaded with unlimited virtual funds.',
                        )}
                    </Text>
                </Card>
                <Card>
                    <SyntheticIndices />
                    <Header mt="0.8rem" mb="0.8rem" as="h4">
                        {localize('Multiple assets on a single platform')}
                    </Header>
                    <Text>
                        {localize(
                            'Explore forex, synthetic indices, stocks, and commodities on an all-in-one platform.',
                        )}
                    </Text>
                </Card>
                <Card>
                    <Seven />
                    <Header mt="0.8rem" mb="0.8rem" as="h4">
                        {localize('24/7 trading')}
                    </Header>
                    <Text>
                        {localize(
                            'Trade round-the-clock, even on weekends, with our proprietary synthetic indices.',
                        )}
                    </Text>
                </Card>
                <Card>
                    <MinimalRisk />
                    <Header mt="0.8rem" mb="0.8rem" as="h4">
                        {localize('Licensed and regulated')}
                    </Header>
                    <Text>
                        {localize(
                            'Trade with a regulated industry pioneer trusted by traders for more than 20 years.',
                        )}
                    </Text>
                </Card>
            </Flex>
        </Section>
    )
}

export default WhyTrader
