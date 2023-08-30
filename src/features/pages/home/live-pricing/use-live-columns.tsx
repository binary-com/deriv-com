import { createColumnHelper } from '@tanstack/react-table'
import React, { useMemo, useRef, useState } from 'react'
import { TMarketData } from './types'
import SymbolIcon from './table-component/symbol-icon'
import TableCell from './table-cell'
import Flex from 'features/components/atoms/flex-box'
import { Localize } from 'components/localization'
import useBreakpoints from 'components/hooks/use-breakpoints'
import Typography from 'features/components/atoms/typography'

const liveMarketColumnHelper = createColumnHelper<TMarketData>()

const useLiveColumns = (markets_data, prev_data) => {
    const { is_mobile } = useBreakpoints()
    // const [bid_color, setBidColor] = useState('gray')
    // console.log('liveMarketColumnHelper=>', liveMarketColumnHelper)

    const compareValues = (previousValue, newValue, prevTestData, newIndex) => {
        // console.log('==>', prev_data)
        let bid_color = 'gray'
        // console.log(
        //     '==',
        //     { previousValue, newValue },
        //     typeof previousValue,
        //     typeof newValue,
        //     prevTestData,
        //     newIndex,
        // )
        if (previousValue > newValue) {
            bid_color = 'red'
            // console.log('==>', 'in if ')
            // setBidColor('red')
        } else if (previousValue < newValue) {
            bid_color = 'green'
            // setBidColor('green')
        } else {
            bid_color = 'gray'
            // setBidColor('gray')
        }
        return bid_color
    }
    let prevBid: any = sessionStorage.getItem('markets_data') //update type
    prevBid = JSON.parse(prevBid)
    const columns = useMemo(() => {
        const table_data = [
            liveMarketColumnHelper.accessor('code', {
                header: () => (
                    <Flex.Box>
                        <Typography.Paragraph
                            align="left"
                            weight="bold"
                            font_family="UBUNTU"
                            size={is_mobile ? 'small' : 'medium'}
                        >
                            <Localize translate_text="_t_Instrument_t_" />
                        </Typography.Paragraph>
                    </Flex.Box>
                ),
                cell: (info) => (
                    <Flex.Box>
                        <SymbolIcon icon_src={info.getValue()} />
                    </Flex.Box>
                ),
            }),
            liveMarketColumnHelper.accessor('sym', {
                header: () => <Flex.Box></Flex.Box>,
                cell: (info) => (
                    <Flex.Box>
                        <Typography.Paragraph size={is_mobile ? 'small' : 'medium'}>
                            {info.getValue()}
                        </Typography.Paragraph>
                    </Flex.Box>
                ),
            }),
            liveMarketColumnHelper.accessor('bid', {
                header: () => (
                    <Flex.Box>
                        <Typography.Paragraph
                            align="left"
                            weight="bold"
                            font_family="UBUNTU"
                            size={is_mobile ? 'small' : 'medium'}
                        >
                            <Localize translate_text="_t_Bid price_t_" />
                        </Typography.Paragraph>
                    </Flex.Box>
                ),
                cell: (info) => {
                    // console.log('info =>', prevBid?.[info.row.index])
                    // let bid_color = 'gray'
                    // if (prevBid) {
                    //     console.log('==>', 'prevBid', prevBid)
                    //     if (prevBid[info.row.index].bid > info.getValue()) {
                    //         bid_color = 'red'
                    //     } else if (prevBid[info.row.index].bid < info.getValue()) {
                    //         bid_color = 'green'
                    //     } else {
                    //         bid_color = 'gray'
                    //     }
                    // }

                    // console.log('use col ==>', bid_color)
                    // console.log(
                    //     'prevBid and newbid',
                    //     prevBid,
                    //     info.getValue(),
                    //     typeof info.getValue(),
                    // )
                    // prevBid = info.getValue()
                    // if (prevBid) compareValues(prevBid[info.row.index].bid, info.getValue())
                    // console.log('==>', bid_color)
                    // console.log('info =>', info)

                    // console.log('info2 =>', info.cell.getContext())
                    // info.row.original.mkt

                    return (
                        <TableCell
                            info={info.getValue()}
                            code={info.row.original.code}
                            status={info.row.original.bid_status}
                        />
                    )
                },
            }),
            liveMarketColumnHelper.accessor('ask', {
                header: () => (
                    <Flex.Box>
                        <Typography.Paragraph
                            align="left"
                            weight="bold"
                            font_family="UBUNTU"
                            size={is_mobile ? 'small' : 'medium'}
                        >
                            <Localize translate_text="_t_Ask price_t_" />
                        </Typography.Paragraph>
                    </Flex.Box>
                ),
                cell: (info) => (
                    <Flex.Box>
                        <Typography.Paragraph size={is_mobile ? 'small' : 'medium'}>
                            {info.getValue()}
                        </Typography.Paragraph>
                    </Flex.Box>
                ),
            }),
            liveMarketColumnHelper.accessor('sprd', {
                header: () => (
                    <Flex.Box>
                        <Typography.Paragraph
                            align="left"
                            weight="bold"
                            font_family="UBUNTU"
                            size={is_mobile ? 'small' : 'medium'}
                        >
                            <Localize translate_text="_t_Spread_t_" />
                        </Typography.Paragraph>
                    </Flex.Box>
                ),
                cell: (info) => (
                    <Flex.Box>
                        <Typography.Paragraph size={is_mobile ? 'small' : 'medium'}>
                            {info.getValue()}
                        </Typography.Paragraph>
                    </Flex.Box>
                ),
            }),
            liveMarketColumnHelper.accessor('chng', {
                header: () => (
                    <Flex.Box>
                        <Typography.Paragraph
                            weight="bold"
                            font_family="UBUNTU"
                            P
                            size={is_mobile ? 'small' : 'medium'}
                            md={{ align: 'left' }}
                        >
                            <Localize translate_text="_t_Daily % change_t_" />
                        </Typography.Paragraph>
                    </Flex.Box>
                ),
                cell: (info) => {
                    const value_in_integer = info.getValue().replace(/[% ]/g, '')
                    const color =
                        (value_in_integer > 0 && 'profit') ||
                        (value_in_integer < 0 && 'brand') ||
                        'primary'
                    const percentage_change =
                        value_in_integer == 0.0
                            ? info.getValue().replace(/[-, + ]/g, '')
                            : info.getValue()

                    return (
                        <Flex.Box>
                            <Typography.Paragraph
                                size={is_mobile ? 'small' : 'medium'}
                                font_family="UBUNTU"
                                textcolor={color}
                                dir="ltr"
                            >
                                {percentage_change}
                            </Typography.Paragraph>
                        </Flex.Box>
                    )
                },
            }),
        ]
        sessionStorage.setItem('markets_data', JSON.stringify(markets_data))
        return table_data
    }, [])

    return columns
}

export default useLiveColumns
