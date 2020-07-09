import React from 'react'
import styled from 'styled-components'
import { Text, Accordion, AccordionItem, LinkText } from 'components/elements'
import { Flex } from 'components/containers'
import { localize } from 'components/localization'
import device from 'themes/device'
import PDFIcon from 'images/svg/pdf-icon-black.svg'
// import ExcelIcon from 'images/svg/excel.svg'

const FlexText = styled(LinkText)`
    display: flex;
    align-items: center;

    & > svg {
        margin-right: 0.8rem;
    }
`

const EdgeFlex = styled(Flex)`
    /* Edge does not support space-evenly */
    @supports (-ms-ime-align: auto) {
        justify-content: space-around;
    }
    @media ${device.tabletS} {
        flex-direction: column;
    }
`
// TODO: add when RTS documents are ready
// const RTS28 = () => (
//     <>
//         <EdgeFlex m="1.8rem auto" jc="space-between" wrap="wrap" max_width="55.6rem">
//             <FlexText
//                 color="red"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 href="/BIEL-RTS28-for-2017.pdf"
//             >
//                 <PDFIcon />
//                 <span>{localize('RTS28 2019')}</span>
//             </FlexText>
//             <FlexText
//                 color="red"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 href="/BIEL-RTS28-for-2017.pdf"
//             >
//                 <ExcelIcon />
//                 <span>{localize('RTS 27 Execution data 2019')}</span>
//             </FlexText>
//         </EdgeFlex>
//         <EdgeFlex m="1.8rem auto" jc="space-between" wrap="wrap" max_width="55.6rem">
//             <FlexText
//                 color="red"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 href="/BIEL-RTS28-for-2017.pdf"
//             >
//                 <PDFIcon />
//                 <span>{localize('RTS28 2018')}</span>
//             </FlexText>
//             <FlexText
//                 color="red"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 href="/BIEL-RTS28-for-2017.pdf"
//             >
//                 <ExcelIcon />
//                 <span>{localize('RTS 27 Execution data 2018')}</span>
//             </FlexText>
//         </EdgeFlex>
//         <EdgeFlex m="1.8rem auto" jc="space-between" wrap="wrap" max_width="55.6rem">
//             <FlexText
//                 color="red"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 href="/BIEL-RTS28-for-2017.pdf"
//             >
//                 <PDFIcon />
//                 <span>{localize('RTS 27 Execution data Q1 2020')}</span>
//             </FlexText>
//         </EdgeFlex>
//     </>
// )

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
    }

    return (
        <Accordion has_single_state>
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
                    <FlexText
                        target="_blank"
                        rel="noopener noreferrer"
                        href="/regulatory/pillar_3_deriv.pdf"
                        color="red"
                    >
                        <PDFIcon />
                        <span>{localize('Pillar III disclosure report')}</span>
                    </FlexText>
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
                <Flex ai="center" jc="center">
                    <EdgeFlex mt="1.8rem" jc="space-evenly" fw="wrap" width="auto">
                        <FlexText
                            color="red"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="/regulatory/kid_deriv_commodities.pdf"
                            m="1.6rem 2.4rem"
                        >
                            <PDFIcon />
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
                            <PDFIcon />
                            <span>{localize('Forex')}</span>
                        </FlexText>
                        <FlexText
                            color="red"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="/regulatory/kid_deriv_crypto.pdf"
                            m="1.6rem 2.4rem"
                        >
                            <PDFIcon />
                            <span>{localize('Cryptocurrency')}</span>
                        </FlexText>
                    </EdgeFlex>
                </Flex>
            </AccordionItem>
        </Accordion>
    )
}

export default DocumentAccordion
