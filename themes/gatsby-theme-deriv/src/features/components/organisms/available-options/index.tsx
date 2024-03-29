import React from 'react'
import OptionsTab from './tab-items'
import { TString } from 'types/generics'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import { OptionNavigationType } from 'features/components/templates/navigation/tab-nav-without-border/types'

export interface AvailableOptionsProps {
    heading: TString
    items: OptionNavigationType[]
}

const AvailableOptions = ({ heading, items }: AvailableOptionsProps) => {
    return (
        <Flex.Box
            justify="center"
            container="fluid"
            align="center"
            direction="col"
            md={{
                pt: '40x',
            }}
        >
            <Typography.Heading size="small" align="center" as="h2">
                <Localize translate_text={heading} />
            </Typography.Heading>
            <OptionsTab options_tabs={items} />
        </Flex.Box>
    )
}

export default AvailableOptions
