import React from 'react'
import { trade_types } from './data'
import TradesAvailableWrapper from 'features/components/organisms/markets/trade-tab/trades-available-wrapper'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Container from 'features/components/atoms/container'
import Flex from 'features/components/atoms/flex-box'

const TradeTypes = () => {
    return (
        <>
            <Typography.Heading
                as="h1"
                size="small"
                align="center"
                padding_inline="40x"
                pb="10x"
                lg={{ padding_block: '20x' }}
            >
                <Localize translate_text="_t_ETF trades available on Deriv_t_" />
            </Typography.Heading>
            <Container.Fluid>
                <Flex.Box direction="row">
                    {trade_types.map((data) => (
                        <TradesAvailableWrapper key={data.trade_name} item={data} />
                    ))}
                </Flex.Box>
            </Container.Fluid>
        </>
    )
}

export default TradeTypes
