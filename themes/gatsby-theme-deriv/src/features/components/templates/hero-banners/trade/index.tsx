import React from 'react'
import { trade_hero } from './trade-hero.module.scss'
import Flex from 'features/components/atoms/flex-box'
import dclsx from 'features/utils/dclsx'
import { FlexBoxProps } from 'features/components/atoms/flex-box/box'

const TradeHeroContainer = ({ className, ...rest }: FlexBoxProps<'div'>) => {
    return <Flex.Box className={dclsx(className, trade_hero)} {...rest} />
}

export default TradeHeroContainer
