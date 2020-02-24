import React from 'react'
import styled from 'styled-components'
import { SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements/typography'
import { localize } from 'components/localization'
import { LinkButton } from 'components/form'
import TradingExperts from 'images/svg/trading-experts.svg'
import SoftwareDeveloper from 'images/svg/software-developer.svg'
import CommunityManagers from 'images/svg/community-managers.svg'
import LineVerticalSVG from 'images/svg/line-vertical.svg'
import Apply from 'images/svg/apply.svg'
import Advertise from 'images/svg/advertise.svg'
import Earn from 'images/svg/earn.svg'

const StyledSection = styled(SectionContainer)`
    div {
        display: flex;
        justify-content: space-between;
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
    height: inherit;
    background-color: var(--color-grey-8);
`
const StyledHeader = styled(Header)`
    width: 100%;
    max-width: 42.8rem;

    &:last-child {
        padding-left: 4rem;
    }
`
const Flex = styled.div`
    display: flex;
`
const LineVertical = styled(LineVerticalSVG)`
    margin-top: 9.5rem;
    margin-right: 16px;
    width: 3rem;
    height: 33rem;
`
const WhoCanApply = () => {
    return (
        <StyledSection padding="8rem 0 4rem">
            <div>
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
                        <StyledHeader font_size="3.6rem">
                            {localize('Get started easily')}
                        </StyledHeader>
                        <Wrapper>
                            <Apply />
                            <Content max_width="32.4rem">
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
                            <Advertise />
                            <Content max_width="32.4rem">
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
                            <Earn />
                            <Content max_width="32.4rem">
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
                </Flex>
            </div>
            <CenteredSection padding="4rem 0">
                <LinkButton secondary to="/">
                    {localize('Sign up')}
                </LinkButton>
            </CenteredSection>
        </StyledSection>
    )
}

export default WhoCanApply
