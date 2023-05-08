import React, { useEffect, useState } from 'react'
import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table'
import type { SortingState } from '@tanstack/react-table'
import { TAvailableLiveMarkets, TMarketData } from '../_types'
import useLiveColumns from '../_use-live-columns'
import { Table, TableContainer, TableRow, StyledContainer, ContainerWrapper } from './_elements'
import useRegion from 'components/hooks/use-region'
import { LocalizedLinkText } from 'components/elements'

export type TLiveMarketTableProps = {
    selected_market: TAvailableLiveMarkets
    to: string
    display_name: string
}

const LiveMarketTable = ({ selected_market, to, display_name }: TLiveMarketTableProps) => {
    const { is_eu } = useRegion()
    const TABLE_VISIBLE_ROWS = 5
    const [markets_data, setMarketsData] = useState(() => {
        const temp = new Map<TAvailableLiveMarkets, TMarketData[]>()
        return temp
    })

    const [sorting, setSorting] = React.useState<SortingState>([])

    const region = is_eu ? 'eu' : 'row'

    const regions = is_eu
        ? 'https://deriv-static-testing-default-rtdb.firebaseio.com/eu.json'
        : 'https://deriv-static-testing-default-rtdb.firebaseio.com/row.json'

    useEffect(() => {
        fetch(regions)
            .then((response) => response.json())
            .then((data) => {
                const markets = data.market === 'stocks' ? 'indices' : data.market
                Object.keys(markets).map((item) => {
                    if (item == selected_market) {
                        const filetr = data.market[item]
                        const result = Object.values(filetr)
                        setMarketsData(result)
                    }
                })
            })
    }, [selected_market, region])

    const columns = useLiveColumns(markets_data)

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

    useEffect(() => {
        const intervalId = setInterval(() => {
            regions
        }, 1000) // 10 seconds
        console.log('markets_data', markets_data)
        return () => clearInterval(intervalId)
    }, [])

    const rows = table.getRowModel().rows.slice(0, TABLE_VISIBLE_ROWS)

    return (
        <>
            <ContainerWrapper>
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
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </td>
                                    ))}
                                </TableRow>
                            ))}
                        </tbody>
                    </Table>
                </TableContainer>
            </ContainerWrapper>
            <StyledContainer>
                <LocalizedLinkText to={to}>
                    See all {display_name} market {'>'}
                </LocalizedLinkText>
            </StyledContainer>
        </>
    )
}

export default LiveMarketTable
