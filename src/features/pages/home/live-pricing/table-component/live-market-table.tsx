import React, { useEffect, useMemo } from 'react'
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
import { getCompairedValue } from 'common/utility'

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
    const { error, data: rawMarketsData, prev_data } = usePricingFeed()
    const TABLE_VISIBLE_ROWS = 5
    const [sorting, setSorting] = React.useState<SortingState>([])
    // console.log('==>', { prev_data, rawMarketsData })
    const markets_data = useMemo(() => {
        if (rawMarketsData) {
            const stocks = rawMarketsData['stk']
            const indices = rawMarketsData['ind']
            const stocks_indices = { ...stocks, ...indices }
            const res = { ...rawMarketsData, ind: stocks_indices }
            // prev_data

            if (res[selected_market]) {
                // console.log('==', Object.values(res[selected_market]))
                if (prev_data) {
                    const prev_stocks = prev_data['stk']
                    const prev_indices = prev_data['ind']
                    const prev_stocks_indices = { ...prev_stocks, ...prev_indices }
                    const prev_res = { ...prev_data, ind: prev_stocks_indices }
                    const new_response = Object.values(res[selected_market])
                    const prev_response = Object.values(prev_res[selected_market])

                    new_response.map((item, index) => {
                        // console.log(console.log('item==', item))

                        // const check_bid_status = item.bid === prev_response[index].bid
                        // console.log('status==', check_bid_status)
                        item.bid_status = getCompairedValue(item.bid, prev_response[index].bid)
                        item.ask_status = getCompairedValue(item.ask, prev_response[index].ask)
                        item.spread_status = getCompairedValue(item.sprd, prev_response[index].sprd)
                    })

                    // console.log('new_response===>', new_response)
                    // return new_response
                }

                return Object.values(res[selected_market])
            }

            // if (prev_res[selected_market]) {
            //     console.log('==', Object.values(prev_res[selected_market]))
            //     return Object.values(prev_res[selected_market])
            // }
        }
        return []
    }, [rawMarketsData, selected_market, prev_data])

    // useEffect(() => {
    //     console.log('=>', { prev_data, rawMarketsData })
    // }, [prev_data, rawMarketsData])

    const columns = useLiveColumns(markets_data, prev_data)
    useEffect(() => {
        sessionStorage.setItem('markets_data', JSON.stringify(markets_data))
    }, [markets_data])

    // console.log('markets_data =>', markets_data)
    const table = useReactTable({
        data: markets_data,
        // prev_data: prev_data,
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
