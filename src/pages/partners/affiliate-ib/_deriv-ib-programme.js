import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Table, TR, TC } from './_table.js'
import { Card, CardWrapper } from './_partner-card.js'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Header, Text } from 'components/elements/typography'
import { localize, Localize } from 'components/localization'
import { Button, LinkButton } from 'components/form'
import { affiliate_signup_url } from 'common/utility'
import device from 'themes/device'
import Chevron from 'images/svg/chevron-bottom-bold.svg'

const TitleWrapper = styled.div`
    max-width: 104.5rem;
    margin: 0 auto;
`

const StyledCardWrapper = styled(CardWrapper)`
    flex-wrap: nowrap;
    @media ${device.laptopL} {
        flex-wrap: wrap;
    }
`

const StyledSection = styled(SectionContainer)`
    padding-bottom: 0;
    text-align: ${(props) => props.align || 'left'};

    @media ${device.tabletL} {
        padding: 40px 0;
        box-shadow: ${(props) => (props.shadow ? '0 1px 0 0 rgba(0, 0, 0, 0.1)' : '')};
    }
`

const DecideSection = styled(StyledSection)`
    padding-top: 40px;
    @media ${device.tabletL} {
        padding: 40px 0 0 0;
    }
`

const IBSectionContainer = styled(SectionContainer)`
    padding-bottom: 80px;
    @media ${device.tabletL} {
        padding: 16px 0 0;
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

const CardHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 16px;
    }
`

const CardText = styled(Text)`
    @media ${device.tabletL} {
        font-size: 14px;
    }
`

const BackButton = styled(Button)`
    border: 2px solid var(--color-grey-5);
    color: var(--color-black);
    height: 40px;
    padding: 0 1.6rem;
    margin-right: 1.6rem;
`

const StyledButton = styled(Button)`
    @media ${device.tabletL} {
        font-size: 14px;
    }
`

const LinkButtonContactUs = styled(LinkButton)`
    @media ${device.tablet} {
        display: block;
        margin: auto;
        font-size: 14px;
        width: 216px;
        height: 40px;
    }
`

const StyledText = styled(Text)`
    font-size: 1.4rem;
    line-height: 1.15;
    @media ${device.tabletL} {
        font-size: 14px;
    }
`

const HowItsCalculate = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 1.6rem;
    border-top: 2px solid var(--color-grey-2);
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1.6rem;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1.6rem 3.2rem 3.2rem;

    button:last-child {
        margin-left: 1.6rem;
    }
    @media ${device.tabletL} {
        justify-content: center;
    }
`

const StyledHeaderCommission = styled(StyledHeader)`
    margin-bottom: 0;
    margin-left: -85px;
    @media ${device.desktopL} {
        margin-left: 0;
        text-align: center;
    }

    @media (max-width: 1444px) {
        margin-left: auto;
        text-align: center;
    }

    @media ${device.mobileL} {
        width: 40rem;
    }

    @media ${device.mobileM} {
        text-align: left;
        margin: auto;
        width: 38rem;
    }
`

const StyledCard = styled(Card)`
    border-radius: 8px;
    min-width: 44rem;

    :nth-child(2) {
        margin: 1.6rem 2.4rem 0;

        @media ${device.tabletL} {
            margin: 24px 0;
        }
    }

    @media ${device.tabletL} {
        min-width: 328px;
        padding: 16px;
        margin: 1.6rem 0 1.6rem 0;
        height: ${(props) => (props.tabletHeight ? props.tabletHeight : '')};
    }

    @media ${device.mobileM} {
        min-width: unset;
        height: ${(props) => (props.mobileHeight ? props.mobileHeight : '')};

        p {
            font-size: 12px;
        }
    }
`

const StyledTitleHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 24px;
    }
`

const SubtitleHeader = styled(Header)`
    @media ${device.laptopL} {
        width: 100%;
    }
    @media ${device.tabletL} {
        font-size: 16px !important;
    }
`

