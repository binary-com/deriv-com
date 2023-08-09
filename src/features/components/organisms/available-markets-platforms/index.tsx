import React from 'react'
import AvailableList from './available-list'
import Flex from 'features/components/atoms/flex-box'
import { OptionContentAvailability } from 'features/components/templates/options-content/type'
import { get_lang_direction } from 'components/localization'

export interface AvailableMarketPlatforms {
    markets: OptionContentAvailability[]
    platforms: OptionContentAvailability[]
}

const AvailableMarketPlatforms = ({ markets, platforms }: AvailableMarketPlatforms) => {
    return (
        <>
            <Flex.Box
                direction="col"
                justify="center"
                align="center"
                gap="12x"
                padding_block="4x"
                md={{
                    padding_block: '20x',
                    gap: '24x',
                }}
                dir={get_lang_direction()}
            >
                <AvailableList items={markets} title={'_t_Markets available_t_'} />
            </Flex.Box>
            <Flex.Box
                direction="col"
                justify="center"
                align="center"
                gap="12x"
                padding_block="4x"
                md={{
                    padding_block: '0x',
                    gap: '24x',
                }}
                dir={get_lang_direction()}
            >
                <AvailableList items={platforms} title={'_t_Trade on_t_'} />
            </Flex.Box>
        </>
    )
}

export default AvailableMarketPlatforms
