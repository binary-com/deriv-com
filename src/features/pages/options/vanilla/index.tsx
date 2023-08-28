import React from 'react'
import { Script } from 'gatsby'
import { vanillaFAQ, vanillaMarkets, vanillaOptionsContentItems, vanillaPlatforms } from './data'
import { faq_schema } from './_faq-schema'
import { why_vanilla_section } from './styles.module.scss'
import AvailableMarketPlatforms from 'features/components/organisms/available-markets-platforms'
import OptionsContent from 'features/components/templates/options-content'
import OptionsFaq from 'features/components/templates/options-faq'
import OptionsLayout from 'features/components/templates/options-layout'
import { SEO } from 'components/containers'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import dclsx from 'features/utils/dclsx'
import { TGatsbyHead } from 'features/types'

const VanillaOptions = () => {
    return (
        <OptionsLayout
            heading="_t_What are vanilla options?_t_"
            description="_t_Vanilla options allow you to express a bullish or bearish view on an underlying asset by purchasing either a Call or a Put option. You can earn a potentially high payout if your predictions are right within a timed contract and based on market conditions._t_"
        >
            <Typography.Heading
                as="h2"
                align="center"
                pb="12x"
                md={{ padding_block: '20x', pb: '20x' }}
                size="small"
            >
                <Localize translate_text="_t_How do vanilla options work?_t_" />
            </Typography.Heading>
            <OptionsContent items={vanillaOptionsContentItems} />
            <Flex.Box
                direction="col"
                justify="center"
                gap="10x"
                md={{
                    padding_inline: '12x',
                    pt: '20x',
                }}
                className={why_vanilla_section}
            >
                <h4 className={dclsx('text-small')}>
                    <Localize translate_text="_t_Why traders choose vanilla options_t_" />
                </h4>
                <Typography.Paragraph size="small">
                    <Localize translate_text="_t_In addition to their simplicity to understand, the main reason traders choose to trade vanilla options is because they offer potentially high profit as they do not have a fixed payout, while losses are strictly limited to the initial stake amount._t_" />
                </Typography.Paragraph>
            </Flex.Box>
            <Flex.Box justify="center" align="center" direction="col">
                <AvailableMarketPlatforms markets={vanillaMarkets} platforms={vanillaPlatforms} />
                <Typography.Paragraph font_family="UBUNTU" mt="20x">
                    <Localize translate_text="_t_Currently available on demo accounts only_t_" />
                </Typography.Paragraph>
            </Flex.Box>
            <OptionsFaq faqs={vanillaFAQ} />
        </OptionsLayout>
    )
}

export default VanillaOptions

export const Head = ({ pageContext }: TGatsbyHead) => (
    <>
        <SEO
            title="_t_Vanilla options | Trade options | Deriv_t_"
            description="_t_Earn a potentially high payout by trading vanilla options on Deriv, if your market prediction is right within a limited timeframe._t_"
            pageContext={pageContext}
        />
        <Script type="application/ld+json">{JSON.stringify(faq_schema)}</Script>
    </>
)
