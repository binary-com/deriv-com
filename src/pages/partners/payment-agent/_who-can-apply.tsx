import React, { ReactElement } from 'react'
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
import { localize, Localize } from 'components/localization'
import { Header, Text, Timeline } from 'components/elements'
import { LinkButton } from 'components/form'
import TradingExperts from 'images/svg/partners/trading-experts.svg'
import Affiliates from 'images/svg/partners/affiliates.svg'
import CommunityManagers from 'images/svg/partners/community-managers.svg'
import Email from 'images/svg/partners/pa-email.svg'
import Reply from 'images/svg/partners/pa-reply.svg'
import Listed from 'images/svg/partners/pa-listed.svg'
import device from 'themes/device'

const HeaderHowToApply = styled(SecondaryHeader)`
    @media ${device.tablet} {
        margin-top: 3.2rem;
        margin-left: -4.6rem;
    }
`
const HowToApply = styled(Col)`
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

const WhoCanApplyWrapper = styled(Col)`
    width: 100%;
    max-width: 42.8rem;
    display: flex;
    flex-direction: column;
`

const StyledUl = styled.ul`
    list-style-type: disc;
    font-size: var(--text-size-s);
    padding-left: 1.8rem;
`

const Li = styled.li`
    margin-top: 0.8rem;
`

const SecondaryText = styled(Text)`
    max-width: 32.4rem;
`

const ButtonWrapper = styled(CenteredSection)`
    display: flex;
    justify-content: center;
`
const section_content = [
    {
        img_src: TradingExperts,
        header: <Localize translate_text="Currency exchangers" />,
        text: (
            <Localize translate_text="Reputable online currency exchangers who want to gain more exposure and clients." />
        ),
    },
    {
        img_src: Affiliates,
        header: <Localize translate_text="Affiliates" />,
        text: <Localize translate_text="Deriv affiliates who want to support their clients." />,
    },
    {
        img_src: CommunityManagers,
        header: <Localize translate_text="Community managers" />,
        text: (
            <Localize translate_text="Trusted influencers or community managers who want to earn extra revenue." />
        ),
    },
]
type SectionComponentProps = {
    img_src: string
    header: ReactElement
    text: ReactElement
}
const SectionComponent = ({ img_src, header, text }: SectionComponentProps) => {
    return (
        <Wrapper>
            <ImageWrapper src={img_src} alt="" />
            <Content max_width="36.4rem">
                <Header as="h4" type="sub-section-title">
                    {' '}
                    {header}{' '}
                </Header>
                <Text>{text}</Text>
            </Content>
        </Wrapper>
    )
}
const WhoCanApply = () => {
    return (
        <SectionWrapper padding="8rem 0">
            <StyledSection>
                <Flex>
                    <WhoCanApplyWrapper>
                        <StyledHeader as="h2" size="3.6rem">
                            {localize('Who can apply')}
                        </StyledHeader>
                        {section_content.map((item, index) => (
                            <SectionComponent
                                key={`key-${index}`}
                                img_src={item.img_src}
                                header={item.header}
                                text={item.text}
                            />
                        ))}
                    </WhoCanApplyWrapper>
                </Flex>
                <Separator />
                {/* how to apply section */}
                <Flex>
                    <HowToApply>
                        <HeaderHowToApply as="h2" mb="4rem" size="3.6rem">
                            {localize('How to apply')}
                        </HeaderHowToApply>
                        <Timeline>
                            <Timeline.Item>
                                <HowToApplyContent>
                                    <ImageWrapper src={Email} alt="" />
                                    <Content margin-top="0 px" max_width="36.4rem">
                                        <Header as="h4" type="sub-section-title">
                                            {localize('Drop us an email')}
                                        </Header>
                                        <Text>
                                            {localize('Send us an email with the following:')}
                                        </Text>
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
                                                    {localize(
                                                        'Your website address (if you have one)',
                                                    )}
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
                                </HowToApplyContent>
                            </Timeline.Item>
                            <Timeline.Item>
                                <HowToApplyContent>
                                    <ImageWrapper src={Reply} alt="" />
                                    <Content max_width="36.4rem">
                                        <Header as="h4" type="sub-section-title">
                                            {localize('Wait for our reply')}
                                        </Header>
                                        <SecondaryText>
                                            {localize(
                                                'We’ll review your application and get in touch for further information and next steps.',
                                            )}
                                        </SecondaryText>
                                    </Content>
                                </HowToApplyContent>
                            </Timeline.Item>
                            <Timeline.Item>
                                <HowToApplyContent>
                                    <ImageWrapper src={Listed} alt="" />
                                    <Content max_width="36.4rem">
                                        <Header as="h4" type="sub-section-title">
                                            {localize('Get listed')}
                                        </Header>
                                        <SecondaryText>
                                            {localize(
                                                'After final approval from our compliance team, we’ll publish your details on our payment agent list.',
                                            )}
                                        </SecondaryText>
                                    </Content>
                                </HowToApplyContent>
                            </Timeline.Item>
                        </Timeline>
                    </HowToApply>
                </Flex>
            </StyledSection>
            <ButtonWrapper padding="3.4rem 0 0">
                <LinkButton
                    id="dm-page-affiliate-email-apply"
                    secondary
                    external="true"
                    to="mailto:partners@deriv.com"
                    is_mail_link
                >
                    {localize('Send us an email to apply')}
                </LinkButton>
            </ButtonWrapper>
        </SectionWrapper>
    )
}

export default WhoCanApply
