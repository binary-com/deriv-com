import React from 'react'
import { tableContent } from './data'
import { item_container } from './styles.module.scss'
import InstrumentalTable from 'features/components/molecules/instruments-table'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Container from 'features/components/atoms/container'

const InstrumentsTableEtf = () => {
    return (
        <Container.Fluid as="section">
            <Flex.Box direction="col" className={item_container}>
                <Typography.Paragraph weight="bold" size="medium" pt="24x" pb="12x">
                    <Localize translate_text="_t_Instruments available for CFD trading_t_" />
                </Typography.Paragraph>
                <InstrumentalTable tableContent={tableContent} />
            </Flex.Box>
        </Container.Fluid>
    )
}

export default InstrumentsTableEtf
