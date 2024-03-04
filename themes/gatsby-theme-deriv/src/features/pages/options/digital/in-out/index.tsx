import React from 'react'
import { inOutContentItems, inOutFAQ, inOutMarkets, inOutPlatforms } from './data'
import AvailableMarketPlatforms from 'features/components/organisms/available-markets-platforms'
import DigitalOptionsLayout from 'features/components/templates/digital-options-layout'
import OptionsContent from 'features/components/templates/options-content'
import OptionsFaq from 'features/components/templates/options-faq'
import { BuildVariantType } from 'features/types'

const InOutDigitalOptionsPage = ({region}: BuildVariantType) => {
    return (
        <DigitalOptionsLayout region={region}>
            <OptionsContent items={inOutContentItems} />
            <AvailableMarketPlatforms markets={inOutMarkets} platforms={inOutPlatforms} />
            <OptionsFaq faqs={inOutFAQ} />
        </DigitalOptionsLayout>
    )
}

export default InOutDigitalOptionsPage
