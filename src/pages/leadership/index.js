import React from 'react'
import styled from 'styled-components'
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
                title={localize('Our leadership | Deriv')}
                description={localize(
                    'Meet our leaders, dedicated to making Deriv an innovative and reliable broker that provides a simple and flexible trading experience.',
                )}
            />
            <Background>
                <StyledContainer direction="column">
                    <Header as="h1" type="display-title" color="white" align="center">
                        {localize('Our leadership')}
                    </Header>

                    <Show.Desktop>
                        <ContentWrapper>
                            <LeadershipWrapper mt="4rem" ai="center">
                                <Box max_width="28.2rem" mr="2.4rem">
                                    <QueryImage
                                        data={data['jean_yves']}
                                        alt={localize("Jean-Yves Sireau - Deriv's CEO")}
                                        width="28.2rem"
                                    />
                                </Box>

                                <div>
                                    <LeadershipTitle as="h3" type="section-title" color="white">
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
                                            'Jean-Yves has been an entrepreneur since the age of 20 when he started working on algorithms that developed into one of the world’s first trading platforms. He has been granted patents for his options trading system and financial market speculation methods. In over two decades, he has led Deriv from a startup to a team of 700+ with offices in 13 countries and a rapidly growing client base in Asia, Europe, Africa, and South America.',
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
                                            'Jean-Yves has been an entrepreneur since the age of 20 when he started working on algorithms that developed into one of the world’s first trading platforms. He has been granted patents for his options trading system and financial market speculation methods. In over two decades, he has led Deriv from a startup to a team of 700+ with offices in 13 countries and a rapidly growing client base in Asia, Europe, Africa, and South America.',
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
