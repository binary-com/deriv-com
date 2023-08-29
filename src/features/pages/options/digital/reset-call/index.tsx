import React from 'react'
import {
    reset_and_recall_content_items,
    reset_call_faq,
    reset_call_markets,
    reset_call_Platforms,
} from './data'
import ResetCallSEO from './seo'
import AvailableMarketPlatforms from 'features/components/organisms/available-markets-platforms'
import DigitalOptionsLayout from 'features/components/templates/digital-options-layout'
import OptionsContent from 'features/components/templates/options-content'
import OptionsFaq from 'features/components/templates/options-faq'

const ResetCallDigitalOptionsPage = () => {
    return (
        <DigitalOptionsLayout>
            <ResetCallSEO />
            <OptionsContent items={reset_and_recall_content_items} />
            <AvailableMarketPlatforms
                markets={reset_call_markets}
                platforms={reset_call_Platforms}
            />
            <OptionsFaq faqs={reset_call_faq} />
        </DigitalOptionsLayout>
    )
}

export default ResetCallDigitalOptionsPage
