import React from 'react'
import { tableContent } from './data'
import { item_container } from './styles.module.scss'
import InstrumentalTable from 'features/components/molecules/instruments-table'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

const InstrumentsTable = () => {
    return (
        <Flex.Box direction="col" justify="center" className={item_container}>
            <Typography.Paragraph
                size="medium"
                weight="bold"
                pt="24x"
                pb="12x"
                font_family="UBUNTU"
            >
                <Localize translate_text="_t_Instruments available for CFD trading_t_" />
            </Typography.Paragraph>
            <InstrumentalTable tableContent={tableContent} />
        </Flex.Box>
    )
}

export default InstrumentsTable
