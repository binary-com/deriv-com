import React from 'react'
import styled from 'styled-components'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import { Container, SectionContainer, Flex } from 'components/containers'
// Icons
import PractiseIcon from 'images/svg/cross-hair-icon.svg'
import TradeIcon from 'images/svg/chart-icon.svg'
import WithdrawIcon from 'images/svg/withdraw-icon.svg'

const ClientCard = styled.article`
    background-color: var(--color-white);
    border-radius: 4px;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
    width: 28.2rem;
    padding: 3.2rem;
    height: 100%;
    margin: ${props => (props.m ? props.m : '')};
    position: relative;
    overflow: hidden;
    transition: transform 0.3s;

    @media (max-width: 1185px) {
        margin: 2rem;
        order: ${props => (props.order ? props.order : '')};
    }

    &:hover {
        transform: translateY(-1.5rem) scale(1.03);

        svg > g > path:nth-child(2) {
            fill: var(--color-red);
        }
    }
`

const SimpleSteps = () => (
    <SectionContainer background="grey-10">
        <Container direction="column">
            <Header align="center" font_size="var(--text-size-header-1)" as="h2">
                {localize('3 simple steps')}
            </Header>
        </Container>
        <Flex m="6rem 0 0 0">
            <ClientCard>
                <Flex ai="center">
                    <Header as="h4">{localize('Practise')}</Header>
                    <PractiseIcon />
                </Flex>
                <Text>
                    {localize(
                        'Open a demo account and start trading for free. Practise with an unlimited amount of funds.',
                    )}
                </Text>
            </ClientCard>
            <ClientCard m="0 2rem" order="3">
                <Flex ai="center">
                    <Header as="h4">{localize('Trade')}</Header>
                    <TradeIcon />
                </Flex>
                <Text>
                    {localize(
                        'Open a real account and start trading for real. Trade forex, indices, commodities, and other derivatives.',
                    )}
                </Text>
            </ClientCard>
            <ClientCard>
                <Flex ai="center">
                    <Header as="h4">{localize('Withdraw')}</Header>
                    <WithdrawIcon />
                </Flex>
                <Text>
                    {localize(
                        'Get your funds quickly and easily. We support a variety of deposit and withdrawal options.',
                    )}
                </Text>
            </ClientCard>
        </Flex>
    </SectionContainer>
)

export default SimpleSteps
