import React from 'react'
import { cfd_banner_container } from './cfd-warning-banner.module.scss'
import { Localize } from 'components/localization'
import Container from 'features/components/atoms/container'
import { fallback_loss_percent } from 'common/constants'
import Typography from 'features/components/atoms/typography'
import useRegion from 'components/hooks/use-region'
import usePpc from 'features/hooks/use-ppc'

const CfdWarningBanner = () => {
    const { is_ppc } = usePpc()
    const { is_eu, is_cpa_plan } = useRegion()

    if (is_ppc || is_eu || is_cpa_plan) {
        return (
            <Container.Fixed className={cfd_banner_container} bgcolor="primary">
                <Container.Fluid padding_block="10x">
                    <Typography.Paragraph size="small">
                        <Localize
                            translate_text="_t_CFDs and other products offered on this website are complex instruments with high risk of losing money rapidly owing to leverage. <0>{{fallback_loss_percent}}% of retail investor accounts lose money when trading CFDs with Deriv</0>. You should consider whether you understand how these products work and whether you can afford to risk losing your money._t_"
                            values={{ fallback_loss_percent }}
                            components={[<strong key={0} />]}
                        />
                    </Typography.Paragraph>
                </Container.Fluid>
            </Container.Fixed>
        )
    }
    return <></>
}

export default CfdWarningBanner
