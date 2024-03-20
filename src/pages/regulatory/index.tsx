import React, { useState, useEffect } from 'react'
import { Hero, ContentText } from '@deriv-com/blocks'
import { Text } from '@deriv/quill-design'
import { RegulatoryProps } from './_type'
import InfoRowCpa from './_info-row-cpa'
import InvestmentEurope from './_investment-europe'
import { deriv_app_url } from 'common/constants'
import useRegion from 'components/hooks/use-region'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import { Localize, localize, WithIntl } from 'components/localization'
import { TGatsbyHead } from 'features/types'
import InitialLoader from 'components/elements/dot-loader'
import { useLivechat } from 'components/hooks/use-livechat'

const Regulatory = (locale: RegulatoryProps) => {
    const { is_row, is_cpa_plan, is_region_loading } = useRegion()
    const [is_livechat_interactive, LC_API] = useLivechat()
    const [is_row_cpa, setIsRowCpa] = useState(true)
    const investment_europe = is_row_cpa ? <InvestmentEurope locale={locale} /> : null

    useEffect(() => {
        if (is_row || is_cpa_plan) {
            setIsRowCpa(false)
        } else {
            setIsRowCpa(true)
        }
    }, [is_row, is_cpa_plan])

    return (
        <Layout>
            <div className="bg-solid-slate-75">
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
            {is_region_loading ? <InitialLoader /> : investment_europe}
            {!is_row_cpa && <InfoRowCpa />}
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
