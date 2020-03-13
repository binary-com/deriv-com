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
    LineStyle,
} from '../_who-can-apply'
import { Flex } from 'components/containers'
import { localize } from 'components/localization'
import { Header, Text } from 'components/elements'
import { Button } from 'components/form'
// SVG
import TradingExperts from 'images/svg/trading-experts.svg'
import SoftwareDeveloper from 'images/svg/software-developer.svg'
import CommunityManagers from 'images/svg/community-managers.svg'
import Apply from 'images/svg/apply.svg'
import Advertise from 'images/svg/advertise.svg'
import Earn from 'images/svg/earn.svg'
import LineVerticalSVG from 'images/svg/line-vertical-pa.svg'

const StyledUl = styled.ul`
    list-style-type: disc;
    font-size: var(--text-size-s);
    padding-left: 1.8rem;
`

const Li = styled.li`
    margin-top: 0.8rem;
`

const LineVertical = styled(LineVerticalSVG)`
    ${LineStyle}
    height: 46rem;
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
                                    <Li>
                                        <Text>
                                            {localize(
                                                'Your name, email address, and contact number',
                                            )}
                                        </Text>
                                    </Li>
                                    <Li>
                                        <Text>
                                            {localize('Your website address (if you have one)')}
                                        </Text>
                                    </Li>
                                    <Li>
                                        <Text>
                                            {localize(
                                                'Payment methods you will accept from clients',
                                            )}
                                        </Text>
                                    </Li>
                                    <Li>
                                        <Text>
                                            {localize(
                                                'The commission you will charge clients on deposits and withdrawals',
                                            )}
                                        </Text>
                                    </Li>
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

export default WhoCanApply
