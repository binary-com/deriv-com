import React from 'react'
import styled from 'styled-components'
import Hero from '../_hero.js'
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
    LineVertical,
} from '../_who-can-apply'
import Layout from 'components/layout/layout'
import { SEO, Container, SectionContainer, Flex, CssGrid } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import { Header, Text } from 'components/elements'
import { Button } from 'components/form'
// SVG
import TradingExperts from 'images/svg/trading-experts.svg'
import SoftwareDeveloper from 'images/svg/software-developer.svg'
import CommunityManagers from 'images/svg/community-managers.svg'
import Apply from 'images/svg/apply.svg'
import Advertise from 'images/svg/advertise.svg'
import Earn from 'images/svg/earn.svg'

const MainHeader = styled(Header)`
    max-width: 80rem;
    margin-bottom: 1.6rem;
`

const MiddleHeader = styled(Header)`
    max-width: 99.6rem;
    margin-bottom: 4rem;
`

const BlackFlex = styled(Flex)`
    background: var(--color-black);
`
const Card = styled(Flex)`
    padding: 3.2rem;
    border-radius: 4px;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    background: var(--color-white);
`

const CardText = styled(Text)`
    max-width: 25.6rem;
`

const StyledUl = styled.ul`
    list-style-type: disc;
    font-size: var(--text-size-s);
    padding-left: 1.8rem;
`

const WhoCanApply = () => {
    return (
        <SectionWrapper padding="8rem 0 4rem">
            <StyledSection>
                <Col>
                    <StyledHeader font_size="3.6rem">{localize('Who can apply')}</StyledHeader>
                    <Wrapper>
                        <TradingExperts />
                        <Content max_width="36.4rem">
                            <Header as="h4" lh="1.5">
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
                        <SoftwareDeveloper />
                        <Content max_width="36.4rem">
                            <Header as="h4" lh="1.5">
                                {localize('Affiliates')}
                            </Header>
                            <Text>
                                {localize('Deriv affiliates who want to support their clients.')}
                            </Text>
                        </Content>
                    </Wrapper>
                    <Wrapper>
                        <CommunityManagers />
                        <Content max_width="36.4rem">
                            <Header as="h4" lh="1.5">
                                {localize('Community managers')}
                            </Header>
                            <Text>
                                {localize(
                                    'Trusted influencers or community managers who want to earn extra revenue.',
                                )}
                            </Text>
                        </Content>
                    </Wrapper>
                </Col>
                <Separator />
                <Flex>
                    <LineVertical />
                    <Col>
                        <SecondaryHeader font_size="3.6rem">
                            {localize('How to apply')}
                        </SecondaryHeader>
                        <Wrapper>
                            <Apply />
                            <Content max_width="32.4rem">
                                <Header as="h4" lh="1.5">
                                    {localize('Drop us an email')}
                                </Header>
                                <Text>{localize('Send us an email with the following:')}</Text>
                                <StyledUl>
                                    <li>
                                        <Text>
                                            {localize(
                                                'Your name, email address, and contact number',
                                            )}
                                        </Text>
                                    </li>
                                    <li>
                                        <Text>
                                            {localize('Your website address (if you have one)')}
                                        </Text>
                                    </li>
                                    <li>
                                        <Text>
                                            {localize(
                                                'Payment methods you will accept from clients',
                                            )}
                                        </Text>
                                    </li>
                                    <li>
                                        <Text>
                                            {localize(
                                                'The commission you will charge clients on deposits and withdrawals',
                                            )}
                                        </Text>
                                    </li>
                                </StyledUl>
                            </Content>
                        </Wrapper>
                        <Wrapper>
                            <Advertise />
                            <Content max_width="32.4rem">
                                <Header as="h4" lh="1.5">
                                    {localize('Wait for our reply')}
                                </Header>
                                <Text>
                                    {localize(
                                        'We’ll review your application and get in touch for further information and next steps.',
                                    )}
                                </Text>
                            </Content>
                        </Wrapper>
                        <Wrapper>
                            <Earn />
                            <Content max_width="32.4rem">
                                <Header as="h4" lh="1.5">
                                    {localize('Get listed')}
                                </Header>
                                <Text>
                                    {localize(
                                        'After final approval from our compliance team, we’ll publish your details on our payment agent list.',
                                    )}
                                </Text>
                            </Content>
                        </Wrapper>
                    </Col>
                </Flex>
            </StyledSection>
            <CenteredSection padding="4rem 0">
                <Button secondary>{localize('Send us an email to apply')}</Button>
            </CenteredSection>
        </SectionWrapper>
    )
}

const YourControl = () => {
    return (
        <SectionContainer background="grey-8">
            <Container direction="column">
                <Header as="h3" font_size="var(--text-size-header-1)" align="center">
                    {localize('You are in control')}
                </Header>
                <Text size="var(--text-size-m)" margin="1.6rem 0 3.2rem">
                    {localize('As a payment agent you are an independent-exchanger. You can:')}
                </Text>
                <CssGrid
                    columns="repeat(2, 38.4rem)"
                    column_gap="2.4rem"
                    row_gap="2.4rem"
                    tablet_columns="repeat(2, 1fr)"
                    mobile_columns="1fr"
                >
                    <Card>
                        <BlackFlex width="48px" height="48px" mr="1.6rem" />
                        <CardText>
                            {localize(
                                'Determine your commission per transaction, subject to our established thresholds.',
                            )}
                        </CardText>
                    </Card>
                    <Card>
                        <BlackFlex width="48px" height="48px" mr="1.6rem" />
                        <CardText>{localize('Open an agency account with just $200.')}</CardText>
                    </Card>
                    <Card>
                        <BlackFlex width="48px" height="48px" mr="1.6rem" />
                        <CardText>
                            {localize('Perform multiple deposits and withdrawals per day.')}
                        </CardText>
                    </Card>
                    <Card>
                        <BlackFlex width="48px" height="48px" mr="1.6rem" />
                        <CardText>{localize('Close your account at any time you want.')}</CardText>
                    </Card>
                </CssGrid>
            </Container>
        </SectionContainer>
    )
}

const TapInto = () => {
    return (
        <SectionContainer>
            <Container justify="flex-end">
                <Flex direction="column" mr="2.4rem" max_width="58.8rem">
                    <Header as="h3" font_size="var(--text-size-header-1)" margin="0 0 1.6rem">
                        {localize('Tap into an established and growing market')}
                    </Header>
                    <Text size="var(--text-size-m)">
                        {localize(
                            'Reach hundreds of traders on our platform looking for ways to fund their accounts through local bank wires and e-payment methods.',
                        )}
                    </Text>
                </Flex>
                <BlackFlex width="486px" height="263px" />
            </Container>
        </SectionContainer>
    )
}

const PaymentAgent = () => {
    return (
        <Layout type="partners" padding_top="10rem">
            <SEO
                title={localize('Partners')}
                description={localize('Partner with a trusted online trading provider')}
            />
            <Hero>
                <MainHeader as="h1" color="white" align="center" lh="1.25">
                    {localize('Become a payment agent on Deriv')}
                </MainHeader>
                <MiddleHeader as="h3" color="white" align="center">
                    {localize(
                        'Expand your client base, gain additional business exposure, and earn more revenue when you sign up as a payment agent on Deriv.',
                    )}
                </MiddleHeader>
                <Button secondary>{localize('Send us an email to apply')}</Button>
            </Hero>
            <TapInto />
            <YourControl />
            <WhoCanApply />
        </Layout>
    )
}

export default WithIntl()(PaymentAgent)
