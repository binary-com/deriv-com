import React from 'react'
import { inOutContentItems, /* asiansFAQ, */ inOutMarkets, inOutPlatforms } from './data'
import AvailableMarketPlatforms from 'features/components/organisms/available-markets-platforms'
import DigitalOptionsLayout from 'features/components/templates/digital-options-layout'
import OptionsContent from 'features/components/templates/options-content'
// import OptionsFaq from 'features/components/templates/options-faq'

const InOutDigitalOptionsPage = () => {
    return (
        <DigitalOptionsLayout>
            <OptionsContent items={inOutContentItems} />
            <AvailableMarketPlatforms markets={inOutMarkets} platforms={inOutPlatforms} />
            {/* <OptionsFaq faqs={asiansFAQ} /> */}
        </DigitalOptionsLayout>
    )
}

export default InOutDigitalOptionsPage
