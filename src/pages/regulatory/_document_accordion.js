import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text, Accordion, AccordionItem, LinkText } from 'components/elements'
import { Flex } from 'components/containers'
import { localize } from 'components/localization'
import PDFIcon from 'images/svg/pdf-icon.svg'
import XLSXIcon from 'images/svg/xlsx-icon.svg'
import device from 'themes/device'

const IconContainer = styled(Flex)`
    justify-content: flex-start;
    align-items: center;
    min-width: ${(props) => props.minWidth || ''};
    padding-bottom: ${(props) => props.paddingBottom || ''};
    text-decoration: none;

    svg {
        margin-right: 0.8rem;
    }
    &:hover {
        cursor: pointer;

        ${LinkText} {
            color: var(--color-red);
            text-decoration: underline;
        }
    }
    @media ${device.tablet} {
        padding-bottom: 0;
        width: 100%;
    }
`

const EdgeFlex = styled(Flex)`
    /* Edge does not support space-evenly */
    @supports (-ms-ime-align: auto) {
        justify-content: space-around;
    }
`

const RTS28 = ({ urls }) => (
    <EdgeFlex mt="1.8rem" spacing="8rem" jc="space-evenly" wrap="wrap">
        <IconContainer
            width="unset"
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            href={urls[0]}
        >
            <PDFIcon />
            <LinkText color="red" weight="bold" as="p">
                {localize('BIEL RTS28 for 2017')}
            </LinkText>
        </IconContainer>
        <IconContainer
            width="unset"
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            href={urls[1]}
        >
            <PDFIcon />
            <LinkText color="red" weight="bold" as="p">
                {localize('BIEL RTS28 for 2018')}
            </LinkText>
        </IconContainer>
    </EdgeFlex>
)

const QuarterTable = ({ quarters }) => (
    <div style={{ padding: '0.8rem' }}>
        {quarters.map((quarter, idx) => (
            <div key={idx} style={{ paddingBottom: idx === quarters.length - 1 ? '' : '1.6rem' }}>
                <Text align="center" pb="1.6rem">
                    {quarter.name}
                </Text>
                <Flex jc="flex-start" wrap="wrap">
                    <IconContainer
                        width="unset"
                        minWidth="49%"
                        paddingBottom="1.6rem"
                        as="a"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={quarter.urls[0]}
                    >
                        <XLSXIcon />
                        <LinkText color="red" weight="bold" as="p">
                            {localize('Table 1 - Type of execution venue')}
                        </LinkText>
                    </IconContainer>
                    <IconContainer
                        paddingBottom="1.6rem"
                        width="unset"
                        as="a"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={quarter.urls[1]}
                    >
                        <XLSXIcon />
                        <LinkText color="red" weight="bold" as="p">
                            {localize('Table 4 - Daily Price information')}
                        </LinkText>
                    </IconContainer>
                    <IconContainer
                        width="unset"
                        minWidth="49%"
                        as="a"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={quarter.urls[2]}
                    >
                        <XLSXIcon />
                        <LinkText color="red" weight="bold" as="p">
                            {localize('Table 3 - Intra-Day Price information')}
                        </LinkText>
                    </IconContainer>
                    <IconContainer
                        width="unset"
                        as="a"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={quarter.urls[3]}
                    >
                        <XLSXIcon />
                        <LinkText color="red" weight="bold" as="p">
                            {localize('Table 6 - Likelihood of execution information')}
                        </LinkText>
                    </IconContainer>
                </Flex>
            </div>
        ))}
    </div>
)

