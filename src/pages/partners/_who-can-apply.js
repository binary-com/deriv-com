import React from 'react'
import styled, { css } from 'styled-components'
import { SectionContainer, Container } from 'components/containers'
import { Header, Text } from 'components/elements/typography'
import { localize } from 'components/localization'
import { Button } from 'components/form'
import Partner from 'common/partner'
import device from 'themes/device'
import TradingExperts from 'images/svg/trading-experts.svg'
import SoftwareDeveloper from 'images/svg/software-developer.svg'
import CommunityManagers from 'images/svg/community-managers.svg'
import LineVerticalSVG from 'images/svg/line-vertical.svg'
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

    svg {
        margin-right: 1.6rem;
    }
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    max-width: ${props => props.max_width};
`
const Separator = styled.div`
    width: 1px;
    height: 50rem;
    background-color: var(--color-grey-8);
    margin: 0 9.2rem;

    @media ${device.laptop} {
        display: none !important;
    }
`
const StyledHeader = styled(Header)`
    width: 100%;
    max-width: 42.8rem;
`

const SecondaryHeader = styled(StyledHeader)`
    @media ${device.tablet} {
        margin-top: 3.2rem;
        margin-left: -4.6rem;
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
`
const LineVertical = styled(LineVerticalSVG)`
    ${LineStyle}
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
                                {localize('Trading experts')}
                            </Header>
                            <Text>
                                {localize(
                                    'Provide expert tips and opinions on online trading via a website, blog, YouTube channel, webinars, or other forms of digital media.',
                                )}
                            </Text>
                        </Content>
                    </Wrapper>
                    <Wrapper>
                        <SoftwareDeveloper />
                        <Content max_width="36.4rem">
                            <Header as="h4" lh="1.5">
                                {localize('Software developers')}
                            </Header>
                            <Text>
                                {localize(
                                    'Develop web, desktop, and mobile applications. Also has extensive experience working with APIs.',
                                )}
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
                                    'Manage an active online community that’s passionate about online trading, investing, or personal finance.',
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
                            {localize('Get started easily')}
                        </SecondaryHeader>
                        <Wrapper>
                            <Apply />
                            <Content max_width="32.4rem">
                                <Header as="h4" lh="1.5">
                                    {localize('Sign up')}
                                </Header>
                                <Text>
                                    {localize(
                                        'Fill out the online application form. We’ll review your application and get in touch once it’s approved.',
                                    )}
                                </Text>
                            </Content>
                        </Wrapper>
                        <Wrapper>
                            <Advertise />
                            <Content max_width="32.4rem">
                                <Header as="h4" lh="1.5">
                                    {localize('Advertise')}
                                </Header>
                                <Text>
                                    {localize(
                                        'Use your unique affiliate link and our tried-and-tested referral tools to bring new clients to Deriv.',
                                    )}
                                </Text>
                            </Content>
                        </Wrapper>
                        <Wrapper>
                            <Earn />
                            <Content max_width="32.4rem">
                                <Header as="h4" lh="1.5">
                                    {localize('Earn')}
                                </Header>
                                <Text>
                                    {localize(
                                        'Start earning based on your chosen commission plan –– up to 45% of the total net revenue generated by your referred clients.',
                                    )}
                                </Text>
                            </Content>
                        </Wrapper>
                    </Col>
                </Flex>
            </StyledSection>
            <CenteredSection padding="4rem 0">
                <Button secondary onClick={Partner.redirectToSignup}>
                    {localize('Sign up')}
                </Button>
            </CenteredSection>
        </SectionWrapper>
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
