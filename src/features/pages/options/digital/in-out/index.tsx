import React from 'react'
import { inOutContentItems, inOutFAQ, inOutMarkets, inOutPlatforms } from './data'
import InOutSEO from './seo'
import AvailableMarketPlatforms from 'features/components/organisms/available-markets-platforms'
import DigitalOptionsLayout from 'features/components/templates/digital-options-layout'
import OptionsContent from 'features/components/templates/options-content'
import OptionsFaq from 'features/components/templates/options-faq'

const InOutDigitalOptionsPage = () => {
    return (
        <DigitalOptionsLayout>
            <InOutSEO />
            <OptionsContent items={inOutContentItems} />
            <AvailableMarketPlatforms markets={inOutMarkets} platforms={inOutPlatforms} />
            <OptionsFaq faqs={inOutFAQ} />
        </DigitalOptionsLayout>
    )
}

export default InOutDigitalOptionsPage
