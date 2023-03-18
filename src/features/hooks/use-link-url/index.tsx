import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import language_config from '../../../../i18n-config.js'
import { localized_link_url } from 'common/constants'
import {
    getDerivAppLocalizedURL,
    getSmartTraderLocalizedURL,
    getThaiExcludedLocale,
} from 'common/utility'
import { ExternalLinkType, ExternalURLNames, LinkUrlType } from 'features/types'

type ProductLinksType = {
    [Key in ExternalURLNames]?: (config: {
        language: string
        url?: string
        affiliate_lang?: string
    }) => string
}

const product_links: ProductLinksType = {
    dbot: ({ language, url }) => getDerivAppLocalizedURL(localized_link_url['dbot'], language, url),
    deriv_app: ({ language, url }) =>
        getDerivAppLocalizedURL(localized_link_url['deriv_app'], language, url),
    mt5: ({ language, url }) => getDerivAppLocalizedURL(localized_link_url['mt5'], language, url),
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
}

const non_localized_internal_links = ['/careers']

const useLinkUrl = () => {
    const { i18n } = useTranslation()
    const { language } = i18n

    const getInternalLink = useCallback(
        (url: string) => {
            const locale = i18n.language
            const { is_default, path } = language_config[locale]
            const is_non_localized = non_localized_internal_links.includes(url?.replace(/\/$/, ''))
            if (is_non_localized || is_default) {
                return url
            }
            return `/${path}${url}`
        },
        [i18n.language],
    )
    const getExternalLink = useCallback(
        (url: ExternalLinkType) => {
            if (url.type === 'company') {
                const { affiliate_lang } = language_config[language]
                const { url_name, path } = url
                const foo = product_links[url_name]({
                    language: language,
                    url: path ?? '',
                    affiliate_lang,
                })

                return foo
            }
            return url.href
        },
        [language],
    )

    const getLinkUrl = (url: LinkUrlType) => {
        let href = ''
        switch (url.type) {
            case 'company':
            case 'non-company':
                href = getExternalLink(url)
                break
            case 'internal':
                href = getInternalLink(url.to)
                break
            default:
                href = ''
                break
        }
        return { ...url, href }
    }

    return { getLinkUrl }
}

export default useLinkUrl
