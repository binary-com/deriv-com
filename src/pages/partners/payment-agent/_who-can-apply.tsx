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
import { Header, LinkText, Timeline } from 'components/elements'
import { LinkButton } from 'components/form'
import CurrencyExchange from 'images/svg/partners/currency_exchange.svg'
import Affiliates from 'images/svg/partners/affiliates.svg'
import CommunityManagers from 'images/svg/partners/community-managers.svg'
import Email from 'images/svg/partners/pa-email.svg'
import Reply from 'images/svg/partners/pa-reply.svg'
import Listed from 'images/svg/partners/pa-listed.svg'
import device from 'themes/device'
import { DerivStore } from 'store'

type ImageWrapperProps = {
    left_margin?: string
}

const HeaderHowToApply = styled(SecondaryHeader)`
    @media ${device.tablet} {
        margin-top: 40px;
        text-align: left;
    }
`
const HowToApply = styled(Col)`
    max-width: 48.6rem;

    @media ${device.laptop} {
        padding-left: 8px;
    }
`
const HowToApplyContent = styled.div`
    margin-top: 0;
    display: flex;
`

const ImageWrapper = styled.img<ImageWrapperProps>`
    margin: 0 16px;
    width: 48px;
    height: 48px;
    margin-left: ${(props) => (props.left_margin ? props.left_margin : '16px')};

    @media ${device.tabletL} {
        width: 32px;
        height: 32px;
    }
`

const WhoCanApplyWrapper = styled(Col)`
    width: 100%;
    max-width: 48.8rem;
    display: flex;
    flex-direction: column;
`

const StyledUl = styled.ul`
    list-style-type: disc;
    font-size: var(--text-size-s);
    padding-left: 16px;
    margin-bottom: 36px;

    &.get-started--list {
        margin-bottom: 0;
    }
`

const Li = styled.li`
    margin-top: 0.8rem;
`

const ButtonWrapper = styled(CenteredSection)`
    display: flex;
    justify-content: center;

    @media ${device.tabletL} {
        padding-bottom: 40px;
    }
`

type SectionComponentProps = {
    img_src: string
    header: ReactElement
    text: ReactElement
}

const section_content: SectionComponentProps[] = [
    {
        img_src: CurrencyExchange,
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

const SectionComponent = ({ img_src, header, text }: SectionComponentProps) => {
    return (
        <Wrapper>
            <ImageWrapper src={img_src} alt="" left_margin="0px" />
            <Content max_width="48.8rem">
                <Header as="h4" type="sub-section-title" pb="8px">
                    {header}
                </Header>
                <Header as="h4" type="paragraph-1" weight="normal">
                    {text}
                </Header>
            </Content>
        </Wrapper>
    )
}
const WhoCanApply = () => {
    const { is_p2p_allowed_country } = React.useContext(DerivStore)

    return (
        <SectionWrapper padding="80px 0">
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
                        <Header as="h4" type="paragraph-1" mt="24px">
                            {localize('Note:')}
                        </Header>
                        <StyledUl>
                            <Li>
                                <Header as="h4" type="paragraph-1" weight="normal">
                                    {
                                        <Localize translate_text="You must have a minimum balance in your Deriv account while your application is under review. The amount of this balance depends on your country of residence. You only need to maintain the minimum balance until your application is successful." />
                                    }
                                </Header>
                            </Li>
                            <Li>
                                <Header as="h4" type="paragraph-1" weight="normal">
                                    {localize(
                                        'You can only service Deriv clients in your country of residence.',
                                    )}
                                </Header>
                            </Li>
                        </StyledUl>
                        <Header as="h4" type="paragraph-1" weight="normal">
                            <Localize
                                translate_text="See our <0>terms and conditions</0> for more info."
                                components={[
                                    <LinkText
                                        key={0}
                                        color="red"
                                        target="_blank"
                                        href="/tnc/business-partners-payment-agents.pdf"
                                        rel="noopener noreferrer"
                                    />,
                                ]}
                            />
                        </Header>
                    </WhoCanApplyWrapper>
                </Flex>
                <Separator />
                {/* how to apply section */}
                <Flex>
                    <HowToApply>
                        <HeaderHowToApply as="h2" mb="24px" size="3.6rem">
                            {localize('Get started easily')}
                        </HeaderHowToApply>
                        <Timeline pb="24px" pl="18px">
                            <Timeline.Item>
                                <HowToApplyContent>
                                    <ImageWrapper src={Email} alt="" left_margin="8px" />
                                    <Content min_width="240px" max_width="36.4rem">
                                        <Header as="h4" type="sub-section-title" pb="8px">
                                            {localize('Drop us an email')}
                                        </Header>
                                        <Header as="h4" type="paragraph-1" weight="normal">
                                            {localize('Send us an email with the following:')}
                                        </Header>
                                        <StyledUl className="get-started--list">
                                            <Li>
                                                <Header as="h4" type="paragraph-1" weight="normal">
                                                    {localize(
                                                        'Your name, email address, and contact number',
                                                    )}
                                                </Header>
                                            </Li>
                                            <Li>
                                                <Header as="h4" type="paragraph-1" weight="normal">
                                                    {localize(
                                                        'Your website address (if you have one)',
                                                    )}
                                                </Header>
                                            </Li>
                                            <Li>
                                                <Header as="h4" type="paragraph-1" weight="normal">
                                                    {localize(
                                                        'Payment methods you will accept from clients',
                                                    )}
                                                </Header>
                                            </Li>
                                            <Li>
                                                <Header as="h4" type="paragraph-1" weight="normal">
                                                    {localize(
                                                        'The commission you will charge clients on deposits and withdrawals',
                                                    )}
                                                </Header>
                                            </Li>
                                        </StyledUl>
                                    </Content>
                                </HowToApplyContent>
                            </Timeline.Item>
                            <Timeline.Item>
                                <HowToApplyContent>
                                    <ImageWrapper src={Reply} alt="" left_margin="8px" />
                                    <Content max_width="38.2rem">
                                        <Header as="h4" type="sub-section-title" pb="8px">
                                            {localize('Wait for our reply')}
                                        </Header>
                                        <Header as="h4" type="paragraph-1" weight="normal">
                                            {localize(
                                                'We’ll review your application and get in touch for further information and next steps.',
                                            )}
                                        </Header>
                                    </Content>
                                </HowToApplyContent>
                            </Timeline.Item>
                            <Timeline.Item>
                                <HowToApplyContent>
                                    <ImageWrapper src={Listed} alt="" left_margin="8px" />
                                    <Content max_width="38.2rem">
                                        <Header as="h4" type="sub-section-title" pb="8px">
                                            {localize('Get listed')}
                                        </Header>
                                        <Header as="h4" type="paragraph-1" weight="normal">
                                            {localize(
                                                'After final approval from our Compliance team, we’ll publish your details on our payment agent list.',
                                            )}
                                        </Header>
                                    </Content>
                                </HowToApplyContent>
                            </Timeline.Item>
                        </Timeline>
                    </HowToApply>
                </Flex>
            </StyledSection>
            <ButtonWrapper padding={is_p2p_allowed_country ? '0 0 80px 0' : '0'}>
                <LinkButton
                    id="dm-page-affiliate-email-apply"
                    secondary
                    external
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
