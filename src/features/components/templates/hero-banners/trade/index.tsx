import React, { CSSProperties } from 'react'
import { trade_hero } from './trade-hero.module.scss'
import Flex from 'features/components/atoms/flex-box'
import dclsx from 'features/utils/dclsx'
import { FlexBoxProps } from 'features/components/atoms/flex-box/box'
import { TClipPathBannerColor } from 'features/types'

interface TradeHeroContainerProps extends FlexBoxProps<'div'> {
    clipPathBackgroundColor?: TClipPathBannerColor
}

const TradeHeroContainer: React.FC<TradeHeroContainerProps> = ({
    className,
    clipPathBackgroundColor,
    ...rest
}) => {
    const colorMapping = {
        brand: 'var(--color-red)',
        ctrade: 'var(--color-red-7)',
        // Add more color mappings as needed
    }
    const containerClassName = dclsx(className, trade_hero)

    const dynamicStyles = clipPathBackgroundColor
        ? ({
              '--clip-path-background-color': colorMapping[clipPathBackgroundColor],
          } as CSSProperties)
        : {}
    return <Flex.Box className={containerClassName} style={dynamicStyles} {...rest} />
}

export default TradeHeroContainer
