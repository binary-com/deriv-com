import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FooterBanner, HeaderSection, DTrading, Parallelogram, WhyTradeWithUs } from './_lazy-load'
import BackgroundFooterStocksPattern from 'images/svg/stock-indices/stocks-footer-banner-overlay-shape.svg'
import Layout from 'components/layout/layout'
import { Desktop, Mobile, SEO } from 'components/containers'
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
        title: <Localize translate_text="_t_Extended market hours_t_" />,
        icon: ExtendedTimeSVG,
    },
    {
        title: <Localize translate_text="_t_No commissions_t_" />,
        icon: NoCommisionSVG,
    },
    {
        title: <Localize translate_text="_t_High leverage_t_" />,
        icon: HighLeverageSVG,
    },
    {
        title: <Localize translate_text="_t_12+ world indices_t_" />,
        icon: TwelveIndicesSVG,
    },
    {
        title: <Localize translate_text="_t_40+ stocks_t_" />,
        icon: FourtyStocksSVG,
    },
    {
        title: <Localize translate_text="_t_Low capital requirement_t_" />,
        icon: LowCapitalSVG,
    },
]

const trading = [
    {
        title: <Localize translate_text="_t_No commision, no fees_t_" />,
        subtitle: (
            <Localize translate_text="_t_Predict the performance of global giants including Apple, Amazon, and Netflix. Trade CFDs with leverage and no commissions on a range of both stocks and stock indices._t_" />
        ),

        image_name: 'stocks_zero_fees',
        image_alt: localize('_t_Zero Fees_t_'),
    },
]

const tradingMobile = [
    {
        title: <Localize translate_text="_t_No commision, no fees_t_" />,
        subtitle: (
            <Localize translate_text="_t_Predict the performance of global giants including Apple, Amazon, and Netflix. Trade CFDs with leverage and no commissions on a range of both stocks and stock indices._t_" />
        ),
    },
]
const blueChips = [
    {
        title: <Localize translate_text="_t_Blue chip, blue skies_t_" />,
        subtitle: (
            <Localize translate_text="_t_Diversify your portfolio with commission-free trading on the biggest international stock market indices. Trade on world renowned indices such as the Wall Street 30, US Tech 100, UK 100, plus many more. Get trading from as low as $5._t_" />
        ),

        image_name: 'stocks_blue_chip',
        image_name_mobile: 'stocks_blue_chip_mobile',
        image_alt: localize('_t_Blue Chips_t_'),
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
                title={localize('_t_Stocks_t_')}
                description={localize(
                    '_t_Trade global stocks and stock indices now on our DMT5 platform._t_',
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
                itemsArr={WhyTradeWithUsArr}
                mainTitle={<Localize translate_text="_t_Why trade stocks and indices on Deriv_t_" />}
                columnPerRow={3}
            />
            <FooterBanner
                background_pattern={is_mobile ? '' : BackgroundFooterStocksPattern}
                title={<Localize translate_text="_t_All this is available on our DMT5 platform_t_" />}
                small_title={
                    <Localize translate_text="_t_Enjoy high leverage and low spreads on our DMT5 platform, now offering a range of stocks and stock indices from the brands you love._t_" />
                }
                data={data}
                is_ppc={true}
            />
        </Layout>
    )
}

export default WithIntl()(Stocks)
