import React from 'react'
import { vanillaFAQ, vanillaMarkets, vanillaOptionsContentItems, vanillaPlatforms } from './data'
import { why_vanilla_section } from './styles.module.scss'
import AvailableMarketPlatforms from 'features/components/organisms/available-markets-platforms'
import OptionsContent from 'features/components/templates/options-content'
import OptionsFaq from 'features/components/templates/options-faq'
import OptionsLayout from 'features/components/templates/options-layout'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import PageNotFound from 'features/pages/404'

const VanillaOptions = () => {
    const { is_row } = useRegion()

    if (is_row) {
        return (
            <OptionsLayout
                heading="_t_What are vanilla options?_t_"
                description="_t_Vanilla options allow you to express a bullish or bearish view on an underlying asset by purchasing either a Call or a Put option. You can earn a potentially high payout if your predictions are right within a timed contract and based on market conditions._t_"
            >
                <Typography.Heading align="center" md={{ padding_block: '20x' }} size="small">
                    <Localize translate_text="_t_How do vanilla options work?_t_" />
                </Typography.Heading>
                <OptionsContent items={vanillaOptionsContentItems} />
                <Flex.Box
                    direction="col"
                    justify="center"
                    gap="16x"
                    className={why_vanilla_section}
                >
                    <Typography.Heading size="xxs">
                        <Localize translate_text="_t_Why traders choose vanilla options_t_" />
                    </Typography.Heading>
                    <Typography.Paragraph>
                        <Localize translate_text="_t_In addition to their simplicity to understand, the main reason traders choose to trade vanilla options is because they offer potentially high profit as they do not have a fixed payout, while losses are strictly limited to the initial stake amount._t_" />
                    </Typography.Paragraph>
                </Flex.Box>
                <AvailableMarketPlatforms markets={vanillaMarkets} platforms={vanillaPlatforms} />
                <OptionsFaq faqs={vanillaFAQ} />
            </OptionsLayout>
        )
    }
    return <PageNotFound />
}

export default VanillaOptions
