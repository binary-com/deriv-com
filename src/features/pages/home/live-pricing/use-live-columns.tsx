import { createColumnHelper } from '@tanstack/react-table'
import React, { useMemo } from 'react'
import { TMarketData } from './types'
import SymbolIcon from './table-component/symbol-icon'
import Flex from 'features/components/atoms/flex-box'
import { Localize } from 'components/localization'
import useBreakpoints from 'components/hooks/use-breakpoints'
import Typography from 'features/components/atoms/typography'

const liveMarketColumnHelper = createColumnHelper<TMarketData>()

const useLiveColumns = () => {
    const { is_mobile } = useBreakpoints()
    const columns = useMemo(() => {
        return [
            liveMarketColumnHelper.accessor('shortcode', {
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
                        <SymbolIcon
                            icon_src={info.getValue()}
                            alt={info.row._valuesCache.sym as string}
                        />
                    </Flex.Box>
                ),
            }),
            liveMarketColumnHelper.accessor('symbol', {
                header: () => (
                    <Flex.Box>
                        <p className="sr-only">Symbol</p>
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
                cell: (info) => (
                    <Flex.Box>
                        <Typography.Paragraph size={is_mobile ? 'small' : 'medium'}>
                            {info.getValue()}
                        </Typography.Paragraph>
                    </Flex.Box>
                ),
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
            liveMarketColumnHelper.accessor('spread', {
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
            liveMarketColumnHelper.accessor('day_percentage_change', {
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
    }, [])

    return columns
}

export default useLiveColumns
