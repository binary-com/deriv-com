import React from 'react'
import NavTemplate from '../template'
import { mainItems } from '../main-nav/content'
import MainNavButtons from '../main-nav/main-nav-buttons'
import MarketBottomNav from '../template/market-bottom-nav'
import Image from 'features/components/atoms/image'
import LogoImage from 'images/common/rebranding_logo.png'
import useBreakpoints from 'components/hooks/use-breakpoints'
import Link from 'features/components/atoms/link'

const MarketNav = () => {
    const { is_mobile_or_tablet } = useBreakpoints()

    return (
        <NavTemplate
            render_bottom_nav={() => <MarketBottomNav />}
            renderLogo={() => (
                <Link url={{ type: 'internal', to: '/' }}>
                    <Image
                        src={LogoImage}
                        width={is_mobile_or_tablet ? 48 : 96}
                        height={is_mobile_or_tablet ? 16 : 36}
                    />
                </Link>
            )}
            items={mainItems}
        >
            <MainNavButtons />
        </NavTemplate>
    )
}

export default MarketNav
