import React from 'react'
import * as styles from './instrumental-table.module.scss'
import SingleInstrumentsItem from './single-item-instruments'
import { InstrumentContentType } from './types'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

interface InstrumentalTableProps {
    tableContent: InstrumentContentType
}
const InstrumentalTable = ({ tableContent }: InstrumentalTableProps) => {
    const { title, data, mobile_basis, desktop_basis } = tableContent
    return (
        <Flex.Box container="fixed" className={styles.instrumental_wrapper}>
            <Flex.Item className={styles.instrumental_left_item} md={{ basis: '3-12' }}>
                <Typography.Heading size="xxs" textcolor="black">
                    <Localize translate_text={title} />
                </Typography.Heading>
            </Flex.Item>
            <Flex.Box wrap="wrap" justify="start" md={{ basis: '9-12' }}>
                {data.map((row) => (
                    <SingleInstrumentsItem
                        key={row.id}
                        content={row}
                        mobile_basis={mobile_basis}
                        md_basis={desktop_basis}
                    />
                ))}
            </Flex.Box>
        </Flex.Box>
    )
}

export default InstrumentalTable
