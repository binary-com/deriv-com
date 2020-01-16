import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { localize, Localize } from 'components/localization'
import { Container, Wrapper, Flex } from 'components/containers'
import { Header, Text, Image } from 'components/elements'
import device from 'themes/device'

const Background = styled.div`
    background: var(--color-black);
    width: 100%;
    height: 100%;
`

const StyledContainer = styled(Container)`
    padding: 12rem 19rem;
    white-space: nowrap;

    @media ${device.laptop} {
        padding: 12rem;
    }
    @media ${device.tablet} {
        padding: 8rem 4rem;
    }
    @media ${device.mobileL} {
        padding: 8rem 2rem;
    }
`

const NavigationWrapper = styled(Flex)`
    margin-top: 1.6rem;
`

const Navigation = styled(Flex)`
    cursor: pointer;
`

const Separator = styled.span`
    width: 2px;
    height: 3rem;
    background: white;
`

const StyledHeader = styled(Header)`
    transition: color 0.25s;
    ${props =>
        props.active
            ? css`
                  color: var(--color-white);
              `
            : css`
                  color: rgba(255, 255, 255, 0.32);
                  &:hover {
                      color: rgba(255, 255, 255, 0.5);
                  }
              `}
`

const TrailNavigation = styled.span`
    height: 4px;
    width: 4.6rem;
    background: ${props => (props.active ? 'var(--color-red)' : 'var(--color-black)')};
    margin: 1rem 0;
    transition: background 0.25s;
`

const ContentWrapper = styled.div`
    margin-top: ${props => props.margin_top || 'none'};
    white-space: normal;
    max-width: 79.2rem;
`

const LeadershipWrapper = styled(Flex)`
    margin-top: 4rem;

    > * {
        flex: 1;
    }
    @media ${device.tabletL} {
        flex-direction: column;

        ${Wrapper} {
            width: 28.2rem;
            margin-bottom: 4rem;
        }
        ${Header} {
            text-align: center;
        }
        ${Text} {
            text-align: center;
        }
    }
`

const LeadershipTitle = styled(Header)`
    margin-bottom: 0.8rem;
`

const LeadershipPosition = styled(Header)`
    margin-bottom: 1.6rem;
`

const Hero = ({ navigation, setNavigation }) => {
    const is_story = navigation === 'story'
    const is_leadership = navigation === 'leadership'

    return (
        <Background>
            <StyledContainer direction="column">
                <Header as="h1" color="white" align="center">
                    {localize('About us')}
                </Header>
                <NavigationWrapper direction="row">
                    <Navigation
                        width="auto"
                        direction="column"
                        m="0 2.4rem"
                        onClick={() => setNavigation('story')}
                    >
                        <StyledHeader
                            as="h2"
                            font_size="var(--text-size-m)"
                            weight="normal"
                            active={is_story}
                        >
                            {localize('Our story')}
                        </StyledHeader>
                        <TrailNavigation active={is_story} />
                    </Navigation>
                    <Separator />
                    <Navigation
                        width="auto"
                        direction="column"
                        m="0 2.4rem"
                        onClick={() => setNavigation('leadership')}
                    >
                        <StyledHeader
                            as="h2"
                            font_size="var(--text-size-m)"
                            weight="normal"
                            active={is_leadership}
                        >
                            {localize('Our leadership')}
                        </StyledHeader>
                        <TrailNavigation active={is_leadership} />
                    </Navigation>
                </NavigationWrapper>
                {is_story && (
                    <ContentWrapper margin_top="9.1rem">
                        <Text secondary color="white">
                            {localize(
                                'Deriv is a new trading platform created by the Binary Group, a multi-award winning pioneer in online trading. It’s built upon 20 years of experience, customer focus, and technical innovation. With our powerful yet simple trading experience and tools, new and professional traders alike can understand risk and make better trading decisions.',
                            )}
                        </Text>
                    </ContentWrapper>
                )}
                {is_leadership && (
                    <ContentWrapper>
                        <LeadershipWrapper ai="center">
                            <Wrapper max_width="28.2rem" margin={{ right: '2.4rem' }}>
                                <Image img_name="jean-yves.png" alt={localize('Jean Yves')} />
                            </Wrapper>

                            <div>
                                <LeadershipTitle
                                    as="h3"
                                    size="var(--text-size-header-1)"
                                    color="white"
                                >
                                    <Localize translate_text="Jean-Yves Sireau" />
                                </LeadershipTitle>
                                <LeadershipPosition
                                    as="h4"
                                    weight="normal"
                                    color="white"
                                    lh="3.6rem"
                                >
                                    {localize('Founder and Chief Executive Officer')}
                                </LeadershipPosition>
                                <Text color="white">
                                    {localize(
                                        'Jean-Yves has been an entrepreneur since the age of 20. From 1997 to 1999, he developed the algorithms that would become one of the world’s first trading platforms. He was granted a patent for his binary options trading system in 2007, and granted two more patents in 2011 for systems and methods that enable financial market speculation.',
                                    )}
                                </Text>
                            </div>
                        </LeadershipWrapper>
                    </ContentWrapper>
                )}
            </StyledContainer>
        </Background>
    )
}

Hero.propTypes = {
    navigation: PropTypes.string,
    setNavigation: PropTypes.func,
}

export default Hero
