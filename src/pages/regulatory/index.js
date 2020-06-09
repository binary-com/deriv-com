import React from 'react'
import styled from 'styled-components'
import EUgrid from './_eu-grid'
// import DocumentAccordion from './_document_accordion'
import Layout from 'components/layout/layout'
import { Header, Text, LinkText, Divider } from 'components/elements'
import { SEO, SectionContainer, GridContainer, CssGrid, CssGridColumn } from 'components/containers'
import { localize, WithIntl, Localize } from 'components/localization'
// Icons
import EU from 'images/svg/europe-map.svg'
// import SVG from 'images/svg/svg.svg'
import Vanuatu from 'images/svg/footer-vanuatu.svg'
import FSC from 'images/svg/fsc.svg'
import Labuan from 'images/svg/footer-labuan.svg'
import device from 'themes/device.js'

const StyledHeader = styled(Header)`
    max-width: ${(props) => props.maxwidth || '100%'};
    margin: 0 auto;

    @media ${device.tabletS} {
        text-align: center;
    }
`
const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${(props) => props.padding || '4rem 0 0'};

    ${Text} {
        @media ${device.tabletS} {
            text-align: center;
        }
    }

    @media ${device.tabletS} {
        text-align: center;
    }
`
const Europe = styled(EU)`
    max-width: 69rem;
    max-height: 63rem;
    width: 100%;
    height: 100%;
    margin: 0;
`
const MaxText = styled(Text)`
    max-width: 62.2rem;
`
// will be added once the proper documents are ready
// const AccordionWrapper = styled(Flex)`
//     @media ${device.tabletL} {
//         padding: 0 4rem;
//     }
// `

const ResponsiveHeader = styled(StyledHeader)`
    @media ${device.mobileL} {
        font-size: 5rem;
    }
`

