import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SocialMediaAccounts } from './data'
import Flex from 'features/components/atoms/flex-box'
import { getLocationPathname } from 'common/utility'
import Image from 'features/components/atoms/image'
import Link from 'features/components/atoms/link'
import useVisibleContent from 'components/hooks/use-visible-content'
import useBuildVariant from 'features/hooks/use-build-variant'

const HelpCentreSocialIcons = () => {
    const { region } = useBuildVariant()
    const [is_career, setIsCareer] = useState(false)
    const { i18n } = useTranslation()
    const { language } = i18n

    useEffect(() => {
        const current_path = getLocationPathname()
        const splitted_path = current_path.split('/')
        const is_career_page = splitted_path.includes('careers')
        setIsCareer(is_career_page)
    }, [])

    const config = {
        is_career_page: is_career,
        is_eu: region === "eu",
        is_ar: language === 'ar',
        is_es: language === 'es',
    }

    const icons = useVisibleContent({
        content: SocialMediaAccounts,
        config,
    })

    return (
        <Flex.Box justify="center" align="center" gap="8x">
            {icons.map(({ data, id }) => {
                const iconUrl = typeof data.url === 'function' ? data.url(config) : data.url
                return (
                    <Link key={id} url={iconUrl}>
                        <Image src={data.icon} alt={data.image_alt} width={32} height={32} />
                    </Link>
                )
            })}
        </Flex.Box>
    )
}

export default HelpCentreSocialIcons
