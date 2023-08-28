import React from 'react'
import { Script } from 'gatsby'
import {
    only_ups_downs_content_items,
    only_ups_downs_markets,
    only_ups_downs_platforms,
    only_ups_downs_FAQ,
} from './data'
import { faq_schema } from './_faq-schema'
import AvailableMarketPlatforms from 'features/components/organisms/available-markets-platforms'
import DigitalOptionsLayout from 'features/components/templates/digital-options-layout'
import OptionsContent from 'features/components/templates/options-content'
import OptionsFaq from 'features/components/templates/options-faq'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const OnlyUpAndOnlyDownDigitalOptionsPage = () => {
    return (
        <DigitalOptionsLayout>
            <OptionsContent items={only_ups_downs_content_items} />
            <AvailableMarketPlatforms
                markets={only_ups_downs_markets}
                platforms={only_ups_downs_platforms}
            />
            <OptionsFaq faqs={only_ups_downs_FAQ} />
        </DigitalOptionsLayout>
    )
}

export default OnlyUpAndOnlyDownDigitalOptionsPage

export const Head = ({ pageContext }: TGatsbyHead) => (
    <>
        <SEO
            title="_t_Only ups/Only downs | Digital options contract | Deriv_t_"
            description="_t_Open a digital options contract with an Only ups/Only downs trade type on Deriv’s trading platforms and earn payouts with accurate market predictions._t_"
            pageContext={pageContext}
        />
        <Script type="application/ld+json">{JSON.stringify(faq_schema)}</Script>
    </>
)
