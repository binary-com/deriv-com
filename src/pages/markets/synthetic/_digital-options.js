import React from 'react'
import styled from 'styled-components'
import Scrollbar from 'react-perfect-scrollbar'
import { MajorPairs, MinorPairs, SmartFX } from '../sub-markets'
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

const DigitalOptions = () => {
    return (
        <SectionContainer padding="0">
            <Accordion>
                <AccordionItem
                    header_style={header_style}
                    header={localize('What is margin trading?')}
                >
                    <ContentWrapper>
                        <Text>
                            {localize(
                                'Margin trading allows you to purchase larger units of an asset at a fraction of the cost while amplifying your potential profit, but similarly increasing your potential loss. ',
                            )}
                        </Text>
                    </ContentWrapper>
                </AccordionItem>
                <AccordionItem
                    header_style={header_style}
                    header={localize('Option trades available on Synthetic Indices')}
                >
                    <ContentWrapper>
                        <Text>
                            {localize(
                                'Margin trading gives you more trading power, meaning that with the same capital, you will be able to buy more of an asset.',
                            )}
                        </Text>
                        <Text mt="1.8rem">
                            {localize(
                                'The result is a more substantial profit when you win a trade and of course, a more significant loss when you lose.',
                            )}
                        </Text>
                        <Text mt="1.8rem">
                            {localize(
                                'For example, when trading on margin, you can purchase 1,000 units of an asset that is trading at USD 50 for only USD 500.',
                            )}
                        </Text>
                        <Text mt="1.8rem">
                            {localize(
                                'Typically, the contract should cost you USD 50,000, but with margin trading, you only pay 1% of the supposed capital. That is a leverage of 100:1.',
                            )}
                        </Text>
                        <Text mt="1.8rem">
                            {localize(
                                'At Deriv, we offer high leverage, up to 1000:1, to make trading accessible and less capital intensive.',
                            )}
                        </Text>
                        <Text mt="1.8rem">
                            {localize(
                                'This ability to expand trading results has made margin a popular trading strategy among new and experienced traders.',
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
                            <CssGrid columns="repeat(3, 1fr)">
                                <Col p="2.4rem 0">
                                    <Text weight="bold">{localize('Major pairs')}</Text>
                                </Col>
                                <Col p="2.4rem 0">
                                    <Text weight="bold">{localize('Minor pairs')}</Text>
                                </Col>
                                <Col p="2.4rem 0">
                                    <Text weight="bold">{localize('SmartFX')}</Text>
                                </Col>
                            </CssGrid>
                        </Row>
                        <Row>
                            <Scrollbar style={{ maxHeight: '55.2rem' }}>
                                <CssGrid columns="repeat(3, 1fr)">
                                    <Col>
                                        <MajorPairs />
                                    </Col>
                                    <Col>
                                        <MinorPairs />
                                    </Col>
                                    <Col>
                                        <SmartFX />
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

export default DigitalOptions
