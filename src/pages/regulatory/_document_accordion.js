import React from 'react'
import styled from 'styled-components'
import { Text, Accordion, AccordionItem, LinkText } from 'components/elements'
import { CssGrid, Flex } from 'components/containers'
import { localize } from 'components/localization'

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
                    <div style={{ padding: '16px' }}>
                        <CssGrid columns="repeat(2, 1fr)">
                            <LinkText color="red" weight="bold">
                                {localize('Table 1 - Type of execution venue')}
                            </LinkText>
                            <LinkText color="red" weight="bold">
                                {localize('Table 4 - Daily Price information')}
                            </LinkText>
                        </CssGrid>
                        <CssGrid columns="repeat(2, 1fr)">
                            <LinkText color="red" weight="bold">
                                {localize('Table 3 - Intra-Day Price information')}
                            </LinkText>
                            <LinkText color="red" weight="bold">
                                {localize('Table 6 - Likelihood of execution information')}
                            </LinkText>
                        </CssGrid>
                        <Text align="center">{localize('Q2 2019')}</Text>
                        <CssGrid columns="repeat(2, 1fr)">
                            <LinkText color="red" weight="bold">
                                {localize('Table 1 - Type of execution venue')}
                            </LinkText>
                            <LinkText color="red" weight="bold">
                                {localize('Table 4 - Daily Price information')}
                            </LinkText>
                        </CssGrid>
                        <CssGrid columns="repeat(2, 1fr)">
                            <LinkText color="red" weight="bold">
                                {localize('Table 3 - Intra-Day Price information')}
                            </LinkText>
                            <LinkText color="red" weight="bold">
                                {localize('Table 6 - Likelihood of execution information')}
                            </LinkText>
                        </CssGrid>
                        <Text align="center">{localize('Q3 2019')}</Text>
                        <CssGrid columns="repeat(2, 1fr)">
                            <LinkText color="red" weight="bold">
                                {localize('Table 1 - Type of execution venue')}
                            </LinkText>
                            <LinkText color="red" weight="bold">
                                {localize('Table 4 - Daily Price information')}
                            </LinkText>
                        </CssGrid>
                        <CssGrid columns="repeat(2, 1fr)">
                            <LinkText color="red" weight="bold">
                                {localize('Table 3 - Intra-Day Price information')}
                            </LinkText>
                            <LinkText color="red" weight="bold">
                                {localize('Table 6 - Likelihood of execution information')}
                            </LinkText>
                        </CssGrid>
                    </div>
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
        </div>
    )
}

export default DocumentAccordion
