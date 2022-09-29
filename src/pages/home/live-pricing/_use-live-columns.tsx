import { createColumnHelper } from '@tanstack/react-table'
import React, { useMemo } from 'react'
import { DailyPercentageCell, TableCell, TableHeaderCell } from './components/_elements'
import { TMarketData } from './_types'
import { USDJPY } from 'components/elements/symbols'
import RefreshIcon from 'images/svg/refresh.svg'

const liveMarketColumnHelper = createColumnHelper<TMarketData>()

const useLiveColumns = (request_market_data: () => void) => {
    const columns = useMemo(() => {
        return [
            liveMarketColumnHelper.accessor('display_name', {
                header: () => <TableHeaderCell text={'Trading Pairs'} />,
                cell: (info) => <TableCell text={info.getValue()} icon_src={USDJPY} />,
            }),
            liveMarketColumnHelper.accessor('spot', {
                header: () => (
                    <TableHeaderCell
                        text={'Last Price'}
                        icon_src={RefreshIcon}
                        on_icon_click={request_market_data}
                    />
                ),
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
