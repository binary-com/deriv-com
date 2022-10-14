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

type AffiliateType = {
    title: React.ReactElement
    data: React.ReactElement[]
}[]

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
        text-align: left;
    }
    @media ${device.laptopM} {
        text-align: center;
    }
    @media ${device.mobileM} {
        text-align: left;
        width: 38rem;
    }
`

const ApplyNow = styled(LinkButton)`
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
        height: 59rem;
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
        title: <Localize translate_text="Net revenue" />,
        data: [
            <Localize key={0} translate_text="≤ USD 20,000 per month" />,
            <Localize key={1} translate_text="> USD 20,000 per month" />,
        ],
    },
    {
        title: <Localize translate_text="Commission" />,
        data: [
            <Localize key={0} translate_text="30%" />,
            <Localize key={1} translate_text="45%" />,
        ],
    },
]
const Turnover: AffiliateType = [
    {
        title: <Localize translate_text="Probability of return" />,
        data: [
            <Localize key={0} translate_text="0-19.999%" />,
            <Localize key={1} translate_text="20-39.999%" />,
            <Localize key={2} translate_text="40-59.999%" />,
            <Localize key={3} translate_text="60-79.999%" />,
            <Localize key={4} translate_text="80-94.999%" />,
            <Localize key={5} translate_text="95% and above" />,
        ],
    },
    {
        title: <Localize translate_text="Commission" />,
        data: [
            <Localize key={0} translate_text="1.5%" />,
            <Localize key={1} translate_text="1%" />,
            <Localize key={2} translate_text="0.75%" />,
            <Localize key={3} translate_text="0.5%" />,
            <Localize key={4} translate_text="0.4%" />,
            <Localize key={5} translate_text="0%" />,
        ],
    },
]
const DerivAffiliateProgramme = () => {
    return (
        <StyledSection>
            <ContentContainer direction="column">
                <TitleWrapper>
                    <Header size="4.8rem" align="center" as="h3" mb="1.2rem">
                        {localize('Deriv Affiliate Programme')}
                    </Header>
                    <SubtitleHeader as="h4" type="sub-section-title" align="center" weight="normal">
                        {localize(
                            'Partner with us as an affiliate. Earn commission from the total net revenue of your referred clients’ trades on DTrader and DBot.',
                        )}
                    </SubtitleHeader>
                </TitleWrapper>
                <ComissionPlanContainer>
                    <StyledHeader as="h4" type="main-paragraph">
                        {localize('Choose a commission plan:')}
                    </StyledHeader>
                    <CardWrapper>
                        <StyledCard height="57.0rem" tabletHeight="auto" padding="2.4rem">
                            <div>
                                <Header as="h4" type="sub-section-title" mb="0.8rem">
                                    {localize('Revenue share')}
                                </Header>
                                <Text>
                                    {localize(
                                        'Earn based on the monthly net revenue generated by your clients.',
                                    )}
                                </Text>
                                <Table grid_col_number={2}>
                                    {RevenueShare.map((col, index) => (
                                        <TC grid_area={'area' + index} key={index}>
                                            <StyledTrap isTitle="true">
                                                <StyledText weight="bold">{col.title}</StyledText>
                                            </StyledTrap>
                                            {col.data.map((data, idx) => (
                                                <TRAPREVERSE even={idx % 2 ? 'true' : ''} key={idx}>
                                                    <StyledText>{data}</StyledText>
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
                                    {localize('Sign up')}
                                </ApplyNow>
                            </div>
                        </StyledCard>
                        <StyledCard height="57.0rem" tabletHeight="auto" padding="2.4rem">
                            <div>
                                <Header as="h4" type="sub-section-title" mb="0.8rem">
                                    {localize('Turnover')}
                                </Header>
                                <Text>
                                    <Localize
                                        translate_text="<0>Options:</0> Earn based on each contract’s payout probability."
                                        components={[<strong key={0} />]}
                                    />
                                </Text>
                                <Table grid_col_number={2}>
                                    {Turnover.map((col, index) => (
                                        <TC grid_area={'area' + index} key={index}>
                                            <StyledTrap isTitle="true">
                                                <StyledText weight="bold">{col.title}</StyledText>
                                            </StyledTrap>
                                            {col.data.map((data, id) => (
                                                <TRAPREVERSE even={id % 2 ? 'true' : ''} key={id}>
                                                    <StyledText>{data}</StyledText>
                                                </TRAPREVERSE>
                                            ))}
                                        </TC>
                                    ))}
                                </Table>
                                <Text mt="2.4rem">
                                    <Localize
                                        translate_text="<0>Multipliers:</0> Earn 40% of the commissions generated from your clients’ trades."
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
                                    {localize('Sign up')}
                                </ApplyNow>
                            </div>
                        </StyledCard>
                        <StyledCard height="57.0rem" tabletHeight="auto" padding="2.4rem">
                            <div>
                                <Header as="h4" type="sub-section-title" mb="0.8rem">
                                    {localize('CPA (EU only)')}
                                </Header>
                                <Text>{localize('Earn based on each successful referral.')}</Text>
                                <CPAContent>
                                    <Text>
                                        <Localize
                                            translate_text="You earn <0>USD 100</0> when a referred client successfully deposits a one-time or cumulative total of <0>USD 100</0> into their Deriv account."
                                            components={[<strong key={0} />]}
                                        />
                                    </Text>
                                    <Text>
                                        <Localize
                                            translate_text="This plan is available exclusively for EU-based clients. <0>Please note that according to regulations, you cannot have clients who reside in Portugal or Spain.</0>"
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
                                    {localize('Sign up')}
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
