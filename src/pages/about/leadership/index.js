import React from 'react'
import styled, { css } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Loadable from '@loadable/component'
import { Container, Box, Flex, SEO, Show } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, Localize, WithIntl } from 'components/localization'
import { Header, Text, QueryImage } from 'components/elements'
import device from 'themes/device'

const Leaders = Loadable(() => import('./_leaders'))

const query = graphql`
    query {
        jean_yves_mobile: file(relativePath: { eq: "leaders/jean-yves-mobile.png" }) {
            ...fadeIn
        }
        jean_yves: file(relativePath: { eq: "leaders/jean-yves.png" }) {
            ...fadeIn
        }
    }
`
const Background = styled.div`
    background: var(--color-black);
    width: 100%;
    height: 100%;
`

const StyledContainer = styled(Container)`
    padding: 12rem 19rem;
    white-space: nowrap;

    @media ${device.laptopL} {
        padding: 12rem 4rem;
    }
    @media ${device.tabletL} {
        padding: 5rem 2rem;
        width: 100%;

        > h1 {
            font-size: 4.5rem;
        }
    }
`
const ContentWrapper = styled.div`
    margin-top: ${(props) => props.margin_top || 'none'};
    white-space: normal;
    max-width: 79.8rem;

    @media ${device.mobileL} {
        max-width: 42.8rem;
    }
`

const LeadershipWrapper = styled(Flex)`
    @media ${device.tabletL} {
        flex-direction: column;
        margin-top: 1.6rem;

        ${Box} {
            width: 28.2rem;
            margin-bottom: 4rem;
        }
        ${Header} {
            text-align: left;
        }
        ${Text} {
            text-align: left;
        }
    }
`

const LeadershipTitle = styled(Header)`
    margin-bottom: 0.8rem;

    @media ${device.tabletL} {
        font-size: 4rem;
        margin-top: 1.6rem;
    }
`

const LeadershipPosition = styled(Header)`
    margin-bottom: 1.6rem;

    @media ${device.tabletL} {
        font-size: 2.4rem;
        margin-bottom: 2rem;
    }
`

const NavigationWrapper = styled(Flex)`
    margin: 1.6rem 0;
`

const Navigation = styled(Flex)`
    cursor: pointer;
    margin: 0 2.4rem;

    @media ${device.tablet} {
        margin: ${(props) => (props.left ? '0 3rem 0 0' : '0 0 0 3rem')};
    }
    @media ${device.mobileS} {
        margin: ${(props) => (props.left ? '0 2rem 0 0' : '0 0 0 2rem')};
    }
`

const StyledHeader = styled(Header)`
    transition: color 0.25s;
    ${(props) =>
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
    @media ${device.tabletL} {
        font-size: 3rem;
    }
    @media ${device.mobileL} {
        font-size: 2rem;
    }
    @media ${device.mobileM} {
        font-size: 1.8rem;
    }
`
const StyledText = styled(Text)`
    max-width: 48.6rem;
    @media ${device.tabletL} {
        font-size: var(--text-size-sm);
    }
`
const Leadership = () => {

    const data = useStaticQuery(query)
    return (
        <Layout>
            <SEO
                title={localize('About Us | An Online Trading Platform | Deriv.com')}
                description={localize(
                    'Deriv.com - A Binary.com brand, is a pioneer and award-winning online trading platform in the trading market.',
                )}
            />
            <Background>
                <StyledContainer direction="column">
                    <Header as="h1" type="display-title" color="white" align="center">
                        {localize('About us')}
                    </Header>
                    <NavigationWrapper direction="row">
                        <Navigation
                            width="auto"
                            direction="column"

                        >
                            <StyledHeader
                                as="h2"
                                type="sub-section-title"
                                weight="normal"
                                active={true}
                            >
                                {localize('Our leadership')}
                            </StyledHeader>
                        </Navigation>
                    </NavigationWrapper>

                    <Show.Desktop>
                        <ContentWrapper>
                            <LeadershipWrapper mt="4rem" ai="center">
                                <Box max_width="28.2rem" mr="2.4rem">
                                    <QueryImage
                                        data={data['jean_yves']}
                                        alt={localize('Jean Yves')}
                                        width="28.2rem"
                                    />
                                </Box>

                                <div>
                                    <LeadershipTitle
                                        as="h3"
                                        type="section-title"
                                        color="white"
                                    >
                                        <Localize translate_text="Jean-Yves Sireau" />
                                    </LeadershipTitle>
                                    <LeadershipPosition
                                        as="h4"
                                        type="sub-section-title"
                                        weight="normal"
                                        color="white"
                                        lh="3.6rem"
                                    >
                                        {localize('Founder and Chief Executive Officer')}
                                    </LeadershipPosition>
                                    <StyledText color="white">
                                        {localize(
                                            'Jean-Yves has been an entrepreneur since the age of 20. From 1997 to 1999, he developed the algorithms that would become one of the world’s first trading platforms. He was granted a patent for his binary options trading system in 2007, and granted two more patents in 2011 for systems and methods that enable financial market speculation.',
                                        )}
                                    </StyledText>
                                </div>
                            </LeadershipWrapper>
                        </ContentWrapper>
                    </Show.Desktop>
                    <Show.Mobile>
                        <ContentWrapper>
                            <LeadershipWrapper mt="4rem" ai="center">
                                <QueryImage
                                    data={data['jean_yves_mobile']}
                                    alt={localize('Jean Yves')}
                                    width="100%"
                                />
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
                                    <StyledText color="white">
                                        {localize(
                                            'Jean-Yves has been an entrepreneur since the age of 20. From 1997 to 1999, he developed the algorithms that would become one of the world’s first trading platforms. He was granted a patent for his binary options trading system in 2007, and granted two more patents in 2011 for systems and methods that enable financial market speculation.',
                                        )}
                                    </StyledText>
                                </div>
                            </LeadershipWrapper>
                        </ContentWrapper>
                    </Show.Mobile>

                </StyledContainer>
            </Background>

            <Leaders />
        </Layout>
    )
}

export default WithIntl()(Leadership)
