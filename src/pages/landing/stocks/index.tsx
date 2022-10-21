import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FooterBanner, HeaderSection, DTrading, Parallelogram, WhyTradeWithUs } from './_lazy-load'
import BackgroundFooterStocksPattern from 'images/svg/stock-indices/stocks-footer-banner-overlay-shape.svg'
import Layout from 'components/layout/layout'
import { Desktop, Mobile, SEO } from 'components/containers'
import { localize, WithIntl, Localize } from 'components/localization'
import { size } from 'themes/device'
import { useCountryRule } from 'components/hooks/use-country-rule'
import { isBrowser } from 'common/utility'
import ExtendedTimeSVG from 'images/svg/stock-indices/stocks-extended-time.svg'
import NoCommisionSVG from 'images/svg/stock-indices/stocks-no-commission.svg'
import ElevenIndicesSVG from 'images/svg/stock-indices/stocks-11-world-indices.svg'
import TenIndicesSVG from 'images/svg/stock-indices/stocks-10-world-indices.svg'
import HighLeverageSVG from 'images/svg/stock-indices/stocks-high-leverage.svg'
import FourtyStocksSVG from 'images/svg/stock-indices/stocks-80-analytic-objects.svg'
import LowCapitalSVG from 'images/svg/stock-indices/stocks-minimum-capital.svg'
import { ContentType } from 'pages/landing/_types'

const query = graphql`
    query {
        stocks_banner: file(relativePath: { eq: "stock-indices/mac-book-pro-with-iphone.png" }) {
            ...fadeIn
        }
        stocks_banner_eu: file(
            relativePath: { eq: "stock-indices/mac-book-pro-with-iphone-eu.png" }
        ) {
            ...fadeIn
        }
        stocks_banner_mobile_eu: file(
            relativePath: { eq: "stock-indices/mac-book-pro-with-iphone-mobile-eu.png" }
        ) {
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
const WhyTradeWithUsArr: ContentType[] = [
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
        title: <Localize translate_text="11 world indices" />,
        icon: ElevenIndicesSVG,
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

const WhyTradeWithUsArr_eu = [
    {
        title: <Localize translate_text="Extended market hours" />,
        icon: ExtendedTimeSVG,
    },
    {
        title: <Localize translate_text="No commissions" />,
        icon: NoCommisionSVG,
    },
    {
        title: <Localize translate_text="10 world indices" />,
        icon: TenIndicesSVG,
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

const trading: ContentType[] = [
    {
        title: <Localize translate_text="No commission" />,
        subtitle: (
            <Localize translate_text="Predict the performance of global giants including Apple, Amazon, and Netflix. Trade CFDs with leverage and no commission on stocks and stock indices." />
        ),

        image_name: 'stocks_zero_fees',
        image_alt: localize('Zero Fees'),
    },
]

const tradingMobile: ContentType[] = [
    {
        title: <Localize translate_text="No commission" />,
        subtitle: (
            <Localize translate_text="Predict the performance of global giants including Apple, Amazon, and Netflix. Trade CFDs with leverage and no commission on stocks and stock indices." />
        ),
    },
]
const blueChips: ContentType[] = [
    {
        title: <Localize translate_text="Blue chip, blue skies" />,
        subtitle: (
            <Localize translate_text="Diversify your portfolio with commission-free trading on the biggest international stock market indices. Trade on world renowned indices such as the Wall Street 30, US Tech 100, UK 100, plus many more. Get trading with as low as $5." />
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
    const { is_row } = useCountryRule()

    useEffect(() => {
        setMobile(isBrowser() ? window.screen.width <= size.mobileL : false)
        window.addEventListener('resize', handleResizeWindow)
    })

    const data = useStaticQuery(query)

    const display_items = is_row ? WhyTradeWithUsArr : WhyTradeWithUsArr_eu
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
            <Desktop>
                <DTrading
                    trading={trading}
                    setWidth={'486px'}
                    reverse={false}
                    contentMargin={'24px'}
                />
            </Desktop>
            <Mobile>
                <Parallelogram trading={tradingMobile} reverse={false} />
            </Mobile>
            <DTrading
                trading={blueChips}
                setWidth={'486px'}
                reverse={true}
                contentMargin={'24px'}
            />
            <WhyTradeWithUs
                itemsArr={display_items}
                mainTitle={<Localize translate_text="Why trade stocks and indices on Deriv" />}
                columnPerRow={3}
            />
            <FooterBanner
                background_pattern={is_mobile ? '' : BackgroundFooterStocksPattern}
                title={
                    <Localize translate_text="All this is available on our Deriv MT5 platform" />
                }
                small_title={
                    is_row ? (
                        <Localize translate_text="Enjoy high leverage and low spreads on our Deriv MT5 platform, now offering a range of stocks and stock indices from the brands you love." />
                    ) : (
                        <Localize translate_text="Enjoy low spreads on our Deriv MT5 platform, now offering a range of stocks and stock indices from the brands you love." />
                    )
                }
                data={data}
                is_ppc={true}
            />
        </Layout>
    )
}

export default WithIntl()(Stocks)
