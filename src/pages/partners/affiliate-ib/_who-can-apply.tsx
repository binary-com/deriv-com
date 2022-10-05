import React from 'react'
import styled, { css } from 'styled-components'
import { SectionContainer, Container, Show } from 'components/containers'
import { Header, Text } from 'components/elements/typography'
import { localize } from 'components/localization'
import { LinkButton } from 'components/form'
import { Timeline } from 'components/elements'
import device from 'themes/device'
import { affiliate_signup_url } from 'common/constants'
import TradingExperts from 'images/svg/partners/trading-experts.svg'
import SoftwareDeveloper from 'images/svg/partners/software-developer.svg'
import CommunityManagers from 'images/svg/partners/community-managers.svg'
import Apply from 'images/svg/partners/apply.svg'
import Advertise from 'images/svg/partners/advertise.svg'
import Earn from 'images/svg/partners/earn.svg'

type ContentProps = {
    min_width?: string
    max_width?: string
    mt_mobile?: string
}

const StyledSection = styled(Container)`
    align-items: flex-start;

    @media ${device.tablet} {
        flex-wrap: wrap;
        justify-content: center;
    }
`

const SectionWrapper = styled(SectionContainer)`
    @media ${device.tabletL} {
        padding-top: 40px;
        padding-bottom: 0;
    }
`

const StyledSectionWrapper = styled(SectionWrapper)`
    @media ${device.tabletL} {
        padding: 40px 0;
    }
`

const ImageWrapper = styled.img`
    width: 48px;
    height: 48px;
    margin-right: 16px;
    margin-top: -8px;

    @media (max-width: 749px) {
        margin-top: 8px;
    }
`

const CenteredSection = styled(SectionContainer)`
    text-align: center;
`
const Col = styled.section`
    width: 100%;
    max-width: 42.8rem;
    display: flex;
    flex-direction: column;
`
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    margin-top: 24px;

    @media ${device.tabletL} {
        margin-top: 16px;
    }
`

const Content = styled.div<ContentProps>`
    display: flex;
    flex-direction: column;
    max-width: ${(props) => props.max_width};

    @media (max-width: 749px) {
        margin-top: ${(props) => props.mt_mobile};
    }
`

const GetStartedContent = styled(Content)`
    @media (max-width: 749px) {
        max-width: 360px;
        position: relative;
        top: -3px;

        h4 {
            font-size: 18px;
        }
        p {
            font-size: 14px;
        }
    }
`

const Separator = styled.div`
    position: relative;
    top: 40px;
    width: 1px;
    height: 452px;
    background-color: var(--color-grey-8);
    margin: 0 17.2rem;

    @media ${device.laptop} {
        display: none !important;
    }
`
const StyledHeader = styled(Header)`
    width: 100%;
    max-width: 42.8rem;

    @media ${device.tabletL} {
        font-size: 24px;
        text-align: center;
    }
`

const SecondaryHeader = styled(StyledHeader)`
    @media ${device.tablet} {
        margin: 40px 0 24px -12px;
    }
`
const Flex = styled.div`
    display: flex;
`
const LineStyle = css`
    margin-top: 10.5rem;
    margin-right: 16px;
    width: 3rem;
    height: 33rem;

    @media ${device.tablet} {
        margin-top: 13.5rem;
    }
    @media ${device.mobileM} {
        display: none;
    }
`
const HowToApply = styled(Col)`
    width: 100%;
    max-width: 42.8rem;
    display: flex;
    flex-direction: column;

    @media ${device.laptop} {
        margin-left: 12rem;
    }

    @media ${device.tablet} {
        margin-left: 1rem;
    }
`
const WhoCanApplyWrapper = styled(Col)`
    width: 100%;
    max-width: 42.8rem;
    display: flex;
    flex-direction: column;

    @media (max-width: 749px) {
        text-align: center;

        h4 {
            text-align: center;
            font-size: 18px;
        }
        p {
            text-align: center;
            font-size: 14px;
        }
    }
`
const ContentWrapper = styled(Wrapper)`
    @media (max-width: 749px) {
        flex-flow: wrap;
        margin-top: 24px;
        justify-content: center;
    }
`

const HowToApplyContent = styled.div`
    display: flex;
    padding-bottom: 4 rem;

    img {
        margin-right: 1.6rem;
    }
`

const StyledLinkButton = styled(LinkButton)`
    @media ${device.mobileL} {
        display: block;
        margin: auto;
        font-size: 14px;
        width: 90%;
        height: 40px;
    }
