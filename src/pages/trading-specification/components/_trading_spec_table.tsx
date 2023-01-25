import React, { useState } from 'react'
import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table'
import type { SortingState } from '@tanstack/react-table'
import { TAvailableLiveMarkets } from '../_types'
import useLiveColumns from '../_use-trading-spec-columns'
import { TABLE_VISIBLE_ROWS } from '../_utils'
import forex_specification from '../data/_forex_specification'
import crypto_specification from '../data/_crypto_specification'
import derived_specification from '../data/_derived_specification'
import stocks_specification from '../data/_stocks_specification'
import commodities_specification from '../data/_commodities_specification'
import { Table, TableContainer, TableRow } from './_elements'
import AvailablePlatform from './_available-platform'

export type TLiveMarketTableProps = {
    market: TAvailableLiveMarkets
}

const TradingSpecificationTable = ({ market }: TLiveMarketTableProps) => {
    console.log(market)
    const [markets_data, setMarketsData] = useState(() => [...forex_specification])

    const [sorting, setSorting] = React.useState<SortingState>([])

    const columns = useLiveColumns()

    const table = useReactTable({
        data: markets_data,
        columns,
        state: {
            sorting,
        },
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
    })

    const rows = table.getRowModel().rows.slice(0, TABLE_VISIBLE_ROWS)

    return (
        <>
            <AvailablePlatform />
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
        </>
    )
}

export default TradingSpecificationTable
