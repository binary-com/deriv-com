import React from 'react'
import NavTemplate from '../template'
import { mainItems } from '../main-nav/content'
import MainNavButtons from '../main-nav/main-nav-buttons'
import MarketBottomNav from '../template/market-bottom-nav'
import { market_nav_logo } from './market-nav.module.scss'
import Image from 'features/components/atoms/image'
import LogoImage from 'images/common/rebranding_logo.svg'
import Link from 'features/components/atoms/link'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'

const MarketNav = () => {
    const { is_deriv_go } = usePlatformQueryParam()

    return (
        <>
            {is_deriv_go ? null : (
                <NavTemplate
                    render_bottom_nav={() => <MarketBottomNav />}
                    renderLogo={() => (
                        <Link url={{ type: 'internal', to: '/' }}>
                            <Image src={LogoImage} className={market_nav_logo} />
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
