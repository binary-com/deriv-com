import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text, Accordion, AccordionItem, LinkText } from 'components/elements'
import { Flex } from 'components/containers'
import { localize } from 'components/localization'
import PDFIcon from 'images/svg/pdf-icon.svg'

const IconContainer = styled(Flex)`
    justify-content: flex-start;
    align-items: center;
    min-width: ${props => props.minWidth || ''};
    padding-bottom: ${props => props.paddingBottom || ''};

    svg {
        margin-right: 0.8rem;
    }
`

// TODO: pass pdf ref as prop once it's ready
const UpDown = () => (
    <Flex mt="1.8rem" spacing="8rem" jc="space-evenly">
        <IconContainer width="unset">
            <PDFIcon />
            <LinkText color="red" weight="bold">
                {localize('Open Up/Down document')}
            </LinkText>
        </IconContainer>
        <IconContainer width="unset">
            <PDFIcon />
            <LinkText color="red" weight="bold">
                {localize('Open Touch/No Touch document')}
            </LinkText>
        </IconContainer>
    </Flex>
)

const QuarterHeader = styled(Text)`
    padding-bottom: 1.6rem;
`

// TODO: pass pdf ref as prop once it's ready
const QuarterTable = ({ quarters }) => (
    <div style={{ padding: '0.8rem' }}>
        {quarters.map((quarter, idx) => (
            <div
                key={quarter}
                style={{ paddingBottom: idx === quarters.length - 1 ? '' : '1.6rem' }}
            >
                <QuarterHeader align="center">{quarter}</QuarterHeader>
                <Flex jc="flex-start">
                    <IconContainer width="unset" minWidth="46%" paddingBottom="1.6rem">
                        <PDFIcon />
                        <LinkText color="red" weight="bold">
                            {localize('Table 1 - Type of execution venue')}
                        </LinkText>
                    </IconContainer>
                    <IconContainer width="unset">
                        <PDFIcon />
                        <LinkText color="red" weight="bold">
                            {localize('Table 4 - Daily Price information')}
                        </LinkText>
                    </IconContainer>
                    <IconContainer width="unset" minWidth="46%" paddingBottom="1.6rem">
                        <PDFIcon />
                        <LinkText color="red" weight="bold">
                            {localize('Table 3 - Intra-Day Price information')}
                        </LinkText>
                    </IconContainer>
                    <IconContainer width="unset">
                        <PDFIcon />
                        <LinkText color="red" weight="bold">
                            {localize('Table 6 - Likelihood of execution information')}
                        </LinkText>
                    </IconContainer>
                </Flex>
            </div>
        ))}
    </div>
)
QuarterTable.propTypes = {
    quarters: PropTypes.array,
}

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
                        <IconContainer width="unset">
                            <PDFIcon />
                            <LinkText color="red" weight="bold">
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
                    <Flex mt="1.8rem" spacing="8rem" jc="space-evenly">
                        <IconContainer width="unset">
                            <PDFIcon />
                            <LinkText color="red" weight="bold">
                                {localize('Commodities')}
                            </LinkText>
                        </IconContainer>
                        <IconContainer width="unset">
                            <PDFIcon />
                            <LinkText color="red" weight="bold">
                                {localize('Forex')}
                            </LinkText>
                        </IconContainer>
                        <IconContainer width="unset">
                            <PDFIcon />
                            <LinkText color="red" weight="bold">
                                {localize('Cryptocurrency')}
                            </LinkText>
                        </IconContainer>
                    </Flex>
                </AccordionItem>
                <AccordionItem header="RTS 28">
                    <Text>
                        {localize(
                            'These documents provide you with key information about our investment products. This information is required by law to help you understand the nature, risks, costs, potential gains and losses of these products and to help you compare them with other products.',
                        )}
                    </Text>
                    <UpDown />
                </AccordionItem>
                <AccordionItem header="RTS 27">
                    <QuarterTable quarters={['Q1 2019', 'Q2 2019', 'Q3 2019']} />
                </AccordionItem>
                <AccordionItem header="RTS 28">
                    <Text>
                        {localize(
                            'These documents provide you with key information about our investment products. This information is required by law to help you understand the nature, risks, costs, potential gains and losses of these products and to help you compare them with other products.',
                        )}
                    </Text>
                    <UpDown />
                </AccordionItem>
                <AccordionItem header="RTS 27 2018">
                    <QuarterTable quarters={['Q3 2018', 'Q4 2019']} />
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default DocumentAccordion
