import React from 'react'
import {
    accumulatorFAQ,
    accumulatorMarkets,
    accumulatorOptionsContentItems,
    accumulatorPlatforms,
} from './data'
import AccumulatorSEO from './seo'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import OptionsLayout from 'features/components/templates/options-layout'
import OptionsContent from 'features/components/templates/options-content'
import AvailableMarketPlatforms from 'features/components/organisms/available-markets-platforms'
import OptionsFaq from 'features/components/templates/options-faq'
import Flex from 'features/components/atoms/flex-box'

const AccumulatorsOptions = () => {
    return (
        <OptionsLayout
            heading="_t_What are accumulator options?_t_"
            description="_t_Accumulator options allow you to predict whether the current spot price remains within a predefined range from the previous spot price._t_"
        >
            <AccumulatorSEO />
            <Typography.Heading
                as="h2"
                align="center"
                padding_block="6x"
                md={{ padding_block: '20x' }}
                size="small"
            >
                <Localize translate_text="_t_How do accumulator options work?_t_" />
            </Typography.Heading>
            <OptionsContent items={accumulatorOptionsContentItems} />
            <Flex.Box justify="center" align="center" direction="col">
                <AvailableMarketPlatforms
                    markets={accumulatorMarkets}
                    platforms={accumulatorPlatforms}
                />
                <Typography.Paragraph font_family="UBUNTU" mt="20x">
                    <Localize translate_text="_t_Currently available on demo accounts only_t_" />
                </Typography.Paragraph>
            </Flex.Box>
            <OptionsFaq faqs={accumulatorFAQ} />
        </OptionsLayout>
    )
}

export default AccumulatorsOptions
