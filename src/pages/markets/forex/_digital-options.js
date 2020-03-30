import React from 'react'
import styled from 'styled-components'
import Scrollbar from 'react-perfect-scrollbar'
import { Accordion, AccordionItem, Text } from 'components/elements'
import { SectionContainer, CssGrid, Box, Flex } from 'components/containers'
import { localize } from 'components/localization'
import 'react-perfect-scrollbar/dist/css/styles.css'
//Symbols
import {
    AUDCAD,
    AUDCHF,
    AUDINDEX,
    AUDJPY,
    AUDNZD,
    AUDUSD,
    EURAUD,
    EURCAD,
    EURCHF,
    EURGBP,
    EURINDEX,
    EURJPY,
    EURUSD,
    EURZND,
    GBPAUD,
    GBPCAD,
    GBPCHF,
    GBPINDEX,
    GBPJPY,
    GBPNOK,
    GBPNZD,
    GBPUSD,
    NZDJPY,
    NZDUSD,
    USDCAD,
    USDCHF,
    USDINDEX,
    USDJPY,
    USDMXN,
    USDNOK,
    USDPLN,
    USDSEK,
} from 'components/elements/symbols.js'

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
        font-weight: bold;
    }
`
const Symbol = styled(Flex)`
    padding: 0.8rem 0;
    height: unset;

    ${Text} {
        font-weight: normal;
        margin-left: 1.6rem;
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
                    header={localize('How does margin trading work?')}
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
                    header={localize('View available forex instruments on Deriv')}
                >
                    <ContentWrapper>
                        <Row>
                            <CssGrid columns="repeat(3, 1fr)">
                                <Col p="2.4rem 0">
                                    <Text>{localize('Major pairs')}</Text>
                                </Col>
                                <Col p="2.4rem 0">
                                    <Text>{localize('Minor pairs')}</Text>
                                </Col>
                                <Col p="2.4rem 0">
                                    <Text>{localize('SmartFX')}</Text>
                                </Col>
                            </CssGrid>
                        </Row>
                        <Row>
                            <Scrollbar style={{ maxHeight: '55.2rem' }}>
                                <CssGrid columns="repeat(3, 1fr)">
                                    <Col>
                                        <Symbol ai="center">
                                            <AUDJPY />
                                            <Text>{localize('AUD/JPY')}</Text>
                                        </Symbol>
                                        <Symbol ai="center">
                                            <AUDUSD />
                                            <Text>{localize('AUD/USD')}</Text>
                                        </Symbol>
                                        <Symbol ai="center">
                                            <EURAUD />
                                            <Text>{localize('EUR/AUD')}</Text>
                                        </Symbol>
                                        <Symbol ai="center">
                                            <EURCAD />
                                            <Text>{localize('EUR/CAD')}</Text>
                                        </Symbol>
                                        <Symbol ai="center">
                                            <EURCHF />
                                            <Text>{localize('EUR/CHF')}</Text>
                                        </Symbol>
                                        <Symbol ai="center">
                                            <EURGBP />
                                            <Text>{localize('EUR/GBP')}</Text>
                                        </Symbol>
                                        <Symbol ai="center">
                                            <EURJPY />
                                            <Text>{localize('EUR/JPY')}</Text>
                                        </Symbol>
                                        <Symbol ai="center">
                                            <EURUSD />
                                            <Text>{localize('EUR/USD')}</Text>
                                        </Symbol>
                                        <Symbol ai="center">
                                            <GBPAUD />
                                            <Text>{localize('GBP/AUD')}</Text>
                                        </Symbol>
                                        <Symbol ai="center">
                                            <GBPJPY />
                                            <Text>{localize('GBP/JPY')}</Text>
                                        </Symbol>
                                        <Symbol ai="center">
                                            <GBPUSD />
                                            <Text>{localize('GBP/USD')}</Text>
                                        </Symbol>
                                        <Symbol ai="center">
                                            <USDCAD />
                                            <Text>{localize('USD/CAD')}</Text>
                                        </Symbol>
                                        <Symbol ai="center">
                                            <USDCHF />
                                            <Text>{localize('USD/CHF')}</Text>
                                        </Symbol>
                                        <Symbol ai="center">
                                            <USDJPY />
                                            <Text>{localize('USD/JPY')}</Text>
                                        </Symbol>
                                    </Col>
                                    <Col>
                                        <Symbol ai="center">
                                            <AUDCAD />
                                            <Text>{localize('AUD/CAD')}</Text>
                                        </Symbol>
                                        <Symbol ai="center">
                                            <AUDCHF />
                                            <Text>{localize('AUD/CHF')}</Text>
                                        </Symbol>
                                        <Symbol ai="center">
                                            <AUDNZD />
                                            <Text>{localize('AUD/NZD')}</Text>
                                        </Symbol>
                                        <Symbol ai="center">
                                            <EURZND />
                                            <Text>{localize('EUR/ZND')}</Text>
                                        </Symbol>
                                        <Symbol ai="center">
                                            <GBPCAD />
                                            <Text>{localize('GBP/CAD')}</Text>
                                        </Symbol>
                                        <Symbol ai="center">
                                            <GBPCHF />
                                            <Text>{localize('GBP/CHF')}</Text>
                                        </Symbol>
                                        <Symbol ai="center">
                                            <GBPNOK />
                                            <Text>{localize('GBP/NOK')}</Text>
                                        </Symbol>
                                        <Symbol ai="center">
                                            <GBPNZD />
                                            <Text>{localize('GBP/NZD')}</Text>
                                        </Symbol>
                                        <Symbol ai="center">
                                            <NZDJPY />
                                            <Text>{localize('NZD/JPY')}</Text>
                                        </Symbol>
                                        <Symbol ai="center">
                                            <NZDUSD />
                                            <Text>{localize('NZD/USD')}</Text>
                                        </Symbol>
                                        <Symbol ai="center">
                                            <USDMXN />
                                            <Text>{localize('USD/MXN')}</Text>
                                        </Symbol>
                                        <Symbol ai="center">
                                            <USDNOK />
                                            <Text>{localize('USD/NOK')}</Text>
                                        </Symbol>
                                        <Symbol ai="center">
                                            <USDPLN />
                                            <Text>{localize('USD/PLN')}</Text>
                                        </Symbol>
                                        <Symbol ai="center">
                                            <USDSEK />
                                            <Text>{localize('USD/SEK')}</Text>
                                        </Symbol>
                                    </Col>
                                    <Col>
                                        <Symbol ai="center">
                                            <AUDINDEX />
                                            <Text>{localize('AUD Index')}</Text>
                                        </Symbol>
                                        <Symbol ai="center">
                                            <EURINDEX />
                                            <Text>{localize('EUR Index')}</Text>
                                        </Symbol>
                                        <Symbol ai="center">
                                            <GBPINDEX />
                                            <Text>{localize('GBP Index')}</Text>
                                        </Symbol>
                                        <Symbol ai="center">
                                            <USDINDEX />
                                            <Text>{localize('USD Index')}</Text>
                                        </Symbol>
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
