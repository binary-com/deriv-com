import { createColumnHelper } from '@tanstack/react-table'
import React, { useMemo } from 'react'
import { THeaders } from './_types'
import { TableCellGroup, TableCell, TableHeaderCell } from './components/_elements'
import { Localize } from 'components/localization'

const liveMarketColumnHelper = createColumnHelper<THeaders>()

const useLiveColumns = (market: string) => {
    const columns = useMemo(() => {
        return [
            liveMarketColumnHelper.accessor('instrument', {
                header: () => <TableHeaderCell text={<Localize translate_text="Instrument" />} />,
                cell: (info) =>
                    info.getValue() && <TableCellGroup data={info.getValue()} market={market} />,
            }),
            liveMarketColumnHelper.accessor('contract_size', {
                header: () => (
                    <TableHeaderCell
                        text={<Localize translate_text="Contract size" />}
                        toolTip={
                            <Localize translate_text="A standardised amount that tells traders the exact quantities being bought or sold" />
                        }
                    />
                ),
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('base_currency', {
                header: () => (
                    <TableHeaderCell text={<Localize translate_text="Base currency" />} />
                ),
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('minimum_size', {
                header: () => (
                    <TableHeaderCell
                        text={<Localize translate_text="Minimum size" />}
                        toolTip={
                            <Localize translate_text="The minimum lot size required to open a new position" />
                        }
                    />
                ),
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('minimum_spread', {
                header: () => (
                    <TableHeaderCell
                        text={<Localize translate_text="Minimum Spread" />}
                        toolTip={
                            <Localize translate_text="The lowest possible spread obtainable with the current trading conditions" />
                        }
                    />
                ),
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('target_spread', {
                header: () => (
                    <TableHeaderCell
                        text={<Localize translate_text="Target Spread" />}
                        toolTip={
                            <Localize translate_text="The spread that the broker wishes to offer under the current trading conditions" />
                        }
                    />
                ),
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('max_effective_leverage', {
                header: () => (
                    <TableHeaderCell
                        text={<Localize translate_text="Max effective leverage" />}
                        toolTip={
                            <Localize translate_text="The actual leverage experienced by the client when account leverage is divided by the margin rate" />
                        }
                    />
                ),
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('margin_requirement', {
                header: () => (
                    <TableHeaderCell
                        text={<Localize translate_text="Margin requirement (%)" />}
                        toolTip={
                            <Localize translate_text="The percentage requirement of funds the client needs in their account to open a position" />
                        }
                    />
                ),
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('swap_long', {
                header: () => (
                    <TableHeaderCell
                        text={<Localize translate_text="Swap long (%)" />}
                        toolTip={
                            <Localize translate_text="Swaps charged upon rollover for long (buy) positions" />
                        }
                    />
                ),
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('swap_short', {
                header: () => (
                    <TableHeaderCell
                        text={<Localize translate_text="Swap short (Points)" />}
                        toolTip={
                            <Localize translate_text="Swaps charged upon rollover for short (sell) positions" />
                        }
                    />
                ),
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('trading_hours', {
                header: () => (
                    <TableHeaderCell text={<Localize translate_text="Trading hours" />} />
                ),
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
        ]
    }, [market])

    return columns
}

export default useLiveColumns
