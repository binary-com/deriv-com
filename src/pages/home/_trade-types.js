import React from 'react'
import styled from 'styled-components'
import { Header, Text, Card } from 'components/elements'
import { localize } from 'components/localization'
import { Container, Flex } from 'components/containers'
import MarginLogo from 'images/svg/margin_2.svg'
import OptionsLogo from 'images/svg/options_2.svg'
import MultipliersLogo from 'images/svg/multipliers_2.svg'
import { LinkButton } from 'components/form'

const StyledCard = styled(Card)`
    max-width: 28.2rem;
    margin: 0 2.4rem;
    padding: 6.4rem 2.3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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

const StyledContainer = styled(Container)`
    margin-top: 9.4rem;
    width: 100% !important;
`

const TradeTypes = () => {
    return (
        <StyledContainer mt="5rem">
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
                <MarginLogo />
                <Header>{localize('Margin trading')}</Header>
                <Text>
                    {localize(
                        'Trade with leverage and low spreads for better returns on successful trades.',
                    )}
                </Text>
            </StyledCard>
            <StyledCard>
                <OptionsLogo />
                <Header>{localize('Options')}</Header>
                <Text>
                    {localize(
                        'Earn fixed payouts by predicting an assets price movement within a fixed time.',
                    )}
                </Text>
            </StyledCard>
            <StyledCard>
                <MultipliersLogo />
                <Header>{localize('Multipliers')}</Header>
                <Text>
                    {localize(
                        'Get the best of both - the upside of margin trading with the simplicity of options.',
                    )}
                </Text>
            </StyledCard>
        </StyledContainer>
    )
}

export default TradeTypes
