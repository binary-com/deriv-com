import React from 'react'
import { Hero, AccordionBlock, BlockWrapper, ContentText } from '@deriv-com/blocks'
import { Text, Heading, FluidContainer } from '@deriv/quill-design'
import { Breadcrumbs } from '@deriv-com/components'
import * as styles from './eu_grid.module.scss'
import EUgrid from './_eu-grid'
import DocumentAccordion from './_document_accordion'
import { deriv_app_url } from 'common/constants'
import useRegion from 'components/hooks/use-region'
import Layout from 'components/layout/layout'
import { Divider, LinkText } from 'components/elements'
import PDFIcon from 'images/svg/regulatory/pdf-icon-black.svg'
import { SEO } from 'components/containers'
import { Localize, localize, WithIntl } from 'components/localization'
import { TGatsbyHead } from 'features/types'
import InitialLoader from 'components/elements/dot-loader'
import { useLivechat } from 'components/hooks/use-livechat'

const Regulatory = () => {
    const { is_row, is_cpa_plan, is_region_loading } = useRegion()
    const [is_livechat_interactive, LC_API] = useLivechat()

    return (
        <Layout>
            <div className="bg-solid-slate-75">
                <FluidContainer>
                    <Breadcrumbs
                        className="py-general-md"
                        links={[
                            {
                                content: 'Home',
                                href: '/',
                            },
                            {
                                content: 'Regulatory information',
                                href: '/regulatory',
                            },
                        ]}
                    />
                </FluidContainer>

                <div className="max-w-[816px] mx-auto">
                    <Hero.ContentLess
                        className="bg-solid-slate-75 px-800 md:px-1200"
                        title={<Localize translate_text="_t_Regulatory information_t_" />}
                        description={
                            <>
                                <Text className="text-center">
                                    <Localize translate_text="_t_Since 1999, the Deriv group of companies has served traders around the world with integrity and reliability. We always hold ourselves to the highest ethical standards and regulatory requirements._t_" />
                                </Text>
                                <Text className="text-center">
                                    <Localize translate_text="_t_Here are our subsidiary companies with their respective registration and licensing information._t_" />
                                </Text>
                            </>
                        }
                    ></Hero.ContentLess>
                </div>
            </div>
            {!is_region_loading ? (
                is_row || is_cpa_plan ? null : (
                    <>
                        <Hero.ContentLess>
                            <div className="max-w-[1232px] mx-auto">
                                <Heading.H1 className="text-[28px] lg:text-[48px] text-center pb-800">
                                    Deriv Investments (Europe) Limited
                                </Heading.H1>
                                <Text className="text-center pb-800">
                                    <Localize
                                        translate_text="_t_Deriv Investments (Europe) Limited, incorporated on 22 April 2015 (Company No. C 70156), is based in Malta with its registered address at Level 3, W Business Centre, Triq Dun Karm, Birkirkara BKR9033, and is regulated by the Malta Financial Services Authority under the Investments Services Act to provide investment services (<0>view licence</0>). It serves clients in the European Union, offering accounts for trading financial instruments, and is authorised to operate in other EU member states through EU passporting rights._t_"
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
                                <Text className="text-center">
                                    <Localize translate_text="_t_Here are the EU countries with access to Deriv.com through EU passporting rights._t_" />
                                </Text>

                                <BlockWrapper>
                                    <EUgrid />
                                </BlockWrapper>
                                <AccordionBlock
                                    content={{
                                        data: [
                                            [
                                                {
                                                    className: `${styles.accordion_border}`,
                                                    content: function noRefCheck() {
                                                        return (
                                                            <>
                                                                <div className="justify-start">
                                                                    <a
                                                                        href="/regulatory/Financial_Disclosures_Annual_Report_2022.pdf"
                                                                        className="underline text-typography-default inline text-base"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                    >
                                                                        <div className="flex items-center">
                                                                            <img
                                                                                src={PDFIcon}
                                                                                alt="pdf icon black"
                                                                                className="pr-400"
                                                                            />
                                                                            <Text>
                                                                                <Localize translate_text="_t_Financial Disclosures Annual Report 2022_t_" />
                                                                            </Text>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </>
                                                        )
                                                    },
                                                    divider: 'bottom',
                                                    title: localize(
                                                        '_t_Financial disclosure report_t_',
                                                    ),
                                                },

                                                {
                                                    className: `${styles.accordion_border}`,
                                                    content: function noRefCheck() {
                                                        return (
                                                            <div>
                                                                <DocumentAccordion />
                                                            </div>
                                                        )
                                                    },
                                                    title: localize(
                                                        '_t_Key information documents_t_',
                                                    ),
                                                },
                                                {
                                                    className: `${styles.accordion_border}`,
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
                                                                {regulatoryDocuments.map(
                                                                    (document, index) => (
                                                                        <a
                                                                            key={index}
                                                                            href={document.href}
                                                                            className="underline text-typography-default inline text-base mb-800 mr-800"
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                        >
                                                                            <div className="flex items-center">
                                                                                <img
                                                                                    src={PDFIcon}
                                                                                    alt="pdf icon black"
                                                                                    className="pr-400"
                                                                                />
                                                                                <Text>
                                                                                    <Localize
                                                                                        translate_text={
                                                                                            document.text
                                                                                        }
                                                                                    />
                                                                                </Text>
                                                                            </div>
                                                                        </a>
                                                                    ),
                                                                )}
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
                            </div>
                        </Hero.ContentLess>

                        <ContentText
                            className="max-w-[816px] mx-auto bg-background-primary-container max-sm:px-800 max-lg:px-1200"
                            title="Deriv (FX) Ltd"
                        >
                            <Text className="text-start pb-800">
                                <Localize
                                    translate_text="_t_Deriv (FX) Ltd (Company No. LL13394), incorporated on the 18th January 2017, is registered in the Federal Territory of Labuan (Malaysia) with its registered office located at Unit No. 3A-16, Level 3A, Labuan Times Square, Jalan Merdeka, 87000, Federal Territory of Labuan, Malaysia. Deriv (FX) Ltd is licensed by the Labuan Financial Services Authority (<0>view licence</0>) and is a member of the <1>Labuan Fintech Association</1>._t_"
                                    components={[
                                        <a
                                            key={0}
                                            href="/regulatory/Deriv_(FX)_Ltd.pdf"
                                            className="underline text-typography-default inline text-base"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        />,
                                        <a
                                            key={1}
                                            href="https://www.labuanfintech.org/"
                                            className="underline text-typography-default inline text-base"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        />,
                                    ]}
                                />
                            </Text>
                            <Text>
                                {localize(
                                    `_t_Clients in the rest of the world (except for restricted countries such as the USA, Canada, and Hong Kong) who wish to trade CFDs on forex and cryptocurrencies can have MT5 Financial STP accounts under Deriv (FX) Ltd._t_`,
                                )}
                            </Text>
                        </ContentText>

                        <ContentText
                            className="max-w-[816px] mx-auto bg-background-primary-container max-sm:px-800 max-lg:px-1200"
                            title="Deriv (BVI) Ltd"
                        >
                            <Text className="text-start">
                                <Localize
                                    translate_text="_t_Deriv (BVI) Limited (Company No. 1841206), incorporated on the 15th September 2014, is registered in the British Virgin Islands with its registered office located at Kingston Chambers, P.O. Box 173, Road Town, Tortola British Virgin Islands. Deriv (BVI) Ltd is licensed by the British Virgin Islands Financial Services Commission (<0>view licence</0>)._t_"
                                    components={[
                                        <a
                                            key={0}
                                            href="/regulatory/Deriv_(BVI)_Ltd.pdf"
                                            className="underline text-typography-default inline text-base"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        />,
                                    ]}
                                />
                            </Text>
                            <Text>
                                {localize(
                                    `_t_Clients in the rest of the world (except for certain countries such as the USA, Canada, and Hong Kong) who wish to trade CFDs on financial instruments (via MT5 Financial accounts) and derived indices (via MT5 Derived accounts) can have Deriv MT5 accounts under Deriv (BVI) Ltd._t_`,
                                )}
                            </Text>
                        </ContentText>

                        <ContentText
                            className="max-w-[816px] mx-auto bg-background-primary-container max-sm:px-800 max-lg:px-1200"
                            title="Deriv (V) Ltd"
                        >
                            <Text className="text-start">
                                <Localize
                                    translate_text="_t_Deriv (V) Ltd (Company No. 014556), incorporated on the 17th February 2016, is registered in the Republic of Vanuatu with its registered office located at 1276, Govant Building, Kumul Highway, Port Vila, Republic of Vanuatu. Deriv (V) Ltd is licensed by the Vanuatu Financial Services Commission (<0>view licence</0>) and is a member of the <1>Financial Markets Association</1>._t_"
                                    components={[
                                        <a
                                            key={0}
                                            href="/regulatory/Deriv_(V)_Ltd.pdf"
                                            className="underline text-typography-default inline text-base"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        />,
                                        <a
                                            key={1}
                                            href="/regulatory/Financial_Markets_Association_Cert.pdf"
                                            className="underline text-typography-default inline text-base"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        />,
                                    ]}
                                />
                            </Text>
                            <Text>
                                {localize(
                                    `_t_Clients in the rest of the world (except for certain countries such as the USA, Canada, and Hong Kong) who wish to trade CFDs on financial instruments (via MT5 Financial accounts) and derived indices (via MT5 Derived accounts) can have Deriv MT5 and Deriv X accounts under Deriv (V) Ltd._t_`,
                                )}
                            </Text>
                        </ContentText>

                        <ContentText
                            className="max-w-[816px] mx-auto bg-background-primary-container max-sm:px-800 max-lg:px-1200"
                            title="Deriv (SVG) LLC"
                        >
                            <Text className="text-start">
                                <Localize translate_text="_t_Deriv (SVG) LLC (Company No. 273 LLC 2020), incorporated on the 12th February 2019, is registered in Saint Vincent and the Grenadines with its registered office located at First Floor, SVG Teachers Credit Union Uptown Building, Corner of James and Middle Street, Kingstown P.O., St Vincent and the Grenadines._t_" />
                            </Text>
                            <Text>
                                {localize(
                                    `_t_Clients in the rest of the world (except for restricted countries such as the USA, Canada, and Hong Kong) can have accounts under Deriv (SVG) LLC._t_`,
                                )}
                            </Text>
                        </ContentText>

                        <ContentText
                            className="max-w-[816px] mx-auto bg-background-primary-container max-sm:px-800 max-lg:px-1200"
                            title="Deriv.com Limited"
                        >
                            <Text>
                                {localize(
                                    `_t_Deriv.com Limited is the holding company for the above subsidiaries with the registration number 71479 and the registered address is located at 2nd Floor, 1 Cornet Street, St Peter Port, Guernsey, GY1 1BZ._t_`,
                                )}
                            </Text>
                        </ContentText>

                        <ContentText
                            className="max-w-[816px] mx-auto bg-background-primary-container max-sm:px-800 max-lg:px-1200"
                            title="The Financial Commission"
                        >
                            <Text className="text-start pb-800">
                                <Localize
                                    translate_text="_t_We are registered with the Financial Commission, an international independent organisation dedicated to resolving disputes within the financial services industry (<0>view membership</0>)._t_"
                                    components={[
                                        <a
                                            key={0}
                                            href="/regulatory/deriv-com-ltd-membership.pdf"
                                            className="underline text-typography-default inline text-base"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        />,
                                    ]}
                                />
                            </Text>
                            <Text className="text-start">
                                <Localize
                                    translate_text="_t_For fair resolution of any complaints, please contact us via <0>live chat</0>. To learn more, see our <1>complaint policy</1>._t_"
                                    components={[
                                        <span
                                            key={0}
                                            className="underline text-typography-default inline text-base cursor-pointer"
                                            onClick={() => {
                                                is_livechat_interactive && LC_API.open_chat_window()
                                            }}
                                        />,
                                        <a
                                            key={1}
                                            href={`${deriv_app_url}/complaints-policy`}
                                            className="underline text-typography-default inline text-base"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        />,
                                    ]}
                                />
                            </Text>
                        </ContentText>
                    </>
                )
            ) : (
                <InitialLoader />
            )}

            {is_row || is_cpa_plan ? (
                <>
                    <ContentText
                        className="max-w-[816px] mx-auto bg-background-primary-container max-sm:px-800 max-lg:px-1200"
                        title="Deriv Investments (Europe) Limited"
                    >
                        <Text className="text-start">
                            <Localize
                                translate_text="_t_Deriv Investments (Europe) Limited, incorporated on 22 April 2015 (Company No. C 70156), is based in Malta with its registered address at Level 3, W Business Centre, Triq Dun Karm, Birkirkara BKR9033, and is regulated by the Malta Financial Services Authority under the Investments Services Act to provide investment services (<0>view licence</0>)._t_"
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
                    </ContentText>

                    <ContentText
                        className=" max-w-[816px] mx-auto bg-background-primary-container max-sm:px-800 max-lg:px-1200"
                        title="Deriv (FX) Ltd"
                    >
                        <Text className="text-start">
                            <Localize
                                translate_text="_t_Deriv (FX) Ltd (Company No. LL13394), incorporated on the 18th January 2017, is registered in the Federal Territory of Labuan (Malaysia) with its registered office located at Unit No. 3A-16, Level 3A, Labuan Times Square, Jalan Merdeka, 87000, Federal Territory of Labuan, Malaysia. Deriv (FX) Ltd is licensed by the Labuan Financial Services Authority (<0>view licence</0>) and is a member of the <1>Labuan Fintech Association</1>._t_"
                                components={[
                                    <a
                                        key={0}
                                        href="/regulatory/Deriv_(FX)_Ltd.pdf"
                                        className="underline text-typography-default inline text-base"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    />,
                                    <a
                                        key={1}
                                        href="https://www.labuanfintech.org/"
                                        className="underline text-typography-default inline text-base"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    />,
                                ]}
                            />
                        </Text>
                        <Text>
                            <Localize translate_text="_t_Clients in the rest of the world (except for restricted countries such as the USA, Canada, and Hong Kong) who wish to trade CFDs on forex and cryptocurrencies can have MT5 Financial STP accounts under Deriv (FX) Ltd._t_" />
                        </Text>
                    </ContentText>

                    <ContentText
                        className=" max-w-[816px] mx-auto bg-background-primary-container max-sm:px-800 max-lg:px-1200"
                        title="Deriv (BVI) Ltd"
                    >
                        <Text className="text-start">
                            <Localize
                                translate_text="_t_Deriv (BVI) Limited (Company No. 1841206), incorporated on the 15th September 2014, is registered in the British Virgin Islands with its registered office located at Kingston Chambers, P.O. Box 173, Road Town, Tortola British Virgin Islands. Deriv (BVI) Ltd is licensed by the British Virgin Islands Financial Services Commission (<0>view licence</0>)._t_"
                                components={[
                                    <a
                                        key={0}
                                        href="/regulatory/Deriv_(BVI)_Ltd.pdf"
                                        className="underline text-typography-default inline text-base"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    />,
                                ]}
                            />
                        </Text>
                        <Text>
                            {localize(
                                `_t_Clients in the rest of the world (except for certain countries such as the USA, Canada, and Hong Kong) who wish to trade CFDs on financial instruments (via MT5 Financial accounts) and derived indices (via MT5 Derived accounts) can have Deriv MT5 accounts under Deriv (BVI) Ltd._t_`,
                            )}
                        </Text>
                    </ContentText>

                    <ContentText
                        className=" max-w-[816px] mx-auto bg-background-primary-container max-sm:px-800 max-lg:px-1200"
                        title="Deriv (V) Ltd"
                    >
                        <Text className="text-start">
                            <Localize
                                translate_text="_t_Deriv (V) Ltd (Company No. 014556), incorporated on the 17th February 2016, is registered in the Republic of Vanuatu with its registered office located at 1276, Govant Building, Kumul Highway, Port Vila, Republic of Vanuatu. Deriv (V) Ltd is licensed by the Vanuatu Financial Services Commission (<0>view licence</0>) and is a member of the <1>Financial Markets Association</1>._t_"
                                components={[
                                    <a
                                        key={0}
                                        href="/regulatory/Deriv_(V)_Ltd.pdf"
                                        className="underline text-typography-default inline text-base"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    />,
                                    <a
                                        key={1}
                                        href="/regulatory/Financial_Markets_Association_Cert.pdf"
                                        className="underline text-typography-default inline text-base"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    />,
                                ]}
                            />
                        </Text>
                        <Text>
                            {localize(
                                `_t_Clients in the rest of the world (except for certain countries such as the USA, Canada, and Hong Kong) who wish to trade CFDs on financial instruments (via MT5 Financial accounts) and derived indices (via MT5 Derived accounts) can have Deriv MT5 and Deriv X accounts under Deriv (V) Ltd._t_`,
                            )}
                        </Text>
                    </ContentText>

                    <ContentText
                        className=" max-w-[816px] mx-auto bg-background-primary-container max-sm:px-800 max-lg:px-1200"
                        title="Deriv (SVG) LLC"
                    >
                        <Text className="text-start">
                            <Localize translate_text="_t_Deriv (SVG) LLC (Company No. 273 LLC 2020), incorporated on the 12th February 2019, is registered in Saint Vincent and the Grenadines with its registered office located at First Floor, SVG Teachers Credit Union Uptown Building, Corner of James and Middle Street, Kingstown P.O., St Vincent and the Grenadines._t_" />
                        </Text>
                        <Text>
                            <Localize translate_text="_t_Clients in the rest of the world (except for restricted countries such as the USA, Canada, and Hong Kong) can have accounts under Deriv (SVG) LLC._t_" />
                        </Text>
                    </ContentText>

                    <ContentText
                        className="max-w-[816px] mx-auto bg-background-primary-container max-sm:px-800 max-lg:px-1200"
                        title="Deriv.com Limited"
                    >
                        <Text>
                            {localize(
                                `_t_Deriv.com Limited is the holding company for the above subsidiaries with the registration number 71479 and the registered address is located at 2nd Floor, 1 Cornet Street, St Peter Port, Guernsey, GY1 1BZ._t_`,
                            )}
                        </Text>
                    </ContentText>

                    <ContentText
                        className=" max-w-[816px] mx-auto bg-background-primary-container max-sm:px-800 max-lg:px-1200"
                        title="The Financial Commission"
                    >
                        <Text className="text-start">
                            <Localize
                                translate_text="_t_We are registered with the Financial Commission, an international independent organisation dedicated to resolving disputes within the financial services industry (<0>view membership</0>)._t_"
                                components={[
                                    <a
                                        key={0}
                                        href="/regulatory/deriv-com-ltd-membership.pdf"
                                        className="underline text-typography-default inline text-base"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    />,
                                ]}
                            />
                        </Text>
                        <Text className="text-start">
                            <Localize
                                translate_text="_t_For fair resolution of any complaints, please contact us via <0>live chat</0>._t_"
                                components={[
                                    <span
                                        key={0}
                                        className="underline text-typography-default inline text-base cursor-pointer"
                                        onClick={() => {
                                            is_livechat_interactive && LC_API.open_chat_window()
                                        }}
                                    />,
                                ]}
                            />
                        </Text>
                    </ContentText>
                </>
            ) : null}

            <Divider />
        </Layout>
    )
}

export default WithIntl()(Regulatory)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Licence and regulatory information | Deriv_t_"
        description="_t_Deriv operates and offers its products and services under the Deriv Group, which has several subsidiary companies licensed in their respective jurisdictions._t_"
        pageContext={pageContext}
    />
)
