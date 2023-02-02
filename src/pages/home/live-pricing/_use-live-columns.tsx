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

const liveMarketColumnHelper = createColumnHelper<TMarketData>()

const useLiveColumns = (marketData: () => void) => {
    const columns = useMemo(() => {
        return [
            liveMarketColumnHelper.accessor('shortcode', {
                header: () => (
                    <TableHeaderCell text={<Localize translate_text="Instrument name" />} />
                ),
                cell: (info) => <TableCellIcon icon_src={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('symbol', {
                header: () => <TableHeaderCell />,
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('bid', {
                header: () => <TableHeaderCell text={<Localize translate_text="Bid price" />} />,
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('ask', {
                header: () => <TableHeaderCell text={<Localize translate_text="Ask price" />} />,
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('spread', {
                header: () => <TableHeaderCell text={<Localize translate_text="Spread" />} />,
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('day_percentage_change', {
                header: () => (
                    <TableHeaderCell text={<Localize translate_text="Daily % Change" />} />
                ),
                cell: (info) => <DailyPercentageCell value={info.getValue()} />,
            }),
        ]
    }, [marketData])

    return columns
}

export default useLiveColumns
