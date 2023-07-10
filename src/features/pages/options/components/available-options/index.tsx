import React from 'react'
import OptionsTab from './tab-items'
import { OptionNavigationType } from './type'
import { TString } from 'types/generics'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

export interface AvailableOptionsProps {
    heading: TString
    items?: OptionNavigationType[]
}

const AvailableOptions = ({ heading, items }: AvailableOptionsProps) => {
    return (
        <Flex.Box justify="center" align="center" direction="col" pt="40x">
            <Typography.Heading size="small">
                <Localize translate_text={heading} />
            </Typography.Heading>
            <OptionsTab options_tabs={items} />
        </Flex.Box>
    )
}

export default AvailableOptions
