import React from 'react'
import * as styles from './styles.module.scss'
import { InstrumentalContentProps } from './types'
import Link from 'features/components/atoms/link'

export const instrumental_content: InstrumentalContentProps[] = [
    {
        id: 0,
        instrumental_content_text: {
            text: '_t_<0>AGG.US</0> The iShares Core US Aggregate Bond ETF tracks an index of US investment-grade bonds._t_',
            components: [
                <Link
                    key={0}
                    className={styles.main_link}
                    url={{
                        type: 'non-company',
                        href: 'https://www.ishares.com/us/products/239458/ishares-core-total-us-bond-market-etf',
                        target: '_blank',
                    }}
                    weight="bold"
                />,
            ],
        },
    },
    {
        id: 1,
        instrumental_content_text: {
            text: '_t_<0>ARKK.US</0> The ARK Innovation ETF invests in domestic and foreign equity securities of companies that rely on or benefit from developments in artificial intelligence, automation, DNA technologies, energy storage, fintech, and robotics._t_',
            components: [
                <Link
                    key={0}
                    className={styles.main_link}
                    url={{
                        type: 'non-company',
                        href: 'https://ark-funds.com/funds/arkk/',
                        target: '_blank',
                    }}
                    weight="bold"
                />,
            ],
        },
    },
    {
        id: 2,
        instrumental_content_text: {
            text: '_t_<0>DIA.US</0> The SPDR Dow Jones Industrial Average ETF Trust tracks the Dow Jones Industrial Average index._t_',
            components: [
                <Link
                    key={0}
                    className={styles.main_link}
                    url={{
                        type: 'non-company',
                        href: 'https://www.ssga.com/us/en/intermediary/etfs/funds/spdr-dow-jones-industrial-average-etf-trust-dia',
                        target: '_blank',
                    }}
                    weight="bold"
                />,
            ],
        },
    },
    {
        id: 3,
        instrumental_content_text: {
            text: '_t_<0>EEM.US</0> The iShares MSCI Emerging Markets ETF tracks an index of large- and medium-sized stocks from emerging market countries._t_',
            components: [
                <Link
                    key={0}
                    className={styles.main_link}
                    url={{
                        type: 'non-company',
                        href: 'https://www.ishares.com/us/products/239637/ishares-msci-emerging-markets-etf',
                        target: '_blank',
                    }}
                    weight="bold"
                />,
            ],
        },
    },
    {
        id: 4,
        instrumental_content_text: {
            text: '_t_<0>EFA.US</0> The iShares MSCI EAFE ETF tracks an index of large- and mid-capitalisation developed market equities outside of the US and Canada._t_',
            components: [
                <Link
                    key={0}
                    className={styles.main_link}
                    url={{
                        type: 'non-company',
                        href: 'https://www.ishares.com/us/products/239623/ishares-msci-eafe-etf',
                        target: '_blank',
                    }}
                    weight="bold"
                />,
            ],
        },
    },
    {
        id: 5,
        instrumental_content_text: {
            text: '_t_<0>ERX.US</0> The Direxion Daily Energy Bull 2X Shares tracks the Energy Select Sector Index._t_',
            components: [
                <Link
                    key={0}
                    className={styles.main_link}
                    url={{
                        type: 'non-company',
                        href: 'https://www.direxion.com/product/daily-energy-bull-bear-2x-etfs',
                        target: '_blank',
                    }}
                    weight="bold"
                />,
            ],
        },
    },

    {
        id: 6,
        instrumental_content_text: {
            text: '_t_<0>GDX.US</0> The VanEck Vectors Gold Miners ETF mimics the NYSE Arca Gold Miners Index, which tracks the overall performance of companies involved in the gold mining industry._t_',
            components: [
                <Link
                    key={0}
                    className={styles.main_link}
                    url={{
                        type: 'non-company',
                        href: 'https://www.vaneck.com/us/en/investments/gold-miners-etf-gdx/',
                        target: '_blank',
                    }}
                    weight="bold"
                />,
            ],
        },
    },
    {
        id: 7,
        instrumental_content_text: {
            text: '_t_<0>GLD.US</0> The SPDR Gold Shares ETF tracks the price of gold bullion in the over-the-counter (OTC) market._t_',
            components: [
                <Link
                    key={0}
                    className={styles.main_link}
                    url={{
                        type: 'non-company',
                        href: 'https://www.spdrgoldshares.com/',
                        target: '_blank',
                    }}
                    weight="bold"
                />,
            ],
        },
    },
    {
        id: 8,
        instrumental_content_text: {
            text: '_t_<0>HYG.US</0> The iShares iBoxx $ High Yield Corporate Bond ETF tracks an index of US dollar-denominated, high-yield corporate bonds._t_',
            components: [
                <Link
                    key={0}
                    className={styles.main_link}
                    url={{
                        type: 'non-company',
                        href: 'https://www.ishares.com/us/products/239565/ishares-iboxx-high-yield-corporate-bond-etf',
                        target: '_blank',
                    }}
                    weight="bold"
                />,
            ],
        },
    },
    {
        id: 9,
        instrumental_content_text: {
            text: '_t_<0>IEMG.US</0> The iShares Core MSCI Emerging Mkts ETF tracks an index of large-, mid-, and small-capitalisation emerging market equities._t_',
            components: [
                <Link
                    key={0}
                    className={styles.main_link}
                    url={{
                        type: 'non-company',
                        href: 'https://www.ishares.com/us/products/244050/ishares-core-msci-emerging-markets-etf',
                        target: '_blank',
                    }}
                    weight="bold"
                />,
            ],
        },
    },
    {
        id: 10,
        instrumental_content_text: {
            text: '_t_<0>IJR.US</0> The iShares Core S&P Small-Cap ETF tracks the investment results of an index of small-capitalisation US equities._t_',
            components: [
                <Link
                    key={0}
                    className={styles.main_link}
                    url={{
                        type: 'non-company',
                        href: 'https://www.ishares.com/us/products/239774/ishares-core-sp-smallcap-etf',
                        target: '_blank',
                    }}
                    weight="bold"
                />,
            ],
        },
    },
    {
        id: 11,
        instrumental_content_text: {
            text: '_t_<0>IVV.US</0> The iShares Core S&P 500 ETF tracks the performance of an index of large-capitalisation US equities._t_',
            components: [
                <Link
                    key={0}
                    className={styles.main_link}
                    url={{
                        type: 'non-company',
                        href: 'https://www.ishares.com/us/products/239726/ishares-core-sp-500-etf',
                        target: '_blank',
                    }}
                    weight="bold"
                />,
            ],
        },
    },
    {
        id: 12,
        instrumental_content_text: {
            text: '_t_<0>IVW.US</0> The iShares S&P 500 Growth ETF tracks the performance of an index of large-capitalisation US equities with above-average growth characteristics._t_',
            components: [
                <Link
                    key={0}
                    className={styles.main_link}
                    url={{
                        type: 'non-company',
                        href: 'https://www.ishares.com/us/products/239725/ishares-sp-500-growth-etf',
                        target: '_blank',
                    }}
                    weight="bold"
                />,
            ],
        },
    },
    {
        id: 13,
        instrumental_content_text: {
            text: '_t_<0>IWM.US</0> The iShares Russell 2000 ETF tracks the investment results of an index of small-capitalisation US equities._t_',
            components: [
                <Link
                    key={0}
                    className={styles.main_link}
                    url={{
                        type: 'non-company',
                        href: 'https://www.ishares.com/us/products/239710/ishares-russell-2000-etf',
                        target: '_blank',
                    }}
                    weight="bold"
                />,
            ],
        },
    },
    {
        id: 14,
        instrumental_content_text: {
            text: '_t_<0>LQD.US</0> The iShares iBoxx $ Investment Grade Corporate Bond ETF tracks the performance of an index of US dollar-denominated, investment-grade corporate bonds._t_',
            components: [
                <Link
                    key={0}
                    className={styles.main_link}
                    url={{
                        type: 'non-company',
                        href: 'https://www.ishares.com/us/products/239566/ishares-iboxx-investment-grade-corporate-bond-etf',
                        target: '_blank',
                    }}
                    weight="bold"
                />,
            ],
        },
    },
    {
        id: 15,
        instrumental_content_text: {
            text: '_t_<0>QID.US</0> The ProShares UltraPro Short QQQ ETF seeks to produce two times the inverse of the daily returns of the Nasdaq._t_',
            components: [
                <Link
                    key={0}
                    className={styles.main_link}
                    url={{
                        type: 'non-company',
                        href: 'https://www.proshares.com/our-etfs/leveraged-and-inverse/qid',
                        target: '_blank',
                    }}
                    weight="bold"
                />,
            ],
        },
    },
    {
        id: 16,
        instrumental_content_text: {
            text: '_t_<0>SDS.US</0> The UltraShort S&P500 ETF seeks to produce two times the inverse of the daily returns of the S&P 500._t_',
            components: [
                <Link
                    key={0}
                    className={styles.main_link}
                    url={{
                        type: 'non-company',
                        href: 'https://www.proshares.com/our-etfs/leveraged-and-inverse/sds',
                        target: '_blank',
                    }}
                    weight="bold"
                />,
            ],
        },
    },
    {
        id: 17,
        instrumental_content_text: {
            text: '_t_<0>SLV.US</0> The iShares Silver Trust ETF seeks to reflect generally the performance of the price of silver._t_',
            components: [
                <Link
                    key={0}
                    className={styles.main_link}
                    url={{
                        type: 'non-company',
                        href: 'https://www.ishares.com/us/products/239855/ishares-silver-trust-fund',
                        target: '_blank',
                    }}
                    weight="bold"
                />,
            ],
        },
    },
    {
        id: 18,
        instrumental_content_text: {
            text: '_t_<0>SPXS.US</0> The Direxion Daily S&P 500 Bear 3X Shares ETF seeks to reflect 300% of the inverse of the performance of the S&P 500._t_',
            components: [
                <Link
                    key={0}
                    className={styles.main_link}
                    url={{
                        type: 'non-company',
                        href: 'https://www.direxion.com/product/daily-sp-500-bull-bear-3x-etfs',
                        target: '_blank',
                    }}
                    weight="bold"
                />,
            ],
        },
    },
    {
        id: 19,
        instrumental_content_text: {
            text: '_t_<0>SPY.US</0> The SPDR S&P 500 ETF tracks the S&P 500._t_',
            components: [
                <Link
                    key={0}
                    className={styles.main_link}
                    url={{
                        type: 'non-company',
                        href: 'https://www.ssga.com/us/en/intermediary/etfs/funds/spdr-sp-500-etf-trust-spy',
                        target: '_blank',
                    }}
                    weight="bold"
                />,
            ],
        },
    },
    {
        id: 20,
        instrumental_content_text: {
            text: '_t_<0>TBT.US</0> The ProShares UltraShort 20+ Year Treasury seeks daily investment results, before fees and expenses, that correspond to two times the inverse of the daily performance of the ICE US._t_',
            components: [
                <Link
                    key={0}
                    className={styles.main_link}
                    url={{
                        type: 'non-company',
                        href: 'https://www.proshares.com/our-etfs/leveraged-and-inverse/tbt',
                        target: '_blank',
                    }}
                    weight="bold"
                />,
            ],
        },
    },
    {
        id: 21,
        instrumental_content_text: {
            text: '_t_<0>TQQQ.US</0> The ProShares UltraPro QQQ seeks daily investment results, before fees and expenses, that correspond to three times the daily performance of the Nasdaq 100 Index._t_',
            components: [
                <Link
                    key={0}
                    className={styles.main_link}
                    url={{
                        type: 'non-company',
                        href: 'https://www.proshares.com/our-etfs/leveraged-and-inverse/tqqq',
                        target: '_blank',
                    }}
                    weight="bold"
                />,
            ],
        },
    },
    {
        id: 22,
        instrumental_content_text: {
            text: '_t_<0>UNG.US</0> The United States Natural Gas Fund ETF tracks in percentage terms the movements of natural gas prices._t_',
            components: [
                <Link
                    key={0}
                    className={styles.main_link}
                    url={{
                        type: 'non-company',
                        href: 'https://www.uscfinvestments.com/ung',
                        target: '_blank',
                    }}
                    weight="bold"
                />,
            ],
        },
    },
    {
        id: 23,
        instrumental_content_text: {
            text: '_t_<0>VEA.US</0> The Vanguard FTSE Developed Markets ETF tracks a benchmark index that measures the investment return of stocks issued by companies located in Canada and the major markets of Europe and the Pacific region._t_',
            components: [
                <Link
                    key={0}
                    className={styles.main_link}
                    url={{
                        type: 'non-company',
                        href: 'https://investor.vanguard.com/investment-products/etfs/profile/vea',
                        target: '_blank',
                    }}
                    weight="bold"
                />,
            ],
        },
    },
    {
        id: 24,
        instrumental_content_text: {
            text: '_t_<0>VNQ.US</0> The Vanguard Real Estate ETF tracks the return of the MSCI US Investable Market Real Estate 25/50 Index._t_',
            components: [
                <Link
                    key={0}
                    className={styles.main_link}
                    url={{
                        type: 'non-company',
                        href: 'https://investor.vanguard.com/investment-products/etfs/profile/vnq',
                        target: '_blank',
                    }}
                    weight="bold"
                />,
            ],
        },
    },
    {
        id: 25,
        instrumental_content_text: {
            text: '_t_<0>VOO.US</0> The Vanguard S&P 500 ETF tracks the S&P 500 Index._t_',
            components: [
                <Link
                    key={0}
                    className={styles.main_link}
                    url={{
                        type: 'non-company',
                        href: 'https://investor.vanguard.com/investment-products/etfs/profile/voo',
                        target: '_blank',
                    }}
                    weight="bold"
                />,
            ],
        },
    },
    {
        id: 26,
        instrumental_content_text: {
            text: '_t_<0>VTI.US</0> The Vanguard Total Stock Market ETF tracks the CRSP US Total Market Index._t_',
            components: [
                <Link
                    key={0}
                    className={styles.main_link}
                    url={{
                        type: 'non-company',
                        href: 'https://investor.vanguard.com/investment-products/etfs/profile/vti',
                        target: '_blank',
                    }}
                    weight="bold"
                />,
            ],
        },
    },
    {
        id: 27,
        instrumental_content_text: {
            text: '_t_<0>VWO.US</0> The Vanguard FTSE Emerging Mkts ETF tracks the FTSE Emerging Markets All Cap China A Inclusion Index._t_',
            components: [
                <Link
                    key={0}
                    className={styles.main_link}
                    url={{
                        type: 'non-company',
                        href: 'https://institutional.vanguard.com/investments/product-details/fund/0964',
                        target: '_blank',
                    }}
                    weight="bold"
                />,
            ],
        },
    },
    {
        id: 28,
        instrumental_content_text: {
            text: '_t_<0>XLE.US</0> The Energy Select Sector SPDR® Fund ETF tracks the energy sector of the S&P 500 Index._t_',
            components: [
                <Link
                    key={0}
                    className={styles.main_link}
                    url={{
                        type: 'non-company',
                        href: 'https://www.ssga.com/us/en/intermediary/etfs/funds/the-energy-select-sector-spdr-fund-xle',
                        target: '_blank',
                    }}
                    weight="bold"
                />,
            ],
        },
    },
    {
        id: 29,
        instrumental_content_text: {
            text: '_t_<0>XLF.US</0> The Financial Select Sector SPDR® Fund ETF tracks the financial sector of the S&P 500 Index._t_',
            components: [
                <Link
                    key={0}
                    className={styles.main_link}
                    url={{
                        type: 'non-company',
                        href: 'https://www.ssga.com/us/en/intermediary/etfs/funds/the-financial-select-sector-spdr-fund-xlf',
                        target: '_blank',
                    }}
                    weight="bold"
                />,
            ],
        },
    },
    {
        id: 30,
        instrumental_content_text: {
            text: '_t_<0>XLK.US</0> The Technology Select Sector SPDR® Fund ETF tracks the technology sector of the S&P 500 Index._t_',
            components: [
                <Link
                    key={0}
                    className={styles.main_link}
                    url={{
                        type: 'non-company',
                        href: 'https://www.ssga.com/us/en/intermediary/etfs/funds/the-technology-select-sector-spdr-fund-xlk',
                        target: '_blank',
                    }}
                    weight="bold"
                />,
            ],
        },
    },
]
