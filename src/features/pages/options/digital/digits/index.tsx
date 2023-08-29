import React from 'react'
import DigitsSEO from './seo'
import {
    digits_content_items,
    digit_options_faq,
    digit_options_markets,
    digit_options_platforms,
} from './data'
import AvailableMarketPlatforms from 'features/components/organisms/available-markets-platforms'
import DigitalOptionsLayout from 'features/components/templates/digital-options-layout'
import OptionsContent from 'features/components/templates/options-content'
import OptionsFaq from 'features/components/templates/options-faq'

const DigitDigitalOptionsPage = () => {
    return (
        <DigitalOptionsLayout>
            <DigitsSEO />
            <OptionsContent items={digits_content_items} />
            <AvailableMarketPlatforms
                markets={digit_options_markets}
                platforms={digit_options_platforms}
            />
            <OptionsFaq faqs={digit_options_faq} />
        </DigitalOptionsLayout>
    )
}

export default DigitDigitalOptionsPage
