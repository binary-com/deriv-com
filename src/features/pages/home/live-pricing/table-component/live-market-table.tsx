import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table'
import type { SortingState } from '@tanstack/react-table'
import { TAvailableLiveMarkets, TMarketData } from '../types'
import useLiveColumns from '../use-live-columns'
import { table_row_header, table_row_data } from './live-pricing.module.scss'
import Container from 'features/components/atoms/container'
import Flex from 'features/components/atoms/flex-box'
import useRegion from 'components/hooks/use-region'
import Typography from 'features/components/atoms/typography'
import Link from 'features/components/atoms/link'
import { Localize } from 'components/localization'

export type TLiveMarketTableProps = {
    selected_market: TAvailableLiveMarkets
    link_to: string
    display_name: string
}

const LiveMarketTable = ({ selected_market, link_to, display_name }: TLiveMarketTableProps) => {
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
            <Container.Fixed>
                <Flex.Box justify="center" mt="16x">
                    <table>
                        <thead>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id} className={table_row_header}>
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
                                </tr>
                            ))}
                        </thead>
                        <tbody>
                            {rows.map((row) => (
                                <tr key={row.id} className={table_row_data}>
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Flex.Box>
            </Container.Fixed>
            <Flex.Box justify="center" align="center" mt="18x" gap="10x">
                <Link url={{ type: 'internal', to: link_to }} font_family="UBUNTU">
                    <Typography.Paragraph size="small">
                        <Localize
                            translate_text="_t_See all {{display_name}} market >_t_"
                            values={{ display_name }}
                        />
                    </Typography.Paragraph>
                </Link>
            </Flex.Box>
        </>
    )
}

export default LiveMarketTable
