import React from 'react'
import styled from 'styled-components'
import TradeTypesCard from './_trade-types-card'
import { Header, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { Container, Flex } from 'components/containers'
import CFDLogo from 'images/svg/trade-types/cfds.svg'
import OptionsLogo from 'images/svg/trade-types/options.svg'
import MultipliersLogo from 'images/svg/trade-types/multipliers.svg'
import { LinkButton } from 'components/form'
import { DerivStore } from 'store'

const TradingButton = styled(LinkButton)`
    height: 40px;
    padding: 10px 48px;
    display: flex;
    align-items: center;
    width: fit-content;
    justify-content: center;
`

const StyledContainer = styled(Container)`
    margin: 0 auto 8rem;
    height: auto;
    width: 90%;
    flex-wrap: nowrap;
`

const TradeTypes = () => {
    const cfds = {
        icon: <img src={CFDLogo} alt="" width="48" height="49" />,
        title: <Localize translate_text="CFDs" />,
        description: (
            <Localize translate_text="Trade with leverage and tight spreads for better returns on successful trades." />
        ),
        link: '/trade-types/cfds/',
        linkTitle: localize('CFDs'),
    }
    const options = {
        icon: <img src={OptionsLogo} alt="" width="48" height="49" />,
        title: <Localize translate_text="Options" />,
        description: (
            <Localize translate_text="Earn fixed payouts by predicting an asset's price movement within a fixed time." />
        ),
        link: '/trade-types/options/',
        linkTitle: localize('Options'),
    }
    const multipliers = {
        icon: <img src={MultipliersLogo} alt="" width="48" height="49" />,
        title: <Localize translate_text="Multipliers" />,
        description: (
            <Localize translate_text="Get the best of both - the upside of CFDs with the simplicity of options." />
        ),
        link: '/trade-types/multiplier/',
        linkTitle: localize('Multiplier'),
    }

    const { is_eu_country } = React.useContext(DerivStore)

    const trade_types = is_eu_country ? [cfds, multipliers] : [cfds, options, multipliers]

    return (
        <div>
            <StyledContainer>
                <Flex direction="column" max_width="28.2rem">
                    <Header as="h3" type="section-title">
                        {localize('Trade types')}
                    </Header>
                    <Text size="2.4rem" mt="1.6rem" mb="5rem">
                        {localize(
                            'Explore different trade types to trade on your preferred market.',
                        )}
                    </Text>
                    <TradingButton
                        id="dm-trade-types-signup"
                        type="submit"
                        secondary="true"
                        to="/signup/"
                    >
                        {localize('Start trading')}
                    </TradingButton>
                </Flex>
                <Flex>
                    {trade_types.map((trade_type, idx) => (
                        <TradeTypesCard
                            key={idx}
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

export default TradeTypes
