import React, { ReactNode } from 'react'
import OptionsTopTab from '../options-top-tab'
import WhatAreDigitalOptions from '../what-are-digital-options'
import { start_trading_data, why_trade_options_data } from './data'
import Layout from 'features/components/templates/layout'
import MainNav from 'features/components/templates/navigation/main-nav'
import Footer from 'features/components/templates/footer'
import StartTrading from 'features/components/templates/start-trading'
import WhyTradeOptions from 'features/components/templates/why-trade-options'
import { TString } from 'types/generics'

interface OptionsLayoutProps {
    children?: ReactNode
    heading: TString
    description: TString
}

const OptionsLayout = ({ heading, description, children }: OptionsLayoutProps) => {
    return (
        <Layout>
            <MainNav />
            <OptionsTopTab />
            <WhatAreDigitalOptions heading={heading} description={description} />
            {children}
            <WhyTradeOptions data={why_trade_options_data} />
            <StartTrading data={start_trading_data} />
            <Footer />
        </Layout>
    )
}

export default OptionsLayout
