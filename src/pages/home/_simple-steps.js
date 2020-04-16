import React from 'react'
import styled, { css } from 'styled-components'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import { Container, SectionContainer, Flex } from 'components/containers'
import { LinkButton } from 'components/form'
import device from 'themes/device'
// Icons
import PractiseIcon from 'images/svg/cross-hair-icon.svg'
import TradeIcon from 'images/svg/chart-icon.svg'
import WithdrawIcon from 'images/svg/withdraw-icon.svg'

const icon32 = css`
    width: 32px;
    height: 32px;
    position: absolute;
    right: 0;
    top: 0;
`

const RelativeFlex = styled(Flex)`
    position: relative;
`

const PractiseIconIc = styled(PractiseIcon)`
    ${icon32}
`
const TradeIconIc = styled(TradeIcon)`
    ${icon32}
`
const WithdrawIconIc = styled(WithdrawIcon)`
    ${icon32}
`

const StyledSection = styled(SectionContainer)`
    border-bottom: 1px solid rgba(151, 151, 151, 0.2);

    @media ${device.tabletL} {
        padding: 5rem 0;
    }
`
const StyledFlex = styled(Flex)`
    margin: 4rem 0 0 0;

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
    box-shadow: 0 4px 8px 0 rgba(14, 14, 14, 0.1);
    width: 28.2rem;
    padding: 3.2rem 2.4rem;
    height: 100%;
    min-height: 22rem;
    margin: ${(props) => (props.m ? props.m : '')};
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
        order: ${(props) => (props.order ? props.order : '')};
    }
    @media ${device.tabletL} {
        width: 100%;
        margin-top: 0;
        padding: 2rem;
    }
`

const SimpleSteps = () => (
    <StyledSection>
        <Container direction="column">
            <Header align="center" as="h2">
                {localize('3 simple steps')}
            </Header>
            <StyledFlex wrap="wrap">
                <ClientCard>
                    <RelativeFlex ai="center">
                        <Header as="h4">{localize('Practise')}</Header>
                        <PractiseIconIc />
                    </RelativeFlex>
                    <Text>
                        {localize(
                            'Open a demo account and start trading for free. Practise with an unlimited amount of virtual funds.',
                        )}
                    </Text>
                </ClientCard>
                <ClientCard m="0 2rem">
                    <RelativeFlex ai="center">
                        <Header as="h4">{localize('Trade')}</Header>
                        <TradeIconIc />
                    </RelativeFlex>
                    <Text>
                        {localize(
                            'Open a real account, make a deposit, and start trading for real. Trade forex, indices, commodities, and more.',
                        )}
                    </Text>
                </ClientCard>
                <ClientCard>
                    <RelativeFlex ai="center">
                        <Header as="h4">{localize('Withdraw')}</Header>
                        <WithdrawIconIc />
                    </RelativeFlex>
                    <Text>
                        {localize(
                            'Get your funds quickly and easily. We support a variety of withdrawal options.',
                        )}
                    </Text>
                </ClientCard>
            </StyledFlex>

            <LinkButton secondary="true" to="/signup/" mt="4rem">
                {localize('Sign up now')}
            </LinkButton>
        </Container>
    </StyledSection>
)

export default SimpleSteps
