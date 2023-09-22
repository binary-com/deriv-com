import React from 'react'
import { lookbacks_content_items, lookbacksMarkets, lookbacksPlatforms, lookbacksFAQ } from './data'
import AvailableMarketPlatforms from 'features/components/organisms/available-markets-platforms'
import DigitalOptionsLayout from 'features/components/templates/digital-options-layout'
import OptionsContent from 'features/components/templates/options-content'
import OptionsFaq from 'features/components/templates/options-faq'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Flex from 'features/components/atoms/flex-box'

const LookbacksDigitalOptionsPage = () => {
    return (
        <DigitalOptionsLayout>
            <Flex.Box container="fluid" justify="center">
                <Typography.Paragraph pb="20x" pt="15x" align="center" md={{ pt: '0x' }}>
                    <Localize translate_text="_t_Lookbacks allow you to earn a payout depending on the optimum high or low achieved by the market during the duration of a contract._t_" />
                </Typography.Paragraph>
            </Flex.Box>
            <OptionsContent items={lookbacks_content_items} />
            <AvailableMarketPlatforms markets={lookbacksMarkets} platforms={lookbacksPlatforms} />
            <OptionsFaq faqs={lookbacksFAQ} />
        </DigitalOptionsLayout>
    )
}

export default LookbacksDigitalOptionsPage
