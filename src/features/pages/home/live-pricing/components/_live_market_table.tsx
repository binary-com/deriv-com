import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
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
    const [initial_loaded, setInitialLoaded] = useState(false)

    const [rawMarketsData, setRawMarketsData] = useState()

    const TABLE_VISIBLE_ROWS = 5
    const [markets_data, setMarketsData] = useState(() => {
        const temp = new Map<TAvailableLiveMarkets, TMarketData[]>()
        return temp
    })
    const intervalRef = useRef(null)

    const [sorting, setSorting] = React.useState<SortingState>([])

    const region = useMemo(() => {
        return is_eu
            ? 'https://deriv-static-testing-default-rtdb.firebaseio.com/eu.json'
            : 'https://deriv-static-testing-default-rtdb.firebaseio.com/row.json'
    }, [is_eu])

    const getData = useCallback(async () => {
        const rawResponse = await fetch(region)
        const response = await rawResponse.json()
        setRawMarketsData(response)
    }, [region])

    useEffect(() => {
        if (!initial_loaded) {
            getData()
            setInitialLoaded(true)
        }
        intervalRef.current = setInterval(getData, 10000)
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [getData, initial_loaded])

    const updateData = useCallback(() => {
        if (rawMarketsData) {
            const markets = rawMarketsData.market == 'indices' ? 'stocks' : rawMarketsData.market

            Object.keys(markets).map((item) => {
                if (item == selected_market) {
                    const selected_market_data = rawMarketsData.market[item]
                    const result = Object.values(selected_market_data)
                    setMarketsData(result)
                }
            })
        }
    }, [rawMarketsData, selected_market])

    useEffect(() => {
        updateData()
    }, [updateData])

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
