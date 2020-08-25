import React from 'react'
import styled from 'styled-components'
import { Header, Text, Card } from 'components/elements'
import { localize } from 'components/localization'
import { Container, Flex, Show } from 'components/containers'
import MarginLogo from 'images/svg/margin_2.svg'
import OptionsLogo from 'images/svg/options_2.svg'
import MultipliersLogo from 'images/svg/multipliers_2.svg'
import { LinkButton } from 'components/form'
//import device from 'themes/device'

const StyledCard = styled(Card)`
    max-width: 28.2rem;
    margin: 0 2.4rem;
    padding: 6.4rem 2.3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100%;

    &:nth-child(4) {
        margin-right: unset;
    }
    ${Text} {
        font-size: 1.4rem;
    }
    ${Header} {
        text-align: center;
        font-size: 2.4rem;
        margin-bottom: 0.8rem;
        margin-top: 2.4rem;
    }
`
const TradingButton = styled(LinkButton)`
    height: 4.8rem;
    display: flex;
    align-items: center;
    max-width: 18rem;
    justify-content: center;
`

const TradeTypes = () => {
    return (
        <div>
            <Show.Desktop max_width="851">
                <Container m="0 auto 8rem !important" height="35rem" width="90% !important">
                    <Flex direction="column" max_width="28.2rem">
                        <Header size="3.2rem">{localize('Trade Types')}</Header>
                        <Text size="2.4rem" mt="1.6rem" mb="5rem">
                            {localize(
                                'Trade what you like, the way you like it, and on your preferred market.',
                            )}
                        </Text>
                        <TradingButton type="submit" secondary="true" to="/signup/">
                            {localize('Start trading')}
                        </TradingButton>
                    </Flex>
                    <StyledCard>
                        <div>
                            <MarginLogo />
                        </div>
                        <Header>{localize('Margin trading')}</Header>
                        <Text>
                            {localize(
                                'Trade with leverage and low spreads for better returns on successful trades.',
                            )}
                        </Text>
                    </StyledCard>
                    <StyledCard>
                        <div>
                            <OptionsLogo />
                        </div>
                        <Header>{localize('Options')}</Header>
                        <Text>
                            {localize(
                                'Earn fixed payouts by predicting an assets price movement within a fixed time.',
                            )}
                        </Text>
                    </StyledCard>
                    <StyledCard>
                        <div>
                            <MultipliersLogo />
                        </div>
                        <Header>{localize('Multipliers')}</Header>
                        <Text>
                            {localize(
                                'Get the best of both - the upside of margin trading with the simplicity of options.',
                            )}
                        </Text>
                    </StyledCard>
                </Container>
            </Show.Desktop>
            <Show.Mobile min_width="852">
                <Container
                    ai="center"
                    direction="column"
                    m="9rem auto 15rem !important"
                    height="35rem"
                    width="90% !important"
                >
                    <Flex direction="column">
                        <Header align="center" size="3.2rem">
                            {localize('Trade Types')}
                        </Header>
                        <Text align="center" size="2.4rem" mt="1.6rem" mb="5rem">
                            {localize(
                                'Trade what you like, the way you like it, and on your preferred market.',
                            )}
                        </Text>
                    </Flex>
                    <Flex>
                        <StyledCard>
                            <div>
                                <MarginLogo />
                            </div>
                            <Header>{localize('Margin trading')}</Header>
                            <Text>
                                {localize(
                                    'Trade with leverage and low spreads for better returns on successful trades.',
                                )}
                            </Text>
                        </StyledCard>
                        <StyledCard>
                            <div>
                                <OptionsLogo />
                            </div>
                            <Header>{localize('Options')}</Header>
                            <Text>
                                {localize(
                                    'Earn fixed payouts by predicting an assets price movement within a fixed time.',
                                )}
                            </Text>
                        </StyledCard>
                        <StyledCard>
                            <div>
                                <MultipliersLogo />
                            </div>
                            <Header>{localize('Multipliers')}</Header>
                            <Text>
                                {localize(
                                    'Get the best of both - the upside of margin trading with the simplicity of options.',
                                )}
                            </Text>
                        </StyledCard>
                    </Flex>
                    <TradingButton mt="3rem" type="submit" secondary="true" to="/signup/">
                        {localize('Start trading')}
                    </TradingButton>
                </Container>
            </Show.Mobile>
        </div>
    )
}

export default TradeTypes
