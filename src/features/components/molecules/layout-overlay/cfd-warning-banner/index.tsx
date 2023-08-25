import React, { useState } from 'react'
import * as styles from './cfd-warning-banner.module.scss'
import { Localize } from 'components/localization'
import Arrow from 'images/svg/arrow_expandable.svg'
import Container from 'features/components/atoms/container'
import { loss_percent } from 'common/constants'
import Flex from 'features/components/atoms/flex-box'
import Link from 'features/components/atoms/link'
import Image from 'features/components/atoms/image'
import Typography from 'features/components/atoms/typography'
import useRegion from 'components/hooks/use-region'
import usePpc from 'features/hooks/use-ppc'

const CfdWarningBanner = () => {
    const { is_ppc } = usePpc()
    const { is_eu, is_cpa_plan } = useRegion()
    const [expanded, setExpanded] = useState(false)

    if (is_ppc || is_eu || is_cpa_plan) {
        const toggleExpansion = () => {
            setExpanded((prev) => !prev)
        }

        return (
            <>
                <Flex.Box
                    visible="phone-only"
                    className={styles.cfd_banner_container}
                    bgcolor="primary"
                >
                    <Container.Fluid padding="10x">
                        <Typography.Paragraph size="large">
                            {expanded ? (
                                <>
                                    <Localize
                                        translate_text="_t_CFDs and other products offered on this website are complex instruments with a high risk of losing money rapidly owing to leverage.<0> 73% of retail investor accounts lose money when trading CFDs with Deriv, read our full Risk disclosure here.</0> You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money._t_"
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
                                </>
                            ) : (
                                <Container.Fluid margin_inline="10x">
                                    <Localize
                                        translate_text="_t_<0>73% of retail investor accounts lose money when trading CFDs with Deriv, read our full Risk disclosure here.</0>_t_"
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
                                </Container.Fluid>
                            )}
                        </Typography.Paragraph>
                    </Container.Fluid>

                    <Image
                        onClick={toggleExpansion}
                        src={Arrow}
                        alt="Expand"
                        className={expanded ? styles.arrowIconExpanded : styles.arrowIcon}
                    />
                </Flex.Box>
                <Container.Fixed
                    visible="larger-than-phone"
                    className={styles.cfd_banner_container}
                    bgcolor="primary"
                >
                    <Container.Fluid padding_block="10x">
                        <Typography.Paragraph size="medium">
                            <Localize
                                translate_text="_t_CFDs and other products offered on this website are complex instruments with a high risk of losing money rapidly owing to leverage.<0> 73% of retail investor accounts lose money when trading CFDs with Deriv, read our full Risk disclosure here.</0> You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money._t_"
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
            </>
        )
    }
    return <></>
}

export default CfdWarningBanner
