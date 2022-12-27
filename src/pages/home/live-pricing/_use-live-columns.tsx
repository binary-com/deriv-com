import { createColumnHelper } from '@tanstack/react-table'
import React, { useMemo } from 'react'
import { TableCell, TableHeaderCell, DailyPercentageCell } from './components/_elements'
import { TMarketData } from './_types'

const liveMarketColumnHelper = createColumnHelper<TMarketData>()

const useLiveColumns = (marketData: () => void) => {
    const columns = useMemo(() => {
        return [
            liveMarketColumnHelper.accessor('symbol', {
                header: () => <TableHeaderCell text={'Trading Pairs'} />,
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('bid', {
                header: () => <TableHeaderCell text={'Bid'} />,
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('ask', {
                header: () => <TableHeaderCell text={'Ask'} />,
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('spread', {
                header: () => <TableHeaderCell text={'Spreads'} />,
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('day_percentage_change', {
                header: () => <TableHeaderCell text={'Daily % Change'} />,
                cell: (info) => <DailyPercentageCell value={info.getValue()} />,
            }),
        ]
    }, [marketData])

    return columns
}

export default useLiveColumns