const TitleTR = styled(TR)`
    height: 5rem;
    display: flex;
    align-items: center;

    @media ${device.tabletL} {
        height: 60px;
    }
`
const DerivIBProgramme = () => {
    return (
        <StyledSection shadow id="deriv-ib">
            <Container direction="column">
                <TitleWrapper>
                    <StyledTitleHeader mb="1.2rem" type="page-title" align="center">
                        {localize('Deriv IB Programme')}
                    </StyledTitleHeader>
                    <SubtitleHeader as="h4" type="sub-section-title" align="center" weight="normal">
                        {localize(
                            'Our introducing broker programme is available to all Deriv affiliates.',
                        )}
                    </SubtitleHeader>
                    <SubtitleHeader as="h4" type="sub-section-title" align="center" weight="normal">
                        {localize('Earn commission from your clients’ trades on DMT5.')}
                    </SubtitleHeader>
                </TitleWrapper>
                <IBSectionContainer padding="4rem 0 9.6rem 0">
                    <StyledHeaderCommission as="h4" type="main-paragraph" mb="1.6rem">
                        {localize('Choose a commission plan:')}
                    </StyledHeaderCommission>
                    <StyledCardWrapper>
                        <DMT5Synthetic data={ib_dmt5_synthetic} />
                        <DMT5Standard data={ib_dmt5_standard} />
                        <DMT5Advanced data={ib_dmt5_advanced} />
                    </StyledCardWrapper>
                    <DecideSection align="center">
                        <StyledHeader
                            as="h4"
                            type="sub-section-title"
                            align="center"
                            weight="medium"
                            mb="3.2rem"
                        >
                            {localize('Can’t decide which programme or commission plan suits you?')}
                        </StyledHeader>
                        <LinkButtonContactUs
                            external="true"
                            secondary
                            to="mailto:partners@deriv.com"
                            is_mail_link
                        >
                            {localize('Contact us')}
                        </LinkButtonContactUs>
                    </DecideSection>
                </IBSectionContainer>
            </Container>
        </StyledSection>
    )
}

const StyledChevron = styled.img`
    margin-top: 0.8rem;
    height: 16px;
    width: 16px;
    cursor: pointer;
    transform: ${(props) => (props.is_expand == 'true' ? 'rotate(-180deg)' : 'inherit ')};
`

const StyledTR = styled(TR)`
    display: ${(props) => (props.hidden ? 'hidden' : 'block')};
    white-space: nowrap;
`

