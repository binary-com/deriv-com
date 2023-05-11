import { createColumnHelper } from '@tanstack/react-table'
import React, { useMemo } from 'react'
import { table_header_cell } from './table-component/live-pricing.module.scss'
import { TMarketData } from './types'
import SymbolIcon from './table-component/symbol_icon'
import Flex from 'features/components/atoms/flex-box'
import { Localize } from 'components/localization'
import { TString } from 'types/generics'
import Typography from 'features/components/atoms/typography'

const liveMarketColumnHelper = createColumnHelper<TMarketData>()

const instrument: TString = '_t_Instrument name_t_'
const bid_price: TString = '_t_Bid price_t_'
const ask_price: TString = '_t_Ask price_t_'
const spread: TString = '_t_Spread_t_'
const daily_percentage_change: TString = '_t_Daily % Change_t_'

const useLiveColumns = () => {
    const columns = useMemo(() => {
        return [
            liveMarketColumnHelper.accessor('shortcode', {
                header: () => (
                    <Flex.Box className={table_header_cell}>
                        <Typography.Paragraph weight="bold">
                            <Localize translate_text={instrument} />
                        </Typography.Paragraph>
                    </Flex.Box>
                ),
                cell: (info) => (
                    <Flex.Box className={table_header_cell}>
                        <SymbolIcon icon_src={info.getValue()} />
                    </Flex.Box>
                ),
            }),
            liveMarketColumnHelper.accessor('symbol', {
                header: () => <Flex.Box className={table_header_cell}></Flex.Box>,
                cell: (info) => (
                    <Flex.Box className={table_header_cell}>
                        <Typography.Paragraph>
                            <Localize translate_text={info.getValue()} />
                        </Typography.Paragraph>
                    </Flex.Box>
                ),
            }),
            liveMarketColumnHelper.accessor('bid', {
                header: () => (
                    <Flex.Box className={table_header_cell}>
                        <Typography.Paragraph weight="bold">
                            <Localize translate_text={bid_price} />
                        </Typography.Paragraph>
                    </Flex.Box>
                ),
                cell: (info) => (
                    <Flex.Box className={table_header_cell}>
                        <Typography.Paragraph>
                            <Localize translate_text={info.getValue()} />
                        </Typography.Paragraph>
                    </Flex.Box>
                ),
            }),
            liveMarketColumnHelper.accessor('ask', {
                header: () => (
                    <Flex.Box className={table_header_cell}>
                        <Typography.Paragraph weight="bold">
                            <Localize translate_text={ask_price} />
                        </Typography.Paragraph>
                    </Flex.Box>
                ),
                cell: (info) => (
                    <Flex.Box className={table_header_cell}>
                        <Typography.Paragraph>
                            <Localize translate_text={info.getValue()} />
                        </Typography.Paragraph>
                    </Flex.Box>
                ),
            }),
            liveMarketColumnHelper.accessor('spread', {
                header: () => (
                    <Flex.Box className={table_header_cell}>
                        <Typography.Paragraph weight="bold">
                            <Localize translate_text={spread} />
                        </Typography.Paragraph>
                    </Flex.Box>
                ),
                cell: (info) => (
                    <Flex.Box className={table_header_cell}>
                        <Typography.Paragraph>
                            <Localize translate_text={info.getValue()} />
                        </Typography.Paragraph>
                    </Flex.Box>
                ),
            }),
            liveMarketColumnHelper.accessor('day_percentage_change', {
                header: () => (
                    <Flex.Box className={table_header_cell}>
                        <Typography.Paragraph weight="bold">
                            <Localize translate_text={daily_percentage_change} />
                        </Typography.Paragraph>
                    </Flex.Box>
                ),
                cell: (info) => {
                    const valueInInteger = info.getValue().replace(/[% ]/g, '')
                    return (
                        <Flex.Box className={table_header_cell}>
                            <Typography.Paragraph
                                textcolor={valueInInteger >= 0 ? 'tertiary' : 'brand'}
                            >
                                <Localize translate_text={info.getValue()} />
                            </Typography.Paragraph>
                        </Flex.Box>
                    )
                },
            }),
        ]
    }, [])

    return columns
}

export default useLiveColumns
