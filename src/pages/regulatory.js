import React from 'react'
import styled from 'styled-components'
import SEO from '../components/containers/seo'
import Layout from '../components/layout/layout'
import { localize, WithIntl } from '../components/localization'
import Hero from 'components/elements/hero'
import Container from 'components/containers/container'
import { Header, Text } from 'components/elements/typography'
import { CardTypeTwo } from 'components/elements/card.js'
import SVG from 'images/svg/svg.svg'
import Vanuatu from 'images/svg/footer-vanuatu.svg'
import MFSA from 'images/svg/mfsa.svg'
import FSC from 'images/svg/fsc.svg'
import Labuan from 'images/svg/footer-labuan.svg'

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
    align-items: stretch;
    align-content: stretch;
    justify-content: space-between;
    min-width: 100%;

    & > * {
        flex-shrink: 0;
        width: 48%;
        margin: 1rem;
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
                    <CardTypeTwo
                        Icon={<SVG />}
                        title={localize('Binary (SVG) Ltd')}
                    >
                        <Text align="center">
                            {localize(
                                'Binary (SVG) Ltd is registered in St. Vincent and the Grenadines.',
                            )}
                        </Text>
                    </CardTypeTwo>
                    <CardTypeTwo
                        Icon={<Vanuatu width="240" height="160" />}
                        title={localize('Binary (V) Ltd')}
                    >
                        <Text align="center">
                            {localize(
                                'Binary (V) Ltd is licensed and regulated by the Vanuatu Financial Services Commission -',
                            )}{' '}
                            <a href="">{localize('view license')}</a>
                        </Text>
                    </CardTypeTwo>
                    <CardTypeTwo
                        Icon={<MFSA />}
                        title={localize('Binary Investments (Europe) Ltd')}
                    >
                        <Text align="center">
                            {localize(
                                'Binary Investments (Europe) Ltd is licensed and regulated as a Category 3 Investment Services provider by the Malta Financial Services Authority',
                            )}{' '}
                            (
                            <a href="">
                                {`${localize('licence no. IS/70156')}`}
                            </a>
                            ).
                        </Text>
                    </CardTypeTwo>
                    <CardTypeTwo
                        Icon={<FSC width="240" height="160" />}
                        title={localize('Binary (BVI) Ltd')}
                    >
                        <Text align="center">
                            {localize(
                                'Binary (BVI) Ltd is licensed and regulated by the British Virgin Islands Financial Services Commission -',
                            )}{' '}
                            <a href="">{localize('view licence.')}</a>
                        </Text>
                    </CardTypeTwo>
                    <CardTypeTwo
                        Icon={<Labuan width="200" height="120" />}
                        title={localize('Binary (FX) Ltd')}
                    >
                        <Text align="center">
                            {localize(
                                'Binary (FX) Ltd is licensed and regulated by the Labuan Financial Services Authority to carry on a money-broking business ',
                            )}{' '}
                            (
                            <a href="">
                                {`${localize('licence no. MB/18/0024')}`}
                            </a>
                            ).
                        </Text>
                    </CardTypeTwo>
                </FlexWrapper>
            </StyledContainer>
        </RegulatoryWrapper>
    </Layout>
)

export default WithIntl()(Regulatory)
