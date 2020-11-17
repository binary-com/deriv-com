import React from 'react'
import styled from 'styled-components'
import { Text, Accordion, AccordionItem, LinkText } from 'components/elements'
import { Flex } from 'components/containers'
import { localize } from 'components/localization'
import device from 'themes/device'
import PDFIcon from 'images/svg/pdf-icon-black.svg'
import XLSXIcon from 'images/svg/excel.svg'

const FlexText = styled(LinkText)`
    width: 26%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    & > img {
        margin-right: 0.8rem;
    }
    @media ${device.laptopM} {
        width: 40%;
    }
    @media ${device.tabletS} {
        width: 80%;
        justify-content: flex-start;
        padding-left: 15rem;
    }
    @media (max-width: 500px) {
        padding-left: 8.5rem;
    }
    @media ${device.mobileM} {
        padding-left: 6rem;
    }
    @media ${device.mobileS} {
        padding-left: 4.5rem;
    }
`

const FlexText_Pillar = styled(LinkText)`
    display: flex;
    align-items: center;
    justify-content: center;

    & > img {
        margin-right: 0.8rem;
    }
`
const EdgeFlex = styled(Flex)`
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-left: 5%;

    /* Edge does not support space-evenly */
    @supports (-ms-ime-align: auto) {
        justify-content: space-around;
    }
    @media ${device.laptopM} {
        margin-left: 9%;
    }
    @media ${device.tabletL} {
        margin-left: 18%;
    }
    @media ${device.tabletS} {
        flex-direction: column;
        margin-left: 10%;
    }
`

const RTS27_28 = () => (
    <>
        <EdgeFlex>
            <FlexText
                color="red"
                target="_blank"
                rel="noopener noreferrer"
                href="/regulatory/RTS28-2019.pdf"
                m="1.6rem 2.4rem"
            >
                <img src={PDFIcon} alt="pdf icon black" />
                <span>{localize('RTS28 2019')}</span>
            </FlexText>
            <FlexText
                color="red"
                target="_blank"
                rel="noopener noreferrer"
                href="/regulatory/RTS28-2018.pdf"
                m="1.6rem 2.4rem"
            >
                <img src={PDFIcon} alt="pdf icon black" />
                <span>{localize('RTS28 2018')}</span>
            </FlexText>
            <FlexText
                color="red"
                target="_blank"
                rel="noopener noreferrer"
                href="/regulatory/RTS27-2020.xlsx"
                m="1.6rem 2.4rem"
            >
                <img src={XLSXIcon} alt="excel" />
                <span>{localize('RTS27 2020')}</span>
            </FlexText>
            <FlexText
                color="red"
                target="_blank"
                rel="noopener noreferrer"
                href="/regulatory/RTS27-2019.xlsx"
                m="1.6rem 2.4rem"
            >
                <img src={XLSXIcon} alt="excel" />
                <span>{localize('RTS27 2019')}</span>
            </FlexText>
            <FlexText
                color="red"
                target="_blank"
                rel="noopener noreferrer"
                href="/regulatory/RTS27-2018.xlsx"
                m="1.6rem 2.4rem"
            >
                <img src={XLSXIcon} alt="excel" />
                <span>{localize('RTS27 2018')}</span>
            </FlexText>
        </EdgeFlex>
    </>
)

const DocumentAccordion = () => {
    const content_style = {
        background: 'var(--color-white)',
        boxShadow: '-2px 6px 15px 0 rgba(195, 195, 195, 0.31)',
    }
    const header_style = {
        borderRadius: '6px',
    }
    const item_style = {
        padding: '1.6rem',
        position: 'relative',
        background: 'var(--color-white)',
    }
    const parent_style = {
        marginBottom: '2.4rem',
        width: '100%',
    }

    return (
        <Accordion has_single_state id="kid">
            <AccordionItem
                header={localize('Pillar III disclosures')}
                content_style={content_style}
                header_style={header_style}
                style={item_style}
                parent_style={parent_style}
            >
                <Text>
                    {localize(
                        'Deriv Investments (Europe) Limited has prepared the Pillar III disclosure report in accordance with the Capital Requirements Directive IV and the Capital Requirements Regulation. Read our report to understand how we comply with market discipline as a market participant.',
                    )}
                </Text>
                <Flex mt="1.8rem">
                    <FlexText_Pillar
                        target="_blank"
                        rel="noopener noreferrer"
                        href="/regulatory/BIEL_Pillar_3.pdf"
                        color="red"
                    >
                        <img src={PDFIcon} alt="pdf icon black" />
                        <span>{localize('Pillar III disclosure report')}</span>
                    </FlexText_Pillar>
                </Flex>
            </AccordionItem>
            <AccordionItem
                header={localize('Key information documents')}
                content_style={content_style}
                header_style={header_style}
                style={item_style}
                parent_style={parent_style}
            >
                <Text>
                    {localize(
                        'These documents provide you with key information about our investment products. This information is required by law to help you understand the nature, risks, costs, potential gains, and losses of these products and to help you compare them with other products.',
                    )}
                </Text>
                <Flex>
                    <EdgeFlex mt="1.8rem">
                        <FlexText
                            color="red"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="/regulatory/kid_deriv_commodities.pdf"
                            m="1.6rem 2.4rem"
                        >
                            <img src={PDFIcon} alt="pdf icon black" />
                            <span>{localize('Commodities')}</span>
                        </FlexText>
                        <FlexText
                            color="red"
                            width="unset"
                            as="a"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="/regulatory/kid_deriv_forex.pdf"
                            m="1.6rem 2.4rem"
                        >
                            <img src={PDFIcon} alt="pdf icon black" />
                            <span>{localize('Forex')}</span>
                        </FlexText>
                        <FlexText
                            color="red"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="/regulatory/kid_deriv_crypto.pdf"
                            m="1.6rem 2.4rem"
                        >
                            <img src={PDFIcon} alt="pdf icon black" />
                            <span>{localize('Cryptocurrency')}</span>
                        </FlexText>
                        <FlexText
                            color="red"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="/regulatory/kid_deriv_multipliers.pdf"
                            m="1.6rem 2.4rem"
                        >
                            <img src={PDFIcon} alt="pdf icon black" />
                            <span>{localize('Multipliers')}</span>
                        </FlexText>
                    </EdgeFlex>
                </Flex>
            </AccordionItem>
            <AccordionItem
                header={localize('RTS')}
                content_style={content_style}
                header_style={header_style}
                style={item_style}
                parent_style={parent_style}
            >
                <Flex>
                    <RTS27_28 />
                </Flex>
            </AccordionItem>
        </Accordion>
    )
}

export default DocumentAccordion
