import React from 'react'
import {
    digits_content_items,
    digit_options,
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
            <OptionsContent items={digits_content_items} />
            <AvailableMarketPlatforms
                markets={digit_options_markets}
                platforms={digit_options_platforms}
            />
            <OptionsFaq faqs={digit_options} />
        </DigitalOptionsLayout>
    )
}

export default DigitDigitalOptionsPage
