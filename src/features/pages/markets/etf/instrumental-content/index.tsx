import React from 'react'
import * as styles from './styles.module.scss'
import { instrumental_content } from './data'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

const InstrumentsContent = () => {
    return (
        <Flex.Box direction="col" className={styles.item_container}>
            <Flex.Box
                container="fixed"
                className={styles.content_wrapper}
                mb="12x"
                padding_inline="7x"
                padding_block="15x"
                gap="8x"
                direction="col"
                md={{
                    padding_inline: '15x',
                    mb: '0x',
                }}
            >
                {instrumental_content.map((data) => (
                    <Typography.Paragraph key={data.id} size="small">
                        <Localize
                            translate_text={data.instrumental_content_text.text}
                            components={data.instrumental_content_text.components}
                        />
                    </Typography.Paragraph>
                ))}
            </Flex.Box>
        </Flex.Box>
    )
}

export default InstrumentsContent
