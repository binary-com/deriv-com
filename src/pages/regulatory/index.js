import React from 'react'
import styled from 'styled-components'
import SEO from 'components/containers/seo'
import Layout from 'components/layout/layout'
import Hero from 'components/elements/hero'
import Container, { SectionContainer } from 'components/containers/container'
import { localize, WithIntl, Localize } from 'components/localization'
import { Header, Text } from 'components/elements/typography'
import { CardChildren } from 'components/elements/card.js'
import device from 'themes/device'
// Icons
import SVG from 'images/svg/svg.svg'
import Vanuatu from 'images/svg/footer-vanuatu.svg'
import MFSA from 'images/svg/mfsa.svg'
import FSC from 'images/svg/fsc.svg'
import Labuan from 'images/svg/footer-labuan.svg'

const RegulatoryWrapper = styled(SectionContainer)`
    background-image: linear-gradient(
        to bottom,
        var(--color-grey-2),
        var(--color-white)
    );

    @media ${device.tabletL} {
        padding-bottom: 4rem;
    }
`
const StyledContainer = styled(Container)`
    flex-direction: column;
`

const StyledText = styled(Text)`
    margin: 0.8rem 0;
    font-size: var(--text-size-sm);
`

const FlexWrapper = styled(Container)`
    flex-wrap: wrap;
    align-items: stretch;
    align-content: stretch;
    justify-content: space-between;
    min-width: 100%;
    margin-top: 2.4rem;

    & > * {
        flex-shrink: 0;
        width: 48%;
        margin: 1rem;
    }

    @media (max-width: 1249px) {
        justify-content: center;
        & > * {
            width: 100%;
            max-width: 50rem;
        }
    }

    @media ${device.tabletL} {
        margin: 2.66rem 0 0 0;

        & > * {
            margin: 1rem;
        }
    }
`

const Regulatory = () => (
    <Layout>
        <SEO
            title={localize('Regulatory information')}
            description={localize(
                'Deriv operates under the jurisdiction of Binary.com which holds multiple licences to comply with regulatory requirements around the world.',
            )}
        />
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
                    <CardChildren
                        Icon={MFSA}
                        title={localize('Binary Investments (Europe) Ltd')}
                        icon_width="24rem"
                        icon_height="16rem"
                    >
                        <Text align="center">
                            <Localize
                                text='Binary Investments (Europe) Ltd is licensed and regulated as a Category 3 Investment Services provider by the Malta Financial Services Authority (<0>licence no. IS/70156</0>).'
                                components={[
                                    <a
                                        key={0}
                                        target="_blank"
                                        href="/WS-Binary-Investments-Europe-Limited.pdf" />
                                ]}
                            />
                        </Text>
                    </CardChildren>
                    <CardChildren
                        Icon={FSC}
                        title={localize('Binary (BVI) Ltd')}
                        icon_width="24rem"
                        icon_height="16rem"
                    >
                        <Text align="center">
                            <Localize
                                text='Binary (BVI) Ltd is licensed and regulated by the British Virgin Islands Financial Services Commission - <0>view licence.</0>'
                                components={[
                                    <a
                                        key={0}
                                        target="_blank"
                                        href="/BVI_license.pdf"
                                    />
                                ]}
                            />
                        </Text>
                    </CardChildren>
                    <CardChildren
                        Icon={Vanuatu}
                        title={localize('Binary (V) Ltd')}
                        icon_width="24rem"
                        icon_height="16rem"
                    >
                        <Text align="center">
                            <Localize
                                text='Binary (V) Ltd is licensed and regulated by the Vanuatu Financial Services Commission - <0>view licence</0>'
                                components={[
                                    <a
                                        key={0}
                                        target="_blank"
                                        href="https://www.vfsc.vu/wp-content/uploads/2015/12/List-of-Licensees-under-Dealers-in-Securities-Licensing-Act-CAP-70-18.11.2016.pdf"
                                        rel="noopener noreferrer"
                                    />
                                ]}
                            />
                        </Text>
                    </CardChildren>
                    <CardChildren
                        Icon={Labuan}
                        title={localize('Binary (FX) Ltd')}
                        icon_width="24rem"
                        icon_height="16rem"
                    >
                        <Text align="center">
                            <Localize
                                text='Binary (FX) Ltd is licensed and regulated by the Labuan Financial Services Authority to carry on a money-broking business (<0>licence no. MB/18/0024</0>).'
                                components={[
                                    <a
                                        key={0}
                                        target="_blank"
                                        href="/Labuan-license.pdf"
                                        rel="noopener noreferrer"
                                    />
                                ]}
                            />
                        </Text>
                    </CardChildren>
                    <CardChildren
                        Icon={SVG}
                        title={localize('Binary (SVG) Ltd')}
                        icon_width="24rem"
                        icon_height="16rem"
                    >
                        <Text align="center">
                            {localize(
                                'Binary (SVG) Ltd is registered in St. Vincent and the Grenadines.',
                            )}
                        </Text>
                    </CardChildren>
                </FlexWrapper>
            </StyledContainer>
        </RegulatoryWrapper>
    </Layout>
)

export default WithIntl()(Regulatory)
