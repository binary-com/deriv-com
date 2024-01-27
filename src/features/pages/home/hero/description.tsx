import React from 'react'
import { Text } from '@deriv/quill-design'
import clsx from 'clsx'
import { hero_content_text } from './styles.module.scss'
import useRegion from 'components/hooks/use-region'
import { Localize } from 'components/localization'
import { isEuDomain } from 'common/utility'

const Description = () => {
    const { is_eu } = useRegion()
    return isEuDomain() || is_eu ? (
        <Text size="md" className={clsx('text-solid-slate-50 mt-general-md', hero_content_text)}>
            <Localize translate_text="_t_Trade CFDs and multipliers on global financial markets, all in one place with 24/7 trading and worldwide support._t_" />
        </Text>
    ) : (
        <Text size="md" className={clsx('text-solid-slate-50 mt-general-md', hero_content_text)}>
            <Localize translate_text="_t_Trade CFDs and options on global financial markets, all in one place with 24/7 trading and worldwide support._t_" />
        </Text>
    )
}

export default Description
