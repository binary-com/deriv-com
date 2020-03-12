import React from 'react'
import styled from 'styled-components'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import { Container, SectionContainer, Flex } from 'components/containers'
import device from 'themes/device'
// Icons
import PractiseIcon from 'images/svg/cross-hair-icon.svg'
import TradeIcon from 'images/svg/chart-icon.svg'
import WithdrawIcon from 'images/svg/withdraw-icon.svg'

const StyledSection = styled(SectionContainer)`
    border-bottom: 1px solid rgba(151, 151, 151, 0.2);

    @media ${device.tabletL} {
        padding: 5rem 0;
    }
`
const StyledFlex = styled(Flex)`
    margin: 6rem 0 0 0;

    @media ${device.tabletL} {
        margin: 0;

        article:first-child {
            margin-top: 2rem;
        }
    }
`
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

    ${Header} {
        padding-bottom: 1.6rem;

        @media ${device.tabletL} {
            font-size: 2rem;
            padding-bottom: 1rem;
        }
    }

    @media (max-width: 1185px) {
        margin: 2rem;
        order: ${props => (props.order ? props.order : '')};
    }
    @media ${device.tabletL} {
        width: 100%;
        margin-top: 0;
        padding: 2rem;
    }

    &:hover {
        transform: translateY(-1.5rem) scale(1.03);

        svg > g > path:nth-child(2) {
            fill: var(--color-red);
        }
    }
`

const SimpleSteps = () => (
    <StyledSection>
        <Container direction="column">
            <Header align="center" font_size="var(--text-size-header-1)" as="h2">
                {localize('3 simple steps')}
            </Header>
        </Container>
        <StyledFlex wrap="wrap">
            <ClientCard>
                <Flex ai="center">
                    <Header as="h4">{localize('Practise')}</Header>
                    <PractiseIcon />
                </Flex>
                <Text>
                    {localize(
                        'Open a demo account and start trading for free. Practise with an unlimited amount of virtual funds.',
                    )}
                </Text>
            </ClientCard>
            <ClientCard m="0 2rem">
                <Flex ai="center">
                    <Header as="h4">{localize('Trade')}</Header>
                    <TradeIcon />
                </Flex>
                <Text>
                    {localize(
                        'Open a real account, make a deposit, and start trading for real. Trade forex, indices, commodities, and more.',
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
                        'Get your funds quickly and easily. We support a variety of withdrawal options.',
                    )}
                </Text>
            </ClientCard>
        </StyledFlex>
    </StyledSection>
)

export default SimpleSteps
