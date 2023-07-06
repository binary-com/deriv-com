import React from 'react'
import DigitalOptionsLayout from '../../components/digital-options-layout'
import OptionsContent from '../../components/options-content'
import OptionsFaq from '../../components/options-faq'
import { upAndDownContentItems, upAndDownFAQ, upAndDownMarkets, upAndDownPlatforms } from './data'

const UpAndDownDigitalOptionsPage = () => {
    return (
        <DigitalOptionsLayout>
            <OptionsContent
                items={upAndDownContentItems}
                markets={upAndDownMarkets}
                trade_platforms={upAndDownPlatforms}
            />
            <OptionsFaq faqs={upAndDownFAQ} />
        </DigitalOptionsLayout>
    )
}

export default UpAndDownDigitalOptionsPage
