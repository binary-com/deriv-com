import React from 'react'
import { Script } from 'gatsby'
import { faq_schema } from './_faq-schema'
import {
    reset_and_recall_content_items,
    reset_call_faq,
    reset_call_markets,
    reset_call_Platforms,
} from './data'
import AvailableMarketPlatforms from 'features/components/organisms/available-markets-platforms'
import DigitalOptionsLayout from 'features/components/templates/digital-options-layout'
import OptionsContent from 'features/components/templates/options-content'
import OptionsFaq from 'features/components/templates/options-faq'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const ResetCallDigitalOptionsPage = () => {
    return (
        <DigitalOptionsLayout>
            <OptionsContent items={reset_and_recall_content_items} />
            <AvailableMarketPlatforms
                markets={reset_call_markets}
                platforms={reset_call_Platforms}
            />
            <OptionsFaq faqs={reset_call_faq} />
        </DigitalOptionsLayout>
    )
}

export default ResetCallDigitalOptionsPage

export const Head = ({ pageContext }: TGatsbyHead) => (
    <>
        <SEO
            title="_t_Reset call/reset put | Digital options contract | Deriv_t_"
            description="_t_Open a digital options contract with a Reset call/Reset put trade type on Deriv’s trading platforms and earn payouts with accurate market predictions._t_"
            pageContext={pageContext}
        />
        <Script type="application/ld+json">{JSON.stringify(faq_schema)}</Script>
    </>
)