`

const WhoCanApply = () => {
    return (
        <StyledSectionWrapper padding="8rem 0 4rem">
            <StyledSection>
                <Flex>
                    <WhoCanApplyWrapper>
                        <StyledHeader as="h2" size="3.2rem">
                            {localize('Who can apply')}
                        </StyledHeader>
                        <ContentWrapper>
                            <ImageWrapper src={TradingExperts} alt="" />
                            <Content max_width="36.4rem" mt_mobile="15px">
                                <Header as="h4" type="sub-section-title" mb="8px">
                                    {localize('Trading experts')}
                                </Header>
                                <Text>
                                    {localize(
                                        'Provide expert tips and opinions on online trading via a website, blog, YouTube channel, webinars, or other forms of digital media.',
                                    )}
                                </Text>
                            </Content>
                        </ContentWrapper>
                        <ContentWrapper>
                            <ImageWrapper src={SoftwareDeveloper} alt="" />
                            <Content max_width="36.4rem" mt_mobile="15px">
                                <Header as="h4" type="sub-section-title" mb="8px">
                                    {localize('Software developers')}
                                </Header>
                                <Text>
                                    {localize(
                                        'Develop web, desktop, and mobile applications using Deriv API.',
                                    )}
                                </Text>
                            </Content>
                        </ContentWrapper>
                        <ContentWrapper>
                            <ImageWrapper src={CommunityManagers} alt="" />
                            <Content max_width="36.4rem" mt_mobile="15px">
                                <Header as="h4" type="sub-section-title" mb="8px">
                                    {localize('Community managers')}
                                </Header>
                                <Text>
                                    {localize(
                                        'Manage an active online community that’s passionate about online trading, investing, or personal finance.',
                                    )}
                                </Text>
                            </Content>
                        </ContentWrapper>
                    </WhoCanApplyWrapper>
                </Flex>
                <Separator />
                <Flex>
                    <HowToApply>
                        <SecondaryHeader as="h2" mb="24px" size="3.2rem">
                            {localize('Get started easily')}
                        </SecondaryHeader>
                        <Timeline>
                            <Timeline.Item>
                                <HowToApplyContent>
                                    <Show.Desktop max_width="bp749">
                                        <ImageWrapper src={Apply} alt="" />
                                    </Show.Desktop>
                                    <GetStartedContent max_width="36.4rem">
                                        <Header as="h4" type="sub-section-title" mb="8px">
                                            {localize('Sign up')}
                                        </Header>
                                        <Text>
                                            {localize(
                                                'Fill out the online application form. We’ll review your application and get in touch once it’s approved.',
                                            )}
                                        </Text>
                                    </GetStartedContent>
                                </HowToApplyContent>
                            </Timeline.Item>
                            <Timeline.Item>
                                <HowToApplyContent>
                                    <Show.Desktop max_width="bp749">
                                        <ImageWrapper src={Advertise} alt="" />
                                    </Show.Desktop>
                                    <GetStartedContent max_width="32.4rem">
                                        <Header as="h4" type="sub-section-title" mb="8px">
                                            {localize('Advertise')}
                                        </Header>
                                        <Text>
                                            {localize(
                                                'Use your unique affiliate link and our tried-and-tested referral tools to bring new clients to Deriv.',
                                            )}
                                        </Text>
                                    </GetStartedContent>
                                </HowToApplyContent>
                            </Timeline.Item>
                            <Timeline.Item>
                                <HowToApplyContent>
                                    <Show.Desktop max_width="bp749">
                                        <ImageWrapper src={Earn} alt="" />
                                    </Show.Desktop>
                                    <GetStartedContent max_width="32.4rem">
                                        <Header as="h4" type="sub-section-title" mb="8px">
                                            {localize('Earn')}
                                        </Header>
                                        <Text>
                                            {localize(
                                                'Start earning based on your chosen commission plan –– up to 45% of the total net revenue generated by your referred clients.',
                                            )}
                                        </Text>
                                    </GetStartedContent>
                                </HowToApplyContent>
                            </Timeline.Item>
                        </Timeline>
                    </HowToApply>
                </Flex>
            </StyledSection>
            <CenteredSection padding="2rem 0">
                <StyledLinkButton
                    id="dm-page-affiliate-signup"
                    secondary
                    to={affiliate_signup_url}
                    external
                    target="_blank"
                    type="affiliate_sign_up"
                >
                    {localize('Sign up')}
                </StyledLinkButton>
            </CenteredSection>
        </StyledSectionWrapper>
    )
}

export {
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
}

export default WhoCanApply
