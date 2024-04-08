import React from 'react'
import { Hero } from '@deriv-com/blocks'
import { Text } from '@deriv/quill-design'
import clsx from 'clsx'
import { Localize, localize } from 'components/localization'
import useBuildVariant from 'features/hooks/use-build-variant'

const HeroBanner = () => {
    const { region } = useBuildVariant()
    return (
        <Hero.ContentLess
            className="gap-gap-lg bg-background-primary-base"
            title={localize('_t_Secure and responsible trading_t_')}
        >
            <div className="px-800 md:px-1200">
                {region === 'eu' ? (
                    <Text
                        size="md"
                        className={clsx('max-w-[816px] text-center m-auto mt-general-md')}
                    >
                        <Localize translate_text="_t_Trading online can be exciting, but it’s important to keep in mind that there are risks involved including addiction and financial losses. To avoid the danger of addiction, it is important that you engage in a careful self-analysis to check if you are at risk, and follow some basic principles and guidelines._t_" />
                    </Text>
                ) : (
                    <Text
                        size="md"
                        className={clsx('max-w-[816px] text-center m-auto mt-general-md')}
                    >
                        <Localize translate_text="_t_Trading online can be exciting, but it’s important to be reminded that there are risks involved. We encourage all our users to secure their accounts and trade responsibly to experience the best in online trading._t_" />
                    </Text>
                )}
            </div>
        </Hero.ContentLess>
    )
}

export default HeroBanner
