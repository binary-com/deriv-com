import React from 'react'
import { turboFAQ, turboMarkets, turboOptionsContentItems, turboPlatforms } from './data'
import { why_turbo_section } from './styles.module.scss'
import AvailableMarketPlatforms from 'features/components/organisms/available-markets-platforms'
import OptionsContent from 'features/components/templates/options-content'
import OptionsFaq from 'features/components/templates/options-faq'
import OptionsLayout from 'features/components/templates/options-layout'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import dclsx from 'features/utils/dclsx'
import { BuildVariantType } from 'features/types'

const TurboOptions = ({region}: BuildVariantType) => {
    return (
        <OptionsLayout
            region={region}
            heading="_t_What are turbo options?_t_"
            description="_t_Turbo options allow you to earn a potentially high payout if your market predictions are right and if the spot price does not touch or breach a predetermined barrier._t_"
        >
            <Typography.Heading
                as="h2"
                align="center"
                pb="12x"
                md={{ padding_block: '20x', pb: '20x' }}
                size="small"
            >
                <Localize translate_text="_t_How do turbo options work?_t_" />
            </Typography.Heading>
            <OptionsContent items={turboOptionsContentItems} />
            <Flex.Box
                direction="col"
                justify="center"
                gap="10x"
                md={{
                    padding_inline: '12x',
                    pt: '20x',
                }}
                className={why_turbo_section}
            >
                <h3 className={dclsx('at-text-small')}>
                    <Localize translate_text="_t_Why traders choose turbo options_t_" />
                </h3>
                <Typography.Paragraph size="small">
                    <Localize translate_text="_t_Turbo options can be considered a lower-cost or a higher-risk-and-return alternative to vanilla options. Though the odds of the contract expiring worthless can be high (which is when the contract expires without you earning a payout), your loss is strictly limited to your invested stake._t_" />
                </Typography.Paragraph>
            </Flex.Box>
            <Flex.Box justify="center" align="center" direction="col">
                <AvailableMarketPlatforms markets={turboMarkets} platforms={turboPlatforms} />
            </Flex.Box>
            <OptionsFaq faqs={turboFAQ} />
        </OptionsLayout>
    )
}

export default TurboOptions
