import React from 'react'
import { PageLayout } from '@deriv-com/components'
import QuillLayout from 'features/components/quill/quill-layout'
import HeroBanner from './hero'
import SecuringAccount from './securing-account'
import TradingResponsibly from './trading-responsibly'
import TradingLimits from './trading-limits'
import HowTradingLimits from './how-trading-limits'
import NewToTrading from './new-to-trading'
import MainFooter from 'features/components/templates/footer'
import MainRowNavigation from 'features/components/templates/navigation/main-nav'
import { BuildVariantContextType } from 'features/contexts/build-variant/build-variant.context'

type PageProps = {
    region: BuildVariantContextType['region']
}

const SecureAndResponsiblePage = ({ region }: PageProps) => {
    return (
        <QuillLayout region={region}>
            <MainRowNavigation />
            <PageLayout>
                <HeroBanner />
                <SecuringAccount />
                <TradingResponsibly />
                <TradingLimits />
                <HowTradingLimits />
                <NewToTrading />
            </PageLayout>
            <MainFooter />
        </QuillLayout>
    )
}

export default SecureAndResponsiblePage
