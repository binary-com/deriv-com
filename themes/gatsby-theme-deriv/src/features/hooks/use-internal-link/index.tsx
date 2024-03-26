import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import language_config from '../../../../i18n-config.js'

const non_localized_internal_links = ['/careers']

const useInternalLink = () => {
    const { i18n } = useTranslation()

    const getInternalLink = useCallback(
        (url: string) => {
            const locale = i18n.language
            const { is_default, path } = language_config[locale]
            const is_non_localized = non_localized_internal_links.includes(url?.replace(/\/$/, ''))
            if (is_non_localized || is_default) {
                return url
            }
            return `/${path}/${url}`
        },
        [i18n.language],
    )

    return { getInternalLink }
}

export default useInternalLink
