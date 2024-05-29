import React from 'react'
import { AccordionBlock, BlockWrapper } from '@deriv-com/blocks'
import { Text, Heading } from '@deriv/quill-design'
import EUgrid from './_eu-grid'
import DocumentAccordion from './_document_accordion'
import * as styles from './eu_grid.module.scss'
import InitialLoader from 'components/elements/dot-loader'
import PDFIcon from 'images/svg/regulatory/pdf-icon-black.svg'
import { Localize, localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import useIsRowCpa from 'components/hooks/use-is-row-cpa'

const InvestmentEurope = () => {
    const { is_region_loading } = useRegion()
    const is_row_cpa = useIsRowCpa()
    if (is_region_loading) return <InitialLoader />

    if (!is_row_cpa) return null

    return (
        <>
            <div className="max-w-[1232px] mx-auto py-2400 md:py-3600 px-800 md:px-1200 lg:px-50">
                <Heading.H1 className={styles.heading_alignment}>
                    Deriv Investments (Europe) Limited
                </Heading.H1>
                <Text className={styles.text_alignment_with_padding}>
                    <Localize
                        translate_text="_t_Deriv Investments (Europe) Limited, incorporated on 22 April 2015 (Company No. C 70156), is based in Malta with its registered address at Level 3, W Business Centre, Triq Dun Karm, Birkirkara BKR9033, and is regulated by the Malta Financial Services Authority under the Investments Services Act to provide investment services (<0>view licence</0>). This website is intended for Retail, Professional Clients, and Eligible Counterparties. It serves clients in the European Union, offering accounts for trading financial instruments, and is authorised to operate in other EU member states through EU passporting rights in the following member states:_t_"
                        components={[
                            <a
                                key={0}
                                href="/regulatory/Deriv_Investments_(Europe)_Limited.pdf"
                                className="underline text-typography-default inline text-base"
                                target="_blank"
                                rel="noopener noreferrer"
                            />,
                        ]}
                    />
                </Text>
                <BlockWrapper className="flex items-start md:items-center !pt-1600 !pb-50 lg:!pt-2400">
                    <EUgrid />
                </BlockWrapper>
            </div>
            <AccordionBlock
                className=" py-1600 px-800 md:px-1200 md:!py-2400"
                content={{
                    data: [
                        [
                            {
                                className: `${styles.accordion_border}`,
                                background: 'gray',
                                content: function noRefCheck() {
                                    return (
                                        <>
                                            <div className="justify-start">
                                                <a
                                                    href="/regulatory/Financial_Disclosures_Annual_Report_2023.pdf"
                                                    className="underline lg:!no-underline lg:hover:!underline text-typography-default inline text-base"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <div className="flex items-center">
                                                        <img
                                                            src={PDFIcon}
                                                            alt="pdf icon black"
                                                            className="pr-400"
                                                        />
                                                        <Text className="text-solid-slate-1400">
                                                            <Localize translate_text="_t_Financial Disclosures Annual Report 2023_t_" />
                                                        </Text>
                                                    </div>
                                                </a>
                                            </div>
                                        </>
                                    )
                                },
                                divider: 'bottom',
                                title: localize('_t_Financial disclosure report_t_'),
                            },

                            {
                                className: `${styles.accordion_border}`,
                                background: 'gray',

                                content: function noRefCheck() {
                                    return (
                                        <div>
                                            <DocumentAccordion locale={localize} />
                                        </div>
                                    )
                                },
                                title: localize('_t_Key information documents_t_'),
                            },
                            {
                                className: `${styles.accordion_border}`,
                                background: 'gray',
                                content: function noRefCheck() {
                                    const regulatoryDocuments = [
                                        {
                                            href: '/regulatory/RTS28-2022.pdf',
                                            text: '_t_RTS28 2022_t_',
                                        },
                                        {
                                            href: '/regulatory/RTS28-2021.pdf',
                                            text: '_t_RTS28 2021_t_',
                                        },
                                    ]
                                    return (
                                        <div className="flex lg:flex-row items-start justify-start flex-col">
                                            {regulatoryDocuments.map((document, index) => (
                                                <a
                                                    key={index}
                                                    href={document.href}
                                                    className="underline lg:!no-underline lg:hover:!underline text-typography-default inline text-base mb-800 mr-800"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <div className="flex items-center">
                                                        <img
                                                            src={PDFIcon}
                                                            alt="pdf icon black"
                                                            className="pr-400"
                                                        />
                                                        <Text className="text-solid-slate-1400">
                                                            <Localize
                                                                translate_text={document.text}
                                                            />
                                                        </Text>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    )
                                },
                                title: 'RTS',
                            },
                        ],
                    ],
                }}
                variant="Flush"
            />
        </>
    )
}

export default InvestmentEurope
