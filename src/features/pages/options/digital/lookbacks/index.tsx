import React from 'react'
import { Script } from 'gatsby'
import { lookbacks_content_items, lookbacksMarkets, lookbacksPlatforms, lookbacksFAQ } from './data'
import { faq_schema } from './_faq-schema'
import AvailableMarketPlatforms from 'features/components/organisms/available-markets-platforms'
import DigitalOptionsLayout from 'features/components/templates/digital-options-layout'
import OptionsContent from 'features/components/templates/options-content'
import OptionsFaq from 'features/components/templates/options-faq'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Flex from 'features/components/atoms/flex-box'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

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

export const Head = ({ pageContext }: TGatsbyHead) => (
    <>
        <SEO
            title="_t_Lookbacks | Digital options contract | Deriv_t_"
            description="_t_Open a digital options contract with a Lookbacks trade type on Deriv’s trading platforms and earn payouts with accurate market predictions._t_"
            pageContext={pageContext}
        />
        <Script type="application/ld+json">{JSON.stringify(faq_schema)}</Script>
    </>
)
