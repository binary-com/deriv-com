import React from 'react'
import * as styles from './cfd-warning-banner.module.scss'
import { Localize } from 'components/localization'
import Container from 'features/components/atoms/container'
import Link from 'features/components/atoms/link'
import Typography from 'features/components/atoms/typography'

type TextProps = {
    loss_percent: number
}

const DesktopText = ({ loss_percent }: TextProps) => {
    return (
        <Container.Fixed
            visible="larger-than-phone"
            className={styles.cfd_banner_container}
            bgcolor="primary"
        >
            <Container.Fluid padding_block="10x">
                <Typography.Paragraph size="medium">
                    <Localize
                        translate_text="_t_CFDs and other products offered on this website are complex instruments with a high risk of losing money rapidly owing to leverage.<0> {{loss_percent}}% of retail investor accounts lose money when trading CFDs with Deriv, read our full Risk disclosure here.</0> You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money._t_"
                        values={{ loss_percent }}
                        components={[
                            <Link
                                weight="bold"
                                key={0}
                                target="_blank"
                                url={{
                                    type: 'non-company',
                                    href: '/tnc/eu/risk-disclosure.pdf',
                                }}
                            />,
                        ]}
                    />
                </Typography.Paragraph>
            </Container.Fluid>
        </Container.Fixed>
    )
}

export default DesktopText
