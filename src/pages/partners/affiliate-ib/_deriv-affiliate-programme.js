import React from 'react'
import styled from 'styled-components'
import { Card, CardWrapper } from './_partner-card.js'
import { Table, TRAP, TC } from './_table.js'
import { SectionContainer, Container } from 'components/containers'
import { Header, Text } from 'components/elements/typography'
import { localize, Localize } from 'components/localization'
import { LinkButton } from 'components/form'
import { affiliate_signup_url } from 'common/utility'
import device from 'themes/device'

const StyledSection = styled(SectionContainer)`
    padding-bottom: 0;
    background-color: var(--color-grey-31);
    @media ${device.tabletL} {
        padding: 40px 0;
    }
`

const ContentContainer = styled(Container)`
    @media ${device.tabletL} {
        padding: 0;
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
    line-height: 1.15;
    @media ${device.tabletL} {
        font-size: 14px;
    }
`

const StyledTextHeading = styled(StyledText)`
    @media ${device.tabletL} {
        font-size: 14px;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.desktopL} {
        text-align: center;
    }

    @media (max-width: 1524px) {
        text-align: center;
    }

    @media ${device.mobileM} {
        text-align: left;
        width: 38rem;
    }
`

const CardHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 16px;
    }
`

const CardText = styled(Text)`
    @media ${device.tabletL} {
        font-size: 16px;
    }
`

const ApplyNow = styled(LinkButton)`
    display: block;
    width: 100%;
    border-radius: 4px;

    @media ${device.tabletL} {
        font-size: 14px;
        margin-bottom: 16px;
        height: 40px;
    }
`

const CPAContent = styled.div`
    ${Text} {
        margin-top: 2.4rem;
    }
`

const StyledCard = styled(Card)`
    border-radius: 8px;

    :nth-child(2) {
        margin: 1.6rem 2.4rem 0;

        @media ${device.tabletL} {
            margin: 24px 0;
        }
    }

    @media ${device.tabletL} {
        min-width: 328px;
        padding: 16px;
        height: ${(props) => (props.tabletHeight ? props.tabletHeight : '')};
    }

    @media ${device.mobileM} {
        min-width: unset;

        p {
            font-size: 12px;
        }
    }
`

const RevenueShare = [
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
const Turnover = [
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
                        <StyledCard height="52.9rem" tabletHeight="348px">
                            <div>
                                <CardHeader as="h4" type="sub-section-title" mb="0.8rem">
                                    {localize('Revenue share')}
                                </CardHeader>
                                <CardText>
                                    {localize(
                                        'Earn based on the monthly net revenue generated by your clients.',
                                    )}
                                </CardText>
                                <Table grid_col_number={2}>
                                    {RevenueShare.map((col, index) => (
                                        <TC grid_area={'area' + index} key={index}>
                                            <TRAP isTitle="true">
                                                <StyledTextHeading weight="bold">
                                                    {col.title}
                                                </StyledTextHeading>
                                            </TRAP>
                                            {col.data.map((data, index) => (
                                                <TRAP key={index}>
                                                    <StyledText>{data}</StyledText>
                                                </TRAP>
                                            ))}
                                        </TC>
                                    ))}
                                </Table>
                            </div>
                            <div>
                                <ApplyNow
                                    secondary
                                    to={affiliate_signup_url}
                                    external="true"
                                    target="_blank"
                                    is_affiliate_link
                                >
                                    {localize('Sign up')}
                                </ApplyNow>
                            </div>
                        </StyledCard>
                        <StyledCard height="52.9rem" tabletHeight="596px">
                            <div>
                                <CardHeader as="h4" type="sub-section-title" mb="0.8rem">
                                    {localize('Turnover')}
                                </CardHeader>
                                <CardText>
                                    <Localize
                                        translate_text="<0>Options:</0> Earn based on each contract’s payout probability."
                                        components={[<strong key={0} />]}
                                    />
                                </CardText>
                                <Table grid_col_number={2}>
                                    {Turnover.map((col, index) => (
                                        <TC grid_area={'area' + index} key={index}>
                                            <TRAP isTitle="true">
                                                <StyledText weight="bold">
                                                    {localize(col.title)}
                                                </StyledText>
                                            </TRAP>
                                            {col.data.map((data, index) => (
                                                <TRAP key={index}>
                                                    <StyledText>{localize(data)}</StyledText>
                                                </TRAP>
                                            ))}
                                        </TC>
                                    ))}
                                </Table>
                                <CardText mt="3.2rem">
                                    <Localize
                                        translate_text="<0>Multipliers:</0> Earn 40% of the commissions generated from your clients’ trades."
                                        components={[<strong key={0} />]}
                                    />
                                </CardText>
                            </div>
                            <div>
                                <ApplyNow
                                    secondary
                                    to={affiliate_signup_url}
                                    external="true"
                                    target="_blank"
                                    is_affiliate_link
                                >
                                    {localize('Sign up')}
                                </ApplyNow>
                            </div>
                        </StyledCard>
                        <StyledCard height="52.9rem">
                            <div>
                                <CardHeader as="h4" type="sub-section-title" mb="0.8rem">
                                    {localize('CPA (EU only)')}
                                </CardHeader>
                                <CardText>
                                    {localize('Earn based on each successful referral.')}
                                </CardText>
                                <CPAContent>
                                    <CardText>
                                        <Localize
                                            translate_text="You earn <0>USD 100</0> when a referred client successfully deposits a one-time or cumulative total of <0>USD 100</0> into their Deriv account."
                                            components={[<strong key={0} />]}
                                        />
                                    </CardText>
                                    <CardText>
                                        <Localize
                                            translate_text="This plan is available exclusively for EU-based clients."
                                            components={[<strong key={0} />]}
                                        />
                                    </CardText>
                                </CPAContent>
                            </div>
                            <div>
                                <ApplyNow
                                    secondary
                                    to={affiliate_signup_url}
                                    external="true"
                                    target="_blank"
                                    is_affiliate_link
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
