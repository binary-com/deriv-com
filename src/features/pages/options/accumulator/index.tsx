import React from 'react'
import { Helmet } from 'react-helmet'
import {
    accumulatorFAQ,
    accumulatorMarkets,
    accumulatorOptionsContentItems,
    accumulatorPlatforms,
} from './data'
import { faq_schema } from './_faq-schema'
import { Localize } from 'components/localization'
import { SEO } from 'components/containers'
import Typography from 'features/components/atoms/typography'
import OptionsLayout from 'features/components/templates/options-layout'
import OptionsContent from 'features/components/templates/options-content'
import AvailableMarketPlatforms from 'features/components/organisms/available-markets-platforms'
import OptionsFaq from 'features/components/templates/options-faq'
import useRegion from 'components/hooks/use-region'
import PageNotFound from 'features/pages/404-error'

const AccumulatorsOptions = () => {
    const { is_row } = useRegion()

    if (is_row) {
        return (
            <OptionsLayout
                heading="_t_What are accumulator options?_t_"
                description="_t_Accumulator options allow you to predict whether the current spot price remains within a predefined range from the previous spot price._t_"
            >
                <Typography.Heading align="center" padding_block="20x" size="small">
                    <Localize translate_text="_t_How do accumulator options work?_t_" />
                </Typography.Heading>
                <OptionsContent items={accumulatorOptionsContentItems} />
                <AvailableMarketPlatforms
                    markets={accumulatorMarkets}
                    platforms={accumulatorPlatforms}
                />
                <OptionsFaq faqs={accumulatorFAQ} />
            </OptionsLayout>
        )
    }
    return <PageNotFound />
}

export default AccumulatorsOptions