const DocumentAccordion = () => {
    return (
        <div style={{ maxWidth: '792px' }}>
            <Accordion>
                <AccordionItem header={localize('Pillar 3 disclosures')}>
                    <Text>
                        {localize(
                            'The Pillar 3 disclosure report of Binary Investments (Europe) Limited has been prepared in accordance with the Capital Requirements Directive IV and the Capital Requirements Regulation. Read our Pillar 3 disclosure report to understand how we comply with market discipline as a market participant.',
                        )}
                    </Text>
                    <Flex mt="1.8rem">
                        <IconContainer
                            width="unset"
                            as="a"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="/pillar-3-disclosure-report.pdf"
                        >
                            <PDFIcon />
                            <LinkText color="red" weight="bold" as="p">
                                {localize('Open pillar 3 disclosure report')}
                            </LinkText>
                        </IconContainer>
                    </Flex>
                </AccordionItem>
                <AccordionItem header={localize('Key information documents')}>
                    <Text>
                        {localize(
                            'These documents provide you with key information about our investment products. This information is required by law to help you understand the nature, risks, costs, potential gains and losses of these products and to help you compare them with other products.',
                        )}
                    </Text>
                    <EdgeFlex mt="1.8rem" spacing="8rem" jc="space-evenly">
                        <IconContainer
                            width="unset"
                            as="a"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="/kid_commodities.pdf"
                        >
                            <PDFIcon />
                            <LinkText color="red" weight="bold" as="p">
                                {localize('Commodities')}
                            </LinkText>
                        </IconContainer>
                        <IconContainer
                            width="unset"
                            as="a"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="/kid_forex.pdf"
                        >
                            <PDFIcon />
                            <LinkText color="red" weight="bold" as="p">
                                {localize('Forex')}
                            </LinkText>
                        </IconContainer>
                        <IconContainer
                            width="unset"
                            as="a"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="/kid_crypto.pdf"
                        >
                            <PDFIcon />
                            <LinkText color="red" weight="bold" as="p">
                                {localize('Cryptocurrency')}
                            </LinkText>
                        </IconContainer>
                    </EdgeFlex>
                </AccordionItem>
                <AccordionItem header="RTS 28">
                    <Text>
                        {localize(
                            'These documents provide you with key information about our investment products. This information is required by law to help you understand the nature, risks, costs, potential gains and losses of these products and to help you compare them with other products.',
                        )}
                    </Text>
                    <RTS28 urls={['/BIEL-RTS28-for-2017.pdf', '/BIEL-RTS28-for-2018.pdf']} />
                </AccordionItem>
                <AccordionItem header="RTS 27 2019">
                    <QuarterTable
                        quarters={[
                            {
                                name: 'Q1 2019',
                                urls: [
                                    '/RTS_27_Q1_2019_Table_1.xlsx',
                                    '/RTS_27_Q1_2019_Table_4.xlsx',
                                    '/RTS_27_Q1_2019_Table_3.xlsx',
                                    '/RTS_27_Q1_2019_Table_6.xlsx',
                                ],
                            },
                            {
                                name: 'Q2 2019',
                                urls: [
                                    '/RTS_27_Q2_2019_Table_1.xlsx',
                                    '/RTS_27_Q2_2019_Table_4.xlsx',
                                    '/RTS_27_Q2_2019_Table_3.xlsx',
                                    '/RTS_27_Q2_2019_Table_6.xlsx',
                                ],
                            },
                            {
                                name: 'Q3 2019',
                                urls: [
                                    '/RTS_27_Q3_2019_Table_1.xlsx',
                                    '/RTS_27_Q3_2019_Table_4.xlsx',
                                    '/RTS_27_Q3_2019_Table_3.xlsx',
                                    '/RTS_27_Q3_2019_Table_6.xlsx',
                                ],
                            },
                        ]}
                    />
                </AccordionItem>
                <AccordionItem header="RTS 27 2018">
                    <QuarterTable
                        quarters={[
                            {
                                name: 'Q3 2018',
                                urls: [
                                    '/RTS_27_Q3_2018_Table_1.xlsx',
                                    '/RTS_27_Q3_2018_Table_4.xlsx',
                                    '/RTS_27_Q3_2018_Table_3.xlsx',
                                    '/RTS_27_Q3_2018_Table_6.xlsx',
                                ],
                            },
                            {
                                name: 'Q4 2018',
                                urls: [
                                    '/RTS_27_Q4_2018_Table_1.xlsx',
                                    '/RTS_27_Q4_2018_Table_4.xlsx',
                                    '/RTS_27_Q4_2018_Table_3.xlsx',
                                    '/RTS_27_Q4_2018_Table_6.xlsx',
                                ],
                            },
                        ]}
                    />
                </AccordionItem>
            </Accordion>
        </div>
    )
}

RTS28.propTypes = {
    urls: PropTypes.array,
}

QuarterTable.propTypes = {
    quarters: PropTypes.array,
    urls: PropTypes.array,
}

export default DocumentAccordion
