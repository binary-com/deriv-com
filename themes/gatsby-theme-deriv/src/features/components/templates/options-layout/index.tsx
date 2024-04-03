import React, { ReactNode } from 'react'
import MainRowNavigation from '../navigation/main-nav'
import Layout from 'features/components/templates/layout'
import { start_trading_data, why_trade_options_data } from './data'
import MainFooter from 'features/components/templates/footer'
import StartTrading from 'features/components/templates/start-trading'
import WhyTradeOptions from 'features/components/templates/why-trade-options'
import { TString } from 'types/generics'
import OptionsTopTab from 'features/components/organisms/options-top-tab'
import WhatAreDigitalOptions from 'features/components/organisms/what-are-digital-options'
import { BuildVariantType } from 'features/types'

interface OptionsLayoutProps extends BuildVariantType{
    children?: ReactNode
    heading: TString
    description: TString
    is_coming_soon?: boolean
    has_content_block?: boolean
}

const OptionsLayout = ({
    heading,
    description,
    children,
    is_coming_soon = false,
    region
}: OptionsLayoutProps) => {
    return (
        <Layout region={region}>
            <MainRowNavigation />
            <OptionsTopTab />
            <WhatAreDigitalOptions
                heading={heading}
                description={description}
                is_coming_soon={is_coming_soon}
            />
            {children}
            <WhyTradeOptions data={why_trade_options_data} />
            <StartTrading data={start_trading_data} />
            <MainFooter />
        </Layout>
    )
}

export default OptionsLayout
