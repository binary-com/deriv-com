import React from 'react'
import { upAndDownContentItems, upAndDownFAQ, upAndDownMarkets, upAndDownPlatforms } from './data'
import UpDownSEO from './seo'
import AvailableMarketPlatforms from 'features/components/organisms/available-markets-platforms'
import DigitalOptionsLayout from 'features/components/templates/digital-options-layout'
import OptionsContent from 'features/components/templates/options-content'
import OptionsFaq from 'features/components/templates/options-faq'

const UpAndDownDigitalOptionsPage = () => {
    return (
        <DigitalOptionsLayout>
            <UpDownSEO />
            <OptionsContent items={upAndDownContentItems} />
            <AvailableMarketPlatforms markets={upAndDownMarkets} platforms={upAndDownPlatforms} />
            <OptionsFaq faqs={upAndDownFAQ} />
        </DigitalOptionsLayout>
    )
}

export default UpAndDownDigitalOptionsPage
