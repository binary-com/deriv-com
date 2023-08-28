import React from 'react'
import { Script } from 'gatsby'
import { upAndDownContentItems, upAndDownFAQ, upAndDownMarkets, upAndDownPlatforms } from './data'
import { faq_schema } from './_faq-schema'
import AvailableMarketPlatforms from 'features/components/organisms/available-markets-platforms'
import DigitalOptionsLayout from 'features/components/templates/digital-options-layout'
import OptionsContent from 'features/components/templates/options-content'
import OptionsFaq from 'features/components/templates/options-faq'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const UpAndDownDigitalOptionsPage = () => {
    return (
        <DigitalOptionsLayout>
            <OptionsContent items={upAndDownContentItems} />
            <AvailableMarketPlatforms markets={upAndDownMarkets} platforms={upAndDownPlatforms} />
            <OptionsFaq faqs={upAndDownFAQ} />
        </DigitalOptionsLayout>
    )
}

export default UpAndDownDigitalOptionsPage

export const Head = ({ pageContext }: TGatsbyHead) => (
    <>
        <SEO
            title="_t_Up/Down | Digital options contract | Deriv_t_"
            description="_t_Open a digital options contract with an Up/Down trade type on Deriv’s trading platforms and earn payouts with accurate market predictions._t_"
            pageContext={pageContext}
        />
        <Script type="application/ld+json">{JSON.stringify(faq_schema)}</Script>
    </>
)
