import React from 'react'
import { Script } from 'gatsby'
import {
    digits_content_items,
    digit_options_faq,
    digit_options_markets,
    digit_options_platforms,
} from './data'
import { faq_schema } from './_faq-schema'
import AvailableMarketPlatforms from 'features/components/organisms/available-markets-platforms'
import DigitalOptionsLayout from 'features/components/templates/digital-options-layout'
import OptionsContent from 'features/components/templates/options-content'
import OptionsFaq from 'features/components/templates/options-faq'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const DigitDigitalOptionsPage = () => {
    return (
        <DigitalOptionsLayout>
            <OptionsContent items={digits_content_items} />
            <AvailableMarketPlatforms
                markets={digit_options_markets}
                platforms={digit_options_platforms}
            />
            <OptionsFaq faqs={digit_options_faq} />
        </DigitalOptionsLayout>
    )
}

export default DigitDigitalOptionsPage

export const Head = ({ pageContext }: TGatsbyHead) => (
    <>
        <SEO
            title="_t_Digits | Digital options contract | Deriv_t_"
            description="_t_Open a digital options contract with a Digits trade type on Deriv’s trading platforms and earn payouts with accurate market predictions._t_"
            pageContext={pageContext}
        />
        <Script type="application/ld+json">{JSON.stringify(faq_schema)}</Script>
    </>
)
