import React from 'react'
import styled from 'styled-components'
import SEO from 'components/containers/seo'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import Hero from 'components/elements/hero'
import Container from 'components/containers/container'
import { Header, Text } from 'components/elements/typography'
import { CardStyle } from 'components/elements/card'
import { Divider } from 'components/elements/divider'

// import svgs
import Demo from 'images/svg/demo-icon.svg'
import HandMoney from 'images/svg/hand-money-icon.svg'
import BorrowMoney from 'images/svg/borrow-money-icon.svg'
import Limit from 'images/svg/limit-icon.svg'
import AvoidTrading from 'images/svg/avoid-trading-icon.svg'
import PortionWinning from 'images/svg/portion-winning-icon.svg'
import ChecklistLogo from 'images/svg/checklist.svg'

const GeneralWrapper = styled.section`
    background: var(--color-white);
    width: 100%;
`

const StyledContainer = styled(Container)`
    flex-direction: column;
    padding: 8rem 0;
`

const StyledText = styled(Text)`
    margin: 0.8rem 0;
`

const CheckText = styled(StyledText)`
    margin-left: 2rem;
`

const FlexWrapper = styled(Container)`
    flex-wrap: wrap;
    align-items: stretch;
    align-content: stretch;
    justify-content: space-between;
    min-width: 100%;
`

const LimitsWrapper = styled(FlexWrapper)`
    padding: 4rem 0;
`

const StyledArticle = styled.article`
    flex-shrink: 0;
    width: 31%;
    margin: 2rem 1rem;
`

const StyledLimits = styled.article`
    flex-shrink: 0;
    width: 48%;
    margin: 1rem 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const OtherWarningWrapper = styled(GeneralWrapper)`
    background: var(--color-grey-1);
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

const ResponsibleTrading = () => (
    <Layout>
        <SEO title={localize('Responsible trading')} />
        <Hero
            header={localize('Responsible trading')}
            paragraph={localize(
                'Online trading is exciting, but it is a risky activity and can turn into an addiction. Here are some guidelines to help you manage online trading risks.',
            )}
        />
        <GeneralWrapper>
            <StyledContainer>
                <FlexWrapper>
                    <StyledArticle>
                        <Demo />
                        <StyledText>
                            {localize(
                                'Hone your skill with a free demo account.',
                            )}
                        </StyledText>
                    </StyledArticle>
                    <StyledArticle>
                        <HandMoney />
                        <StyledText>
                            {localize(
                                'Only trade with money you can afford to lose.',
                            )}
                        </StyledText>
                    </StyledArticle>
                    <StyledArticle>
                        <BorrowMoney />
                        <StyledText>
                            {localize('Do not trade with borrowed money.')}
                        </StyledText>
                    </StyledArticle>
                    <StyledArticle>
                        <Limit />
                        <StyledText>
                            {localize(
                                'Set a limit for your losses and stick to it.',
                            )}
                        </StyledText>
                    </StyledArticle>
                    <StyledArticle>
                        <AvoidTrading />
                        <StyledText>
                            {localize(
                                'Avoid trading when you’re prone to bad judgement.',
                            )}
                        </StyledText>
                    </StyledArticle>
                    <StyledArticle>
                        <PortionWinning />
                        <StyledText>
                            {localize(
                                'Put aside a portion of your winnings to avoid losing it all.',
                            )}
                        </StyledText>
                    </StyledArticle>
                </FlexWrapper>
                <hr />
            </StyledContainer>
        </GeneralWrapper>
        <Divider />
        <GeneralWrapper>
            <StyledContainer>
                <Header as="h2" align="center">
                    {localize('Written limits and self-exclusion')}
                </Header>
                <MarginHeader as="h4" weight="normal" align="center">
                    {localize(
                        'With Deriv, you have the option to implement limits on your trading activities.',
                    )}
                </MarginHeader>
                <LimitsWrapper>
                    <StyledLimits>
                        <ChecklistLogo />
                        <CheckText>
                            {localize('Limit the amount of money you trade')}
                        </CheckText>
                    </StyledLimits>
                    <StyledLimits>
                        <ChecklistLogo />
                        <CheckText>
                            {localize(
                                'Limit the amount of time you spend trading',
                            )}
                        </CheckText>
                    </StyledLimits>
                    <StyledLimits>
                        <ChecklistLogo />
                        <CheckText>
                            {localize('Limit the losses you might incur')}
                        </CheckText>
                    </StyledLimits>
                    <StyledLimits>
                        <ChecklistLogo />
                        <CheckText>
                            {localize(
                                'Block yourself from trading on our website',
                            )}
                        </CheckText>
                    </StyledLimits>
                </LimitsWrapper>
            </StyledContainer>
        </GeneralWrapper>
        <OtherWarningWrapper>
            <StyledContainer>
                <Header as="h2" align="center">
                    {localize('Other warnings and regulatory disclosures')}
                </Header>
                <StyledCard>
                    <Text>
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
