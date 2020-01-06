import React from 'react'
import styled from 'styled-components'
import Layout from 'components/layout/layout'
import {
    Hero,
    Header,
    Text,
    CardChildren,
    Accordion,
    AccordionItem,
    LinkText,
} from 'components/elements'
import { Container, SectionContainer, SEO, Flex } from 'components/containers'
import { localize, WithIntl, Localize } from 'components/localization'
import device from 'themes/device'
// Icons
import SVG from 'images/svg/svg.svg'
import Vanuatu from 'images/svg/footer-vanuatu.svg'
import MFSA from 'images/svg/mfsa.svg'
import FSC from 'images/svg/fsc.svg'
import Labuan from 'images/svg/footer-labuan.svg'

const RegulatoryWrapper = styled(SectionContainer)`
    background-image: linear-gradient(to bottom, var(--color-grey-2), var(--color-white));

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

    @media ${device.tabletL} {
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:
            'inv fx'
            'svg v'
            'bvi .';
    }
    @media ${device.tabletS} {
        grid-template-columns: repeat(1, 1fr);
        grid-template-areas:
            'inv'
            'fx'
            'bvi'
            'v'
            'svg';
    }
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
            paragraph={localize('Deriv operates under the jurisdiction of Binary.com.')}
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
                        <CardChildren Icon={FSC} title={localize('Binary (BVI) Ltd')} width="100%">
                            <Text align="center">
                                <Localize
                                    translate_text="Binary (BVI) Ltd is licensed and regulated by the British Virgin Islands Financial Services Commission - <0>view licence</0>."
                                    components={[
                                        <a key={0} target="_blank" href="/BVI_license.pdf" />,
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
                        <CardChildren Icon={SVG} title={localize('Binary (SVG) Ltd')} width="100%">
                            <Text align="center">
                                {localize(
                                    'Binary (SVG) Ltd is registered in St. Vincent and the Grenadines.',
                                )}
                            </Text>
                        </CardChildren>
                    </CardWrapper>
                </CardChildrenContainer>
                <Accordion>
                    <AccordionItem header={localize('Pillar 3 disclosures')}>
                        <Text>
                            {localize(
                                'The Pillar 3 disclosure report of Binary Investments (Europe) Limited has been prepared in accordance with the Capital Requirements Directive IV and the Capital Requirements Regulation. Read our Pillar 3 disclosure report to understand how we comply with market discipline as a market participant.',
                            )}
                        </Text>
                        <Flex mt="1.8rem">
                            <LinkText color="red" weight="bold">
                                {localize('Open pillar 3 disclosure report')}
                            </LinkText>
                        </Flex>
                    </AccordionItem>
                    <AccordionItem header={localize('Key information documents')}>
                        <Text>
                            {localize(
                                'These documents provide you with key information about our investment products. This information is required by law to help you understand the nature, risks, costs, potential gains and losses of these products and to help you compare them with other products.',
                            )}
                        </Text>
                        <Flex mt="1.8rem" spacing="8rem" jc="space-evenly">
                            <LinkText color="red" weight="bold">
                                {localize('Commodities')}
                            </LinkText>
                            <LinkText color="red" weight="bold">
                                {localize('Forex')}
                            </LinkText>
                            <LinkText color="red" weight="bold">
                                {localize('Cryptocurrency')}
                            </LinkText>
                        </Flex>
                    </AccordionItem>
                    <AccordionItem header="RTS 28">
                        <Text>
                            {localize(
                                'These documents provide you with key information about our investment products. This information is required by law to help you understand the nature, risks, costs, potential gains and losses of these products and to help you compare them with other products.',
                            )}
                        </Text>
                        <Flex mt="1.8rem" spacing="8rem" jc="space-evenly">
                            <LinkText color="red" weight="bold">
                                {localize('Open Up/Down document')}
                            </LinkText>
                            <LinkText color="red" weight="bold">
                                {localize('Open Touch/No Touch document')}
                            </LinkText>
                        </Flex>
                    </AccordionItem>
                    <AccordionItem header="RTS 27">
                        <Text align="center">{localize('Q1 2019')}</Text>
                        <Flex mt="1.8rem" spacing="8rem" jc="space-evenly">
                            <LinkText color="red" weight="bold">
                                {localize('Table 1 - Type of execution venue')}
                            </LinkText>
                            <LinkText color="red" weight="bold">
                                {localize('Table 4 - Daily Price information')}
                            </LinkText>
                            <LinkText color="red" weight="bold">
                                {localize('Table 3 - Intra-Day Price information')}
                            </LinkText>
                            <LinkText color="red" weight="bold">
                                {localize('Table 6 - Likelihood of execution information')}
                            </LinkText>
                        </Flex>
                        <Text align="center">{localize('Q2 2019')}</Text>
                        <Flex mt="1.8rem" spacing="8rem" jc="space-evenly">
                            <LinkText color="red" weight="bold">
                                {localize('Table 1 - Type of execution venue')}
                            </LinkText>
                            <LinkText color="red" weight="bold">
                                {localize('Table 4 - Daily Price information')}
                            </LinkText>
                            <LinkText color="red" weight="bold">
                                {localize('Table 3 - Intra-Day Price information')}
                            </LinkText>
                            <LinkText color="red" weight="bold">
                                {localize('Table 6 - Likelihood of execution information')}
                            </LinkText>
                        </Flex>
                        <Text align="center">{localize('Q3 2019')}</Text>
                        <Flex mt="1.8rem" spacing="8rem" jc="space-evenly">
                            <LinkText color="red" weight="bold">
                                {localize('Table 1 - Type of execution venue')}
                            </LinkText>
                            <LinkText color="red" weight="bold">
                                {localize('Table 4 - Daily Price information')}
                            </LinkText>
                            <LinkText color="red" weight="bold">
                                {localize('Table 3 - Intra-Day Price information')}
                            </LinkText>
                            <LinkText color="red" weight="bold">
                                {localize('Table 6 - Likelihood of execution information')}
                            </LinkText>
                        </Flex>
                    </AccordionItem>
                    <AccordionItem header="RTS 28">
                        <Text>
                            {localize(
                                'These documents provide you with key information about our investment products. This information is required by law to help you understand the nature, risks, costs, potential gains and losses of these products and to help you compare them with other products.',
                            )}
                        </Text>
                        <Flex mt="1.8rem" spacing="8rem" jc="space-evenly">
                            <LinkText color="red" weight="bold">
                                {localize('Open Up/Down document')}
                            </LinkText>
                            <LinkText color="red" weight="bold">
                                {localize('Open Touch/No Touch document')}
                            </LinkText>
                        </Flex>
                    </AccordionItem>
                    <AccordionItem header="RTS 27 2018">
                        <Text align="center">{localize('Q3 2019')}</Text>
                        <Flex mt="1.8rem" spacing="8rem" jc="space-evenly">
                            <LinkText color="red" weight="bold">
                                {localize('Table 1 - Type of execution venue')}
                            </LinkText>
                            <LinkText color="red" weight="bold">
                                {localize('Table 4 - Daily Price information')}
                            </LinkText>
                            <LinkText color="red" weight="bold">
                                {localize('Table 3 - Intra-Day Price information')}
                            </LinkText>
                            <LinkText color="red" weight="bold">
                                {localize('Table 6 - Likelihood of execution information')}
                            </LinkText>
                        </Flex>
                        <Text align="center">{localize('Q4 2019')}</Text>
                        <Flex mt="1.8rem" spacing="8rem" jc="space-evenly">
                            <LinkText color="red" weight="bold">
                                {localize('Table 1 - Type of execution venue')}
                            </LinkText>
                            <LinkText color="red" weight="bold">
                                {localize('Table 4 - Daily Price information')}
                            </LinkText>
                            <LinkText color="red" weight="bold">
                                {localize('Table 3 - Intra-Day Price information')}
                            </LinkText>
                            <LinkText color="red" weight="bold">
                                {localize('Table 6 - Likelihood of execution information')}
                            </LinkText>
                        </Flex>
                    </AccordionItem>
                </Accordion>
            </StyledContainer>
        </RegulatoryWrapper>
    </Layout>
)

export default WithIntl()(Regulatory)
