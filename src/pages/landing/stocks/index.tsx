import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FooterBanner, HeaderSection, DTrading, Parallelogram, WhyTradeWithUs } from './_lazy-load'
import BackgroundFooterStocksPattern from 'images/svg/stock-indices/stocks-footer-banner-overlay-shape.svg'
import Layout from 'components/layout/layout'
import { Desktop, Mobile, SEO } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import { size } from 'themes/device'
import useRegion from 'components/hooks/use-region'
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
        title: '_t_Extended market hours_t_',
        icon: ExtendedTimeSVG,
        image_alt: 'Market time',
    },
    {
        title: '_t_No commissions_t_',
        icon: NoCommisionSVG,
        image_alt: 'No money',
    },
    {
        title: '_t_High leverage_t_',
        icon: HighLeverageSVG,
        image_alt: 'High percentage',
    },
    {
        title: '_t_11 world indices_t_',
        icon: ElevenIndicesSVG,
        image_alt: 'World indices',
    },
    {
        title: '_t_40+ stocks_t_',
        icon: FourtyStocksSVG,
        image_alt: 'Stocks',
    },
    {
        title: '_t_Low capital requirement_t_',
        icon: LowCapitalSVG,
        image_alt: 'Capital need',
    },
]

const WhyTradeWithUsArr_eu = [
    {
        title: '_t_Extended market hours_t_',
        icon: ExtendedTimeSVG,
        image_alt: 'Market time',
    },
    {
        title: '_t_No commissions_t_',
        icon: NoCommisionSVG,
        image_alt: 'No money',
    },
    {
        title: '_t_10 world indices_t_',
        icon: TenIndicesSVG,
        image_alt: 'World indices',
    },
    {
        title: '_t_40+ stocks_t_',
        icon: FourtyStocksSVG,
        image_alt: 'Stocks',
    },
    {
        title: '_t_Low capital requirement_t_',
        icon: LowCapitalSVG,
        image_alt: 'Capital need',
    },
]

const trading: ContentType[] = [
    {
        title: '_t_No commission_t_',
        subtitle:
            '_t_Predict the performance of global giants including Apple, Amazon, and Netflix. Trade CFDs with leverage and no commission on stocks and stock indices._t_',
        image_name: 'stocks_zero_fees',
        image_alt: localize('_t_Zero Fees_t_'),
    },
]

const tradingMobile: ContentType[] = [
    {
        title: '_t_No commission_t_',
        subtitle:
            '_t_Predict the performance of global giants including Apple, Amazon, and Netflix. Trade CFDs with leverage and no commission on stocks and stock indices._t_',
    },
]

const blueChips: ContentType[] = [
    {
        title: '_t_Blue chip, blue skies_t_',
        subtitle:
            '_t_Diversify your portfolio with commission-free trading on the biggest international stock market indices. Trade on world renowned indices such as the Wall Street 30, US Tech 100, UK 100, plus many more. Get trading with as low as $5._t_',

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
    const { is_row } = useRegion()

    useEffect(() => {
        setMobile(isBrowser() ? window.screen.width <= size.mobileL : false)
        window.addEventListener('resize', handleResizeWindow)
    }, [])

    const data = useStaticQuery(query)

    const display_items = is_row ? WhyTradeWithUsArr : WhyTradeWithUsArr_eu
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
                itemsArr={display_items}
                mainTitle="_t_Why trade stocks and indices on Deriv_t_"
                columnPerRow={3}
            />
            <FooterBanner
                background_pattern={is_mobile ? '' : BackgroundFooterStocksPattern}
                title="_t_All this is available on our Deriv MT5 platform_t_"
                small_title={
                    is_row
                        ? '_t_Enjoy high leverage and low spreads on our Deriv MT5 platform, now offering a range of stocks and stock indices from the brands you love._t_'
                        : '_t_Enjoy low spreads on our Deriv MT5 platform, now offering a range of stocks and stock indices from the brands you love._t_'
                }
                data={data}
                is_ppc={true}
            />
        </Layout>
    )
}

export default WithIntl()(Stocks)
