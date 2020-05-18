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
} from '../affiliate-ib/_who-can-apply'
import { Flex } from 'components/containers'
import { localize } from 'components/localization'
import { Header, Text } from 'components/elements'
import { LinkButton } from 'components/form'
import device from 'themes/device'
// SVG
import TradingExperts from 'images/svg/trading-experts.svg'
import Affiliates from 'images/svg/affiliates.svg'
import CommunityManagers from 'images/svg/community-managers.svg'
import Email from 'images/svg/pa-email.svg'
import Reply from 'images/svg/pa-reply.svg'
import Listed from 'images/svg/pa-listed.svg'
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
    height: 100%;
    margin-top: 2rem;
    margin-right: 1.8rem;

    @media ${device.tablet} {
        margin-top: 5rem;
        width: 3.5rem;
    }
`
const ColLine = styled(Col)`
    flex-direction: row;
`

const StyledSeparator = styled(Separator)`
    width: 2px;
    height: 50.3rem;
    margin-top: 6rem;
    margin-left: 6.4rem;
    margin-right: 6.7rem;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        height: 1.6rem;
        width: 1.6rem;
        top: 50%;
        left: -0.6rem;
        border-top: 2px solid var(--color-grey-8);
        border-right: 2px solid var(--color-grey-8);
        transform: rotate(45deg);
        background: white;
    }
`

const StyledCol = styled(Col)`
    max-width: 47.8rem;
`

const Section = styled(StyledSection)`
    flex-wrap: wrap;

    @media (max-width: 1280px) {
        ${StyledSeparator} {
            display: none;
        }
        ${Flex} {
            margin-top: 3.2rem;
        }
    }
`

const SecondaryText = styled(Text)`
    max-width: 32.4rem;
`

const ButtonWrapper = styled(CenteredSection)`
    display: flex;
    justify-content: center;
`

const WhoCanApply = () => {
    return (
        <SectionWrapper padding="8rem 0">
            <Section>
                <StyledCol>
                    <StyledHeader size="3.6rem">{localize('Who can apply')}</StyledHeader>
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
                        <Affiliates />
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
                </StyledCol>
                <StyledSeparator />
                <Flex width="auto">
                    <ColLine>
                        <LineVertical />
                        <div>
                            <SecondaryHeader size="3.6rem">
                                {localize('How to apply')}
                            </SecondaryHeader>
                            <Wrapper>
                                <Email />
                                <Content max_width="36.4rem">
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
                                <Reply />
                                <Content max_width="36.4rem">
                                    <Header as="h4" lh="1.5">
                                        {localize('Wait for our reply')}
                                    </Header>
                                    <SecondaryText>
                                        {localize(
                                            'We’ll review your application and get in touch for further information and next steps.',
                                        )}
                                    </SecondaryText>
                                </Content>
                            </Wrapper>
                            <Wrapper>
                                <Listed />
                                <Content max_width="36.4rem">
                                    <Header as="h4" lh="1.5">
                                        {localize('Get listed')}
                                    </Header>
                                    <SecondaryText>
                                        {localize(
                                            'After final approval from our compliance team, we’ll publish your details on our payment agent list.',
                                        )}
                                    </SecondaryText>
                                </Content>
                            </Wrapper>
                        </div>
                    </ColLine>
                </Flex>
            </Section>
            <ButtonWrapper padding="7.4rem 0 0">
                <LinkButton secondary external="true" to="mailto:paymentagents@deriv.com">
                    {localize('Send us an email to apply')}
                </LinkButton>
            </ButtonWrapper>
        </SectionWrapper>
    )
}

export default WhoCanApply
