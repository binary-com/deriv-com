import React from 'react'
import styled from 'styled-components'
import {
    StyledSection,
    SectionWrapper,
    CenteredSection,
    Col,
    Wrapper,
    Content,
    Separator,
    StyledHeader,
    SecondaryHeader,
} from '../affiliate-ib/_who-can-apply'
import { Flex } from 'components/containers'
import { localize } from 'components/localization'
import { Header, Text, Timeline } from 'components/elements'
import { LinkButton } from 'components/form'
import TradingExperts from 'images/svg/trading-experts.svg'
import Affiliates from 'images/svg/affiliates.svg'
import CommunityManagers from 'images/svg/community-managers.svg'
import Login from 'images/svg/open-account.svg'
import Cashier from 'images/svg/pa-cashier.svg'
import ApplicationForm from 'images/svg/pa-app-form.svg'
import PaymentMethod from 'images/svg/pa-payment-methods.svg'
import Listed from 'images/svg/pa-listed.svg'
import device from 'themes/device'

const HeaderHowToApply = styled(SecondaryHeader)`
    @media ${device.tablet} {
        margin-top: 3.2rem;
        margin-left: -4.6rem;
    }
`
const HowToApply = styled(Col)`
    max-width: 46.2rem;
    @media ${device.laptop} {
        padding-left: 4rem;
    }
`
const HowToApplyContent = styled.div`
    margin-top: 0;
    display: flex;
`

const ImageWrapper = styled.img`
    margin-right: 1.6rem;
    width: 48px;
    height: 48px;
`

const LineSeparator = styled(Separator)`
    height: 600px;
    margin: 0 0;
`

const WhoCanApplyWrapper = styled(Col)`
    width: 100%;
    max-width: 42.8rem;
    display: flex;
    flex-direction: column;
`

const ButtonWrapper = styled(CenteredSection)`
    display: flex;
    justify-content: center;
`

const WhoCanApply = () => {
    return (
        <SectionWrapper padding="8rem 0">
            <StyledSection>
                <Flex>
                    <WhoCanApplyWrapper>
                        <StyledHeader size="3.6rem">{localize('Who can apply')}</StyledHeader>
                        <Wrapper>
                            <ImageWrapper src={TradingExperts} alt="trading experts" />
                            <Content max_width="36.4rem">
                                <Header as="h4" type="sub-section-title">
                                    {localize('Currency exchangers')}
                                </Header>
                                <Text>
                                    {localize(
                                        'Reputable online currency exchangers who want to gain more exposure and clients.',
                                    )}
                                </Text>
                            </Content>
                        </Wrapper>
                        <Wrapper>
                            <ImageWrapper src={Affiliates} alt="affiliates" />
                            <Content max_width="36.4rem">
                                <Header as="h4" type="sub-section-title">
                                    {localize('Affiliates')}
                                </Header>
                                <Text>
                                    {localize(
                                        'Deriv affiliates who want to support their clients.',
                                    )}
                                </Text>
                            </Content>
                        </Wrapper>
                        <Wrapper>
                            <ImageWrapper src={CommunityManagers} alt="community managers" />
                            <Content max_width="36.4rem">
                                <Header as="h4" type="sub-section-title">
                                    {localize('Community managers')}
                                </Header>
                                <Text>
                                    {localize(
                                        'Trusted influencers or community managers who want to earn extra revenue.',
                                    )}
                                </Text>
                            </Content>
                        </Wrapper>
                    </WhoCanApplyWrapper>
                </Flex>
                <LineSeparator />
                <Flex>
                    <HowToApply>
                        <HeaderHowToApply mb="4rem" size="3.6rem">
                            {localize('How to apply')}
                        </HeaderHowToApply>
                        <Timeline>
                            <Timeline.Item>
                                <HowToApplyContent>
                                    <ImageWrapper src={Login} alt="account creation" />
                                    <Content margin-top="0 px" max_width="36.4rem">
                                        <Header as="h4" type="sub-section-title">
                                            {localize('Log in or sign up')}
                                        </Header>
                                        <Text>
                                            {localize('Log in if you have an account. Haven’t joined us yet? Go ahead and sign up')}
                                        </Text>
                                    </Content>
                                </HowToApplyContent>
                            </Timeline.Item>
                            <Timeline.Item>
                                <HowToApplyContent>
                                    <ImageWrapper src={Cashier} alt="cashier" />
                                    <Content max_width="36.4rem">
                                        <Header as="h4" type="sub-section-title">
                                            {localize('Go to cashier > Payment agents')}
                                        </Header>
                                        <Text>
                                            {localize(
                                                'Click on the sign up button to start the process.',
                                            )}
                                        </Text>
                                    </Content>
                                </HowToApplyContent>
                            </Timeline.Item>
                            <Timeline.Item>
                                <HowToApplyContent>
                                    <ImageWrapper src={ApplicationForm} alt="application form" />
                                    <Content max_width="37.4rem">
                                        <Header as="h4" type="sub-section-title">
                                            {localize('Fill out the application form')}
                                        </Header>
                                        <Text>
                                            {localize(
                                                'Enter your details and attach proofs of your identity and address.',
                                            )}
                                        </Text>
                                    </Content>
                                </HowToApplyContent>
                            </Timeline.Item>
                            <Timeline.Item>
                                <HowToApplyContent>
                                    <ImageWrapper src={PaymentMethod} alt="payment methods" />
                                    <Content max_width="36.4rem">
                                        <Header as="h4" type="sub-section-title">
                                            {localize('Choose your payment methods')}
                                        </Header>
                                        <Text>
                                            {localize(
                                                'Select payment methods that you’ll accept from clients.',
                                            )}
                                        </Text>
                                    </Content>
                                </HowToApplyContent>
                            </Timeline.Item>
                            <Timeline.Item>
                                <HowToApplyContent>
                                    <ImageWrapper src={Listed} alt="listed" />
                                    <Content max_width="36.4rem">
                                        <Header as="h4" type="sub-section-title">
                                            {localize('Get listed')}
                                        </Header>
                                        <Text>
                                            {localize(
                                                'After the final approval from our compliance team, we’ll publish your details on our payment agent listing.',
                                            )}
                                        </Text>
                                    </Content>
                                </HowToApplyContent>
                            </Timeline.Item>
                        </Timeline>
                    </HowToApply>
                </Flex>
            </StyledSection>
            <ButtonWrapper padding="3.4rem 0 0">
                <LinkButton secondary external="true" to="mailto:partners@deriv.com" is_mail_link>
                    {localize('Submit an application')}
                </LinkButton>
            </ButtonWrapper>
        </SectionWrapper>
    )
}

export default WhoCanApply
