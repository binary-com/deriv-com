import React, { useMemo } from 'react'
import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table'
import type { SortingState } from '@tanstack/react-table'
import { TAvailableLiveMarkets } from '../types'
import useLiveColumns from '../use-live-columns'
import * as styles from './live-pricing.module.scss'
import Flex from 'features/components/atoms/flex-box'
import Link from 'features/components/atoms/link'
import { Localize } from 'components/localization'
import usePricingFeed from 'components/hooks/use-pricing-feed'
import Typography from 'features/components/atoms/typography'
import InitialLoader from 'components/elements/dot-loader'

export type TLiveMarketTableProps = {
    selected_market: TAvailableLiveMarkets
    link_to: string
}

const LoaderView = (
    <Flex.Box justify="center">
        <InitialLoader
            style={{
                padding: '40px 0',
                marginInlineStart: '45%',
            }}
        />
    </Flex.Box>
)
const ErrorView = (
    <Flex.Box justify="center" mt="5x">
        <Typography.Paragraph
            align="left"
            padding_block="3x"
            padding_inline="6x"
            font_family="UBUNTU"
            textcolor="brand"
        >
            <Localize translate_text="_t_There was an error fetching the live pricing data_t_"></Localize>
        </Typography.Paragraph>
    </Flex.Box>
)

const LiveMarketTable = ({ selected_market, link_to }: TLiveMarketTableProps) => {
    const [error, rawMarketsData] = usePricingFeed()
    const TABLE_VISIBLE_ROWS = 5
    const [sorting, setSorting] = React.useState<SortingState>([])

    const markets_data = useMemo(() => {
        if (rawMarketsData) {
            const stocks = rawMarketsData['stocks']
            const indices = rawMarketsData['indices']
            const stocks_indices = { ...stocks, ...indices }
            const res = { ...rawMarketsData, indices: stocks_indices }

            if (res[selected_market]) {
                return Object.values(res[selected_market])
            }
        }
        return []
    }, [rawMarketsData, selected_market])

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

    if (!rawMarketsData) return LoaderView
    if (error) return ErrorView

    return (
        <>
            <Flex.Box justify="center" mt="16x">
                <table>
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id} className={styles.table_row_header}>
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
                            <tr key={row.id} className={styles.table_row_data}>
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Flex.Box>

            <Flex.Box justify="center" align="center" mt="18x" gap="10x">
                <Link url={{ type: 'internal', to: link_to }} font_family="UBUNTU" size="medium">
                    <Localize translate_text="_t_View all >_t_"></Localize>
                </Link>
            </Flex.Box>
        </>
    )
}

export default LiveMarketTable