const Regulatory = () => (
    <Layout>
        <SEO
            title={localize('License and regulation information')}
            description={localize(
                'Deriv operates under the jurisdiction of Binary.com which holds multiple licences to comply with regulatory requirements around the world.',
            )}
        />
        <SectionContainer>
            <GridContainer>
                <ResponsiveHeader as="h1" align="center" lh="8rem">
                    {localize('Regulatory information')}
                </ResponsiveHeader>
                <StyledHeader
                    as="h4"
                    align="center"
                    weight="normal"
                    lh="3.6rem"
                    padding="1.6rem 0 0"
                >
                    {localize(
                        'The services offered on Deriv and Binary.com are provided by the Deriv Group. The group has several subsidiary companies that are licensed to operate Deriv and Binary.com in their registered jurisdictions.',
                    )}
                </StyledHeader>
                <StyledHeader as="h4" align="center" weight="normal" lh="3.6rem" pt="2rem">
                    {localize(
                        'Since 1999, the group has served traders around the world with integrity and reliability. We always hold ourselves to the highest ethical standards and regulatory requirements.',
                    )}
                </StyledHeader>
            </GridContainer>
        </SectionContainer>
        <Divider />
        <SectionContainer padding="8rem 0 0">
            <GridContainer>
                <StyledHeader size="3.2rem" align="center" padding="0" lh="4rem">
                    {localize('Deriv Limited')}
                </StyledHeader>
                <Box padding="1rem 0 4rem">
                    <Text lh="1.55" max_width="79.2rem">
                        {localize(
                            'Deriv Ltd, 47 Esplanade, St Helier, Jersey JE1 0BD, Channel Islands, is the holding company for the following subsidiaries.',
                        )}
                    </Text>
                </Box>
                <StyledHeader size="3.2rem" align="center" padding="0" lh="4rem">
                    {localize('Binary Investments (Europe) Ltd')}
                </StyledHeader>
                <Box padding="1rem 0 4rem">
                    <Text lh="1.55" max_width="79.2rem">
                        <Localize
                            translate_text="Binary Investments (Europe) Ltd, with a registered office at W Business Centre, Level 3, Triq Dun Karm, Birkirkara, BKR 9033, Malta, is licensed and regulated as a Category 3 Investment Services provider by the Malta Financial Services Authority (<0>licence no. IS/70156</0>)."
                            components={[
                                <LinkText
                                    color="red"
                                    key={0}
                                    weight="bold"
                                    target="_blank"
                                    href="/WS-Binary-Investments-Europe-Limited.pdf"
                                    rel="noopener noreferrer"
                                />,
                            ]}
                        />
                    </Text>
                    <Text lh="1.55" mt="2rem" max_width="79.2rem">
                        {localize(
                            'European Union residents who wish to trade investment products will have their accounts opened with Binary Investments (Europe) Ltd.',
                        )}
                    </Text>
                </Box>
            </GridContainer>
        </SectionContainer>
        <SectionContainer padding="2.4rem 0 0">
            <GridContainer>
                <CssGrid
                    columns="minmax(10rem, 69rem) minmax(45rem, 1fr)"
                    column_gap="2.4rem"
                    tablet_columns="1fr 1fr"
                    mobile_columns="1fr"
                    mobile_row_gap="2rem"
                >
                    <CssGridColumn>
                        <Europe />
                    </CssGridColumn>
                    <CssGridColumn padding="0.8rem 0 0">
                        <EUgrid />
                    </CssGridColumn>
                </CssGrid>
            </GridContainer>
        </SectionContainer>
        <SectionContainer padding="2.4rem 0 0">
            <GridContainer>
                <Box padding="0 0 4rem">
                    <Text lh="1.55" max_width="79.2rem">
                        {localize(
                            'EU passporting rights: Binary Investments (Europe) Ltd is entitled to provide its services to EU member states through EU passporting rights. Refer to the map above for the list of EU countries that have access to Deriv and Binary.com.',
                        )}
                    </Text>
                </Box>
            </GridContainer>
        </SectionContainer>
        <SectionContainer padding="0 0 4rem 0">
            {/* will be added once the proper documents are ready */}
            {/* <AccordionWrapper>
                <DocumentAccordion />
            </AccordionWrapper> */}
        </SectionContainer>
        <SectionContainer padding="0">
            <GridContainer>
                <Box padding="0 0 8rem">
                    <CssGrid
                        height="auto"
                        columns="15.4rem 1fr"
                        column_gap="1.6rem"
                        row_gap="4rem"
                        tablet_columns="1fr 5fr"
                        mobile_columns="1fr"
                    >
                        <CssGridColumn align="center">
                            <Labuan />
                        </CssGridColumn>
                        <CssGridColumn>
                            <StyledHeader size="3.2rem" lh="4rem" as="h4">
                                {localize('Binary (FX) Ltd')}
                            </StyledHeader>
                            <MaxText lh="1.55" mt="0.8rem">
                                <Localize
                                    translate_text="Binary (FX) Ltd., Lot No. F16, First Floor, Paragon Labuan, Jalan Tun Mustapha, 87000 Federal Territory of Labuan, Malaysia. Licensed and regulated by the Labuan Financial Services Authority to carry on a money-broking business <0>licence no. MB/18/0024</0>."
                                    components={[
                                        <LinkText
                                            key={0}
                                            color="red"
                                            weight="bold"
                                            target="_blank"
                                            href="/Labuan-license.pdf"
                                            rel="noopener noreferrer"
                                        />,
                                    ]}
                                />
                            </MaxText>
                            <MaxText lh="1.55" mt="2rem">
                                {localize(
                                    'Clients who wish to trade FX and CFDs with straight-through processing will have their account opened with Binary (FX) Ltd.',
                                )}
                            </MaxText>
                        </CssGridColumn>
                        <CssGridColumn align="center">
                            <Vanuatu />
                        </CssGridColumn>
                        <CssGridColumn>
                            <StyledHeader size="3.2rem" lh="4rem" as="h4">
                                {localize('Binary (V) Ltd')}
                            </StyledHeader>
                            <MaxText lh="1.55" mt="0.8rem">
                                <Localize
                                    translate_text="Binary (V) Ltd, Govant Building, Port Vila, PO Box 1276, Vanuatu, Republic of Vanuatu. Licensed and regulated by the Vanuatu Financial Services Commission - <0>view licence</0>."
                                    components={[
                                        <LinkText
                                            key={0}
                                            color="red"
                                            weight="bold"
                                            target="_blank"
                                            href="/Vanuatu-Financial-Services-Commission.pdf"
                                            rel="noopener noreferrer"
                                        />,
                                    ]}
                                />
                            </MaxText>
                        </CssGridColumn>
                        {/* Will be added later */}
                        {/* <CssGridColumn align="center">
                            <SVG />
                        </CssGridColumn> */}

                        {/* <CssGridColumn>
                            <StyledHeader size="3.6rem" lh="4.5rem" as='h4'>
                                {localize('Binary (SVG) LLC')}
                            </StyledHeader>
                            <Text lh="1.55" mt="0.8rem">
                                {localize(
                                    'Binary (SVG) LLC, Hinds Buildings, Kingstown, St. Vincent and the Grenadines; company number 25299 BC 2019.',
                                )}
                            </Text>
                        </CssGridColumn> */}
                        <CssGridColumn align="center">
                            <FSC />
                        </CssGridColumn>
                        <CssGridColumn>
                            <StyledHeader size="3.2rem" lh="4rem" as="h4">
                                {localize('Binary (BVI) Ltd')}
                            </StyledHeader>
                            <MaxText lh="1.55" mt="0.8rem">
                                <Localize
                                    translate_text="Binary (BVI) Ltd, Kingston Chambers, P.O. Box 173, Road Town, Tortola, British Virgin Islands. Licensed and regulated by the British Virgin Islands Financial Services Commission - <0>view licence</0>."
                                    components={[
                                        <LinkText
                                            key={0}
                                            color="red"
                                            weight="bold"
                                            target="_blank"
                                            href="/BVI_license.pdf"
                                            rel="noopener noreferrer"
                                        />,
                                    ]}
                                />
                            </MaxText>
                        </CssGridColumn>
                    </CssGrid>
                </Box>
            </GridContainer>
        </SectionContainer>
    </Layout>
)

export default WithIntl()(Regulatory)
