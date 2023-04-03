import React, { useMemo } from 'react'
import FlexBox from 'features/components/atoms/flex-box'
import Telegram from 'images/svg/footer/telegram_icon.svg'
import Twitter from 'images/svg/footer/twitter_icon.svg'
import Youtube from 'images/svg/footer/youtube_icon.svg'
import Instagram from 'images/svg/footer/instagram_icon.svg'
import Facebook from 'images/svg/footer/facebook_icon.svg'
import Linkedin from 'images/svg/footer/linkedin_icon.svg'
import { useSocialMediaUrl } from 'components/hooks/use-social-media-url'
import { getLocationPathname } from 'common/utility'
import { reddit_url, telegram_url, youtube_url } from 'common/constants'
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
        reddit_url: string
        telegram_url: string
        youtube_url: string
        alt: string
    },
    is_career_page: boolean,
) => {
    const accounts: TSocialAccount[] = [
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

    const twitter: TSocialAccount = {
        link: twitter_url,
        image: Twitter,
        image_alt: `twitter ${alt}`,
    }

    const telegram: TSocialAccount = {
        link: telegram_url,
        image: Telegram,
        image_alt: `telegram ${alt}`,
    }
    const youtube: TSocialAccount = {
        link: youtube_url,
        image: Youtube,
        image_alt: `youtube ${alt}`,
    }

    if (!is_career_page) {
        accounts.splice(0, 0, youtube, telegram)
        accounts.splice(4, 0, twitter)
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
                reddit_url,
                telegram_url,
                youtube_url,
            },
            is_career_page,
        )
    }, [alt, fb_url, instagram_url, is_career_page, linkedin_url, twitter_url])

    return (
        <FlexBox justify="center" align="center" gap="12x">
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
        </FlexBox>
    )
}

export default FooterSocialIcons
