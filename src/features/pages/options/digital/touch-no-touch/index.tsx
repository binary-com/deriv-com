import React from 'react'
import {
    touch_and_no_touch_content_items,
    touch_and_no_touch_faq,
    touch_no_touch_markets,
    touch_and_no_touch_platforms,
} from './data'
import TouchNoTouchSEO from './seo'
import AvailableMarketPlatforms from 'features/components/organisms/available-markets-platforms'
import DigitalOptionsLayout from 'features/components/templates/digital-options-layout'
import OptionsContent from 'features/components/templates/options-content'
import OptionsFaq from 'features/components/templates/options-faq'

const TouchAndNoTouchDigitalOptionsPage = () => {
    return (
        <DigitalOptionsLayout>
            <TouchNoTouchSEO />
            <OptionsContent items={touch_and_no_touch_content_items} />
            <AvailableMarketPlatforms
                markets={touch_no_touch_markets}
                platforms={touch_and_no_touch_platforms}
            />
            <OptionsFaq faqs={touch_and_no_touch_faq} />
        </DigitalOptionsLayout>
    )
}

export default TouchAndNoTouchDigitalOptionsPage
