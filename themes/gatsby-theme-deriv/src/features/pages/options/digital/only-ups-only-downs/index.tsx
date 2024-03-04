import React from 'react'
import {
    only_ups_downs_content_items,
    only_ups_downs_markets,
    only_ups_downs_platforms,
    only_ups_downs_FAQ,
} from './data'
import AvailableMarketPlatforms from 'features/components/organisms/available-markets-platforms'
import DigitalOptionsLayout from 'features/components/templates/digital-options-layout'
import OptionsContent from 'features/components/templates/options-content'
import OptionsFaq from 'features/components/templates/options-faq'
import { BuildVariantType } from 'features/types'

const OnlyUpAndOnlyDownDigitalOptionsPage = ({region}: BuildVariantType) => {
    return (
        <DigitalOptionsLayout region={region}>
            <OptionsContent items={only_ups_downs_content_items} />
            <AvailableMarketPlatforms
                markets={only_ups_downs_markets}
                platforms={only_ups_downs_platforms}
            />
            <OptionsFaq faqs={only_ups_downs_FAQ} />
        </DigitalOptionsLayout>
    )
}

export default OnlyUpAndOnlyDownDigitalOptionsPage
