import React from 'react'
import styled from 'styled-components'
import kid_data from './data/_kid_data'
import { Text, Accordion, AccordionItem, LinkText } from 'components/elements'
import { Flex } from 'components/containers'
import { localize } from 'components/localization'
import device from 'themes/device'
import PDFIcon from 'images/svg/regulatory/pdf-icon-black.svg'

type DocumentAccordionProps = { locale: { language: string } }

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
                href="/regulatory/RTS28-2021.pdf"
                m="1.6rem 2.4rem"
            >
                <img src={PDFIcon} alt="pdf icon black" />
                <span>{localize('RTS28 2021')}</span>
            </FlexText>
            <FlexText
                color="red"
                target="_blank"
                rel="noopener noreferrer"
                href="/regulatory/RTS28-2020.pdf"
                m="1.6rem 2.4rem"
            >
                <img src={PDFIcon} alt="pdf icon black" />
                <span>{localize('RTS28 2020')}</span>
            </FlexText>
        </EdgeFlex>
    </>
)

const DocumentAccordion = (locale: DocumentAccordionProps) => {
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

    const selected_language = locale.locale.language || 'en'
    const supported_languages = ['es', 'it', 'pl', 'pt']

    const is_supported_language = (language: string) => supported_languages.includes(language)

    return (
        <Accordion has_single_state id="kid">
            <AccordionItem
                header={localize('Financial disclosure report')}
                content_style={content_style}
                header_style={header_style}
                style={item_style}
                parent_style={parent_style}
            >
                <Text>
                    {localize(
                        'Deriv Investments (Europe) Limited has prepared the Financial disclosure report in accordance with the Investment Firms Regulation and Directive. Read our report to understand how we comply with market discipline as a market participant.',
                    )}
                </Text>
                <Flex mt="1.8rem">
                    <FlexText_Pillar
                        target="_blank"
                        rel="noopener noreferrer"
                        href="/regulatory/Financial_Disclosures_Annual_Report_2021.pdf"
                        color="red"
                    >
                        <img src={PDFIcon} alt="pdf icon black" />
                        <span>{localize('Financial Disclosures Annual Report 2021')}</span>
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
                        {kid_data.map((data, idx) => (
                            <FlexText
                                key={idx}
                                color="red"
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`/regulatory/kid/${
                                    is_supported_language(selected_language)
                                        ? selected_language + '/'
                                        : ''
                                }${data.ref}`}
                                m="1.6rem 2.4rem"
                            >
                                <img src={PDFIcon} alt="pdf icon black" />
                                <span>{data.title}</span>
                            </FlexText>
                        ))}
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
