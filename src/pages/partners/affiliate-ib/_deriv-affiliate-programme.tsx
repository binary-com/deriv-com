import React from 'react'
import styled from 'styled-components'
import { Card, CardWrapper } from './_partner-card'
import { Table, TRAP, TRAPREVERSE, TC } from './_table'
import { SectionContainer, Container } from 'components/containers'
import { Header, Text } from 'components/elements/typography'
import { localize, Localize } from 'components/localization'
import { LinkButton } from 'components/form'
import { affiliate_signup_url } from 'common/constants'
import device from 'themes/device'
import { TString } from 'types/generics'

type AffiliateType = {
    title: TString
    data: TString[]
}[]

type ApplyNowProps = {
    mt_mobile?: string
    id?: string
}
const StyledSection = styled(SectionContainer)`
    padding-bottom: 0;
    background-color: var(--color-grey-39);
    @media ${device.tabletL} {
        padding: 40px 0;
    }
`

const ContentContainer = styled(Container)`
    @media ${device.tabletL} {
        padding: 0 16px;
        width: 100%;
    }
`

const TitleWrapper = styled.section`
    max-width: 99.6rem;

    h1:first-child {
        margin-bottom: 1.6rem;
    }

    @media ${device.tabletL} {
        ${Header} {
            font-size: 24px;
        }
    }
`

const SubtitleHeader = styled(Header)`
    width: 792px;
    max-width: 792px;
    @media ${device.laptopL} {
        width: 100%;
    }
    @media ${device.tabletL} {
        font-size: 16px !important;
    }
`

const ComissionPlanContainer = styled(SectionContainer)`
    padding: 4rem 0 8rem 0;
    @media ${device.tabletL} {
        padding: 16px 0 0 0;
    }
    @media ${device.mobileM} {
        width: unset;
    }
`

const StyledText = styled(Text)`
    font-size: 1.4rem;
    line-height: 1.5;
    text-align: center;
    @media ${device.tabletL} {
        font-size: 14px;
    }
`

const StyledHeader = styled(Header)`
    @media (max-width: 1524px) {
        text-align: start;
    }
    @media ${device.laptopM} {
        text-align: center;
    }
    @media ${device.mobileM} {
        text-align: start;
        width: 38rem;
    }
`

const ApplyNow = styled(LinkButton)<ApplyNowProps>`
    display: block;
    width: 100%;
    border-radius: 4px;

    @media ${device.tabletL} {
        height: 40px;
        margin-top: ${(props) => props.mt_mobile || '0'};
    }
`

const CPAContent = styled.div`
    ${Text} {
        margin-top: 2.4rem;
    }
`

const StyledCard = styled(Card)`
    min-width: calc((100% - 4.8rem) / 3);
    width: calc((100% - 4.8rem) / 3);
    border-radius: 8px;

    :nth-child(2) {
        margin: 1.6rem 2.8rem 0 2rem;

        @media ${device.tabletL} {
            margin: 20px 0 11px;
        }
    }

    @media (max-width: 1313px) {
        height: 63rem;
    }

    @media ${device.laptopM} {
        min-width: 38.4rem;
        width: 38.4rem;
    }

    @media ${device.tabletL} {
        min-width: unset;
        padding: 24px 16px;
        ${(props) => props.tabletHeight && 'height:' + props.tabletHeight};

        :first-child {
            margin-top: 16px;
        }
        :last-child {
            margin-top: 0;
        }
    }

    @media ${device.mobileM} {
        min-width: unset;
        width: 100%;
    }
`
const StyledTrap = styled(TRAP)`
    background-color: var(--color-grey-39);
    padding: 1rem 0.8rem;
    height: 40px;
    border-bottom: none;
`

