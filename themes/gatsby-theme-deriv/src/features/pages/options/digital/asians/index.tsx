import React from 'react'
import { asiansContentItems, asiansFAQ, asiansMarkets, asiansPlatforms } from './data'
import AvailableMarketPlatforms from 'features/components/organisms/available-markets-platforms'
import DigitalOptionsLayout from 'features/components/templates/digital-options-layout'
import OptionsContent from 'features/components/templates/options-content'
import OptionsFaq from 'features/components/templates/options-faq'
import { BuildVariantType } from 'features/types'

const AsiansDigitalOptionsPage = ({region}: BuildVariantType) => {
    return (
        <DigitalOptionsLayout region={region}>
            <OptionsContent items={asiansContentItems} />
            <AvailableMarketPlatforms markets={asiansMarkets} platforms={asiansPlatforms} />
            <OptionsFaq faqs={asiansFAQ} />
        </DigitalOptionsLayout>
    )
}

export default AsiansDigitalOptionsPage
