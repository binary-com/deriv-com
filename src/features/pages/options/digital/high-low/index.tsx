import React from 'react'
import {
    high_and_low_content_items,
    high_and_low_faq,
    high_and_low_markets,
    high_and_low_Platforms,
} from './data'
import HighLowSEO from './seo'
import AvailableMarketPlatforms from 'features/components/organisms/available-markets-platforms'
import DigitalOptionsLayout from 'features/components/templates/digital-options-layout'
import OptionsContent from 'features/components/templates/options-content'
import OptionsFaq from 'features/components/templates/options-faq'

const HighAndLowDigitalOptionsPage = () => {
    return (
        <DigitalOptionsLayout>
            <HighLowSEO />
            <OptionsContent items={high_and_low_content_items} />
            <AvailableMarketPlatforms
                markets={high_and_low_markets}
                platforms={high_and_low_Platforms}
            />
            <OptionsFaq faqs={high_and_low_faq} />
        </DigitalOptionsLayout>
    )
}

export default HighAndLowDigitalOptionsPage