const RevenueShare: AffiliateType = [
    {
        title: '_t_Net revenue_t_',
        data: ['_t_≤ USD 20,000 per month_t_', '_t_> USD 20,000 per month_t_'],
    },
    {
        title: '_t_Commission_t_',
        data: ['_t_30%_t_', '_t_45%_t_'],
    },
]
const Turnover: AffiliateType = [
    {
        title: '_t_Probability of return_t_',
        data: [
            '_t_0-19.999%_t_',
            '_t_20-39.999%_t_',
            '_t_40-59.999%_t_',
            '_t_60-79.999%_t_',
            '_t_80-94.999%_t_',
            '_t_95% and above_t_',
        ],
    },
    {
        title: '_t_Commission_t_',
        data: ['_t_1.5%_t_', '_t_1%_t_', '_t_0.75%_t_', '_t_0.5%_t_', '_t_0.4%_t_', '_t_0%_t_'],
    },
]
const DerivAffiliateProgramme = () => {
    return (
        <StyledSection>
            <ContentContainer direction="column">
                <TitleWrapper>
                    <Header size="4.8rem" align="center" as="h3" mb="1.2rem">
                        <Localize translate_text="_t_Deriv Affiliate Programme_t_" />
                    </Header>
                    <SubtitleHeader as="h4" type="sub-section-title" align="center" weight="normal">
                        <Localize translate_text="_t_Partner with us as an affiliate. Earn commission from the total net revenue of your referred clients’ trades on DTrader and DBot._t_" />
                    </SubtitleHeader>
                </TitleWrapper>
                <ComissionPlanContainer>
                    <StyledHeader as="h4" type="main-paragraph">
                        <Localize translate_text="_t_Choose a commission plan:_t_" />
                    </StyledHeader>
                    <CardWrapper>
                        <StyledCard height="69rem" tabletHeight="auto" padding="2.4rem">
                            <div>
                                <Header as="h4" type="sub-section-title" mb="0.8rem">
                                    <Localize translate_text="_t_Revenue share_t_" />
                                </Header>
                                <Text>
                                    <Localize translate_text="_t_Earn based on the monthly net revenue generated by your clients._t_" />
                                </Text>
                                <Table grid_col_number={2}>
                                    {RevenueShare.map(({ title, data }, index) => (
                                        <TC grid_area={'area' + index} key={index}>
                                            <StyledTrap isTitle="true">
                                                <StyledText weight="bold">
                                                    <Localize translate_text={title} />
                                                </StyledText>
                                            </StyledTrap>
                                            {data.map((data, idx) => (
                                                <TRAPREVERSE even={idx % 2 ? 'true' : ''} key={idx}>
                                                    <StyledText>
                                                        <Localize translate_text={data} />
                                                    </StyledText>
                                                </TRAPREVERSE>
                                            ))}
                                        </TC>
                                    ))}
                                </Table>
                            </div>
                            <div>
                                <ApplyNow
                                    id="dm-card-affiliate-signup-1"
                                    secondary
                                    to={affiliate_signup_url}
                                    external
                                    target="_blank"
                                    type="affiliate_sign_up"
                                    mt_mobile="40px"
                                >
                                    <Localize translate_text="_t_Sign up_t_" />
                                </ApplyNow>
                            </div>
                        </StyledCard>
                        <StyledCard height="69rem" tabletHeight="auto" padding="2.4rem">
                            <div>
                                <Header as="h4" type="sub-section-title" mb="0.8rem">
                                    <Localize translate_text="_t_Turnover_t_" />
                                </Header>
                                <Text>
                                    <Localize
                                        translate_text="_t_<0>Options:</0> Earn based on each contract’s payout probability._t_"
                                        components={[<strong key={0} />]}
                                    />
                                </Text>
                                <Table grid_col_number={2}>
                                    {Turnover.map(({ title, data }, index) => (
                                        <TC grid_area={'area' + index} key={index}>
                                            <StyledTrap isTitle="true">
                                                <StyledText weight="bold">
                                                    <Localize translate_text={title} />
                                                </StyledText>
                                            </StyledTrap>
                                            {data.map((data, id) => (
                                                <TRAPREVERSE even={id % 2 ? 'true' : ''} key={id}>
                                                    <StyledText>
                                                        <Localize translate_text={data} />
                                                    </StyledText>
                                                </TRAPREVERSE>
                                            ))}
                                        </TC>
                                    ))}
                                </Table>
                                <Text mt="2.4rem">
                                    <Localize
                                        translate_text="_t_<0>Multipliers:</0> Earn 40% of the commissions generated from your clients’ trades._t_"
                                        components={[<strong key={0} />]}
                                    />
                                </Text>
                                <Text mt="2.4rem">
                                    <Localize
                                        translate_text="_t_<0>Lookbacks:</0> Earn 0.8% on the stake of each lookbacks trade on SmartTrader._t_"
                                        components={[<strong key={0} />]}
                                    />
                                </Text>
                            </div>
                            <div>
                                <ApplyNow
                                    id="dm-card-affiliate-signup-2"
                                    secondary
                                    to={affiliate_signup_url}
                                    external
                                    target="_blank"
                                    type="affiliate_sign_up"
                                    mt_mobile="24px"
                                >
                                    <Localize translate_text="_t_Sign up_t_" />
                                </ApplyNow>
                            </div>
                        </StyledCard>
                        <StyledCard height="69rem" tabletHeight="auto" padding="2.4rem">
                            <div>
                                <Header as="h4" type="sub-section-title" mb="0.8rem">
                                    <Localize translate_text="_t_CPA (EU only)_t_" />
                                </Header>
                                <Text>
                                    <Localize translate_text="_t_Earn based on each successful referral._t_" />
                                </Text>
                                <CPAContent>
                                    <Text>
                                        <Localize
                                            translate_text="_t_You earn <0>USD 100</0> when a referred client successfully deposits a one-time or cumulative total of <0>USD 100</0> into their Deriv account._t_"
                                            components={[<strong key={0} />]}
                                        />
                                    </Text>
                                    <Text>
                                        <Localize
                                            translate_text="_t_This plan is available exclusively for EU-based clients. <0>Please note that according to regulations, you cannot have clients who reside in Portugal or Spain.</0>_t_"
                                            components={[<strong key={0} />]}
                                        />
                                    </Text>
                                </CPAContent>
                            </div>
                            <div>
                                <ApplyNow
                                    id="dm-card-affiliate-signup-3"
                                    secondary
                                    to={affiliate_signup_url}
                                    external
                                    target="_blank"
                                    type="affiliate_sign_up"
                                    mt_mobile="32px"
                                >
                                    <Localize translate_text="_t_Sign up_t_" />
                                </ApplyNow>
                            </div>
                        </StyledCard>
                    </CardWrapper>
                </ComissionPlanContainer>
            </ContentContainer>
        </StyledSection>
    )
}

export default DerivAffiliateProgramme
