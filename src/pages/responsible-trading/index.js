import React from 'react'
import styled from 'styled-components'
import Show from 'components/containers/show'
import SEO from 'components/containers/seo'
import device from 'themes/device'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import Hero from 'components/elements/hero'
import Container, {
    SectionContainer,
    FlexGridContainer,
} from 'components/containers/container'
import { Header, Text } from 'components/elements/typography'
import { CardStyle } from 'components/elements/card'
import { Divider } from 'components/elements/divider'
// Icons
import Demo from 'images/svg/demo-icon.svg'
import HandMoney from 'images/svg/hand-money-icon.svg'
import BorrowMoney from 'images/svg/borrow-money-icon.svg'
import Limit from 'images/svg/limit-icon.svg'
import AvoidTrading from 'images/svg/avoid-trading-icon.svg'
import PortionWinning from 'images/svg/portion-winning-icon.svg'
import ChecklistLogo from 'images/svg/checklist.svg'

const StyledContainer = styled(Container)`
    flex-direction: column;
    ${FlexGridContainer} {
        width: 100%;
    }
`

const StyledText = styled(Text)`
    margin: 0.8rem 0;
`

const CheckText = styled(StyledText)`
    margin-left: 2rem;
`

const StyledLimits = styled.article`
    flex-shrink: 0;
    width: 48%;
    margin: 1rem 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const OtherWarningWrapper = styled(SectionContainer)`
    background: var(--color-grey-1);
`
const MarginWrapper = styled(FlexGridContainer)`
    margin-top: 4rem;

    @media ${device.tabletL} {
        article {
            width: 100%;
        }
    }
`

const StyledCard = styled.article`
    ${CardStyle}
    width: 100%;
    margin: 4rem;
    padding: 4rem;
`

const MarginHeader = styled(Header)`
    margin-top: 1rem;
`
const GuidlineGridContainer = styled.div`
    width: 100%;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 3rem;
    grid-template-areas:
        'demo hand_money borrow_money'
        'limit avoid_trading portion_winning';
    @media ${device.tabletL} {
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        grid-template-areas:
            'portion_winning hand_money'
            'limit demo'
            'avoid_trading borrow_money';
    }
`
const GuidItem = styled.article`
    grid-area: ${props => props.grid_name};

    @media ${device.tabletL} {
        p {
            font-size: 2rem;
        }
    }
`
const HeroWrapper = styled.div`
    @media ${device.tabletL} {
        div {
            padding: 11rem 0 2.7rem 0;
        }
        h4 {
            font-size: 2rem;
            line-height: 1.65;
            padding-right: 0.1rem;
        }
        h1 {
            line-height: 1.1;
        }
    }
`

const ResponsibleSectionContainer = styled(SectionContainer)`
    @media ${device.tabletL} {
        padding: 3.55rem 0;
    }
`
const LimitsHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 4rem;
    }
`
const ResponsibleTrading = () => (
    <Layout>
        <SEO
            title={localize('Responsible trading')}
            description={localize(
                'Practise responsible trading by understanding the risks involved and how you can manage them by setting limits on your trading activity.',
            )}
        />
        <HeroWrapper>
            <Hero
                header={localize('Responsible trading')}
                paragraph={localize(
                    'Online trading is exciting, but it is a risky activity and can turn into an addiction. Here are some guidelines to help you manage online trading risks.',
                )}
                mobile_text_align="left"
            />
        </HeroWrapper>
        <ResponsibleSectionContainer>
            <StyledContainer>
                <FlexGridContainer content_width="32.8rem" gap="0.6rem">
                    <GuidlineGridContainer>
                        <GuidItem grid_name="demo">
                            <Demo />
                            <StyledText>
                                {localize(
                                    'Hone your skill with a free demo account.',
                                )}
                            </StyledText>
                        </GuidItem>
                        <GuidItem grid_name="hand_money">
                            <HandMoney />
                            <StyledText>
                                {localize(
                                    'Only trade with money you can afford to lose.',
                                )}
                            </StyledText>
                        </GuidItem>
                        <GuidItem grid_name="borrow_money">
                            <BorrowMoney />
                            <StyledText>
                                {localize('Do not trade with borrowed money.')}
                            </StyledText>
                        </GuidItem>
                        <GuidItem grid_name="limit">
                            <Limit />
                            <StyledText>
                                {localize(
                                    'Set a limit for your losses and stick to it.',
                                )}
                            </StyledText>
                        </GuidItem>
                        <GuidItem grid_name="avoid_trading">
                            <AvoidTrading />
                            <StyledText>
                                {localize(
                                    'Avoid trading when you’re prone to bad judgement.',
                                )}
                            </StyledText>
                        </GuidItem>
                        <GuidItem grid_name="portion_winning">
                            <PortionWinning />
                            <StyledText>
                                {localize(
                                    'Put aside a portion of your winnings to avoid losing it all.',
                                )}
                            </StyledText>
                        </GuidItem>
                    </GuidlineGridContainer>
                </FlexGridContainer>
                <hr />
            </StyledContainer>
        </ResponsibleSectionContainer>
        <Divider />
        <ResponsibleSectionContainer>
            <StyledContainer>
                <LimitsHeader as="h2" align="center" mobile_text_align="left">
                    {localize('Written limits and self-exclusion')}
                </LimitsHeader>
                <Show>
                    <MarginHeader as="h4" weight="500" align="center">
                        {localize(
                            'With Deriv, you have the option to implement limits on your trading activities.',
                        )}
                    </MarginHeader>
                </Show>
                <Show>
                    <MarginHeader
                        as="h4"
                        weight="500"
                        align="center"
                    >
                        {localize(
                            'With Deriv, you have the option to implement limits on your trading activities.',
                        )}
                    </MarginHeader>
                </Show>
                <MarginWrapper content_width="48rem" gap="1rem">
                    <StyledLimits>
                        <ChecklistLogo />
                        <CheckText secondary>
                            {localize('Limit the amount of money you trade')}
                        </CheckText>
                    </StyledLimits>
                    <StyledLimits>
                        <ChecklistLogo />
                        <CheckText secondary>
                            {localize(
                                'Limit the amount of time you spend trading',
                            )}
                        </CheckText>
                    </StyledLimits>
                    <StyledLimits>
                        <ChecklistLogo />
                        <CheckText secondary>
                            {localize('Limit the losses you might incur')}
                        </CheckText>
                    </StyledLimits>
                    <StyledLimits>
                        <ChecklistLogo />
                        <CheckText secondary>
                            {localize(
                                'Block yourself from trading on our website',
                            )}
                        </CheckText>
                    </StyledLimits>
                </MarginWrapper>
            </StyledContainer>
        </ResponsibleSectionContainer>
        <OtherWarningWrapper>
            <StyledContainer>
                <Header as="h2" align="center">
                    {localize('Other warnings and regulatory disclosures')}
                </Header>
                <StyledCard>
                    <Text secondary>
                        {localize(
                            'Online trading can incur losses as well as gains. Prices will vary due to changes in the market, and may impact your investment. Our products fall under the category of ‘complex products’ and may not be suitable for retail clients.',
                        )}
                    </Text>
                </StyledCard>
            </StyledContainer>
        </OtherWarningWrapper>
    </Layout>
)

export default WithIntl()(ResponsibleTrading)
