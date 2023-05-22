import React from 'react'
import { useTranslation } from 'react-i18next'
import { socialMediaAccounts } from './data'
import Flex from 'features/components/atoms/flex-box'
import { getLocationPathname } from 'common/utility'
import Image from 'features/components/atoms/image'
import Link from 'features/components/atoms/link'
import useVisibleContent from 'components/hooks/use-visible-content'
import useRegion from 'components/hooks/use-region'

const FooterSocialIcons = () => {
    const current_path = getLocationPathname()
    const splitted_path = current_path.split('/')
    const is_career_page = splitted_path.includes('careers')
    const { is_eu } = useRegion()
    const { i18n } = useTranslation()
    const { language } = i18n

    const config = { is_career_page, is_eu, is_ar: language === 'ar', is_es: language === 'es' }

    const icons = useVisibleContent({
        content: socialMediaAccounts,
        config,
    })

    return (
        <Flex.Box justify="center" align="center" gap="12x">
            {icons.map(({ data, id }) => {
                const iconUrl = typeof data.url === 'function' ? data.url(config) : data.url
                return (
                    <Link key={id} url={iconUrl}>
                        <Image src={data.icon} alt={data.image_alt} width={24} height={24} />
                    </Link>
                )
            })}
        </Flex.Box>
    )
}

export default FooterSocialIcons
