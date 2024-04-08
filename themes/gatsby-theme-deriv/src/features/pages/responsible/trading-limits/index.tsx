import React, { useContext } from 'react'
import { Features } from '@deriv-com/blocks'
import { Text } from '@deriv/quill-design'
import { CustomLink } from '@deriv-com/components'
import IconWithList from '../component/icon-list'
import { listData, rightImage, rightImageEU } from './data'
import { LocaleContext, Localize, localize } from 'components/localization'
import { TString } from 'types/generics'
import { getDerivAppLocalizedURL, replaceLocale } from 'common/utility'
import useBuildVariant from 'features/hooks/use-build-variant'

type listDataType = {
    id: number
    text: TString
}

const TradingLimits = () => {
    const app_link = 'https://app.deriv.com/account/self-exclusion'
    const { locale } = useContext(LocaleContext)
    const localizedRedirectLink = replaceLocale(getDerivAppLocalizedURL(app_link, locale))
    const { region } = useBuildVariant()
    return (
        <Features.ContentRight
            title={localize('_t_Trading limits and self-exclusion_t_')}
            description={localize(
                '_t_Online trading is exciting, but it can be addictive. Deriv provides you with the opportunity to either self-exclude or set limits on your trading activities on this website. You can:_t_',
            )}
            content={region === 'eu' ? rightImageEU : rightImage}
            contentTop={false}
            className="[&>div]:lg:gap-gap-l [&>div>div:first-child]:lg:pr-general-3xl"
        >
            <div className="flex gap-gap-lg flex-col">
                {listData.map((item: listDataType) => {
                    return <IconWithList content={item.text} key={item.id} />
                })}
            </div>
            <Text size="md">
                <Localize
                    translate_text="_t_If you wish to self-exclude or set limits on your trading activities, go to <0>account settings</0>._t_"
                    components={[
                        <CustomLink
                            key={0}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={localizedRedirectLink}
                            size="md"
                            className="text-typography-default inline underline text-body-sm text-75"
                        />,
                    ]}
                />
            </Text>
        </Features.ContentRight>
    )
}

export default TradingLimits
