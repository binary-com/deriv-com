import React from 'react'
import Loadable from '@loadable/component'
import { SmallContainer, Hero } from '../components/_style'
import { cfd_content } from '../content/static/_cfd'
import WhatIsCFD from './_what_is_cfd'
import { SEO } from 'components/containers'
import { Header } from 'components/elements'
import Layout from 'components/layout/layout'
import { Localize, localize, WithIntl } from 'components/localization'
import { FullWidthMultiColumn } from 'components/elements/full-width-multicolumn'
import { StyledBox } from 'pages/markets/static/style/_markets-style'
import useRegion from 'components/hooks/use-region'

const TradingCFDIncreases = Loadable(() => import('./_trading-cfd-increases'))
const StartTrading = Loadable(() => import('./_start-trading'))
const ThingsToKeep = Loadable(() => import('./_mind-when-trading'))
const AvailableMarkets = Loadable(() => import('./_available-markets'))

const CFD = () => {
    const { is_eu, is_row } = useRegion()
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
                    <Header as="h1" type="display-title" color="red" align="center">
                        {localize('CFD trading')}
                    </Header>
                </SmallContainer>
            </Hero>
            <WhatIsCFD />
            <ThingsToKeep />
            <TradingCFDIncreases />

            <FullWidthMultiColumn
                multiple_row={true}
                header={<Localize translate_text="_t_Why trade on CFDs on Deriv_t_" />}
                button_title={<Localize translate_text="Don't have a Deriv account yet?" />}
                button_text="_t_Create free demo account_t_"
            >
                {cfd_content.map((content, index) => (
                    <StyledBox
                        item_title={is_eu ? content.item_title_eu : content.item_title}
                        key={index}
                        text={is_eu ? content.text_eu : content.text}
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
