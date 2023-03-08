import React from 'react'
import styled from 'styled-components'
import DERIVIBDMT5Cards from './_dmt5-cards'
import { CardWrapper } from './_partner-card'
import { SectionContainer, Container } from 'components/containers'
import { Header } from 'components/elements/typography'
import { LiveChatLinkText } from 'components/elements'
import { Localize } from 'components/localization'
import device from 'themes/device'
import useRegion from 'components/hooks/use-region'
import { TString } from 'types/generics'

type AssetsType = {
    title: TString
    list: TString[]
}[]

type DescType = {
    firstText: TString
    secondText?: TString
}

type TypeForType = {
    title: TString
    headerHeight: string
    assets: AssetsType
    class_name?: string
}[]

type NoteType = {
    title: TString
    desc: DescType
}[]

type ListType = {
    details?: React.ReactElement
    icon?: string
    iconAlt?: TString
    notes?: NoteType
    second_desc?: React.ReactElement
}[]

type CountDetailsType = {
    title: TString
    list: ListType
    notes: NoteType
}[]

type DMT5Type = {
    name: TString
    description: TString
    type: TypeForType
    countDetails: CountDetailsType
}

type StyledSectionProps = {
    align?: string
}

export type DMT5Props = { data: DMT5Type }

const TitleWrapper = styled.div`
    max-width: 104.5rem;
    margin: 0 auto;
`

const StyledCardWrapper = styled(CardWrapper)`
    flex-wrap: wrap;

    @media ${device.tabletL} {
        align-items: center;
    }
`

const StyledSection = styled(SectionContainer)<StyledSectionProps>`
    padding-bottom: 0;
    text-align: ${(props) => props.align || 'left'};

    @media ${device.tabletL} {
        padding: 40px 0 0;
    }
`

const DecideSection = styled(StyledSection)`
    padding-top: 40px;
    @media ${device.tabletL} {
        padding: 24px 0 0;
    }
`

const IBSectionContainer = styled(SectionContainer)`
    padding-bottom: 80px;
    @media ${device.tabletL} {
        padding: 24px 0 0;
    }
    @media ${device.mobileM} {
        width: unset;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        text-align: center;
        font-size: 16px;
    }
`

const StyledHeaderCommission = styled(StyledHeader)`
    @media ${device.laptopM} {
        text-align: center;
    }
    @media ${device.tabletL} {
        text-align: center;
    }
`
const StyledHeaderDerivx = styled(Header)`
    text-align: start;
    margin-left: 40.8rem;

    @media ${device.tabletL} {
        margin-left: 0;
        text-align: center;
    }
`

const StyledTitleHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 24px;
    }
`

const SubtitleHeader = styled(Header)`
    line-height: 36px;

    @media ${device.laptopL} {
        width: 100%;
    }
    @media ${device.tabletL} {
        line-height: 24px;
        font-size: 16px !important;
        max-width: 305px;
    }
