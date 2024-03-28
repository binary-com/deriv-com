import React from 'react'
import { Text } from '@deriv/quill-design'
import clsx from 'clsx'
import { hero_content_text } from './styles.module.scss'
import { Localize } from 'components/localization'
import useBuildVariant from 'features/hooks/use-build-variant'

const Description = () => {
    const { region } = useBuildVariant()
    
    if (region === 'eu') {
        return (
            <Text
                size="md"
                className={clsx('text-solid-slate-50 mt-general-md', hero_content_text)}
            >
                <Localize translate_text="_t_Trade CFDs and multipliers on global financial markets, all in one place with 24/7 trading and worldwide support._t_" />
            </Text>
        )
    }
    if (region === 'row') {
        return (
            <Text
                size="md"
                className={clsx('text-solid-slate-50 mt-general-md', hero_content_text)}
            >
                <Localize translate_text="_t_Trade CFDs and options on global financial markets, all in one place with 24/7 trading and worldwide support._t_" />
            </Text>
        )
    }
}

export default Description
