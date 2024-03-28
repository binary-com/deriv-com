import React, { useState } from 'react'
import styled from 'styled-components'
import { TabsContainer } from '../../dmt5-trading-signals'
import DERIVIBDMT5Cards from './_dmt5-cards'
import { CardWrapper } from './_partner-card'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { SectionContainer, Container } from 'components/containers'
import { Header } from 'components/elements/typography'
import { LiveChatLinkText } from 'components/elements'
import { Localize } from 'components/localization'
import device from 'themes/device'
import { TString } from 'types/generics'
import useAffiliateSignupLink from 'features/hooks/ab-testing/use-partners-signup-link'
import { LinkButton } from 'components/form'

type AssetsType = {
    title: TString
    list: TString[] | string[]
}[]

type DescType = {
    firstText: TString
    secondText?: TString
}

type TypeForType = {
    headerHeight: string
    assets: AssetsType
    class_name?: string
    styles?: string
    styled?: string
}[]

type NoteType = {
    title: TString
    desc: DescType
}[]

type ListType = {
    title?: TString
    details?: TString
    icon?: string
    iconAlt?: TString
    notes?: NoteType
    second_desc?: TString
}[]

type DMT5Type = {
    name: TString
    description: TString
    type: TypeForType
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

const StyledBlockWrap = styled.div`
    display: flex;
    justify-content: center;

    @media ${device.laptopM} {
        flex-direction: column;
        align-items: center;
        gap: 0.8rem;
    }
`

const StyledColumnWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    section {
        inline-size: 38.4rem;
    }

    @media ${device.laptopM} {
        align-items: center;
    }
`
const StyledRowWrap = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 2.4rem;
    gap: 2.4rem;

    section {
        inline-size: 38.4rem;
        block-size: fit-content;
    }

    @media ${device.laptopM} {
        flex-direction: column;
        align-items: center;
        gap: 0.8rem;
        margin-left: 0;
    }
`

const StyledSection = styled(SectionContainer)<StyledSectionProps>`
    padding-bottom: 0;
    text-align: ${(props) => props.align || 'left'};

    @media ${device.tabletL} {
        padding: 4rem 0 0;
    }
`

const DecideSection = styled(StyledSection)`
    padding-top: 4rem;
    @media ${device.tabletL} {
        padding: 2.4rem 0 0;
    }
`

const IBSectionContainer = styled(SectionContainer)`
    padding-bottom: 8rem;
    @media ${device.tabletL} {
        padding: 2.4rem 0 0;
    }
    @media ${device.mobileM} {
        width: unset;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        text-align: center;
        font-size: 1.6rem;
    }
`

const StyledTitleHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 2.4rem;
    }
`

const SubtitleHeader = styled(Header)`
    line-height: 3.6rem;

    @media ${device.laptopL} {
        width: 100%;
    }
    @media ${device.tabletL} {
        line-height: 2.4rem;
        font-size: 1.6rem !important;
        max-width: 30.5rem;
    }
`

type ItemProps = {
    active_tab: 'mt5' | 'x'
    name: 'mt5' | 'x'
}

const Item = styled.div<ItemProps>`
    margin-top: 4rem;
    padding: 1.2rem 1.6rem;
    opacity: ${(props) => (props.active_tab === props.name.toLocaleLowerCase() ? '1' : '0.48')};
    border-bottom: ${(props) =>
        props.name === props.active_tab
            ? '0.2rem solid var(--color-red)'
            : '0.2rem solid var(--color-black-3)'};
    cursor: pointer;
    z-index: 2;

    ${Header} {
        font-size: 2rem;
        width: max-content;
        text-align: center;
    }
    h4 {
        color: ${(props) =>
            props.active_tab === props.name.toLocaleLowerCase()
                ? 'var(--color-red)'
                : 'var(--color-black-3)'};
        font-weight: ${(props) =>
            props.active_tab === props.name.toLocaleLowerCase() ? '300' : '400'};
    }
    @media ${device.tabletL} {
        padding: 1.2rem 0.8rem 1.2rem 0.7rem;
        margin-top: 2.4rem;

        ${Header} {
            font-size: 2rem;
            width: 100%;
        }
    }
    @media ${device.mobileL} {
        width: 100%;
        text-align: center;
    }
`

const RedButton = styled(LinkButton)<RedButtonProps>`
    border-radius: 4px;
    width: 364px;
    padding-top: 0.5rem;
    height: 40px;
    border-radius: 16px;
    display: flex;
    margin: auto;
    margin-bottom: 40px;
    align-items:center;
    justify-content:center;
    text-align:center;
    @media ${device.tabletL} {
        padding-top: 10px;
        width: 100%;
    }
