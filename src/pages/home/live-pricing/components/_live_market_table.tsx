import React, { useCallback, useEffect, useMemo, useState } from 'react'
import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table'
import type { SortingState } from '@tanstack/react-table'
import { TAvailableLiveMarkets, TMarketData, TMarketDataResponse } from '../_types'
import useLiveColumns from '../_use-live-columns'
import { TABLE_VISIBLE_ROWS } from '../_utils'
import Spinner, { TableLoadingContainer, Table, TableContainer, TableRow } from './_elements'
import { useDerivApi } from 'components/hooks/use-deriv-api'

export type TLiveMarketTableProps = {
    market: TAvailableLiveMarkets
}

const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const LiveMarketTable = ({ market }: TLiveMarketTableProps) => {
    const [markets_data, setMarketsData] = useState(() => {
        const temp = new Map<TAvailableLiveMarkets, TMarketData[]>()
        return temp
    })

    const [is_loading, setIsLoading] = useState(false)
    const [trendingMarkets, setTrendingMarkets] = useState([])
    const [marketData, setMarketData] = useState([])

    const table_data = useMemo(() => {
        const data = markets_data.get(market)

        return data ?? []
    }, [market, markets_data])

    const [sorting, setSorting] = React.useState<SortingState>([])

    const { sendOnce, send } = useDerivApi()

    useEffect(() => {
        send({ trading_platform_asset_listing: 1, platform: 'mt5' }, (response) => {
            if (!response.error && response.trading_platform_asset_listing.mt5.assets.length > 0) {
                const data = response.trading_platform_asset_listing.mt5.assets
                const trendingMarketsList = data.filter(
                    (item) =>
                        item.market_ranking == '1' ||
                        item.market_ranking == '2' ||
                        item.market_ranking == '3' ||
                        item.market_ranking == '4' ||
                        item.market_ranking == '5' ||
                        item.market_ranking == '6',
                )
                setTrendingMarkets(trendingMarketsList)
            }
        })
    }, [])

    useEffect(() => {
        const all_markets = {}
        trendingMarkets.forEach((market) => {
            if (all_markets[market.market] == undefined) {
                all_markets[market.market] = [market]
            } else {
                all_markets[market.market].push(market)
            }
        })
        setMarketData(all_markets)
    }, [trendingMarkets])

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

    const rows = table.getRowModel().rows.slice(0, TABLE_VISIBLE_ROWS)

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
                        <TableRow key={headerGroup.id} bg="#f9f9f9">
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
                    {rows.map((row) => (
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
