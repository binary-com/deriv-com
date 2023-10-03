import React, { useEffect, useState } from 'react'
import { StringParam, useQueryParam } from 'use-query-params'
import NavTemplate from '../template'
import { mainItems } from '../main-nav/content'
import MainNavButtons from '../main-nav/main-nav-buttons'
import MarketBottomNav from '../template/market-bottom-nav'
import { market_nav_logo } from './market-nav.module.scss'
import Image from 'features/components/atoms/image'
import LogoImage from 'images/common/rebranding_logo.svg'
import Link from 'features/components/atoms/link'
import { localize } from 'components/localization'

const MarketNav = () => {
    const [platform] = useQueryParam('platform', StringParam)
    const [is_deriv_go, setIsDerivGo] = useState(false)

    useEffect(() => {
        setIsDerivGo(platform === 'derivgo')
    }, [platform])

    return (
        <>
            {is_deriv_go ? null : (
                <NavTemplate
                    render_bottom_nav={() => <MarketBottomNav />}
                    renderLogo={() => (
                        <Link url={{ type: 'internal', to: '/' }} aria-label="deriv logo link">
                            <Image
                                src={LogoImage}
                                className={market_nav_logo}
                                alt={localize('_t_deriv-logo_t_')}
                            />
                        </Link>
                    )}
                    items={mainItems}
                >
                    <MainNavButtons />
                </NavTemplate>
            )}
        </>
    )
}

export default MarketNav
