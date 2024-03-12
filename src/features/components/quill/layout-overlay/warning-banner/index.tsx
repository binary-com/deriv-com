import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import DesktopText from './desktop-text'
import MobileText from './mobile-text'
import { useShowCfdBanner } from 'components/hooks/use-show-cfd-banner'

const WarningBanner = () => {
    const show_banner = useShowCfdBanner()

    const data = useStaticQuery(graphql`
        query {
            strapiCfdWarningBanner {
                loss_percent
            }
        }
    `)
    const loss_percent = data?.strapiCfdWarningBanner?.loss_percent

    if (show_banner) {
        return (
            <>
                <MobileText loss_percent={loss_percent} />
                <DesktopText loss_percent={loss_percent} />
            </>
        )
    }
    return <></>
}

export default WarningBanner
