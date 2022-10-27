import React, { memo, useContext } from 'react'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import { DerivStore } from 'store'

const DTraderMarkets = () => {
    const { is_eu_country } = useContext(DerivStore)

    const answer = is_eu_country
        ? '_t_You can trade forex, stocks, stock indices, commodities, cryptocurrencies, and derived on DTrader. Some markets may not be available in certain countries._t_'
        : '_t_You can trade forex, stocks, stock indices, commodities, cryptocurrencies, and derived indices on DTrader. Some markets may not be available in certain countries._t_'

    return (
        <Header size="1.6rem" weight="normal">
            <Localize translate_text={answer} />
        </Header>
    )
}

export default memo(DTraderMarkets)
