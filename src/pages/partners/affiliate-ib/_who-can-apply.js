import React from 'react'
import styled, { css } from 'styled-components'
import { SectionContainer, Container, Show } from 'components/containers'
import { Header, Text } from 'components/elements/typography'
import { localize } from 'components/localization'
import { LinkButton } from 'components/form'
import { Timeline } from 'components/elements'
import device from 'themes/device'
import { affiliate_signup_url } from 'common/constants'
import TradingExperts from 'images/svg/trading-experts.svg'
import SoftwareDeveloper from 'images/svg/software-developer.svg'
import CommunityManagers from 'images/svg/community-managers.svg'
import Apply from 'images/svg/apply.svg'
import Advertise from 'images/svg/advertise.svg'
import Earn from 'images/svg/earn.svg'

const StyledSection = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media ${device.tablet} {
        flex-wrap: wrap;
        justify-content: center;
    }
`

const SectionWrapper = styled(SectionContainer)`
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
`

const StyledSectionWrapper = styled(SectionWrapper)`
    @media ${device.tabletL} {
        padding: 40px 0;
    }
`

const ImageWrapper = styled.img`
    margin-right: 1.6rem;
    width: 48px;
    height: 48px;
`

const ApplyImageWrapper = styled(ImageWrapper)`
    margin-top: 0;
`

const TradingExpertsImageWrapper = styled(ImageWrapper)`
    margin-top: 10px;
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
    margin-top: 4rem;
`

const Content = styled.div`
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
    }
`

const Separator = styled.div`
    position: relative;
    top: 40px;
    width: 1px;
    height: 452px;
    background-color: var(--color-grey-8);
    margin: 0 9.2rem;

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
        margin-top: 3.2rem;
        margin-left: -4.6rem;
    }
    @media ${device.mobileM} {
        margin-left: 0;
        margin-top: 32px;
        margin-bottom: 16px;
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
`
const ContentWrapper = styled(Wrapper)`
    @media (max-width: 749px) {
        flex-flow: wrap;
        margin-top: 16px;
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
    @media ${device.tablet} {
        display: block;
        margin: auto;
        font-size: 14px;
        width: 216px;
        height: 40px;
    }
`

const WhoCanApply = () => {
    return (
        <StyledSectionWrapper padding="8rem 0 4rem">
            <StyledSection>
                <Flex>
                    <WhoCanApplyWrapper>
                        <StyledHeader size="3.2rem">{localize('Who can apply')}</StyledHeader>
                        <ContentWrapper>
                            <TradingExpertsImageWrapper
                                src={TradingExperts}
                                alt="trading experts"
                            />
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
                            <ImageWrapper src={SoftwareDeveloper} alt="software developer" />
                            <Content max_width="36.4rem" mt_mobile="15px">
                                <Header as="h4" type="sub-section-title" mb="8px">
                                    {localize('Software developers')}
                                </Header>
                                <Text>
                                    {localize(
                                        'Develop web, desktop, and mobile applications. Also has extensive experience working with APIs.',
                                    )}
                                </Text>
                            </Content>
                        </ContentWrapper>
                        <ContentWrapper>
                            <ImageWrapper src={CommunityManagers} alt="community managers" />
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
                        <SecondaryHeader mb="40px" size="3.2rem">
                            {localize('Get started easily')}
                        </SecondaryHeader>
                        <Timeline>
                            <Timeline.Item>
                                <HowToApplyContent>
                                    <Show.Desktop max_width="bp749">
                                        <ApplyImageWrapper src={Apply} alt="apply" />
                                    </Show.Desktop>
                                    <GetStartedContent max_width="32.4rem">
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
                                        <ImageWrapper src={Advertise} alt="advertise" />
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
                                        <ImageWrapper src={Earn} alt="earn" />
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
                    secondary
                    to={affiliate_signup_url}
                    external="true"
                    target="_blank"
                    is_affiliate_link
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
