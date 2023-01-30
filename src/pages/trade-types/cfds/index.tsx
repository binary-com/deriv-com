import React from 'react'
import Loadable from '@loadable/component'
import { SmallContainer, Hero } from '../components/_style'
import WhatIsCFD from './_what_is_cfd'
import { SEO } from 'components/containers'
import { Header } from 'components/elements'
import Layout from 'components/layout/layout'
import { Localize, localize, WithIntl } from 'components/localization'
import { FullWidthMultiColumn } from 'components/elements/full-width-multicolumn'
import { cfd_content } from 'pages/trade-types/cfds/static/content/_cfd'
import { StyledBox } from 'pages/markets/static/style/_markets-style'
const TradingCFDIncreases = Loadable(() => import('./_trading-cfd-increases'))
const StartTrading = Loadable(() => import('./_start-trading'))
const ThingsToKeep = Loadable(() => import('./_mind-when-trading'))
const AvailableMarkets = Loadable(() => import('./_available-markets'))

const CFD = () => {
    return (
        <Layout>
            <SEO
                title={localize('CFD trading | Online trading platform | Deriv')}
                description={localize(
                    'Trade CFDs on multiple markets. Enjoy high leverage, tight spreads, and risk management features to amplify your potential profits and limit losses.',
                )}
            />
            <Hero jc="cneter" ai="center">
                <SmallContainer>
                    <Header as="h1" type="display-title" color="white" align="center">
                        {localize('CFD trading')}
                    </Header>
                </SmallContainer>
            </Hero>
            <WhatIsCFD />
            <ThingsToKeep />
            <TradingCFDIncreases />
            <FullWidthMultiColumn
                multiple_row={true}
                header={<Localize translate_text="Why trade on CFDs on Deriv" />}
                button_title={<Localize translate_text="Don't have a Deriv account yet?" />}
                button_text="Create free demo account"
            >
                {cfd_content &&
                    cfd_content.map((content, index) => (
                        <StyledBox
                            item_title={content.item_title}
                            key={index}
                            text={content.text}
                            icon={<img src={content.src} alt={content.alt} />}
                        />
                    ))}
            </FullWidthMultiColumn>
            <StartTrading />
            <AvailableMarkets />
        </Layout>
    )
}

export default WithIntl()(CFD)
