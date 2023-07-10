import React from 'react'
import { OptionContentAvailability } from '../options-content/type'
import AvailableList from './available-list'
import Flex from 'features/components/atoms/flex-box'

export interface AvailableMarketPlatforms {
    markets: OptionContentAvailability[]
    platforms: OptionContentAvailability[]
}

const AvailableMarketPlatforms = ({ markets, platforms }: AvailableMarketPlatforms) => {
    return (
        <Flex.Box direction="col" justify="center" align="center" gap="12x" padding_block="20x">
            <AvailableList items={markets} title={'_t_Markets available_t_'} />
            <AvailableList items={platforms} title={'_t_Trade on_t_'} />
        </Flex.Box>
    )
}

export default AvailableMarketPlatforms