const SyntheticTable = styled(Table)`
    grid-template-columns: 50% 50%;

    @media ${device.tabletL} {
        grid-template-columns: 65% 35%;
    }
`
const StyledLinkButton = styled(LinkButton)`
    height: 40px;

    @media ${device.tabletL} {
        padding: 1.5rem 1.6rem;
        height: 40px;
        white-space: nowrap;
        font-size: 12px;
    }

    @media ${device.mobileL} {
        font-size: 10px;
    }
`
const DMT5Synthetic = ({ data }) => {
    const [is_expand, setExpand] = React.useState(false)
    const [is_calculated, setCalculated] = React.useState(false)
    const max_expansion = 4
    const has_expansion = data.assets[0].length > max_expansion

    const toggleCalculated = () => {
        setCalculated(!is_calculated)
    }
    const toggleExpand = () => {
        setExpand(!is_expand)
    }
    return (
        <StyledCard
            height={is_expand && !is_calculated ? '75rem' : '49rem'}
            padding="3.2rem 3.2rem 8.2rem"
            mobileHeight={is_expand && !is_calculated ? '78rem' : '49rem'}
            width="44rem"
        >
            <div>
                {!is_calculated ? (
                    <div>
                        <CardHeader as="h4" type="sub-section-title" mb="0.8rem">
                            {data.name}
                        </CardHeader>
                        <CardText>{data.description}</CardText>
                        <SyntheticTable grid_col_number={data.assets.length} is_balance={true}>
                            {data.assets.map((asset, idx) => (
                                <TC grid_area={`area${idx}`} key={idx}>
                                    {asset.map((item, idxa) => {
                                        if (idxa === 0 && idx === 0) {
                                            return (
                                                <TitleTR isTitle="true" key={idxa}>
                                                    <StyledText weight="bold" lh="2.2">
                                                        {item}
                                                    </StyledText>
                                                </TitleTR>
                                            )
                                        } else if (idxa === 0) {
                                            return (
                                                <TitleTR isTitle="true" key={idxa}>
                                                    <StyledText weight="bold">{item}</StyledText>
                                                </TitleTR>
                                            )
                                        } else if (idxa >= max_expansion) {
                                            return (
                                                <StyledTR key={idxa} hidden={!is_expand}>
                                                    <StyledText>{item}</StyledText>
                                                </StyledTR>
                                            )
                                        } else {
                                            return (
                                                <StyledTR key={idxa}>
                                                    <StyledText>{item}</StyledText>
                                                </StyledTR>
                                            )
                                        }
                                    })}
                                </TC>
                            ))}
                        </SyntheticTable>
                        {has_expansion && (
                            <Flex>
                                <StyledChevron
                                    src={Chevron}
                                    alt="chevron"
                                    onClick={toggleExpand}
                                    is_expand={is_expand.toString()}
                                />
                            </Flex>
                        )}
                        <HowItsCalculate>
                            <StyledButton flat onClick={toggleCalculated}>
                                {localize("How it's calculated")}
                            </StyledButton>
                        </HowItsCalculate>
                    </div>
                ) : (
                    <>
                        <CardHeader as="h4" type="sub-section-title" mb="0.8rem" lh="1.5">
                            {localize('How it’s calculated')}
                        </CardHeader>
                        {data.calculation}
                        <ButtonWrapper>
                            <BackButton tertiary onClick={toggleCalculated}>
                                {localize('Back')}
                            </BackButton>
                            <StyledLinkButton
                                secondary
                                to={affiliate_signup_url}
                                external="true"
                                target="_blank"
                                is_affiliate_link
                            >
                                {localize('Become an affiliate')}
                            </StyledLinkButton>
                        </ButtonWrapper>
                    </>
                )}
            </div>
        </StyledCard>
    )
}
const DMT5Standard = ({ data }) => {
    const [is_calculated, setCalculated] = React.useState(false)
    const toggleCalculated = () => {
        setCalculated(!is_calculated)
    }
    return (
        <StyledCard padding="3.2rem 3.2rem 8.2rem" width="44rem" height="49rem">
            <div>
                {!is_calculated ? (
                    <div>
                        <CardHeader type="sub-section-title" as="h4" mb="0.8rem">
                            {data.name}
                        </CardHeader>
                        <CardText>{data.description}</CardText>
                        <Table grid_col_number={data.assets.length}>
                            {data.assets.map((asset, idx) => (
                                <TC grid_area={`area${idx}`} key={idx}>
                                    {asset.map((item, idxa) => {
                                        if (idxa === 0 && idx === 0) {
                                            return (
                                                <TitleTR isTitle="true" key={idxa}>
                                                    <StyledText
                                                        weight="bold"
                                                        lh="2.2"
                                                        style={item.style}
                                                    >
                                                        {item.title}
                                                    </StyledText>
                                                </TitleTR>
                                            )
                                        } else if (idxa === 0 && typeof item !== 'string') {
                                            return (
                                                <TitleTR isTitle="true" key={idxa}>
                                                    <StyledText weight="bold" style={item.style}>
                                                        {item.title}
                                                    </StyledText>
                                                </TitleTR>
                                            )
                                        } else if (idxa === 0 && typeof item === 'string') {
                                            return (
                                                <TR isTitle="true" key={idxa}>
                                                    <StyledText weight="bold">{item}</StyledText>
                                                </TR>
                                            )
                                        } else {
                                            return (
                                                <StyledTR key={idxa}>
                                                    <StyledText>{item}</StyledText>
                                                </StyledTR>
                                            )
                                        }
                                    })}
                                </TC>
                            ))}
                        </Table>
                        <HowItsCalculate>
                            <StyledButton flat onClick={toggleCalculated}>
                                {localize("How it's calculated")}
                            </StyledButton>
                        </HowItsCalculate>
                    </div>
                ) : (
                    <>
                        <CardHeader as="h4" type="sub-section-title" mb="0.8rem">
                            {localize('How it’s calculated')}
                        </CardHeader>
                        {data.calculation}
                        <ButtonWrapper>
                            <BackButton tertiary onClick={toggleCalculated}>
                                {localize('Back')}
                            </BackButton>
                            <StyledLinkButton
                                secondary
                                to={affiliate_signup_url}
                                external="true"
                                target="_blank"
                                is_affiliate_link
                            >
                                {localize('Become an affiliate')}
                            </StyledLinkButton>
                        </ButtonWrapper>
                    </>
                )}
            </div>
        </StyledCard>
    )
}
const DMT5Advanced = ({ data }) => {
    const [is_calculated, setCalculated] = React.useState(false)
    const toggleCalculated = () => {
        setCalculated(!is_calculated)
    }
    return (
        <StyledCard padding="3.2rem 3.2rem 8.2rem" width="44rem" height="49rem">
            <div>
                {!is_calculated ? (
                    <div>
                        <CardHeader as="h4" type="sub-section-title" mb="0.8rem">
                            {data.name}
                        </CardHeader>
                        <CardText>{data.description}</CardText>
                        <Table grid_col_number={data.assets.length}>
                            {data.assets.map((asset, idx) => (
                                <TC grid_area={`area${idx}`} key={idx}>
                                    {asset.map((item, idxa) => {
                                        if (idxa === 0 && idx === 0) {
                                            return (
                                                <TitleTR isTitle="true" key={idxa}>
                                                    <StyledText
                                                        key={idxa}
                                                        weight="bold"
                                                        lh="2.2"
                                                        style={item.style}
                                                    >
                                                        {item.title}
                                                    </StyledText>
                                                </TitleTR>
                                            )
                                        } else if (idxa === 0 && typeof item !== 'string') {
                                            return (
                                                <TitleTR isTitle="true" key={idxa}>
                                                    <StyledText weight="bold" style={item.style}>
                                                        {item.title}
                                                    </StyledText>
                                                </TitleTR>
                                            )
                                        } else if (idxa === 0 && typeof item === 'string') {
                                            return (
                                                <TR isTitle="true" key={idxa}>
                                                    <StyledText weight="bold">{item}</StyledText>
                                                </TR>
                                            )
                                        } else {
                                            return (
                                                <StyledTR key={idxa}>
                                                    <StyledText>{item}</StyledText>
                                                </StyledTR>
                                            )
                                        }
                                    })}
                                </TC>
                            ))}
                        </Table>
                        <HowItsCalculate>
                            <StyledButton flat onClick={toggleCalculated}>
                                {localize("How it's calculated")}
                            </StyledButton>
                        </HowItsCalculate>
                    </div>
                ) : (
                    <>
                        <CardHeader as="h4" type="sub-section-title" mb="0.8rem">
                            {localize('How it’s calculated')}
                        </CardHeader>
                        {data.calculation}
                        <ButtonWrapper>
                            <BackButton tertiary onClick={toggleCalculated}>
                                {localize('Back')}
                            </BackButton>
                            <StyledLinkButton
                                secondary
                                to={affiliate_signup_url}
                                external="true"
                                target="_blank"
                                is_affiliate_link
                            >
                                {localize('Become an affiliate')}
                            </StyledLinkButton>
                        </ButtonWrapper>
                    </>
                )}
            </div>
        </StyledCard>
    )
}
const ib_dmt5_standard = {
    name: <Localize translate_text="DMT5 Financial" />,
    description: (
        <Localize translate_text="Earn when your clients trade on a DMT5 Standard account." />
    ),
    assets: [
        [
            { title: <Localize translate_text="Asset" />, style: { minWidth: '13rem' } },
            <Localize key={0} translate_text="Forex and metals" />,
            <Localize key={1} translate_text="Cryptocurrencies" />,
        ],
        [
            {
                title: <Localize translate_text="Commission per round trade" />,
                style: { maxWidth: '16rem' },
            },
            <Localize key={0} translate_text="10 per lot" />,
            <Localize key={1} translate_text="0.3% per lot" />,
        ],
    ],
    calculation: (
        <>
            <CardText>
                <Localize translate_text="For forex and metal assets, your commission is represented in the base currency. For example, a round trade (i.e. opening and closing a position) of 1 lot of EUR/USD will pay out EUR 10 in commission. A round trade of 1 lot of USD/CAD will pay out USD 10 in commission." />
            </CardText>
            <CardText mt="2rem">
                <Localize translate_text="For cryptocurrency assets, a round trade of 1 lot of BTC/USD with a spot price of USD 10,000 will pay out USD 30 in commission." />
            </CardText>
        </>
    ),
}
const ib_dmt5_advanced = {
    name: <Localize translate_text="DMT5 Financial STP" />,
    description: (
        <Localize translate_text="Earn when your clients trade on a DMT5 Advanced account." />
    ),
    type: [
        {
            title: <Localize translate_text="Forex and metals" />,
            headerHeight: '8.0rem',
            assets: [
                {
                    title: <Localize key={0} translate_text="Asset" />,
                    list: [
                        <Localize key={1} translate_text="Forex" />,
                        <Localize key={2} translate_text="Metals" />,
                    ],
                },
                {
                    title: (
                        <Localize
                            key={0}
                            translate_text="Commission per lot (1 standard forex lot is 100k units)"
                        />
                    ),
                    list: [
                        <Localize key={1} translate_text="5" />,
                        <Localize key={2} translate_text="5" />,
                    ],
                },
            ],
        },
        {
            title: <Localize translate_text="Stock indices" />,
            headerHeight: '6.4rem',
            assets: [
                {
                    title: <Localize key={0} translate_text="Asset" />,
                    list: [
                        <Localize key={1} translate_text="Stock indices" />,
                        <Localize key={2} translate_text="Stocks" />,
                    ],
                },
                {
                    title: <Localize key={0} translate_text="Commission per USD 100k turnover" />,
                    list: [
                        <Localize key={1} translate_text="USD 1" />,
                        <Localize key={2} translate_text="USD 10" />,
                    ],
                },
            ],
        },
        {
            title: <Localize translate_text="Cryptocurrencies" />,
            headerHeight: '6.4rem',
            assets: [
                {
                    title: <Localize key={0} translate_text="Asset" />,
                    list: [
                        <Localize key={1} translate_text="BTC/USD" />,
                        <Localize key={2} translate_text="ETH/USD" />,
                        <Localize key={3} translate_text="LTC/USD" />,
                        <Localize key={4} translate_text="BCH/USD" />,
                        <Localize key={5} translate_text="XRP/USD" />,
                        <Localize key={6} translate_text="DSH/USD" />,
                        <Localize key={7} translate_text="EOS/USD" />,
                        <Localize key={8} translate_text="ZEC/USD" />,
                        <Localize key={9} translate_text="XMR/USD" />,
                        <Localize key={10} translate_text="BNB/USD" />,
                        <Localize key={11} translate_text="IOT/USD" />,
                        <Localize key={12} translate_text="NEO/USD" />,
                        <Localize key={13} translate_text="OMG/USD" />,
                        <Localize key={14} translate_text="TRX/USD" />,
                        <Localize key={15} translate_text="XLM/USD" />,
                        <Localize key={16} translate_text="BTC/ETH" />,
                        <Localize key={17} translate_text="BTC/LTC" />,
                    ],
                },
                {
                    title: <Localize key={0} translate_text="Commission per USD 100k turnover" />,
                    list: [
                        <Localize key={1} translate_text="20" />,
                        <Localize key={2} translate_text="20" />,
                        <Localize key={3} translate_text="25" />,
                        <Localize key={4} translate_text="25" />,
                        <Localize key={5} translate_text="25" />,
                        <Localize key={6} translate_text="250" />,
                        <Localize key={7} translate_text="250" />,
                        <Localize key={8} translate_text="250" />,
                        <Localize key={9} translate_text="250" />,
                        <Localize key={10} translate_text="25" />,
                        <Localize key={11} translate_text="150" />,
                        <Localize key={12} translate_text="150" />,
                        <Localize key={13} translate_text="150" />,
                        <Localize key={14} translate_text="25" />,
                        <Localize key={15} translate_text="25" />,
                        <Localize key={16} translate_text="20" />,
                        <Localize key={17} translate_text="20" />,
                    ],
                },
            ],
        },
    ],
    countDetails: [
        {
            title: <Localize translate_text="How it’s calculated" />,
            list: [
                {
                    details: (
                        <Localize translate_text="For forex, a deal for 1 lot of EUR/USD will pay out EUR 5 in commission based on the following formula:" />
                    ),
                    icon: 'dmt5_financial_calculator_one',
                    iconAlt: <Localize translate_text="DMT5 Financial calculated first" />,
                },
                {
                    details: (
                        <Localize translate_text="For cryptocurrency assets, a deal for 1 lot of BTC/USD (with a BTC to USD exchange rate of USD 50,000) will pay out USD 20 in commission based on the following formula:" />
                    ),
                    icon: 'dmt5_financial_calculator_two',
                    iconAlt: <Localize translate_text="DMT5 Financial calculated second" />,
                },
            ],
            notes: [
                {
                    title: <Localize translate_text="Please note:" />,
                    desc: {
                        firstText: (
                            <Localize translate_text="For forex, your commission is represented in the base currency (EUR in the above example)." />
                        ),
                        secondText: (
                            <Localize translate_text="Commission payout for all assets will be converted to your deposit currency based on the latest exchange rate." />
                        ),
                    },
                },
            ],
        },
    ],
    calculation: (
        <>
            <CardText>
                <Localize translate_text="For forex assets, your commission is represented in the base currency. For example, a round trade (i.e. opening and closing a position) of 1 lot of EUR/USD will pay out EUR 5 in commission. A round trade of 1 lot of USD/CAD will pay out USD 5 in commission." />
            </CardText>
            <CardText mt="2rem">
                <Localize translate_text="For cryptocurrency assets, a round trade of 1 lot of BTC/USD with a spot price of USD 10,000 will pay out USD 20 in commission." />
            </CardText>
        </>
    ),
}
const ib_dmt5_synthetic = {
    name: <Localize translate_text="DMT5 Synthetic indices" />,
    description: (
        <Localize translate_text="Earn when your clients trade on a DMT5 Synthetic Indices account." />
    ),
    type: [
        {
            title: <Localize translate_text="Forex" />,
            headerHeight: '8.0rem',
            assets: [
                {
                    title: <Localize key={0} translate_text="Asset" />,
                    list: [<Localize key={1} translate_text="Forex" />],
                },
                {
                    title: (
                        <Localize
                            key={0}
                            translate_text="Commission per lot (1 standard lot is 100k units)"
                        />
                    ),
                    list: [<Localize key={1} translate_text="2.5" />],
                },
            ],
        },
        {
            title: <Localize translate_text="Cryptocurrencies" />,
            headerHeight: '6.4rem',
            assets: [
                {
                    title: <Localize key={0} translate_text="Asset" />,
                    list: [
                        <Localize key={1} translate_text="BTC/USD" />,
                        <Localize key={2} translate_text="ETH/USD" />,
                        <Localize key={3} translate_text="LTC/USD" />,
                        <Localize key={4} translate_text="BCH/USD" />,
                        <Localize key={5} translate_text="XRP/USD" />,
                        <Localize key={6} translate_text="DSH/USD" />,
                        <Localize key={7} translate_text="EOS/USD" />,
                        <Localize key={8} translate_text="ZEC/USD" />,
                        <Localize key={9} translate_text="XMR/USD" />,
                        <Localize key={10} translate_text="BNB/USD" />,
                        <Localize key={11} translate_text="IOT/USD" />,
                        <Localize key={12} translate_text="NEO/USD" />,
                        <Localize key={13} translate_text="OMG/USD" />,
                        <Localize key={14} translate_text="TRX/USD" />,
                        <Localize key={15} translate_text="XLM/USD" />,
                        <Localize key={16} translate_text="BTC/ETH" />,
                        <Localize key={17} translate_text="BTC/LTC" />,
                    ],
                },
                {
                    title: <Localize key={0} translate_text="Commission per USD 100k turnover" />,
                    list: [
                        <Localize key={1} translate_text="20" />,
                        <Localize key={2} translate_text="20" />,
                        <Localize key={3} translate_text="25" />,
                        <Localize key={4} translate_text="25" />,
                        <Localize key={5} translate_text="25" />,
                        <Localize key={6} translate_text="250" />,
                        <Localize key={7} translate_text="250" />,
                        <Localize key={8} translate_text="250" />,
                        <Localize key={9} translate_text="250" />,
                        <Localize key={10} translate_text="25" />,
                        <Localize key={11} translate_text="150" />,
                        <Localize key={12} translate_text="150" />,
                        <Localize key={13} translate_text="150" />,
                        <Localize key={14} translate_text="25" />,
                        <Localize key={15} translate_text="25" />,
                        <Localize key={16} translate_text="20" />,
                        <Localize key={17} translate_text="20" />,
                    ],
                },
            ],
        },
    ],
    countDetails: [
        {
            title: <Localize translate_text="How it’s calculated" />,
            list: [
                {
                    details: (
                        <Localize translate_text="For forex, a deal for 1 lot of EUR/USD will pay out EUR 2.5 in commission based on the following formula:" />
                    ),
                    icon: 'dmt5_financial_stp_calculator_one',
                    iconAlt: <Localize translate_text="DMT5 Financial STP calculated first" />,
                },
                {
                    details: (
                        <Localize translate_text="For cryptocurrency assets, a deal for 1 lot of BTC/USD (with a BTC to USD exchange rate of USD 50,000) will pay out USD 20 in commission based on the following formula:" />
                    ),
                    icon: 'dmt5_financial_stp_calculator_two',
                    iconAlt: <Localize translate_text="DMT5 Financial STP calculated second" />,
                },
            ],
            notes: [
                {
                    title: <Localize translate_text="Please note:" />,
                    desc: {
                        firstText: (
                            <Localize translate_text="For forex, your commission is represented in the base currency (EUR in the above example)." />
                        ),
                        secondText: (
                            <Localize translate_text="Commission payout for all assets will be converted to your deposit currency based on the latest exchange rate." />
                        ),
                    },
                },
            ],
        },
    ],
    calculation: (
        <>
            <CardText>
                <Localize translate_text="For example, a round trade of 1 lot of the Volatility 75 Index for a price of USD 125,000 would pay out USD 12.5 in commission based on the following formula:" />
            </CardText>
            <CardText weight="bold" m="1.6rem 0">
                <Localize translate_text="USD 10 X 1 lot X USD 125,000 / 100,000 = USD 12.5" />
            </CardText>
            <CardText>
                <Localize translate_text="If your account currency is in euro or pound sterling, your commission will be converted based on the latest exchange rate." />
            </CardText>
        </>
    ),
}

DMT5Standard.propTypes = {
    data: PropTypes.object,
}
DMT5Synthetic.propTypes = {
    data: PropTypes.object,
}
DMT5Advanced.propTypes = {
    data: PropTypes.object,
}
export default DerivIBProgramme
