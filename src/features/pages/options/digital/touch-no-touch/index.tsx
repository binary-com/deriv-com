import React from 'react'
import { Helmet } from 'react-helmet'
import {
    touch_and_no_touch_content_items,
    touch_and_no_touch_faq,
    touch_no_touch_markets,
    touch_and_no_touch_platforms,
} from './data'
import { faq_schema } from './_faq-schema'
import { SEO } from 'components/containers'
import AvailableMarketPlatforms from 'features/components/organisms/available-markets-platforms'
import DigitalOptionsLayout from 'features/components/templates/digital-options-layout'
import OptionsContent from 'features/components/templates/options-content'
import OptionsFaq from 'features/components/templates/options-faq'
import useRegion from 'components/hooks/use-region'
import PageNotFound from 'features/pages/404-error'

const TouchAndNoTouchDigitalOptionsPage = () => {
    const { is_row } = useRegion()

    if (is_row) {
        return (
            <DigitalOptionsLayout>
                <SEO
                    title="_t_Touch/No touch | Digital options contract | Deriv_t_"
                    description="_t_Open a digital options contract with a Touch/No touch trade type on Deriv’s trading platforms and earn payouts with accurate market predictions._t_"
                />
                <Helmet>
                    <script type="application/ld+json">{JSON.stringify(faq_schema)}</script>
                </Helmet>
                <OptionsContent items={touch_and_no_touch_content_items} />
                <AvailableMarketPlatforms
                    markets={touch_no_touch_markets}
                    platforms={touch_and_no_touch_platforms}
                />
                <OptionsFaq faqs={touch_and_no_touch_faq} />
            </DigitalOptionsLayout>
        )
    }
    return <PageNotFound />
}

export default TouchAndNoTouchDigitalOptionsPage
