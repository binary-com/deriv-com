import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import MobileText from './mobile-text'
import DesktopText from './desktop-text'
import useRegion from 'components/hooks/use-region'
import usePpc from 'features/hooks/use-ppc'
import useBuildVariant from 'features/hooks/use-build-variant'

const CfdWarningBanner = () => {
    const { region } = useBuildVariant()
    const { is_ppc } = usePpc()
    const { is_cpa_plan } = useRegion()

    const data = useStaticQuery(graphql`
        query {
            strapiCfdWarningBanner {
                loss_percent
            }
        }
    `)
    const loss_percent = data?.strapiCfdWarningBanner?.loss_percent

    if (is_ppc || region === "eu" || is_cpa_plan) {
        return (
            <>
                <MobileText loss_percent={loss_percent} />
                <DesktopText loss_percent={loss_percent} />
            </>
        )
    }
    return <></>
}

export default CfdWarningBanner