`

const tabs = ['mt5', 'x']

const DerivIBProgramme = () => {
    const [activeTab, setActiveTab] = useState<'x' | 'mt5'>('mt5')
    const [is_mounted] = usePageLoaded()
    const { affiliate_signup_link } = useAffiliateSignupLink()

    const handleTabClick = (tabName: ItemProps['name']) => {
        if (tabName !== activeTab) {
            setActiveTab(tabName)
        }
    }
    const deriv_mt5_name = 'Deriv MT5'
    return (
        <StyledSection id="deriv-ib">
            <Container direction="column">
                <TitleWrapper>
                    <StyledTitleHeader as="h2" mb="1.2rem" type="page-title" align="center">
                        <Localize translate_text="_t_Deriv IB Programme_t_" />
                    </StyledTitleHeader>
                    <SubtitleHeader as="p" type="sub-section-title" align="center" weight="normal">
                        <Localize translate_text="_t_Our introducing broker programme is available to all Deriv affiliates._t_" />
                    </SubtitleHeader>
                    <SubtitleHeader as="p" type="sub-section-title" align="center" weight="normal">
                        <Localize translate_text="_t_Earn commission from your clients' trades on Deriv's CFD trading platforms._t_" />
                    </SubtitleHeader>
                </TitleWrapper>
                <TabsContainer>
                    {is_mounted &&
                        tabs.map((tabName: ItemProps['name']) => (
                            <Item
                                key={tabName}
                                onClick={() => handleTabClick(tabName)}
                                active_tab={activeTab}
                                name={tabName}
                            >
                                <Header as="h4">
                                    <Localize
                                        translate_text={`_t_Deriv ${tabName.toUpperCase()}_t_`}
                                    />
                                </Header>
                            </Item>
                        ))}
                </TabsContainer>
                <IBSectionContainer padding="4rem 0 9.6rem 0">
                    {activeTab === 'mt5' && (
                        <>
                            <Header as="h2" mb="3rem" type="page-title" align="center">
                                {deriv_mt5_name}
                            </Header>
                            <StyledBlockWrap>
                                <StyledColumnWrap>
                                    <DERIVIBDMT5Cards data={ib_dmt5_financial} />
                                    <DERIVIBDMT5Cards data={ib_dmt5_financialSTP} />
                                </StyledColumnWrap>
                                <StyledRowWrap>
                                    <DERIVIBDMT5Cards data={ib_dmt5_swapFree} />
                                    <DERIVIBDMT5Cards data={ib_dmt5_synthetic} />
                                </StyledRowWrap>
                            </StyledBlockWrap>
                        </>
                    )}

                    {activeTab === 'x' && (
                        <>
                            <Header as="h2" mb="3rem" type="page-title" align="center">
                                <Localize translate_text="_t_Deriv X_t_" />
                            </Header>
                            <StyledCardWrapper>
                                <DERIVIBDMT5Cards data={ib_dx} />
                            </StyledCardWrapper>
                        </>
                    )}

                    <DecideSection align="center">
                        <StyledHeader
                            id="dm-affiliate-contact-us"
                            as="h4"
                            type="sub-section-title"
                            align="center"
                            weight="medium"
                            mb="2.4rem"
                        >
                            <RedButton
                                id="dm-cta-affiliate-signup"
                                mt="2rem"
                                to={affiliate_signup_link}
                                external
                                target="_blank"
                                // type="affiliate_sign_up"
                                secondary
                            >
                                <Localize translate_text="_t_Sign up_t_" />
                            </RedButton>
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
    name: '_t_MT5 Derived_t_',
    description:
        '_t_Earn when your clients trade on an MT5 Derived account.<br><br>All commission rates are quoted in USD, per round trade._t_',
    type: [
        {
            headerHeight: '8rem',
            styled: ' ',
            assets: [
                {
                    title: '_t_Instruments_t_',
                    list: [
                        '_t_Crash/Boom indices_t_',
                        '_t_Volatility indices_t_',
                        '_t_Step Index_t_',
                        '_t_Range break indices_t_',
                        '_t_Jump indices_t_',
                        '_t_Basket indices_t_',
                        '_t_DEX indices_t_',
                        '_t_Drift Switch Indices_t_',
                    ],
                },
                {
                    title: '_t_Commission per USD 100k turnover_t_',
                    list: [
                        '_t_Up to USD 4_t_',
                        '_t_Up to USD 25_t_',
                        '_t_Up to USD 0.3_t_',
                        '_t_Up to USD 0.7_t_',
                        '_t_Up to USD 10_t_',
                        '_t_Up to USD 10_t_',
                        '_t_Up to USD 7_t_',
                        '_t_Up to USD 5_t_',
                    ],
                },
            ],
        },
    ],
}
const ib_dmt5_swapFree: DMT5Type = {
    name: '_t_MT5 Swap Free_t_',
    description:
        '_t_Earn when your clients trade on an MT5 Swap Free account.<br><br>All commission rates are quoted in USD, per round trade._t_',
    type: [
        {
            headerHeight: '8rem',
            styled: ' ',
            assets: [
                {
                    title: '_t_Instruments_t_',
                    list: ['_t_Forex & Metals_t_'],
                },
                {
                    title: '_t_Commission per lot_t_',
                    list: ['_t_Up to USD 20_t_'],
                },
            ],
        },
        {
            headerHeight: '6.4rem',
            styled: ' ',
            assets: [
                {
                    title: '_t_Instruments_t_',
                    list: [
                        '_t_Commodities_t_',
                        '_t_Cryptocurrencies_t_',
                        '_t_Stocks, Stock Indices & <br>ETFs_t_',
                        '_t_Volatility indices_t_',
                        '_t_Step Index_t_',
                        '_t_Range break indices_t_',
                        '_t_Jump indices_t_',
                    ],
                },
                {
                    title: '_t_Commission per USD 100k turnover_t_',
                    list: [
                        '_t_Up to USD 25_t_',
                        '_t_Up to USD 50_t_',
                        '_t_Up to USD 50_t_',
                        '_t_Up to USD 25_t_',
                        '_t_Up to USD 0.3_t_',
                        '_t_Up to USD 0.7_t_',
                        '_t_Up to USD 10_t_',
                    ],
                },
            ],
        },
    ],
}
const ib_dmt5_financial: DMT5Type = {
    name: '_t_MT5 Financial_t_',
    description:
        '_t_Earn when your clients trade on an MT5 Financial account.<br><br>All commission rates are quoted in USD, per round trade._t_',
    type: [
        {
            headerHeight: '5rem',
            styled: ' ',
            assets: [
                {
                    title: '_t_Instruments_t_',
                    list: ['_t_Forex & Metals_t_'],
                },
                {
                    title: '_t_Commission per lot_t_',
                    list: ['_t_Up to USD 8_t_'],
                },
            ],
        },
        {
            headerHeight: '5rem',
            styled: ' ',
            assets: [
                {
                    title: '_t_Instruments_t_',
                    list: [
                        '_t_Commodities_t_',
                        '_t_Cryptocurrencies_t_',
                        '_t_Stocks, Stock Indices & <br>ETFs_t_',
                    ],
                },
                {
                    title: '_t_Commission per USD 100k turnover_t_',
                    list: ['_t_Up to USD 10_t_', '_t_Up to USD 20_t_', '_t_Up to USD 20_t_'],
                },
            ],
        },
    ],
}
const ib_dmt5_financialSTP: DMT5Type = {
    name: '_t_MT5 Financial STP_t_',
    description:
        '_t_Earn when your clients trade on an MT5 Financial STP account.<br><br>All commission rates are quoted in USD, per round trade._t_',
    type: [
        {
            headerHeight: '8rem',
            styled: ' ',
            assets: [
                {
                    title: '_t_Instruments_t_',
                    list: ['_t_Forex & Metals_t_', '_t_Cryptocurrencies_t_'],
                },
                {
                    title: '_t_Commission per USD 100k turnover_t_',
                    list: ['_t_Up to USD 5_t_', '_t_Up to USD 20_t_'],
                },
            ],
        },
    ],
}
const ib_dx: DMT5Type = {
    name: '_t_Deriv X_t_',
    description:
        '_t_Earn when your clients trade on a Deriv X account.<br><br>All commission rates are quoted in USD, per round trade._t_',
    type: [
        {
            headerHeight: '5rem',
            styled: ' ',
            assets: [
                {
                    title: '_t_Instruments_t_',
                    list: [
                        '_t_Forex & Metals_t_',
                        '_t_Commodities_t_',
                        '_t_Cryptocurrencies_t_',
                        '_t_Stocks, Stock Indices & <br>ETFs_t_',
                        '_t_Crash/Boom indices_t_',
                        '_t_Volatility indices_t_',
                        '_t_Step Index_t_',
                        '_t_Range break indices_t_',
                        '_t_Jump indices_t_',
                        '_t_Basket indices_t_',
                        '_t_DEX indices_t_',
                        '_t_Drift Switch Indices_t_',
                    ],
                },
                {
                    title: '_t_Commission per USD 100k turnover_t_',
                    list: [
                        '_t_Up to USD 4_t_',
                        '_t_Up to USD 10_t_',
                        '_t_Up to USD 20_t_',
                        '_t_Up to USD 20_t_',
                        '_t_Up to USD 4_t_',
                        '_t_Up to USD 20_t_',
                        '_t_Up to USD 0.3_t_',
                        '_t_Up to USD 0.7_t_',
                        '_t_Up to USD 10_t_',
                        '_t_Up to USD 10_t_',
                        '_t_Up to USD 7_t_',
                        '_t_Up to USD 5_t_',
                    ],
                },
            ],
        },
    ],
}

export default DerivIBProgramme
