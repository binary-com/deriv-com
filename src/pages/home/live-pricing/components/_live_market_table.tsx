import React, { useCallback, useEffect, useMemo, useState } from 'react'
import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table'
import type { SortingState } from '@tanstack/react-table'
import { TAvailableLiveMarkets, TMarketData } from '../_types'
import useLiveColumns from '../_use-live-columns'
import { TABLE_VISIBLE_ROWS } from '../_utils'
import { Spinner, TableLoadingContainer, Table, TableContainer, TableRow } from './_elements'
import useRegion from 'components/hooks/use-region'

export type TLiveMarketTableProps = {
    market: TAvailableLiveMarkets
}

const LiveMarketTable = ({ market }: TLiveMarketTableProps) => {
    const [markets_data, setMarketsData] = useState(() => {
        const temp = new Map<TAvailableLiveMarkets, TMarketData[]>()
        return temp
    })

    const [is_loading, setIsLoading] = useState(false)

    const table_data = useMemo(() => {
        const data = markets_data.get(market)

        return data ?? []
    }, [market, markets_data])

    const [sorting, setSorting] = React.useState<SortingState>([])

    const { is_eu } = useRegion()
    const region = is_eu ? 'eu' : 'row'

    const requestMarketsData = useCallback(() => {
        setIsLoading(true)

        fetch(`https://worker.shuvohabib.workers.dev?region=${region}`)
            .then((response) => response.json())
            .then((response) => {
                const responseData = [...response.trading_platform_asset_listing.mt5.assets]
                const markets = new Map<TAvailableLiveMarkets, TMarketData[]>()

                responseData.forEach((item) => {
                    const market = item.market == 'stocks' ? 'indices' : item.market

                    if (!markets.has(market)) {
                        markets.set(market, [item])
                    } else {
                        markets.get(market).push(item)
                    }
                })

                setMarketsData(markets)
                setIsLoading(false)
            })
            .catch((error) => console.error(error))
    }, [])

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
        const intervalId = setInterval(() => {
            requestMarketsData()
        }, 10000) // 10 seconds

        return () => clearInterval(intervalId)
    }, [requestMarketsData])

    const rows = table.getRowModel().rows.slice(0, TABLE_VISIBLE_ROWS)
    return (
        <TableContainer>
            <Table>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id} bg="var(--color-white-1)">
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
                    {is_loading && (
                        <TableLoadingContainer>
                            <Spinner />
                        </TableLoadingContainer>
                    )}
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
