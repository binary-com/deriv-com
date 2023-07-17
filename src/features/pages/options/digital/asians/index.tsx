import React from 'react'
import {
    /* upAndDownContentItems, */ asiansFAQ /* upAndDownMarkets, upAndDownPlatforms */,
} from './data'
// import AvailableMarketPlatforms from 'features/components/organisms/available-markets-platforms'
import DigitalOptionsLayout from 'features/components/templates/digital-options-layout'
// import OptionsContent from 'features/components/templates/options-content'
import OptionsFaq from 'features/components/templates/options-faq'

const AsiansDigitalOptionsPage = () => {
    return (
        <DigitalOptionsLayout>
            {/* <OptionsContent items={upAndDownContentItems} />
            <AvailableMarketPlatforms markets={upAndDownMarkets} platforms={upAndDownPlatforms} /> */}
            <OptionsFaq faqs={asiansFAQ} />
        </DigitalOptionsLayout>
    )
}

export default AsiansDigitalOptionsPage
