import React from 'react'
import { Localize } from 'components/localization'
import Container from 'features/components/atoms/container'
import { loss_percent } from 'common/constants'
import Typography from 'features/components/atoms/typography'
import useRegion from 'components/hooks/use-region'
import usePpc from 'features/hooks/use-ppc'

const CfdWarningBanner = () => {
    const { is_ppc } = usePpc()
    const { is_eu, is_cpa_plan } = useRegion()

    if (is_ppc || is_eu || is_cpa_plan) {
        return (
            <Container.Fixed bgcolor="primary">
                <Container.Fluid padding_block="10x">
                    <Typography.Paragraph size="small">
                        <Localize
                            translate_text="CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. <0>{{loss_percent}}% of retail investor accounts lose money when trading CFDs with this provider.</0> You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money."
                            values={{ loss_percent }}
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
