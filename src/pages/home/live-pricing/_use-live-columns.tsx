import { createColumnHelper } from '@tanstack/react-table'
import React, { useMemo } from 'react'
import { DailyPercentageCell, TableCell, TableHeaderCell } from './components/_elements'
import { TMarketData } from './_types'

const liveMarketColumnHelper = createColumnHelper<TMarketData>()

const useLiveColumns = (request_market_data: () => void) => {
    const columns = useMemo(() => {
        return [
            liveMarketColumnHelper.accessor('display_name', {
                header: () => <TableHeaderCell text={'Trading Pairs'} />,
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('spot', {
                header: () => <TableHeaderCell text={'Bid'} />,
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('spot', {
                header: () => <TableHeaderCell text={'Ask'} />,
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('spot', {
                header: () => <TableHeaderCell text={'Spreads'} />,
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('spot_percentage_change', {
                header: () => <TableHeaderCell text={'Daily % Change'} />,
                cell: (info) => <DailyPercentageCell value={info.getValue()} />,
            }),
        ]
    }, [request_market_data])

    return columns
}

export default useLiveColumns
