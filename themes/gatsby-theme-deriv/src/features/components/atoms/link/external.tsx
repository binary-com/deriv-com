import React, { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import language_config from '../../../../../i18n-config.js'
import { TypographyLinkProps } from '../typography/link'
import Typography from '../typography'
import Alert from '../alert'
import { ExternalLinkType, ExternalURLNames } from 'features/types'
import { localized_link_url } from 'common/constants'
import {
    getDerivAppLocalizedURL,
    getSmartTraderLocalizedURL,
    getThaiExcludedLocale,
    TradersHubURL,
} from 'common/utility'
import useBuildVariant from 'features/hooks/use-build-variant'

export type ProductLinkGenerator = (config: {
    language: string
    url?: string
    affiliate_lang?: string
    locale?: string
}) => string

type ProductLinksType = {
    [Key in ExternalURLNames]?: ProductLinkGenerator
}

const product_links: ProductLinksType = {
    dbot: ({ language, url }) => getDerivAppLocalizedURL(localized_link_url['dbot'], language, url),
    deriv_app: ({ language, url }) =>
        getDerivAppLocalizedURL(localized_link_url['deriv_app'], language, url),
    mt5: ({ language, url }) => getDerivAppLocalizedURL(localized_link_url['mt5'], language, url),
    deriv_app_login: () => localized_link_url['deriv_app_login'],
    derivx: ({ language, url }) =>
        getDerivAppLocalizedURL(localized_link_url['derivx'], language, url),
    affiliate_sign_in: ({ affiliate_lang }) =>
        `${localized_link_url['affiliate_sign_in']}?lang=${affiliate_lang}`,
    affiliate_sign_up: ({ affiliate_lang }) =>
        `${localized_link_url['affiliate_sign_up']}?lang=${affiliate_lang}`,
    binary_bot: ({ url, language }) =>
        `${localized_link_url['binary_bot']}/${url ? url : ''}?l=${language}`,
    smart_trader: ({ language }) =>
        getSmartTraderLocalizedURL(localized_link_url['smart_trader'], language),
    binary: ({ url, language }) =>
        `${localized_link_url['binary']}/${getThaiExcludedLocale(language)}/${url}.html`,
    blog: ({ url }) => `${localized_link_url['blog']}${url}`,
    community: ({ url }) => `${localized_link_url['community']}${url}`,
    api: ({ url }) => `${localized_link_url['api']}${url}`,
    zoho: ({ url }) => `${localized_link_url['zoho']}${url}`,
    derivlife: ({ url }) => `${localized_link_url['derivlife']}${url}`,
    academy: ({ url }) => `${localized_link_url['academy']}${url}`,
    tnd_clients: ({ language }) =>
        `${localized_link_url.domain_full_url}${
            language === 'en' ? '' : '/' + language
        }/terms-and-conditions/#clients`,
    tnc_security: () => `${localized_link_url.domain_full_url}/tnc/security-and-privacy.pdf`,
    traders_hub: TradersHubURL,
}

export interface ExternalLinkProps extends TypographyLinkProps {
    url: ExternalLinkType
    link_target: string
    link_rel: string
}

const ExternalLink = ({ url, onClick, link_target, link_rel, ...rest }: ExternalLinkProps) => {
    const [is_redirect_modal_visible, setIsRedirectModalVisible] = useState(false)
    const { region } = useBuildVariant()

    const { i18n } = useTranslation()
    const { language } = i18n
    const locale = i18n.language ?? 'en'
    const { affiliate_lang } = language_config[locale]

    const show_modal = region === "eu" && url?.type === 'non-company' && url?.show_eu_modal

    const href = useMemo(() => {
        if (url.type === 'company') {
            const { url_name, path } = url
            const company_link = product_links[url_name]({
                language: language,
                url: path ?? '',
                affiliate_lang,
                locale,
            })
            return company_link
        }
        return url.href
    }, [affiliate_lang, language, url, locale])

    const handleCancel = () => {
        setIsRedirectModalVisible(false)
    }

    const handleProceed = () => {
        if (link_target === '_blank') {
            window.open(href)
        } else {
            window.location.href = href
        }
    }

    const handleClick: React.MouseEventHandler<'a'> = (event) => {
        if (show_modal) {
            event.preventDefault()
            setIsRedirectModalVisible(true)
        }
        onClick?.(event)
    }

    return (
        <>
            <Typography.Link
                href={!show_modal ? href : ''}
                onClick={handleClick}
                target={link_target}
                rel={link_rel}
                textcolor="primary"
                {...rest}
            />
            {is_redirect_modal_visible && (
                <Alert
                    title="_t_Redirect notice_t_"
                    description="_t_You are being redirected to an external website._t_"
                    cancel_button={{
                        text: '_t_Cancel_t_',
                        onClick: handleCancel,
                    }}
                    action_button={{
                        text: '_t_Proceed_t_',
                        onClick: handleProceed,
                    }}
                />
            )}
        </>
    )
}

export default ExternalLink
