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
import { Localize } from 'components/localization'
import { Header, LocalizedLinkText, Timeline } from 'components/elements'
import { LinkButton } from 'components/form'
import CurrencyExchange from 'images/svg/partners/currency_exchange.svg'
import Affiliates from 'images/svg/partners/affiliates.svg'
import CommunityManagers from 'images/svg/partners/community-managers.svg'
import Email from 'images/svg/partners/pa-email.svg'
import Reply from 'images/svg/partners/pa-reply.svg'
import Listed from 'images/svg/partners/pa-listed.svg'
import device from 'themes/device'
import useRegion from 'components/hooks/use-region'
import { TString } from 'types/generics'

type ImageWrapperProps = {
    left_margin?: string
}

type StyledLinkButtonProps = {
    id?: string
}

const StyledLinkButton = styled(LinkButton)<StyledLinkButtonProps>``

const HeaderHowToApply = styled(SecondaryHeader)`
    @media ${device.tablet} {
        margin-top: 40px;
        text-align: start;
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
    header: TString
    text: TString
}

const section_content: SectionComponentProps[] = [
    {
        img_src: CurrencyExchange,
        header: '_t_Currency exchangers_t_',
        text: '_t_Reputable online currency exchangers who want to gain more exposure and clients._t_',
    },
    {
        img_src: Affiliates,
        header: '_t_Affiliates_t_',
        text: '_t_Deriv affiliates who want to support their clients._t_',
    },
    {
        img_src: CommunityManagers,
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
                            <Localize translate_text="_t_Get started easily_t_" />
                        </HeaderHowToApply>
                        <Timeline pb="24px" pl="18px">
                            <Timeline.Item>
                                <HowToApplyContent>
                                    <ImageWrapper
                                        src={Email}
                                        alt="Write us an email"
                                        left_margin="8px"
                                    />
                                    <Content min_width="240px" max_width="36.4rem">
                                        <Header as="h4" type="sub-section-title" pb="8px">
                                            <Localize translate_text="_t_Drop us an email_t_" />
                                        </Header>
                                        <Header as="h4" type="paragraph-1" weight="normal">
                                            <Localize translate_text="_t_Send us an email with the following:_t_" />
                                        </Header>
                                        <StyledUl className="get-started--list">
                                            <Li>
                                                <Header as="h4" type="paragraph-1" weight="normal">
                                                    <Localize translate_text="_t_Your name, email address, and contact number_t_" />
                                                </Header>
                                            </Li>
                                            <Li>
                                                <Header as="h4" type="paragraph-1" weight="normal">
                                                    <Localize translate_text="_t_Your website address (if you have one)_t_" />
                                                </Header>
                                            </Li>
                                            <Li>
                                                <Header as="h4" type="paragraph-1" weight="normal">
                                                    <Localize translate_text="_t_Payment methods you will accept from clients_t_" />
                                                </Header>
                                            </Li>
                                            <Li>
                                                <Header as="h4" type="paragraph-1" weight="normal">
                                                    <Localize translate_text="_t_The commission you will charge clients on deposits and withdrawals_t_" />
                                                </Header>
                                            </Li>
                                        </StyledUl>
                                    </Content>
                                </HowToApplyContent>
                            </Timeline.Item>
                            <Timeline.Item>
                                <HowToApplyContent>
                                    <ImageWrapper
                                        src={Reply}
                                        alt="Receive email response"
                                        left_margin="8px"
                                    />
                                    <Content max_width="38.2rem">
                                        <Header as="h4" type="sub-section-title" pb="8px">
                                            <Localize translate_text="_t_Wait for our reply_t_" />
                                        </Header>
                                        <Header as="h4" type="paragraph-1" weight="normal">
                                            <Localize translate_text="_t_We’ll review your application and get in touch for further information and next steps._t_" />
                                        </Header>
                                    </Content>
                                </HowToApplyContent>
                            </Timeline.Item>
                            <Timeline.Item>
                                <HowToApplyContent>
                                    <ImageWrapper
                                        src={Listed}
                                        alt="Get the approval"
                                        left_margin="8px"
                                    />
                                    <Content max_width="38.2rem">
                                        <Header as="h4" type="sub-section-title" pb="8px">
                                            <Localize translate_text="_t_Get listed_t_" />
                                        </Header>
                                        <Header as="h4" type="paragraph-1" weight="normal">
                                            <Localize translate_text="_t_After final approval from our Compliance team, we’ll publish your details on our payment agent list._t_" />
                                        </Header>
                                    </Content>
                                </HowToApplyContent>
                            </Timeline.Item>
                        </Timeline>
                    </HowToApply>
                </Flex>
            </StyledSection>
            <ButtonWrapper padding={is_p2p_allowed_country ? '0 0 80px 0' : '0'}>
                <StyledLinkButton
                    id="dm-page-affiliate-email-apply"
                    secondary
                    external
                    to="mailto:partners@deriv.com"
                    is_mail_link
                >
                    <Localize translate_text="_t_Send us an email to apply_t_" />
                </StyledLinkButton>
            </ButtonWrapper>
        </SectionWrapper>
    )
}

export default WhoCanApply
