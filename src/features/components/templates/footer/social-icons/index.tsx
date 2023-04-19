import React, { useMemo } from 'react'
import Flex from 'features/components/atoms/flex-box'
import Telegram from 'images/svg/footer/telegram_icon.svg'
import Twitter from 'images/svg/footer/twitter_icon.svg'
import Youtube from 'images/svg/footer/youtube_icon.svg'
import Instagram from 'images/svg/footer/instagram_icon.svg'
import Facebook from 'images/svg/footer/facebook_icon.svg'
import Linkedin from 'images/svg/footer/linkedin_icon.svg'
import { useSocialMediaUrl } from 'components/hooks/use-social-media-url'
import { getLocationPathname } from 'common/utility'
import { telegram_url, youtube_url } from 'common/constants'
import Image from 'features/components/atoms/image'
import Link from 'features/components/atoms/link'

type TSocialAccount = {
    link?: string
    image?: string
    image_alt?: string
}
const getFooterIcons = (
    {
        alt,
        fb_url,
        instagram_url,
        linkedin_url,
        twitter_url,
    }: {
        fb_url: string
        instagram_url: string
        linkedin_url: string
        twitter_url: string
        telegram_url: string
        youtube_url: string
        alt: string
    },
    is_career_page: boolean,
) => {
    let accounts: TSocialAccount[] = []
    //Todo(Mitra): move below list to another seperate configuration file.
    if (is_career_page) {
        accounts = [
            {
                link: fb_url,
                image: Facebook,
                image_alt: `facebook ${alt}`,
            },
            {
                link: instagram_url,
                image: Instagram,
                image_alt: `instagram ${alt}`,
            },
            {
                link: linkedin_url,
                image: Linkedin,
                image_alt: `linkedin ${alt}`,
            },
        ]
    } else {
        accounts = [
            {
                link: fb_url,
                image: Facebook,
                image_alt: `facebook ${alt}`,
            },
            {
                link: instagram_url,
                image: Instagram,
                image_alt: `instagram ${alt}`,
            },
            {
                link: twitter_url,
                image: Twitter,
                image_alt: `twitter ${alt}`,
            },
            {
                link: youtube_url,
                image: Youtube,
                image_alt: `youtube ${alt}`,
            },
            {
                link: linkedin_url,
                image: Linkedin,
                image_alt: `linkedin ${alt}`,
            },
            {
                link: telegram_url,
                image: Telegram,
                image_alt: `telegram ${alt}`,
            },
        ]
    }
    return accounts
}

const FooterSocialIcons = () => {
    const { fb_url, instagram_url, twitter_url, linkedin_url } = useSocialMediaUrl()
    const current_path = getLocationPathname()
    const is_career_page = current_path === '/careers/'
    const alt = (is_career_page ? 'career' : '') + ' icon link'

    const icons = useMemo(() => {
        return getFooterIcons(
            {
                alt,
                fb_url,
                instagram_url,
                linkedin_url,
                twitter_url,
                telegram_url,
                youtube_url,
            },
            is_career_page,
        )
    }, [alt, fb_url, instagram_url, is_career_page, linkedin_url, twitter_url])

    return (
        <Flex.Box justify="center" align="center" gap="12x">
            {icons.map((iconItem) => {
                return (
                    <Link
                        key={iconItem.image_alt}
                        url={{ type: 'non-company', href: iconItem.link }}
                    >
                        <Image
                            src={iconItem.image}
                            alt={iconItem.image_alt}
                            width={32}
                            height={32}
                        />
                    </Link>
                )
            })}
        </Flex.Box>
    )
}

export default FooterSocialIcons
