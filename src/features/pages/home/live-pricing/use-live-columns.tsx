import { createColumnHelper } from '@tanstack/react-table'
import React, { useMemo } from 'react'
import { TMarketData } from './types'
import SymbolIcon from './table-component/symbol-icon'
import Flex from 'features/components/atoms/flex-box'
import { Localize } from 'components/localization'
import useBreakpoints from 'components/hooks/use-breakpoints'
import Typography from 'features/components/atoms/typography'

const liveMarketColumnHelper = createColumnHelper<TMarketData>()

const useLiveColumns = (markets_data) => {
    const { is_mobile } = useBreakpoints()

    const columns = useMemo(() => {
        let prevBid: any = sessionStorage.getItem('markets_data')
        prevBid = JSON.parse(prevBid)
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
                    console.log('info =>', prevBid?.[info.row.index])
                    let bid_color = 'gray'
                    if (prevBid) {
                        console.log('==>', 'prevBid', prevBid)
                        if (prevBid[info.row.index].bid > info.getValue()) {
                            bid_color = 'red'
                        } else if (prevBid[info.row.index].bid < info.getValue()) {
                            bid_color = 'green'
                        } else {
                            bid_color = 'gray'
                        }
                    }

                    // console.log('use col ==>', bid_color)
                    // console.log(
                    //     'prevBid and newbid',
                    //     prevBid,
                    //     info.getValue(),
                    //     typeof info.getValue(),
                    // )
                    // prevBid = info.getValue()

                    return (
                        <Flex.Box>
                            <Typography.Paragraph
                                size={is_mobile ? 'small' : 'medium'}
                                color={bid_color}
                                style={{ color: bid_color }}
                            >
                                {info.getValue()}
                            </Typography.Paragraph>
                        </Flex.Box>
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
