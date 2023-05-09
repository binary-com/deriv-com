import { createColumnHelper } from '@tanstack/react-table'
import React, { useMemo } from 'react'
import {
    TableCell,
    TableHeaderCell,
    DailyPercentageCell,
    TableCellIcon,
} from './components/_elements'
import { TMarketData } from './_types'
import { Localize } from 'components/localization'
import { TString } from 'types/generics'

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
                header: () => <TableHeaderCell text={<Localize translate_text={instrument} />} />,
                cell: (info) => <TableCellIcon icon_src={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('symbol', {
                header: () => <TableHeaderCell />,
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('bid', {
                header: () => <TableHeaderCell text={<Localize translate_text={bid_price} />} />,
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('ask', {
                header: () => <TableHeaderCell text={<Localize translate_text={ask_price} />} />,
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('spread', {
                header: () => <TableHeaderCell text={<Localize translate_text={spread} />} />,
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('day_percentage_change', {
                header: () => (
                    <TableHeaderCell text={<Localize translate_text={daily_percentage_change} />} />
                ),
                cell: (info) => <DailyPercentageCell value={info.getValue()} />,
            }),
        ]
    }, [])

    return columns
}

export default useLiveColumns
