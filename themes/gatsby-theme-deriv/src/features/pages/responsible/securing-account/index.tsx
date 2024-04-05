import React, { useContext } from 'react'
import { Features } from '@deriv-com/blocks'
import { CustomLink } from '@deriv-com/components'
import IconWithList from '../component/icon-list'
import { rightImage } from './data'
import { LocaleContext, Localize, localize } from 'components/localization'
import { TString } from 'types/generics'
import { getDerivAppLocalizedURL, replaceLocale } from 'common/utility'

type listDataType = {
    id: number
    text: TString
}

const SecuringAccount = () => {
    const app_link = 'https://app.deriv.com/account/two-factor-authentication'
    const { locale } = useContext(LocaleContext)
    const localizedRedirectLink = replaceLocale(getDerivAppLocalizedURL(app_link, locale))

    const listData = [
        {
            id: 1,
            text: (
                <Localize translate_text="_t_Use strong and varied passwords. Make them as difficult as possible for anyone to guess._t_" />
            ),
        },
        {
            id: 2,
            text: '_t_Use a secure web browser such as Google Chrome. Always install the latest software updates because they include security patches._t_',
        },
        {
            id: 3,
            text: (
                <Localize
                    translate_text="_t_Keep your login details secure and <0>enable two-factor authentication</0> to prevent unauthorised usage of your account._t_"
                    components={[
                        <CustomLink
                            key={0}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={localizedRedirectLink}
                            size="md"
                            className="text-typography-default inline underline"
                        />,
                    ]}
                />
            ),
        },
        { id: 4, text: '_t_Use antivirus and firewalls to further secure your devices._t_' },
    ]

    return (
        <Features.ContentRight
            title={localize('_t_Securing your account_t_')}
            content={rightImage}
            contentPadding={false}
            contentTop={true}
        >
            <div className="flex gap-gap-lg  flex-col">
                {listData.map((item: listDataType) => {
                    return <IconWithList content={item.text} key={item.id} />
                })}
            </div>
        </Features.ContentRight>
    )
}

export default SecuringAccount
