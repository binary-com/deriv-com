import React from 'react'
import { vanillaFAQ, vanillaMarkets, vanillaOptionsContentItems, vanillaPlatforms } from './data'
import AvailableMarketPlatforms from 'features/components/organisms/available-markets-platforms'
import OptionsContent from 'features/components/templates/options-content'
import OptionsFaq from 'features/components/templates/options-faq'
import OptionsLayout from 'features/components/templates/options-layout'

const VanillaOptions = () => {
    return (
        <OptionsLayout
            heading="_t_What are vanilla options?_t_"
            description="_t_Vanilla options allow you to express a bullish or bearish view on an underlying asset by purchasing either a Call or a Put option. You can earn a potentially high payout if your predictions are right within a timed contract and based on market conditions._t_"
        >
            <OptionsContent items={vanillaOptionsContentItems} />
            <AvailableMarketPlatforms markets={vanillaMarkets} platforms={vanillaPlatforms} />
            <OptionsFaq faqs={vanillaFAQ} />
        </OptionsLayout>
    )
}

export default VanillaOptions
