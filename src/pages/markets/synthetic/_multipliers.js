import React from 'react'
import styled from 'styled-components'
import Scrollbar from 'react-perfect-scrollbar'
import { ContinuousIndices, DailyResetIndices } from '../sub-markets/_submarkets.js'
import { Accordion, AccordionItem, Text } from 'components/elements'
import { SectionContainer, CssGrid, Box } from 'components/containers'
import { localize } from 'components/localization'
import 'react-perfect-scrollbar/dist/css/styles.css'

const header_style = {
    padding: '2.4rem 10.2rem',
    height: 'auto',
    borderBottom: 'unset',
    borderTop: '1px solid var(--color-grey-2)',
    boxShadow: 'unset',
}
const first_item_style = {
    padding: '2.4rem 10.2rem',
    height: 'auto',
    borderBottom: 'unset',
    borderTop: 'unset',
    boxShadow: 'unset',
}
const ContentWrapper = styled.div`
    padding-top: 2.5rem;
    padding-bottom: 4rem;
    max-width: 99.6rem;
    margin: 0 auto;
`
const Row = styled(Box)`
    border-radius: 4px;
    border: 1px solid var(--color-grey-22);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.04);

    div:last-child {
        border-right: unset;
    }
`
const Col = styled(Box)`
    border-right: 1px solid var(--color-grey-22);
    height: 100%;

    ${Text} {
        text-align: center;
    }
`
const Multipliers = () => {
    return (
        <SectionContainer padding="0">
            <Accordion>
                <AccordionItem
                    header_style={first_item_style}
                    header={localize('How does multiplier trading work?')}
                >
                    <ContentWrapper>
                        <Text>
                            {localize(
                                'Multipliers give you additional trading power so that you can control a position that is larger than the amount of capital at your disposal.',
                            )}
                        </Text>
                        <Text mt="1.8rem">
                            {localize(
                                'Traditionally, the higher the multiplier, the higher your trading power, and the higher your potential profit or loss',
                            )}
                        </Text>
                        <Text mt="1.8rem">
                            {localize(
                                'The unique benefit of trading on our platform is that your loss never exceeds the amount you paid to buy the contract',
                            )}
                        </Text>
                    </ContentWrapper>
                </AccordionItem>
                <AccordionItem
                    header_style={header_style}
                    header={localize('View Synthetic Indices available on Deriv')}
                >
                    <ContentWrapper>
                        <Row>
                            <CssGrid columns="repeat(2, 1fr)">
                                <Col p="2.4rem 0">
                                    <Text weight="bold">{localize('Continuous indices')}</Text>
                                </Col>
                                <Col p="2.4rem 0">
                                    <Text weight="bold">{localize('Daily reset indices')}</Text>
                                </Col>
                            </CssGrid>
                        </Row>
                        <Row>
                            <Scrollbar style={{ maxHeight: '55.2rem' }}>
                                <CssGrid columns="repeat(2, 1fr)">
                                    <Col>
                                        <ContinuousIndices />
                                    </Col>
                                    <Col>
                                        <DailyResetIndices />
                                    </Col>
                                </CssGrid>
                            </Scrollbar>
                        </Row>
                    </ContentWrapper>
                </AccordionItem>
            </Accordion>
        </SectionContainer>
    )
}

export default Multipliers
