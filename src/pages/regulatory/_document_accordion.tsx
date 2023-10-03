import React from 'react'
import styled from 'styled-components'
import kid_data from './data/_kid_data'
import { Text, Accordion, AccordionItem, LinkText } from 'components/elements'
import { Flex } from 'components/containers'
import { Localize, localize } from 'components/localization'
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
    @media (max-width: 685px) {
        width: 80%;
        justify-content: flex-start;
        padding-left: 0;
        margin-inline: 0;
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

    /* Edge does not support space-evenly */
    @supports (-ms-ime-align: auto) {
        justify-content: space-around;
    }
    @media ${device.tabletS} {
        flex-direction: column;
    }
`

const RTS27_28 = () => (
    <EdgeFlex>
        <FlexText
            color="red"
            target="_blank"
            rel="noopener noreferrer"
            href="/regulatory/RTS28-2022.pdf"
            m="1.6rem 2.4rem"
        >
            <img src={PDFIcon} alt={localize('_t_pdf icon black_t_')} />
            <span>
                <Localize translate_text="_t_RTS28 2022_t_" />
            </span>
        </FlexText>
        <FlexText
            color="red"
            target="_blank"
            rel="noopener noreferrer"
            href="/regulatory/RTS28-2021.pdf"
            m="1.6rem 2.4rem"
        >
            <img src={PDFIcon} alt={localize('_t_pdf icon black_t_')} />
            <span>
                <Localize translate_text="_t_RTS28 2021_t_" />
            </span>
        </FlexText>
    </EdgeFlex>
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
                header="_t_Financial disclosure report_t_"
                content_style={content_style}
                header_style={header_style}
                style={item_style}
                parent_style={parent_style}
                class_name="disclosure-report"
            >
                <Text>
                    <Localize translate_text="_t_Deriv Investments (Europe) Limited has prepared the Financial disclosure report in accordance with the Investment Firms Regulation and Directive. Read our report to understand how we comply with market discipline as a market participant._t_" />
                </Text>
                <Flex mt="1.8rem">
                    <FlexText_Pillar
                        target="_blank"
                        rel="noopener noreferrer"
                        href="/regulatory/Financial_Disclosures_Annual_Report_2022.pdf"
                        color="red"
                    >
                        <img src={PDFIcon} alt="pdf icon black" />
                        <span>
                            <Localize translate_text="_t_Financial Disclosures Annual Report 2022_t_" />
                        </span>
                    </FlexText_Pillar>
                </Flex>
            </AccordionItem>
            <AccordionItem
                header="_t_Key information documents_t_"
                content_style={content_style}
                header_style={header_style}
                style={item_style}
                parent_style={parent_style}
                class_name="key-information"
            >
                <Text>
                    <Localize translate_text="_t_These documents provide you with key information about our investment products. This information is required by law to help you understand the nature, risks, costs, potential gains, and losses of these products and to help you compare them with other products._t_" />
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
                                m="1.6rem 1.4rem"
                            >
                                <img src={PDFIcon} alt="pdf icon black" />
                                <span>
                                    <Localize translate_text={data.title} />
                                </span>
                            </FlexText>
                        ))}
                    </EdgeFlex>
                </Flex>
            </AccordionItem>
            <AccordionItem
                header="_t_RTS_t_"
                content_style={content_style}
                header_style={header_style}
                style={item_style}
                parent_style={parent_style}
                class_name="rts"
            >
                <Flex>
                    <RTS27_28 />
                </Flex>
            </AccordionItem>
        </Accordion>
    )
}

export default DocumentAccordion
