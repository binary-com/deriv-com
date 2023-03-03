import React from 'react'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'
import LayoutComponent from 'features/components/layout-component'
import { SEO } from 'components/containers'
import { localize } from 'components/localization'
import MainNav from 'features/components/navigation/main'
import Hero from 'pages/home/_hero'
import MarketsFold from 'pages/home/_markets_fold'

const HomePage = () => {
    useOpenLiveChat(true)
    return (
        <LayoutComponent>
            <SEO
                title={localize(
                    'Online trading platform | Forex, commodities, synthetic indices, stocks, and stock indices | Deriv',
                )}
                description={localize(
                    'Deriv: an online trading platform available 24/7 with a wide selection of derivatives.',
                )}
                has_organization_schema
            />
            <MainNav />
            <Hero />
            <MarketsFold />
        </LayoutComponent>
    )
}

export default HomePage
