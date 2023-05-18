import React from 'react'
import { trade_platform_hero, blueCurve, redCurve } from './trade-platforms-hero.module.scss'
import Flex from 'features/components/atoms/flex-box'
import dclsx from 'features/utils/dclsx'
import { FlexBoxProps } from 'features/components/atoms/flex-box/box'

type tradePlatformBannerProps = FlexBoxProps<'div'> & {
    curveColor: 'red' | 'blue'
}
const TradePlatformHeroContainer = ({
    className,
    curveColor = 'red',
    ...rest
}: tradePlatformBannerProps) => {
    const bgCurveColor = curveColor == 'blue' ? blueCurve : redCurve
    return <Flex.Box className={dclsx(className, trade_platform_hero, bgCurveColor)} {...rest} />
}

export default TradePlatformHeroContainer
