import React from 'react'
import { OptionItem } from './type'
import AvailableOptionsItem from './available-options.item'
import { TString } from 'types/generics'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

export interface AvailableOptionsProps {
    heading: TString
    items?: OptionItem[]
}

const AvailableOptions = ({ heading, items }: AvailableOptionsProps) => {
    return (
        <Flex.Box justify="center" align="center" direction="col">
            <Typography.Heading padding_block="20x" size="small">
                <Localize translate_text={heading} />
            </Typography.Heading>
            <Flex.Box justify="center" align="center" pt="8x">
                {items.map((item) => (
                    <AvailableOptionsItem key={item.title} link={item.link} title={item.title} />
                ))}
            </Flex.Box>
        </Flex.Box>
    )
}

export default AvailableOptions
