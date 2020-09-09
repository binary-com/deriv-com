import React from 'react'
import styled from 'styled-components'
import TradeTypesCard from './_trade-types-card'
import { Header, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { Container, Flex } from 'components/containers'
import MarginLogo from 'components/svgs/margin'
import OptionsLogo from 'components/svgs/options'
import MultipliersLogo from 'components/svgs/multipliers'
import { LinkButton } from 'components/form'

const TradingButton = styled(LinkButton)`
    height: 4.8rem;
    display: flex;
    align-items: center;
    max-width: 18rem;
    justify-content: center;
`

const StyledContainer = styled(Container)`
    margin: 0 auto 8rem;
    height: auto;
    width: 90%;
    flex-wrap: nowrap;
`

const TradeTypes = () => {
    return (
        <div>
            <StyledContainer>
                <Flex direction="column" max_width="28.2rem">
                    <Header size="3.2rem">{localize('Trade types')}</Header>
                    <Text size="2.4rem" mt="1.6rem" mb="5rem">
                        {localize(
                            'Trade what you like, the way you like it, and on your preferred market.',
                        )}
                    </Text>
                    <TradingButton type="submit" secondary="true" to="/signup/">
                        {localize('Start trading')}
                    </TradingButton>
                </Flex>
                <Flex>
                    {trade_types.map((trade_type) => (
                        <TradeTypesCard
                            key={trade_type.title}
                            icon={trade_type.icon}
                            title={trade_type.title}
                            description={trade_type.description}
                            link={trade_type.link}
                            linkTitle={trade_type.linkTitle}
                        />
                    ))}
                </Flex>
            </StyledContainer>
        </div>
    )
}

const margin = {
    icon: <MarginLogo dynamic_id="margin-desktop" />,
    title: <Localize translate_text="Margin Trading" />,
    description: (
        <Localize translate_text="Trade with leverage and low spreads for better returns on successful trades." />
    ),
    link: '/trade-types/margin',
    linkTitle: localize('Margin'),
}
const options = {
    icon: <OptionsLogo dynamic_id="options-desktop" />,
    title: <Localize translate_text="Options" />,
    description: (
        <Localize translate_text="Earn fixed payouts by predicting an assets price movement within a fixed time." />
    ),
    link: '/trade-types/options',
    linkTitle: localize('Options'),
}
const multipliers = {
    icon: <MultipliersLogo dynamic_id="multipliers-desktop" />,
    title: <Localize translate_text="Multipliers" />,
    description: (
        <Localize translate_text="Get the best of both - the upside of margin trading with the simplicity of options." />
    ),
    link: '/trade-types/multiplier',
    linkTitle: localize('Multiplier'),
}

const trade_types = [margin, options, multipliers]

export default TradeTypes
