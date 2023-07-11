import React from 'react'
import AvailableMarketPlatforms from '../components/available-markets-platforms'
import OptionsContent from '../components/options-content'
import OptionsFaq from '../components/options-faq'
import OptionsLayout from '../components/options-layout'
import { vanillaFAQ, vanillaMarkets, vanillaOptionsContentItems, vanillaPlatforms } from './data'

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
