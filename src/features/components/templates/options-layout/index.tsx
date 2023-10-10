import React, { ReactNode } from 'react'
import { start_trading_data, why_trade_options_data } from './data'
import Layout from 'features/components/templates/layout'
import MainNav from 'features/components/templates/navigation/main-nav'
import Footer from 'features/components/templates/footer'
import StartTrading from 'features/components/templates/start-trading'
import WhyTradeOptions from 'features/components/templates/why-trade-options'
import { TString } from 'types/generics'
import OptionsTopTab from 'features/components/organisms/options-top-tab'
import WhatAreDigitalOptions from 'features/components/organisms/what-are-digital-options'
import Label from 'features/components/atoms/label'

interface OptionsLayoutProps {
    children?: ReactNode
    heading: TString
    description: TString
    is_coming_soon?: boolean
}

const OptionsLayout = ({
    heading,
    description,
    children,
    is_coming_soon = false,
}: OptionsLayoutProps) => {
    return (
        <Layout>
            <MainNav />
            <OptionsTopTab />
            <WhatAreDigitalOptions
                heading={heading}
                description={description}
                is_coming_soon={is_coming_soon}
            />
            {children}
            <WhyTradeOptions data={why_trade_options_data} />
            <StartTrading data={start_trading_data} />
            <Footer />
        </Layout>
    )
}

export default OptionsLayout
