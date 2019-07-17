import React from 'react'
import SEO from '../components/containers/seo'
import Layout from '../components/layout/layout'
import { localize, WithIntl } from '../components/localization'
import Hero from 'components/elements/hero'
import Container from 'components/containers/container'
import styled from 'styled-components'
import { Header, Text } from 'components/elements/typography'

const RegulatoryWrapper = styled.section`
    background-image: linear-gradient(
        to bottom,
        var(--color-grey-2),
        var(--color-white)
    );
    width: 100%;
`
const StyledContainer = styled(Container)`
    flex-direction: column;
    padding: 8rem 0;
`

const StyledText = styled(Text)`
    margin: 0.8rem 0;
    font-size: 2rem;
`

const FlexWrapper = styled(Container)`
    flex-wrap: wrap;
    padding: 1.6rem 0;

    & > * {
        flex: 0 0 50%;
    }
`

const Regulatory = () => (
    <Layout>
        <SEO title={localize('Licences and regulations')} />
        <Hero
            header={localize('Licences and regulations')}
            paragraph={localize(
                'Deriv operates under the jurisdiction of Binary.com.',
            )}
        />
        <RegulatoryWrapper>
            <StyledContainer>
                <Header as="h2" color="black-2" align="center">
                    {localize('Binary Limited')}
                </Header>
                <StyledText align="center" lh="1.5">
                    {localize(
                        'Binary Limited, with a registered office at 47 Esplanade, St Helier, Jersey JE1 0BD, Channel Islands, is the holding company for the following subsidiaries.',
                    )}
                </StyledText>
                <FlexWrapper>
                    <Text align="center">1</Text>
                    <Text align="center">2</Text>
                    <Text align="center">3</Text>
                    <Text align="center">4</Text>
                    <Text align="center">5</Text>
                </FlexWrapper>
            </StyledContainer>
        </RegulatoryWrapper>
    </Layout>
)

export default WithIntl()(Regulatory)
