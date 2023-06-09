import React from 'react'
import { trade_types } from './data'
import TradesAvailableWrapper from 'features/components/organisms/markets/trade-tab/trades-available-wrapper'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Flex from 'features/components/atoms/flex-box'

const TradeTypes = () => {
    return (
        <Flex.Box container="fluid" direction="col" justify="center" align="center">
            <Typography.Heading
                as="h2"
                size="small"
                align="center"
                padding="20x"
                lg={{ padding_block: '20x' }}
            >
                <Localize translate_text="_t_ETF trades available on Deriv_t_" />
            </Typography.Heading>
            {trade_types.map((data) => (
                <TradesAvailableWrapper key={data.trade_name} item={data} />
            ))}
        </Flex.Box>
    )
}

export default TradeTypes
