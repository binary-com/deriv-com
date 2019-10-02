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

const CardChildrenContainer = styled(SectionContainer)`
    padding: 4rem 0 0 0;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    grid-column-gap: 2rem;
    grid-row-gap: 4rem;
    grid-template-areas:
        'inv inv inv inv fx fx fx fx bvi bvi bvi bvi'
        'v v v v svg svg svg svg . . . .';
`
const CardWrapper = styled.div`
    grid-area: ${props => props.grid_area};
    height: ${props => (props.small ? '26.8rem' : '34.6rem')};
`
const Regulatory = () => (
    <Layout>
        <SEO
            title={localize('Licences and regulations')}
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
                <CardChildrenContainer>
                    <CardWrapper grid_area="inv">
                        <CardChildren
                            Icon={MFSA}
                            title={localize('Binary Investments (Europe) Ltd')}
                            width="100%"
                        >
                            <Text align="center">
                                <Localize
                                    translate_text="Binary Investments (Europe) Ltd is licensed and regulated as a Category 3 Investment Services provider by the Malta Financial Services Authority (<0>licence no. IS/70156</0>)."
                                    components={[
                                        <a
                                            key={0}
                                            target="_blank"
                                            href="/WS-Binary-Investments-Europe-Limited.pdf"
                                        />,
                                    ]}
                                />
                            </Text>
                        </CardChildren>
                    </CardWrapper>
                    <CardWrapper grid_area="fx">
                        <CardChildren
                            Icon={Labuan}
                            title={localize('Binary (FX) Ltd')}
                            width="100%"
                        >
                            <Text align="center">
                                <Localize
                                    translate_text="Binary (FX) Ltd is licensed and regulated by the Labuan Financial Services Authority to carry on a money-broking business (<0>licence no. MB/18/0024</0>)."
                                    components={[
                                        <a
                                            key={0}
                                            target="_blank"
                                            href="/Labuan-license.pdf"
                                            rel="noopener noreferrer"
                                        />,
                                    ]}
                                />
                            </Text>
                        </CardChildren>
                    </CardWrapper>
                    <CardWrapper grid_area="bvi">
                        <CardChildren
                            Icon={FSC}
                            title={localize('Binary (BVI) Ltd')}
                            width="100%"
                        >
                            <Text align="center">
                                <Localize
                                    translate_text="Binary (BVI) Ltd is licensed and regulated by the British Virgin Islands Financial Services Commission - <0>view licence</0>."
                                    components={[
                                        <a
                                            key={0}
                                            target="_blank"
                                            href="/BVI_license.pdf"
                                        />,
                                    ]}
                                />
                            </Text>
                        </CardChildren>
                    </CardWrapper>
                    <CardWrapper grid_area="v" small>
                        <CardChildren
                            Icon={Vanuatu}
                            title={localize('Binary (V) Ltd')}
                            width="100%"
                        >
                            <Text align="center">
                                <Localize
                                    translate_text="Binary (V) Ltd is licensed and regulated by the Vanuatu Financial Services Commission - <0>view licence</0>."
                                    components={[
                                        <a
                                            key={0}
                                            target="_blank"
                                            href="https://www.vfsc.vu/wp-content/uploads/2015/12/List-of-Licensees-under-Dealers-in-Securities-Licensing-Act-CAP-70-18.11.2016.pdf"
                                            rel="noopener noreferrer"
                                        />,
                                    ]}
                                />
                            </Text>
                        </CardChildren>
                    </CardWrapper>
                    <CardWrapper grid_area="svg" small>
                        <CardChildren
                            Icon={SVG}
                            title={localize('Binary (SVG) Ltd')}
                            width="100%"
                        >
                            <Text align="center">
                                {localize(
                                    'Binary (SVG) Ltd is registered in St. Vincent and the Grenadines.',
                                )}
                            </Text>
                        </CardChildren>
                    </CardWrapper>
                </CardChildrenContainer>
            </StyledContainer>
        </RegulatoryWrapper>
    </Layout>
)

export default WithIntl()(Regulatory)
