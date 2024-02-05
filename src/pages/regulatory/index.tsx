import React from 'react'
import { Hero, AccordionBlock, BlockWrapper } from '@deriv-com/blocks'
import { Text, Heading } from '@deriv/quill-design'
import { CustomLink } from '@deriv-com/components'
import EUgrid from './_eu-grid'
import DocumentAccordion from './_document_accordion'
import { deriv_app_url } from 'common/constants'
import useRegion from 'components/hooks/use-region'
import Layout from 'components/layout/layout'
import { Divider } from 'components/elements'
import PDFIcon from 'images/svg/regulatory/pdf-icon-black.svg'
import { SEO } from 'components/containers'
import { Localize, WithIntl } from 'components/localization'
import { TGatsbyHead } from 'features/types'
import InitialLoader from 'components/elements/dot-loader'

const Regulatory = () => {
    const { is_row, is_cpa_plan, is_region_loading } = useRegion()

    return (
        <Layout>
            <Hero.ContentLess
                title={<Localize translate_text="Regulatory information" />}
                className="bg-solid-slate-75"
            >
                <div className="max-w-[816px] mx-auto">
                    <Text className="text-center mb-400">
                        <Localize
                            translate_text="_t_Since 1999, the Deriv group of companies has served traders around the world
                        with integrity and reliability. We always hold ourselves to the highest
                        ethical standards and regulatory requirements._t_"
                        />
                    </Text>
                    <Text className="text-center">
                        <Localize
                            translate_text="_t_Here are our subsidiary companies with their respective registration and
                        licensing information._t_"
                        />
                    </Text>
                </div>
            </Hero.ContentLess>
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
                                            <CustomLink
                                                key={0}
                                                href="/regulatory/Deriv_Investments_(Europe)_Limited.pdf"
                                                className="underline inline text-base"
                                            />,
                                        ]}
                                    />
                                </Text>
                                <Text className="text-center">
                                    <Localize translate_text="Here are the EU countries with access to Deriv.com through EU passporting rights." />
                                </Text>

                                <BlockWrapper>
                                    <EUgrid />
                                </BlockWrapper>
                                <AccordionBlock
                                    className=" border-spacing-general-2xl"
                                    content={{
                                        data: [
                                            [
                                                {
                                                    className:
                                                        'border-opacity-black-100 border-x-none',
                                                    content: function noRefCheck() {
                                                        return (
                                                            <>
                                                                <div className="justify-start">
                                                                    <CustomLink
                                                                        href="/regulatory/Financial_Disclosures_Annual_Report_2022.pdf"
                                                                        className="underline inline text-base"
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
                                                                    </CustomLink>
                                                                </div>
                                                            </>
                                                        )
                                                    },
                                                    divider: 'bottom',
                                                    title: 'Financial disclosure report',
                                                },

                                                {
                                                    className:
                                                        'border-opacity-black-100 border-x-none',
                                                    content: function noRefCheck() {
                                                        return (
                                                            <div>
                                                                <DocumentAccordion />
                                                            </div>
                                                        )
                                                    },
                                                    title: 'Key information documents',
                                                },
                                                {
                                                    className:
                                                        'border-opacity-black-100 border-x-none',
                                                    content: function noRefCheck() {
                                                        return (
                                                            <div className="flex lg:flex-row items-start justify-start flex-col ">
                                                                <CustomLink
                                                                    href="/regulatory/RTS28-2022.pdf"
                                                                    className="underline inline text-base mb-800 mr-800"
                                                                >
                                                                    <div className="flex items-center">
                                                                        <img
                                                                            src={PDFIcon}
                                                                            alt="pdf icon black"
                                                                            className="pr-400"
                                                                        />
                                                                        <Text>
                                                                            <Localize translate_text="_t_RTS28 2022_t_" />
                                                                        </Text>
                                                                    </div>
                                                                </CustomLink>
                                                                <CustomLink
                                                                    href="/regulatory/RTS28-2021.pdf"
                                                                    className="underline inline text-base mb-800 mr-800"
                                                                >
                                                                    <div className="flex items-center">
                                                                        <img
                                                                            src={PDFIcon}
                                                                            alt="pdf icon black"
                                                                            className="pr-400"
                                                                        />
                                                                        <Text>
                                                                            <Localize translate_text="_t_RTS28 2021_t_" />
                                                                        </Text>
                                                                    </div>
                                                                </CustomLink>
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
                        <Hero.ContentLess className="bg-solid-slate-75">
                            <div className="max-w-[816px] mx-auto">
                                <Heading.H1 className="text-[28px] lg:text-[48px] text-start pb-800">
                                    Deriv (FX) Ltd
                                </Heading.H1>

                                <Text className="text-start pb-800">
                                    <Localize
                                        translate_text="_t_Deriv (FX) Ltd (Company No. LL13394), incorporated on the 18th January 2017, is registered in the Federal Territory of Labuan (Malaysia) with its registered office located at Unit No. 3A-16, Level 3A, Labuan Times Square, Jalan Merdeka, 87000, Federal Territory of Labuan, Malaysia. Deriv (FX) Ltd is licensed by the Labuan Financial Services Authority (<0>view licence</0>) and is a member of the <1>Labuan Fintech Association</1>._t_"
                                        components={[
                                            <CustomLink
                                                key={0}
                                                href="/regulatory/Deriv_(FX)_Ltd.pdf"
                                                className="underline inline text-base"
                                            />,
                                            <CustomLink
                                                key={1}
                                                href="https://www.labuanfintech.org/"
                                                className="underline inline text-base"
                                            />,
                                        ]}
                                    />
                                </Text>
                                <Text>
                                    <Localize
                                        translate_text="Clients in the rest of the world (except for restricted
                                    countries such as the USA, Canada, and Hong Kong) who wish to
                                    trade CFDs on forex and cryptocurrencies can have MT5 Financial
                                    STP accounts under Deriv (FX) Ltd."
                                    />
                                </Text>
                            </div>
                        </Hero.ContentLess>
                        <Hero.ContentLess>
                            <div className="max-w-[816px] mx-auto">
                                <Heading.H1 className="text-[28px] lg:text-[48px] text-start pb-800">
                                    Deriv (BVI) Ltd
                                </Heading.H1>

                                <Text className="text-start pb-800">
                                    <Localize
                                        translate_text="_t_Deriv (BVI) Limited (Company No. 1841206), incorporated on the 15th September 2014, is registered in the British Virgin Islands with its registered office located at Kingston Chambers, P.O. Box 173, Road Town, Tortola British Virgin Islands. Deriv (BVI) Ltd is licensed by the British Virgin Islands Financial Services Commission (<0>view licence</0>)._t_"
                                        components={[
                                            <CustomLink
                                                key={0}
                                                href="/regulatory/Deriv_(BVI)_Ltd.pdf"
                                                className="underline inline text-base"
                                            />,
                                        ]}
                                    />
                                </Text>
                                <Text>
                                    <Localize
                                        translate_text="Clients in the rest of the world (except for certain countries
                                    such as the USA, Canada, and Hong Kong) who wish to trade CFDs
                                    on financial instruments (via MT5 Financial accounts) and
                                    derived indices (via MT5 Derived accounts) can have Deriv MT5
                                    accounts under Deriv (BVI) Ltd."
                                    />
                                </Text>
                            </div>
                        </Hero.ContentLess>
                        <Hero.ContentLess className="bg-solid-slate-75">
                            <div className="max-w-[816px] mx-auto">
                                <Heading.H1 className="text-[28px] lg:text-[48px] text-start pb-800">
                                    Deriv (V) Ltd
                                </Heading.H1>

                                <Text className="text-start pb-800">
                                    <Localize
                                        translate_text="_t_Deriv (V) Ltd (Company No. 014556), incorporated on the 17th February 2016, is registered in the Republic of Vanuatu with its registered office located at 1276, Govant Building, Kumul Highway, Port Vila, Republic of Vanuatu. Deriv (V) Ltd is licensed by the Vanuatu Financial Services Commission (<0>view licence</0>) and is a member of the <1>Financial Markets Association</1>._t_"
                                        components={[
                                            <CustomLink
                                                key={0}
                                                href="/regulatory/Deriv_(V)_Ltd.pdf"
                                                className="underline inline text-base"
                                            />,
                                            <CustomLink
                                                key={1}
                                                href="/regulatory/Financial_Markets_Association_Cert.pdf"
                                                className="underline inline text-base"
                                            />,
                                        ]}
                                    />
                                </Text>
                                <Text>
                                    <Localize
                                        translate_text="Clients in the rest of the world (except for certain countries
                                    such as the USA, Canada, and Hong Kong) who wish to trade CFDs
                                    on financial instruments (via MT5 Financial accounts) and
                                    derived indices (via MT5 Derived accounts) can have Deriv MT5
                                    and Deriv X accounts under Deriv (V) Ltd."
                                    />
                                </Text>
                            </div>
                        </Hero.ContentLess>
                        <Hero.ContentLess>
                            <div className="max-w-[816px] mx-auto">
                                <Heading.H1 className="text-[28px] lg:text-[48px] text-start pb-800">
                                    Deriv (SVG) LLC
                                </Heading.H1>

                                <Text className="text-start pb-800">
                                    <Localize translate_text="_t_Deriv (SVG) LLC (Company No. 273 LLC 2020), incorporated on the 12th February 2019, is registered in Saint Vincent and the Grenadines with its registered office located at First Floor, SVG Teachers Credit Union Uptown Building, Corner of James and Middle Street, Kingstown P.O., St Vincent and the Grenadines._t_" />
                                </Text>
                                <Text>
                                    <Localize
                                        translate_text="Clients in the rest of the world (except for restricted
                                    countries such as the USA, Canada, and Hong Kong) can have
                                    accounts under Deriv (SVG) LLC."
                                    />
                                </Text>
                            </div>
                        </Hero.ContentLess>
                        <Hero.ContentLess className="bg-solid-slate-75">
                            <div className="max-w-[816px] mx-auto">
                                <Heading.H1 className="text-[28px] lg:text-[48px] text-start pb-800">
                                    Deriv.com Limited
                                </Heading.H1>

                                <Text>
                                    <Localize
                                        translate_text="Deriv.com Limited is the holding company for the above
                                    subsidiaries with the registration number 71479 and the
                                    registered address is located at 2nd Floor, 1 Cornet Street, St
                                    Peter Port, Guernsey, GY1 1BZ."
                                    />
                                </Text>
                            </div>
                        </Hero.ContentLess>
                        <Hero.ContentLess>
                            <div className="max-w-[816px] mx-auto">
                                <Heading.H1 className="text-[28px] lg:text-[48px] text-start pb-800">
                                    The Financial Commission
                                </Heading.H1>

                                <Text className="text-start pb-800">
                                    <Localize
                                        translate_text="_t_We are registered with the Financial Commission, an international independent organisation dedicated to resolving disputes within the financial services industry (<0>view membership</0>)._t_"
                                        components={[
                                            <CustomLink
                                                key={0}
                                                href="/regulatory/deriv-com-ltd-membership.pdf"
                                                className="underline inline text-base"
                                            />,
                                        ]}
                                    />
                                </Text>
                                <Text className="text-start">
                                    <Localize
                                        translate_text="_t_For fair resolution of any complaints, please contact us via <0>live chat</0>. To learn more, see our <1>complaint policy</1>._t_"
                                        components={[
                                            <CustomLink
                                                key={0}
                                                href="/contact_us?is_livechat_open=true"
                                                className="underline inline text-base"
                                            />,
                                            <CustomLink
                                                key={1}
                                                href={`${deriv_app_url}/complaints-policy`}
                                                className="underline inline text-base"
                                            />,
                                        ]}
                                    />
                                </Text>
                            </div>
                        </Hero.ContentLess>
                    </>
                )
            ) : (
                <InitialLoader />
            )}

            {is_row || is_cpa_plan ? (
                <>
                    <Hero.ContentLess>
                        <div className="max-w-[816px] mx-auto">
                            <Heading.H1 className="text-[28px] lg:text-[48px] text-start mb-800">
                                Deriv Investments (Europe) Limited
                            </Heading.H1>
                            <Text className="text-start">
                                <Localize
                                    translate_text="_t_Deriv Investments (Europe) Limited, incorporated on 22 April 2015 (Company No. C 70156), is based in Malta with its registered address at Level 3, W Business Centre, Triq Dun Karm, Birkirkara BKR9033, and is regulated by the Malta Financial Services Authority under the Investments Services Act to provide investment services (<0>view licence</0>)._t_"
                                    components={[
                                        <CustomLink
                                            key={0}
                                            href="/regulatory/Deriv_Investments_(Europe)_Limited.pdf"
                                            className="underline inline text-base"
                                        />,
                                    ]}
                                />
                            </Text>
                        </div>
                    </Hero.ContentLess>
                    <Hero.ContentLess className="bg-solid-slate-75">
                        <div className="max-w-[816px] mx-auto">
                            <Heading.H1 className="text-[28px] lg:text-[48px] text-start mb-800">
                                Deriv (FX) Ltd
                            </Heading.H1>

                            <Text className="text-start mb-800">
                                <Localize
                                    translate_text="_t_Deriv (FX) Ltd (Company No. LL13394), incorporated on the 18th January 2017, is registered in the Federal Territory of Labuan (Malaysia) with its registered office located at Unit No. 3A-16, Level 3A, Labuan Times Square, Jalan Merdeka, 87000, Federal Territory of Labuan, Malaysia. Deriv (FX) Ltd is licensed by the Labuan Financial Services Authority (<0>view licence</0>) and is a member of the <1>Labuan Fintech Association</1>._t_"
                                    components={[
                                        <CustomLink
                                            key={0}
                                            href="/regulatory/Deriv_(FX)_Ltd.pdf"
                                            className="underline inline text-base"
                                        />,
                                        <CustomLink
                                            key={1}
                                            href="https://www.labuanfintech.org/"
                                            className="underline inline text-base"
                                        />,
                                    ]}
                                />
                            </Text>
                            <Text>
                                <Localize
                                    translate_text="_t_Clients in the rest of the world (except for restricted countries
                                such as the USA, Canada, and Hong Kong) who wish to trade CFDs on
                                forex and cryptocurrencies can have MT5 Financial STP accounts under
                                Deriv (FX) Ltd._t_"
                                />
                            </Text>
                        </div>
                    </Hero.ContentLess>
                    <Hero.ContentLess>
                        <div className="max-w-[816px] mx-auto">
                            <Heading.H1 className="text-[28px] lg:text-[48px] text-start mb-800">
                                Deriv (BVI) Ltd
                            </Heading.H1>

                            <Text className="text-start mb-800">
                                <Localize
                                    translate_text="_t_Deriv (BVI) Limited (Company No. 1841206), incorporated on the 15th September 2014, is registered in the British Virgin Islands with its registered office located at Kingston Chambers, P.O. Box 173, Road Town, Tortola British Virgin Islands. Deriv (BVI) Ltd is licensed by the British Virgin Islands Financial Services Commission (<0>view licence</0>)._t_"
                                    components={[
                                        <CustomLink
                                            key={0}
                                            href="/regulatory/Deriv_(BVI)_Ltd.pdf"
                                            className="underline inline text-base"
                                        />,
                                    ]}
                                />
                            </Text>
                            <Text>
                                <Localize
                                    translate_text="_t_Clients in the rest of the world (except for certain countries such
                                as the USA, Canada, and Hong Kong) who wish to trade CFDs on
                                financial instruments (via MT5 Financial accounts) and derived
                                indices (via MT5 Derived accounts) can have Deriv MT5 accounts under
                                Deriv (BVI) Ltd._t_"
                                />
                            </Text>
                        </div>
                    </Hero.ContentLess>
                    <Hero.ContentLess className="bg-solid-slate-75">
                        <div className="max-w-[816px] mx-auto">
                            <Heading.H1 className="text-[28px] lg:text-[48px] text-start mb-800">
                                Deriv (V) Ltd
                            </Heading.H1>

                            <Text className="text-start mb-800">
                                <Localize
                                    translate_text="_t_Deriv (V) Ltd (Company No. 014556), incorporated on the 17th February 2016, is registered in the Republic of Vanuatu with its registered office located at 1276, Govant Building, Kumul Highway, Port Vila, Republic of Vanuatu. Deriv (V) Ltd is licensed by the Vanuatu Financial Services Commission (<0>view licence</0>) and is a member of the <1>Financial Markets Association</1>._t_"
                                    components={[
                                        <CustomLink
                                            key={0}
                                            href="/regulatory/Deriv_(V)_Ltd.pdf"
                                            className="underline inline text-base"
                                        />,
                                        <CustomLink
                                            key={1}
                                            href="/regulatory/Financial_Markets_Association_Cert.pdf"
                                            className="underline inline text-base"
                                        />,
                                    ]}
                                />
                            </Text>
                            <Text>
                                <Localize
                                    translate_text="_t_Clients in the rest of the world (except for certain countries such
                                as the USA, Canada, and Hong Kong) who wish to trade CFDs on
                                financial instruments (via MT5 Financial accounts) and derived
                                indices (via MT5 Derived accounts) can have Deriv MT5 and Deriv X
                                accounts under Deriv (V) Ltd._t_"
                                />
                            </Text>
                        </div>
                    </Hero.ContentLess>
                    <Hero.ContentLess>
                        <div className="max-w-[816px] mx-auto">
                            <Heading.H1 className="text-[28px] lg:text-[48px] text-start mb-800">
                                Deriv (SVG) LLC
                            </Heading.H1>

                            <Text className="text-start mb-800">
                                <Localize translate_text="_t_Deriv (SVG) LLC (Company No. 273 LLC 2020), incorporated on the 12th February 2019, is registered in Saint Vincent and the Grenadines with its registered office located at First Floor, SVG Teachers Credit Union Uptown Building, Corner of James and Middle Street, Kingstown P.O., St Vincent and the Grenadines._t_" />
                            </Text>
                            <Text>
                                <Localize
                                    translate_text="_t_Clients in the rest of the world (except for restricted countries
                                such as the USA, Canada, and Hong Kong) can have accounts under
                                Deriv (SVG) LLC._t_"
                                />
                            </Text>
                        </div>
                    </Hero.ContentLess>
                    <Hero.ContentLess className="bg-solid-slate-75">
                        <div className="max-w-[816px] mx-auto">
                            <Heading.H1 className="text-[28px] lg:text-[48px] text-start mb-800">
                                Deriv.com Limited
                            </Heading.H1>

                            <Text>
                                <Localize
                                    translate_text="_t_Deriv.com Limited is the holding company for the above subsidiaries
                                with the registration number 71479 and the registered address is
                                located at 2nd Floor, 1 Cornet Street, St Peter Port, Guernsey, GY1
                                1BZ._t_"
                                />
                            </Text>
                        </div>
                    </Hero.ContentLess>
                    <Hero.ContentLess>
                        <div className="max-w-[816px] mx-auto">
                            <Heading.H1 className="text-[28px] lg:text-[48px] text-start mb-800">
                                The Financial Commission
                            </Heading.H1>

                            <Text className="text-start mb-800">
                                <Localize
                                    translate_text="_t_We are registered with the Financial Commission, an international independent organisation dedicated to resolving disputes within the financial services industry (<0>view membership</0>)._t_"
                                    components={[
                                        <CustomLink
                                            key={0}
                                            href="/regulatory/deriv-com-ltd-membership.pdf"
                                            className="underline inline text-base"
                                        />,
                                    ]}
                                />
                            </Text>
                            <Text className="text-start">
                                <Localize
                                    translate_text="_t_For fair resolution of any complaints, please contact us via <0>live chat</0>._t_"
                                    components={[
                                        <CustomLink
                                            key={0}
                                            href="/contact_us?is_livechat_open=true"
                                            className="underline inline text-base"
                                        />,
                                    ]}
                                />
                            </Text>
                        </div>
                    </Hero.ContentLess>
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
