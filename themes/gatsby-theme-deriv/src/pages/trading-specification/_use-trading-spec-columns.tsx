import { createColumnHelper } from '@tanstack/react-table'
import React, { useMemo } from 'react'
import { THeaders } from './_types'
import { TableCellGroup, TableCell, TableHeaderCell } from './components/_elements'
import { TString } from 'types/generics'

const liveMarketColumnHelper = createColumnHelper<THeaders>()

const instrument: TString = '_t_Instrument_t_'
const contract_size: TString = '_t_Contract size_t_'
const base_currency: TString = '_t_Base currency_t_'
const minimum_size: TString = '_t_Minimum size_t_'
const volume_limit: TString = '_t_Volume limit_t_'
const minimum_spread: TString = '_t_Minimum Spread_t_'
const target_spread: TString = '_t_Target Spread_t_'
const max_effective_leverage: TString = '_t_Max effective leverage_t_'
const margin_requirement: TString = '_t_Margin requirement (%)_t_'
const swap_long_percentage: TString = '_t_Swap long (Daily %)_t_'
const swap_long_points: TString = '_t_Swap long (Daily points)_t_'
const swap_short_points: TString = '_t_Swap short (Daily points)_t_'
const swap_short_percentage: TString = '_t_Swap short (Daily %)_t_'
const trading_hours: TString = '_t_Trading hours_t_'
const instrument_tooltip: TString =
    '_t_Refers to the currency pair or other product that can be traded._t_'
const base_currency_tooltip: TString = '_t_The currency in which an asset is denominated._t_'
const trading_hours_tooltip: TString =
    '_t_The time period during which an asset or market is available for trading._t_'

const contract_size_tooltip: TString = '_t_The standardised amount of an asset in one contract._t_'
const minimum_size_tooltip: TString = '_t_The smallest trade size allowed._t_'
const volume_limit_tooltip: TString =
    '_t_Total allowed volume of an open position plus pending orders, in one direction._t_'
const minimum_spread_tooltip: TString =
    '_t_The lowest possible spread obtainable with the current trading conditions._t_'
const target_spread_tooltip: TString =
    '_t_The expected difference between the bid and ask prices._t_'
const max_effective_leverage_tooltip: TString =
    '_t_The maximum ratio of borrowed to owned funds._t_'
const margin_requirement_tooltip: TString =
    '_t_The percentage of position value required as collateral. Calculated as (% x trade size)._t_'
const swap_long_tooltip: TString = '_t_Swaps charged upon rollover for long (buy) positions._t_'
const swap_short_tooltip: TString = '_t_Swaps charged upon rollover for short (sell) positions._t_'

const useLiveColumns = (market: string) => {
    const columns = useMemo(() => {
        return [
            liveMarketColumnHelper.accessor('instrument', {
                header: () => <TableHeaderCell text={instrument} toolTip={instrument_tooltip} />,
                cell: (info) =>
                    info.getValue() && <TableCellGroup data={info.getValue()} market={market} />,
            }),
            liveMarketColumnHelper.accessor('contract_size', {
                header: () => (
                    <TableHeaderCell text={contract_size} toolTip={contract_size_tooltip} />
                ),
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('base_currency', {
                header: () => (
                    <TableHeaderCell text={base_currency} toolTip={base_currency_tooltip} />
                ),
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('minimum_size', {
                header: () => (
                    <TableHeaderCell text={minimum_size} toolTip={minimum_size_tooltip} />
                ),
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('volume_limit', {
                header: () => (
                    <TableHeaderCell text={volume_limit} toolTip={volume_limit_tooltip} />
                ),
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('minimum_spread', {
                header: () => (
                    <TableHeaderCell text={minimum_spread} toolTip={minimum_spread_tooltip} />
                ),
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('target_spread', {
                header: () => (
                    <TableHeaderCell text={target_spread} toolTip={target_spread_tooltip} />
                ),
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('max_effective_leverage', {
                header: () => (
                    <TableHeaderCell
                        text={max_effective_leverage}
                        toolTip={max_effective_leverage_tooltip}
                    />
                ),
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('margin_requirement', {
                header: () => (
                    <TableHeaderCell
                        text={margin_requirement}
                        toolTip={margin_requirement_tooltip}
                    />
                ),
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('swap_long', {
                header: () => {
                    if (
                        market == 'forex' ||
                        market == 'indices' ||
                        market == 'commodities' ||
                        market == 'etfs'
                    )
                        return (
                            <TableHeaderCell text={swap_long_points} toolTip={swap_long_tooltip} />
                        )
                    else {
                        return (
                            <TableHeaderCell
                                text={swap_long_percentage}
                                toolTip={swap_long_tooltip}
                            />
                        )
                    }
                },

                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('swap_short', {
                header: () => {
                    if (
                        market == 'forex' ||
                        market == 'indices' ||
                        market == 'commodities' ||
                        market == 'etfs'
                    )
                        return (
                            <TableHeaderCell
                                text={swap_short_points}
                                toolTip={swap_short_tooltip}
                            />
                        )
                    else {
                        return (
                            <TableHeaderCell
                                text={swap_short_percentage}
                                toolTip={swap_short_tooltip}
                            />
                        )
                    }
                },
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('trading_hours', {
                header: () => (
                    <TableHeaderCell text={trading_hours} toolTip={trading_hours_tooltip} />
                ),
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
        ]
    }, [market])

    return columns
}

export default useLiveColumns
