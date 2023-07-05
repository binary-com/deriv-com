import React from 'react'
import { p2p_hero } from './p2p-hero.module.scss'
import Flex from 'features/components/atoms/flex-box'
import dclsx from 'features/utils/dclsx'
import { FlexBoxProps } from 'features/components/atoms/flex-box/box'

const DP2HeroContainer = ({ className, ...rest }: FlexBoxProps<'div'>) => {
    return <Flex.Box className={dclsx(className, p2p_hero)} {...rest} />
}

export default DP2HeroContainer
