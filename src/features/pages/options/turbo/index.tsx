import React from 'react'
import { turboFAQ, turboMarkets, turboOptionsContentItems, turboPlatforms } from './data'
import { why_vanilla_section } from './styles.module.scss'
import AvailableMarketPlatforms from 'features/components/organisms/available-markets-platforms'
import OptionsContent from 'features/components/templates/options-content'
import OptionsFaq from 'features/components/templates/options-faq'
import OptionsLayout from 'features/components/templates/options-layout'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import dclsx from 'features/utils/dclsx'

const TurboOptions = () => {
    return (
        <OptionsLayout
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
                <AvailableMarketPlatforms markets={turboMarkets} platforms={turboPlatforms} />
            </Flex.Box>
            <OptionsFaq faqs={turboFAQ} />
        </OptionsLayout>
    )
}

export default TurboOptions