`

const DerivIBProgramme = () => {
    const { is_row } = useRegion()
    return (
        <StyledSection id="deriv-ib">
            <Container direction="column">
                <TitleWrapper>
                    <StyledTitleHeader as="h2" mb="1.2rem" type="page-title" align="center">
                        <Localize translate_text="_t_Deriv IB Programme_t_" />
                    </StyledTitleHeader>
                    <SubtitleHeader as="h4" type="sub-section-title" align="center" weight="normal">
                        <Localize translate_text="_t_Our introducing broker programme is available to all Deriv affiliates._t_" />
                    </SubtitleHeader>
                    <SubtitleHeader as="h4" type="sub-section-title" align="center" weight="normal">
                        {is_row ? (
                            <Localize translate_text="_t_Earn commission from your clients’ trades on Deriv MT5 and Deriv X._t_" />
                        ) : (
                            <Localize translate_text="_t_Earn commission from your clients’ trades on Deriv MT5._t_" />
                        )}
                    </SubtitleHeader>
                    <Header as="h2" mb="2rem" type="page-title" mt="4rem" align="center">
                        <Localize translate_text="_t_Deriv MT5_t_" />
                    </Header>
                </TitleWrapper>
                <IBSectionContainer padding="4rem 0 9.6rem 0">
                    <StyledHeaderCommission as="h4" type="main-paragraph" mb="1.6rem">
                        <Localize translate_text="_t_Choose a commission plan:_t_" />
                    </StyledHeaderCommission>
                    <StyledCardWrapper>
                        <DERIVIBDMT5Cards data={ib_dmt5_synthetic} />
                        <DERIVIBDMT5Cards data={ib_dmt5_financial} />
                        <DERIVIBDMT5Cards data={ib_dmt5_financialSTP} />
                        {is_row && (
                            <>
                                <Header
                                    as="h2"
                                    mb="2rem"
                                    type="page-title"
                                    mt="4rem"
                                    align="center"
                                >
                                    <Localize translate_text="_t_Deriv X_t_" />
                                </Header>
                                <StyledHeaderDerivx as="h4" type="main-paragraph" mb="1.6rem">
                                    <Localize translate_text="_t_Here's your commission plan:_t_" />
                                </StyledHeaderDerivx>
                                <DERIVIBDMT5Cards data={ib_derivx} />
                            </>
                        )}
                    </StyledCardWrapper>
                    <DecideSection align="center">
                        <StyledHeader
                            id="dm-affiliate-contact-us"
                            as="h4"
                            type="sub-section-title"
                            align="center"
                            weight="medium"
                            mb="24px"
                        >
                            <Localize translate_text="_t_Can’t decide which programme or commission plan suits you?_t_" />
                        </StyledHeader>
                        <LiveChatLinkText text="_t_Contact us via live chat_t_" weight="bold" />
                    </DecideSection>
                </IBSectionContainer>
            </Container>
        </StyledSection>
    )
}

const ib_dmt5_synthetic: DMT5Type = {
    name: '_t_Deriv MT5 Derived_t_',
    description: '_t_Earn when your clients trade on an MT5 Derived account._t_',
    type: [
        {
            title: '_t_Crash/Boom_t_',
            headerHeight: '6.4rem',
            assets: [
                {
                    title: '_t_Asset_t_',
                    list: [
                        '_t_Crash 300 Index_t_',
                        '_t_Crash 500 Index_t_',
                        '_t_Crash 1000 Index_t_',
                        '_t_Boom 300 Index_t_',
                        '_t_Boom 500 Index_t_',
                        '_t_Boom 1000 Index_t_',
                    ],
                },
                {
                    title: '_t_Commission per USD 100k turnover_t_',
                    list: [
                        '_t_1_t_',
                        '_t_0.35_t_',
                        '_t_0.25_t_',
                        '_t_1_t_',
                        '_t_0.35_t_',
                        '_t_0.25_t_',
                    ],
                },
            ],
            class_name: 'crash-boom',
        },
        {
            title: '_t_Volatility indices_t_',
            headerHeight: '6.4rem',
            assets: [
                {
                    title: '_t_Asset_t_',
                    list: [
                        '_t_Volatility 10 Index_t_',
                        '_t_Volatility 10 (1s) Index_t_',
                        '_t_Volatility 25 Index_t_',
                        '_t_Volatility 25 (1s) Index_t_',
                        '_t_Volatility 50 Index_t_',
                        '_t_Volatility 50 (1s) Index_t_',
                        '_t_Volatility 75 Index _t_',
                        '_t_Volatility 75 (1s) Index_t_',
                        '_t_Volatility 100 Index_t_',
                        '_t_Volatility 100 (1s) Index_t_',
                        '_t_Volatility 200 (1s) Index_t_',
                        '_t_Volatility 300 (1s) Index_t_',
                    ],
                },
                {
                    title: '_t_Commission per USD 100k turnover_t_',
                    list: [
                        '_t_0.75_t_',
                        '_t_0.75_t_',
                        '_t_1.75_t_',
                        '_t_1.75_t_',
                        '_t_3.75_t_',
                        '_t_3.75_t_',
                        '_t_5_t_',
                        '_t_5_t_',
                        '_t_7.5_t_',
                        '_t_7.5_t_',
                        '_t_10_t_',
                        '_t_15_t_',
                    ],
                },
            ],
            class_name: 'volatility-indices',
        },
        {
            title: '_t_Step index_t_',
            headerHeight: '6.4rem',
            assets: [
                {
                    title: '_t_Asset_t_',
                    list: ['_t_Step index_t_'],
                },
                {
                    title: '_t_Commission per USD 100k turnover_t_',
                    list: ['_t_0.10_t_'],
                },
            ],
            class_name: 'step-index',
        },
        {
            title: '_t_Jump indices_t_',
            headerHeight: '6.4rem',
            assets: [
                {
                    title: '_t_Asset_t_',
                    list: [
                        '_t_Jump 10 Index_t_',
                        '_t_Jump 25 Index_t_',
                        '_t_Jump 50 Index_t_',
                        '_t_Jump 75 Index_t_',
                        '_t_Jump 100 Index_t_',
                    ],
                },
                {
                    title: '_t_Commission per USD 100k turnover_t_',
                    list: ['_t_0.50_t_', '_t_1.25_t_', '_t_2.50_t_', '_t_3.75_t_', '_t_5_t_'],
                },
            ],
            class_name: 'jump-index',
        },
    ],
    countDetails: [
        {
            title: '_t_How it’s calculated_t_',
            list: [
                {
                    details: (
                        <Localize translate_text="_t_A deal for 1 lot of the Volatility 75 Index for a price of USD 500,000 will pay out USD 25 in commission based on the following formula:_t_" />
                    ),
                    icon: 'dmt5_synthetic_calculator',
                    iconAlt: '_t_DMT5 synthetic calculated_t_',
                },
            ],
            notes: [
                {
                    title: '_t_Please note:_t_',
                    desc: {
                        firstText:
                            '_t_Commission payout for all assets will be converted to your deposit currency based on the latest exchange rate._t_',
                    },
                },
            ],
        },
    ],
}

const ib_dmt5_financial: DMT5Type = {
    name: '_t_Deriv MT5 Financial_t_',
    description: '_t_Earn when your clients trade on an MT5 Financial account._t_',
    type: [
        {
            title: '_t_Forex and metals_t_',
            headerHeight: '8.0rem',
            assets: [
                {
                    title: '_t_Asset_t_',
                    list: ['_t_Forex_t_', '_t_Metals_t_'],
                },
                {
                    title: '_t_Commission per lot_t_',
                    list: ['_t_USD 2_t_', '_t_USD 4_t_'],
                },
            ],
            class_name: 'forex-and-metals',
        },
        {
            title: '_t_Stock indices_t_',
            headerHeight: '6.4rem',
            assets: [
                {
                    title: '_t_Asset_t_',
                    list: ['_t_Stock indices_t_', '_t_Stocks_t_'],
                },
                {
                    title: '_t_Commission per USD 100k turnover_t_',
                    list: ['_t_USD 1_t_', '_t_USD 10_t_'],
                },
            ],
            class_name: 'stock-indices',
        },
        {
            title: '_t_Cryptocurrencies_t_',
            headerHeight: '6.4rem',
            assets: [
                {
                    title: '_t_Asset_t_',
                    list: ['_t_Cryptocurrencies_t_'],
                },
                {
                    title: '_t_Commission per USD 100k turnover_t_',
                    list: ['_t_10_t_'],
                },
            ],
            class_name: 'cryptocurrencies-financial',
        },
    ],
    countDetails: [
        {
            title: '_t_How it’s calculated_t_',
            list: [
                {
                    details: (
                        <Localize translate_text="_t_For forex, there is a fixed commission of USD 2 per lot (only applicable for standard lots). A deal for 1 lot of EUR/USD will pay out USD 2 in commission based on the following formula:_t_" />
                    ),
                    icon: 'dmt5_financial_calculator_one',
                    iconAlt: '_t_DMT5 Financial calculated first_t_',
                },
                {
                    details: (
                        <Localize translate_text="_t_For metals, there is a fixed commission of USD 4 per lot. A deal for 1 lot of XAU/USD will pay out USD 4 in commission based on the following formula:_t_" />
                    ),
                    icon: 'dmt5_financial_calculator_two',
                    iconAlt: '_t_DMT5 Financial calculated second_t_',
                },
                {
                    details: (
                        <Localize translate_text="_t_For cryptocurrency assets, a deal for 1 lot of BTC/USD (with a BTC to USD exchange rate of USD 50,000) will pay out USD 5 in commission based on the following formula:_t_" />
                    ),
                    icon: 'dmt5_financial_calculator_three',
                    iconAlt: '_t_DMT5 Financial calculated thirth_t_',
                },
            ],
            notes: [
                {
                    title: '_t_Please note:_t_',
                    desc: {
                        firstText:
                            '_t_Commission payout for all assets will be converted to your deposit currency based on the latest exchange rate._t_',
                    },
                },
            ],
        },
    ],
}
const ib_dmt5_financialSTP: DMT5Type = {
    name: '_t_Deriv MT5 Financial STP_t_',
    description: '_t_Earn when your clients trade on an MT5 Financial STP account._t_',
    type: [
        {
            title: '_t_Forex_t_',
            headerHeight: '8.0rem',
            assets: [
                {
                    title: '_t_Asset_t_',
                    list: ['_t_Forex_t_'],
                },
                {
                    title: '_t_Commission per lot (1 standard lot is 100k units)_t_',
                    list: ['_t_2.5_t_'],
                },
            ],
        },
        {
            title: '_t_Cryptocurrencies_t_',
            headerHeight: '6.4rem',
            assets: [
                {
                    title: '_t_Asset_t_',
                    list: ['_t_Cryptocurrencies_t_'],
                },
                {
                    title: '_t_Commission per USD 100k turnover_t_',
                    list: ['_t_10_t_'],
                },
            ],
        },
    ],
    countDetails: [
        {
            title: '_t_How it’s calculated_t_',
            list: [
                {
                    details: (
                        <Localize translate_text="_t_For forex, a deal for 1 lot of EUR/USD will pay out EUR 2.5 in commission based on the following formula:_t_" />
                    ),
                    icon: 'dmt5_financial_stp_calculator_one',
                    iconAlt: '_t_DMT5 Financial STP calculated first_t_',
                },
                {
                    details: (
                        <Localize translate_text="_t_For cryptocurrency assets, a deal for 1 lot of BTC/USD (with a BTC to USD exchange rate of USD 50,000) will pay out USD 5 in commission based on the following formula:_t_" />
                    ),
                    icon: 'dmt5_financial_stp_calculator_two',
                    iconAlt: '_t_DMT5 Financial STP calculated second_t_',
                },
            ],
            notes: [
                {
                    title: '_t_Please note:_t_',
                    desc: {
                        firstText:
                            '_t_For forex, your commission is represented in the base currency (EUR in the above example)._t_',
                        secondText:
                            '_t_Commission payout for all assets will be converted to your deposit currency based on the latest exchange rate._t_',
                    },
                },
            ],
        },
    ],
}

const ib_derivx: DMT5Type = {
    name: '_t_Deriv X_t_',
    description: '_t_Earn when your clients trade on a Deriv X account._t_',
    type: [
        {
            title: '_t_Forex_t_',
            headerHeight: '6.4rem',
            assets: [
                {
                    title: '_t_Asset_t_',
                    list: ['_t_Forex (Majors)_t_', '_t_Forex (Minors)_t_', '_t_Forex (Micros)_t_'],
                },
                {
                    title: '_t_Commission per lot_t_',
                    list: ['_t_USD 2_t_', '_t_USD 2_t_', '_t_USD 2_t_'],
                },
            ],
        },
        {
            title: '_t_Cryptocurrencies_t_',
            headerHeight: '6.4rem',
            assets: [
                {
                    title: '_t_Asset_t_',
                    list: ['_t_Cryptocurrencies_t_'],
                },
                {
                    title: '_t_Commission per USD 100k turnover_t_',
                    list: ['_t_10_t_'],
                },
            ],
        },
        {
            title: '_t_Commodities_t_',
            headerHeight: '6.4rem',
            assets: [
                {
                    title: '_t_Asset_t_',
                    list: ['_t_Metals_t_', '_t_Energy (Oil)_t_'],
                },
                {
                    title: '_t_Commission per USD 100k turnover_t_',
                    list: ['_t_USD 1.50_t_', '_t_USD 5_t_'],
                },
            ],
        },
        {
            title: '_t_Basket indices_t_',
            headerHeight: '6.4rem',
            assets: [
                {
                    title: '_t_Asset_t_',
                    list: [
                        '_t_AUD Basket_t_',
                        '_t_EUR Basket_t_',
                        '_t_GBP Basket_t_',
                        '_t_USD Basket_t_',
                        '_t_Gold Basket_t_',
                    ],
                },
                {
                    title: '_t_Commission per USD 100k turnover_t_',
                    list: [
                        '_t_USD 1.50_t_',
                        '_t_USD 1.50_t_',
                        '_t_USD 1.50_t_',
                        '_t_USD 1.50_t_',
                        '_t_USD 7_t_',
                    ],
                },
            ],
        },
        {
            title: '_t_Crash/Boom_t_',
            headerHeight: '6.4rem',
            assets: [
                {
                    title: '_t_Asset_t_',
                    list: [
                        '_t_Crash 300 Index_t_',
                        '_t_Crash 500 Index_t_',
                        '_t_Crash 1000 Index_t_',
                        '_t_Boom 300 Index_t_',
                        '_t_Boom 500 Index_t_',
                        '_t_Boom 1000 Index_t_',
                    ],
                },
                {
                    title: '_t_Commission per USD 100k turnover_t_',
                    list: [
                        '_t_1_t_',
                        '_t_0.35_t_',
                        '_t_0.25_t_',
                        '_t_1_t_',
                        '_t_0.35_t_',
                        '_t_0.25_t_',
                    ],
                },
            ],
        },
        {
            title: '_t_Volatility indices_t_',
            headerHeight: '6.4rem',
            assets: [
                {
                    title: '_t_Asset_t_',
                    list: [
                        '_t_Volatility 10 Index _t_',
                        '_t_Volatility 10 (1s) Index_t_',
                        '_t_Volatility 25 Index_t_',
                        '_t_Volatility 25 (1s) Index_t_',
                        '_t_Volatility 50 Index_t_',
                        '_t_Volatility 50 (1s) Index_t_',
                        '_t_Volatility 75 Index _t_',
                        '_t_Volatility 75 (1s) Index_t_',
                        '_t_Volatility 100 Index_t_',
                        '_t_Volatility 100 (1s) Index_t_',
                        '_t_Volatility 200 (1s) Index_t_',
                        '_t_Volatility 300 (1s) Index_t_',
                    ],
                },
                {
                    title: '_t_Commission per USD 100k turnover_t_',
                    list: [
                        '_t_0.75_t_',
                        '_t_0.75_t_',
                        '_t_1.75_t_',
                        '_t_1.75_t_',
                        '_t_3.75_t_',
                        '_t_3.75_t_',
                        '_t_5_t_',
                        '_t_5_t_',
                        '_t_7.5_t_',
                        '_t_7.5_t_',
                        '_t_10_t_',
                        '_t_15_t_',
                    ],
                },
            ],
        },
        {
            title: '_t_Step index_t_',
            headerHeight: '6.4rem',
            assets: [
                {
                    title: '_t_Asset_t_',
                    list: ['_t_Step index_t_'],
                },
                {
                    title: '_t_Commission per USD 100k turnover_t_',
                    list: ['_t_0.10_t_'],
                },
            ],
        },
        {
            title: '_t_Jump indices_t_',
            headerHeight: '6.4rem',
            assets: [
                {
                    title: '_t_Asset_t_',
                    list: [
                        '_t_Jump 10 Index_t_',
                        '_t_Jump 25 Index_t_',
                        '_t_Jump 50 Index_t_',
                        '_t_Jump 75 Index_t_',
                        '_t_Jump 100 Index_t_',
                    ],
                },
                {
                    title: '_t_Commission per USD 100k turnover_t_',
                    list: ['_t_0.50_t_', '_t_1.25_t_', '_t_2.50_t_', '_t_3.75_t_', '_t_5_t_'],
                },
            ],
        },
        {
            title: '_t_Range break indices_t_',
            headerHeight: '6.4rem',
            assets: [
                {
                    title: '_t_Asset_t_',
                    list: ['_t_Range Break 100 Index_t_', '_t_Range Break 200 Index_t_'],
                },
                {
                    title: '_t_Commission per USD 100k turnover_t_',
                    list: ['_t_USD 0.50_t_', '_t_USD 0.25_t_'],
                },
            ],
        },
    ],
    countDetails: [
        {
            title: '_t_How it’s calculated_t_',
            list: [
                {
                    details: (
                        <Localize
                            translate_text="_t_For <0>forex majors</0>, a deal for 1 lot of <0>EUR/JPY</0> will pay out USD 1.97 in commission based on the following formula:_t_"
                            components={[<strong key={0} />]}
                        />
                    ),
                    icon: 'deriv_x_one',
                    iconAlt: '_t_Deriv X commission rate calculation for forex major_t_',
                },
                {
                    details: (
                        <Localize
                            translate_text="_t_If the latest exchange rate is quoted as JPY/USD = 0.00699, then you would get a commission of <0>USD 1.97</0> commission._t_"
                            components={[<strong key={0} />]}
                        />
                    ),
                },
                {
                    details: (
                        <Localize
                            translate_text="_t_This formula also applies to <0>forex minors</0> and <0>forex micros</0>. Contract sizes and deal prices depend on the individual asset._t_"
                            components={[<strong key={0} />]}
                        />
                    ),
                },

                {
                    details: (
                        <Localize
                            translate_text="_t_For <0>cryptocurrencies,</0> a deal for 1 lot of <0>BTC/USD</0> will pay out USD 20 in commission based on the following formula:_t_"
                            components={[<strong key={0} />]}
                        />
                    ),
                    icon: 'deriv_x_two',
                    iconAlt: '_t_Deriv X commission rate calculation for cryptocurrency_t_',
                },
                {
                    details: (
                        <Localize
                            translate_text="_t_For <0>commodities,</0> a deal for 1 lot of <0>BRN</0> will pay out USD 0.0048 in commission based on the following formula:_t_"
                            components={[<strong key={0} />]}
                        />
                    ),
                    icon: 'deriv_x_three',
                    iconAlt: '_t_Deriv X commission rate calculation for commodities_t_',
                },
                {
                    second_desc: (
                        <Localize
                            translate_text="_t_This formula also applies to <0>basket indices</0>. Contract sizes and deal prices depend on the individual asset._t_"
                            components={[<strong key={0} />]}
                        />
                    ),
                },
                {
                    notes: [
                        {
                            title: '_t_Please note:_t_',
                            desc: {
                                firstText:
                                    '_t_Commission payout for all assets will be converted to your deposit currency based on the latest exchange rate._t_',
                            },
                        },
                    ],
                },
                {
                    details: (
                        <Localize
                            translate_text="_t_A deal for 1 lot of the <0>Volatility 50 (1s) Index</0> for a price of USD 600,000 will pay out USD 22.50 in commission based on the following formula:_t_"
                            components={[<strong key={0} />]}
                        />
                    ),
                    icon: 'deriv_x_four',
                    iconAlt:
                        '_t_Deriv X commission rate calculation for volatility 50 (1s) index_t_',
                },
                {
                    details: (
                        <Localize
                            translate_text="_t_The same formula applies to all synthetics except <0>Step Index</0>, which has the following formula:_t_"
                            components={[<strong key={0} />]}
                        />
                    ),
                    icon: 'deriv_x_five',
                    iconAlt: '_t_Deriv X commission rate calculation for step index_t_',
                },
            ],
            notes: [
                {
                    title: '_t_Please note:_t_',
                    desc: {
                        firstText:
                            '_t_Commission payout for all assets will be converted to your deposit currency based on the latest exchange rate._t_',
                    },
                },
            ],
        },
    ],
}

export default DerivIBProgramme
