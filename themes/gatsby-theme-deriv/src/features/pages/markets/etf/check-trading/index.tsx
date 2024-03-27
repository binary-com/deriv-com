import React from 'react'
import * as styles from './styles.module.scss'
import Flex from 'features/components/atoms/flex-box'
import { Localize } from 'components/localization'
import LinkButton from 'features/components/atoms/link-button'
import Typography from 'features/components/atoms/typography'

const CheckTrading = () => {
    return (
        <Flex.Box direction="col" container="fixed" className={styles.item_container}>
            <Flex.Box
                direction="col"
                container="fluid"
                justify="center"
                align="center"
                pb="30x"
                pt="20x"
                md={{ pb: '40x', mb: '20x' }}
            >
                <Typography.Paragraph mb="10x" textcolor="black" align="center">
                    <Localize translate_text="_t_Want to know more about CFD trading conditions for the instruments we offer?_t_" />
                </Typography.Paragraph>
                <LinkButton.Primary
                    font_family="UBUNTU"
                    size="medium"
                    url={{
                        type: 'internal',
                        to: '/trading-specification',
                    }}
                >
                    <Localize translate_text="_t_Check trading specs_t_" />
                </LinkButton.Primary>
            </Flex.Box>
        </Flex.Box>
    )
}

export default CheckTrading
