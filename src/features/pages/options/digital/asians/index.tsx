import React from 'react'
import { Helmet } from 'react-helmet'
import { asiansContentItems, asiansFAQ, asiansMarkets, asiansPlatforms } from './data'
import { faq_schema } from './_faq-schema'
import { SEO } from 'components/containers'
import AvailableMarketPlatforms from 'features/components/organisms/available-markets-platforms'
import DigitalOptionsLayout from 'features/components/templates/digital-options-layout'
import OptionsContent from 'features/components/templates/options-content'
import OptionsFaq from 'features/components/templates/options-faq'

const AsiansDigitalOptionsPage = () => {
    return (
        <DigitalOptionsLayout>
            <SEO
                title="_t_Asians | Digital options contract | Deriv_t_"
                description="_t_Open a digital options contract with an Asians trade type on Deriv’s trading platforms and earn payouts with accurate market predictions._t_"
            />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(faq_schema)}</script>
            </Helmet>
            <OptionsContent items={asiansContentItems} />
            <AvailableMarketPlatforms markets={asiansMarkets} platforms={asiansPlatforms} />
            <OptionsFaq faqs={asiansFAQ} />
        </DigitalOptionsLayout>
    )
}

export default AsiansDigitalOptionsPage
