import React from 'react'
import DigitalOptionsLayout from '../../components/digital-options-layout'
import OptionsContent from '../../components/options-content'
import OptionsFaq from '../../components/options-faq'
import AvailableMarketPlatforms from '../../components/available-markets-platforms'
import { upAndDownContentItems, upAndDownFAQ, upAndDownMarkets, upAndDownPlatforms } from './data'

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
