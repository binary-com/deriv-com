import React, { useCallback, useEffect, useMemo, useState } from 'react'
import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table'
import type { SortingState } from '@tanstack/react-table'
import { TAvailableLiveMarkets, TMarketData, TMarketDataResponse } from '../../_types'
import useLiveColumns from '../../_hooks/use-live-columns'
import Spinner, { TableLoadingContainer, Table, TableContainer, TableRow } from '../elements'
import { synthetic_index_mock_data } from '../common'
import { useDerivApi } from 'components/hooks/use-deriv-api'

export type TLiveMarketTableProps = {
    market: TAvailableLiveMarkets
}

const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const LiveMarketTable = ({ market }: TLiveMarketTableProps) => {
    const [markets_data, setMarketsData] = useState(() => {
        const temp = new Map<TAvailableLiveMarkets, TMarketData[]>()
        temp.set('synthetic_index', synthetic_index_mock_data)
        return temp
    })

    const [is_loading, setIsLoading] = useState(false)

    const table_data = useMemo(() => {
        const data = markets_data.get(market)
        return data ?? []
    }, [market, markets_data])

    const [sorting, setSorting] = React.useState<SortingState>([])

    const { sendOnce } = useDerivApi()

    const requestMarketsData = useCallback(() => {
        setIsLoading(true)
        sendOnce(
            { active_symbols: 'full', landing_company: 'svg' },
            (response: TMarketDataResponse) => {
                const responseMockData = [...response.active_symbols]
                const markets = new Map<TAvailableLiveMarkets, TMarketData[]>()

                responseMockData.forEach((item) => {
                    const currentMarket = [...(markets.get(item.market) ?? [])]

                    currentMarket.push(item)
                    markets.set(item.market, currentMarket)
                    item.spot_percentage_change = Number(
                        (randomIntFromInterval(-10, 10) / randomIntFromInterval(10, 100)).toFixed(
                            3,
                        ),
                    )
                })
                setMarketsData(markets)
                setIsLoading(false)
            },
        )
    }, [sendOnce])

    const columns = useLiveColumns(requestMarketsData)

    const table = useReactTable({
        data: table_data,
        columns,
        state: {
            sorting,
        },
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
    })

    useEffect(() => {
        requestMarketsData()
    }, [requestMarketsData])

    return (
        <TableContainer>
            {is_loading && (
                <TableLoadingContainer>
                    <Spinner />
                </TableLoadingContainer>
            )}
            <Table>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                              header.column.columnDef.header,
                                              header.getContext(),
                                          )}
                                </th>
                            ))}
                        </TableRow>
                    ))}
                </thead>
                <tbody>
                    {table
                        .getRowModel()
                        .rows.slice(0, 6)
                        .map((row) => (
                            <TableRow key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </TableRow>
                        ))}
                </tbody>
            </Table>
        </TableContainer>
    )
}

export default LiveMarketTable
