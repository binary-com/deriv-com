import React, { useState } from 'react'
import { TradeType } from './types'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import { TString } from 'types/generics'
import TabMenu from 'features/components/templates/tabs/menu'
import Icon from 'features/components/atoms/icon'
import Link from 'features/components/atoms/link'
import useVisibleContent from 'components/hooks/use-visible-content'
import useBuildVariant from 'features/hooks/use-build-variant'

interface TradesAvailableWrapperProps {
    header?: TString
    item: TradeType
}

const TradesAvailableWrapper = ({ item }: TradesAvailableWrapperProps) => {
    const [current_tab, setCurrentTab] = useState('_t_CFDs_t_')
    const { region } = useBuildVariant()
    const available_trade_items = useVisibleContent({
        content: item.trade_items,
        config: {
            is_eu: region === 'eu' ? true : false,
        },
    })
    return (
        <Flex.Box direction="col" gap="10x" md={{ gap: '20x' }} align="center" justify="center">
            <TabMenu
                tab_names={[item.trade_name]}
                current_tab={current_tab}
                setCurrentTab={setCurrentTab}
            />
            {current_tab == item.trade_name && (
                <Flex.Box
                    direction="col"
                    padding_inline="4x"
                    md={{
                        padding_inline: '35x',
                    }}
                >
                    <Typography.Paragraph align="center">
                        <Localize translate_text={item.trade_description_1} />
                    </Typography.Paragraph>
                    <Typography.Paragraph align="center" pt="8x">
                        <Localize translate_text={item.trade_description_2} />
                    </Typography.Paragraph>
                    <Flex.Box
                        direction="col"
                        pt="6x"
                        md={{ direction: 'row', pt: '24x' }}
                        gap="12x"
                        justify="center"
                    >
                        <Typography.Paragraph pt="2x" align="center" font_family="UBUNTU">
                            <Localize translate_text="_t_Available on_t_" />
                        </Typography.Paragraph>
                        <Flex.Box direction="row" gap="12x" justify="center">
                            {available_trade_items.map(({ data }) => {
                                return (
                                    <Link url={data.link} key={data.name} no_hover>
                                        <Flex.Box direction="row" justify="center" align="center">
                                            <Flex.Box direction="row" gap="2x" align="center">
                                                <Icon
                                                    src={data.icon}
                                                    alt={'_t_chevron_t_'}
                                                    size={'large'}
                                                    width={24}
                                                    height={24}
                                                />
                                                <Typography.Paragraph
                                                    font_family="UBUNTU"
                                                    size="small"
                                                >
                                                    <Localize translate_text={data.name} />
                                                </Typography.Paragraph>
                                            </Flex.Box>
                                        </Flex.Box>
                                    </Link>
                                )
                            })}
                        </Flex.Box>
                    </Flex.Box>
                </Flex.Box>
            )}
        </Flex.Box>
    )
}

export default TradesAvailableWrapper
