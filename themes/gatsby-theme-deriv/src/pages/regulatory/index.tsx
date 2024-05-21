import React from 'react'
import { Hero, ContentText } from '@deriv-com/blocks'
import { Text } from '@deriv/quill-design'
import { RegulatoryProps } from './_type'
import InfoRowCpa from './_info-row-cpa'
import FinancialCommission from './_financial_commission'
import InvestmentEurope from './_investment-europe'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import { Localize, localize, WithIntl } from 'components/localization'
import { TGatsbyHead } from 'features/types'

type RegulatoryPageProps = RegulatoryProps & TGatsbyHead

const Regulatory = ({ pageContext}: RegulatoryPageProps) => {
    const {region} = pageContext;

    return (
        <Layout region={region}>
            <div className="bg-solid-slate-75">
                <div className="max-w-[816px] mx-auto">
                    <Hero.ContentLess
                        className="bg-solid-slate-75 px-600 md:px-180"
                        title={<Localize translate_text="_t_Regulatory information_t_" />}
                        description={
                            <Localize translate_text="_t_Since 1999, the Deriv group of companies has served traders around the world with integrity and reliability. We<br /> always hold ourselves to the highest ethical standards and regulatory requirements._t_" />
                        }
                    >
                        <Text className="text-center pt-800">
                            <Localize translate_text="_t_Here are our subsidiary companies with their respective registration and licensing information._t_" />
                        </Text>
                    </Hero.ContentLess>
                </div>
            </div>
            <InvestmentEurope />
            <InfoRowCpa />
            <ContentText
                className=" max-w-[816px] mx-auto bg-background-primary-container max-sm:px-800 max-lg:px-1200"
                title="Deriv (FX) Ltd"
            >
                <Text className="text-start">
                    <Localize
                        translate_text="_t_Deriv (FX) Ltd (Company No. LL13394), incorporated on the 18th January 2017, is registered in the Federal Territory of Labuan (Malaysia) with its registered office located at Unit No. 3A-16, Level 3A, Labuan Times Square, Jalan Merdeka, 87000, Federal Territory of Labuan, Malaysia. Deriv (FX) Ltd is licensed by the Labuan Financial Services Authority (<0>view licence</0>) and is a member of the Labuan Fintech Association._t_"
                        components={[
                            <a
                                key={0}
                                href="/regulatory/Deriv_(FX)_Ltd.pdf"
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
                        translate_text="_t_Deriv (V) Ltd (Company No. 014556), incorporated on the 17th February 2016, is registered in the Republic of Vanuatu with its registered office located at 1276, Govant Building, Kumul Highway, Port Vila, Republic of Vanuatu. Deriv (V) Ltd is licensed by the Vanuatu Financial Services Commission (<0>view licence</0>) and is a <1>member</1> of the Financial Markets Association._t_"
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
            <FinancialCommission />
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
