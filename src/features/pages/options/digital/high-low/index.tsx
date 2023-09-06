import React from 'react'
import { Script } from 'gatsby'
import { faq_schema } from './_faq-schema'
import {
    high_and_low_content_items,
    high_and_low_faq,
    high_and_low_markets,
    high_and_low_Platforms,
} from './data'
import AvailableMarketPlatforms from 'features/components/organisms/available-markets-platforms'
import DigitalOptionsLayout from 'features/components/templates/digital-options-layout'
import OptionsContent from 'features/components/templates/options-content'
import OptionsFaq from 'features/components/templates/options-faq'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const HighAndLowDigitalOptionsPage = () => {
    return (
        <DigitalOptionsLayout>
            <OptionsContent items={high_and_low_content_items} />
            <AvailableMarketPlatforms
                markets={high_and_low_markets}
                platforms={high_and_low_Platforms}
            />
            <OptionsFaq faqs={high_and_low_faq} />
        </DigitalOptionsLayout>
    )
}

export default HighAndLowDigitalOptionsPage

export const Head = ({ pageContext }: TGatsbyHead) => (
    <>
        <SEO
            title="_t_High/Low ticks | Digital options contract | Deriv_t_"
            description="_t_Open a digital options contract with a High/Low ticks trade type on Deriv’s trading platforms and earn payouts with accurate market predictions._t_"
            pageContext={pageContext}
        />
        <Script type="application/ld+json">{JSON.stringify(faq_schema)}</Script>
    </>
)
