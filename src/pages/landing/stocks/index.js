import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
    FooterBanner,
    HeaderSection,
    DTrading,
    Parallelogram,
    WhyTradeWithUs,
} from './_lazy-load.js'
import BackgroundFooterStocksPattern from 'images/svg/stock-indices/stocks-footer-banner-overlay-shape.svg'
import Layout from 'components/layout/layout'
import { Show, SEO } from 'components/containers'
import { localize, WithIntl, Localize } from 'components/localization'
import { size } from 'themes/device'
import { isBrowser } from 'common/utility'
import ExtendedTimeSVG from 'images/svg/stock-indices/stocks-extended-time.svg'
import NoCommisionSVG from 'images/svg/stock-indices/stocks-no-commission.svg'
import HighLeverageSVG from 'images/svg/stock-indices/stocks-high-leverage.svg'
import TwelveIndicesSVG from 'images/svg/stock-indices/stocks-12-world-indices.svg'
import FourtyStocksSVG from 'images/svg/stock-indices/stocks-80-analytic-objects.svg'
import LowCapitalSVG from 'images/svg/stock-indices/stocks-minimum-capital.svg'

const query = graphql`
    query {
        stocks_banner: file(relativePath: { eq: "stock-indices/mac-book-pro-with-iphone.png" }) {
            ...fadeIn
        }
        stocks_banner_mobile: file(
            relativePath: { eq: "stock-indices/mobile-mac-book-pro-with-iphone.png" }
        ) {
            ...fadeIn
        }
    }
`

// max numbers of columnPerRow is 5
const WhyTradeWithUsArr = [
    {
        title: <Localize translate_text="Extended market hours" />,
        icon: ExtendedTimeSVG,
    },
    {
        title: <Localize translate_text="No commissions" />,
        icon: NoCommisionSVG,
    },
    {
        title: <Localize translate_text="High leverage" />,
        icon: HighLeverageSVG,
    },
    {
        title: <Localize translate_text="12+ world indices" />,
        icon: TwelveIndicesSVG,
    },
    {
        title: <Localize translate_text="40+ stocks" />,
        icon: FourtyStocksSVG,
    },
    {
        title: <Localize translate_text="Low capital requirement" />,
        icon: LowCapitalSVG,
    },
]

const trading = [
    {
        title: <Localize translate_text="No commision, no fees" />,
        subtitle: (
            <Localize translate_text="Predict the performance of global giants including Apple, Amazon, and Netflix. Trade CFDs with leverage and no commissions on a range of both stocks and stock indices." />
        ),

        image_name: 'stocks_zero_fees',
        image_alt: localize('Zero Fees'),
    },
]

const tradingMobile = [
    {
        title: <Localize translate_text="No commision, no fees" />,
        subtitle: (
            <Localize translate_text="Predict the performance of global giants including Apple, Amazon, and Netflix. Trade CFDs with leverage and no commissions on a range of both stocks and stock indices." />
        ),
    },
]
const blueChips = [
    {
        title: <Localize translate_text="Blue chip, blue skies" />,
        subtitle: (
            <Localize translate_text="Diversify your portfolio with commission-free trading on the biggest international stock market indices. Trade on world renowned indices such as the Wall Street 30, US Tech 100, UK 100, plus many more. Get trading from as low as $5." />
        ),

        image_name: 'stocks_blue_chip',
        image_name_mobile: 'stocks_blue_chip_mobile',
        image_alt: localize('Blue Chips'),
    },
]

const Stocks = () => {
    const [is_mobile, setMobile] = useState(false)
    const handleResizeWindow = () => {
        setMobile(isBrowser() ? window.screen.width <= size.mobileL : false)
    }

    useEffect(() => {
        setMobile(isBrowser() ? window.screen.width <= size.mobileL : false)
        window.addEventListener('resize', handleResizeWindow)
    })
    const data = useStaticQuery(query)
    return (
        <Layout is_ppc_redirect={true}>
            <SEO
                title={localize('Stocks')}
                description={localize(
                    'Trade global stocks and stock indices now on our DMT5 platform.',
                )}
                no_index
            />
            <HeaderSection />
            <Show.Desktop>
                <DTrading
                    trading={trading}
                    setWidth={'486px'}
                    reverse={false}
                    contentMargin={'24px'}
                />
            </Show.Desktop>
            <Show.Mobile>
                <Parallelogram trading={tradingMobile} reverse={false} />
            </Show.Mobile>
            <DTrading
                trading={blueChips}
                setWidth={'486px'}
                reverse={true}
                contentMargin={'24px'}
            />
            <WhyTradeWithUs
                itemsArr={WhyTradeWithUsArr}
                mainTitle={<Localize translate_text="Why trade stocks and indices on Deriv" />}
                columnPerRow={3}
            />
            <FooterBanner
                background_pattern={is_mobile ? '' : BackgroundFooterStocksPattern}
                title={<Localize translate_text="All this is available on our DMT5 platform" />}
                small_title={
                    <Localize translate_text="Enjoy high leverage and low spreads on our DMT5 platform, now offering a range of stocks and stock indices from the brands you love." />
                }
                data={data}
                is_ppc={true}
            />
        </Layout>
    )
}

export default WithIntl()(Stocks)
