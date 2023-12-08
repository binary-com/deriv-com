import React from 'react'
import Loadable from '@loadable/component'
import { Hero, SmallContainer } from '../components/_style'
import { cfd_content, non_eu_cfd_content } from '../content/static/_cfd'
import WhatIsCFD from './_what_is_cfd'
import { SEO } from 'components/containers'
import { Header } from 'components/elements'
import Layout from 'components/layout/layout'
import { Localize, WithIntl, localize } from 'components/localization'
import { FullWidthMultiColumn } from 'components/elements/full-width-multicolumn'
import { StyledBox } from 'pages/markets/static/style/_markets-style'
import useRegion from 'components/hooks/use-region'
import { TGatsbyHead } from 'features/types'

const TradingCFDIncreases = Loadable(() => import('./_trading-cfd-increases'))
const StartTrading = Loadable(() => import('./_start-trading'))
const ThingsToKeep = Loadable(() => import('./_mind-when-trading'))
const AvailableMarkets = Loadable(() => import('./_available-markets'))

const CFD = () => {
    const { is_eu } = useRegion()
    const content = is_eu ? cfd_content : cfd_content.concat(non_eu_cfd_content)

    return (
        <Layout>
            <Hero jc="cneter" ai="center">
                <SmallContainer>
                    <Header as="h1" type="display-title" color="red" align="center">
                        <Localize translate_text="_t_CFD trading_t_" />
                    </Header>
                </SmallContainer>
            </Hero>
            <WhatIsCFD />
            <ThingsToKeep />
            <TradingCFDIncreases />

            <FullWidthMultiColumn
                header="_t_Why trade CFDs on Deriv_t_"
                button_title="_t_Don't have a Deriv account yet?_t_"
                button_text="_t_Create free demo account_t_"
                multiple_row
            >
                {content.map(({ alt, src, text, title }) => (
                    <StyledBox
                        key={alt}
                        item_title={typeof title === 'function' ? title({ is_eu }) : title}
                        text={typeof text === 'function' ? text({ is_eu }) : text}
                        icon={<img width="48px" height="48px" src={src} alt={localize(alt)} />}
                    />
                ))}
            </FullWidthMultiColumn>

            <StartTrading />
            <AvailableMarkets />
        </Layout>
    )
}

export default WithIntl()(CFD)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_CFD trading | Online trading platform | Deriv_t_"
        description="_t_Trade CFDs on multiple markets. Enjoy high leverage, tight spreads, and risk management features to amplify your potential profits and limit losses._t_"
        pageContext={pageContext}
    />
)
