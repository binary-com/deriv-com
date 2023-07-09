import React, { ReactNode } from 'react'
import AvailableOptions from '../available-options'
import OptionsTopTab from '../options-top-tab'
import WhatAreDigitalOptions from '../what-are-digital-options'
import { OptionNavigationType } from '../available-options/type'
import Layout from 'features/components/templates/layout'
import MainNav from 'features/components/templates/navigation/main-nav'
import { TString } from 'types/generics'
import Footer from 'features/components/templates/footer'

interface OptionsLayoutProps {
    renderSeo?: () => ReactNode
    heading: TString
    items?: OptionNavigationType[]
    children?: ReactNode
}

const OptionsLayout = ({ renderSeo, heading, items, children }: OptionsLayoutProps) => {
    return (
        <Layout>
            {renderSeo?.()}
            <MainNav />
            <OptionsTopTab />
            <WhatAreDigitalOptions /> {/* this should get everything as props */}
            <AvailableOptions heading={heading} items={items} />
            {children}
            <Footer />
        </Layout>
    )
}

export default OptionsLayout
