import Telegram from 'images/svg/footer/telegram_icon.svg'
import Twitter from 'images/svg/footer/twitter_icon.svg'
import Youtube from 'images/svg/footer/youtube_icon.svg'
import Instagram from 'images/svg/footer/instagram_icon.svg'
import Facebook from 'images/svg/footer/facebook_icon.svg'
import Linkedin from 'images/svg/footer/linkedin_icon.svg'
import { TSmartContent, TString } from 'types/generics'
import { LinkUrlType } from 'features/types'

export type SocialMediaAccount = {
    url: LinkUrlType
    icon: string
    image_alt?: TString
}

export type Config = {
    is_eu?: boolean
    is_career_page?: boolean
}

export type SmartSocialAccount = TSmartContent<SocialMediaAccount, Config>

export const socialMediaAccounts: SmartSocialAccount[] = [
    {
        id: 0,
        data: {
            url: {
                type: 'non-company',
                href: 'https://www.facebook.com/',
            },
            icon: Facebook,
            image_alt: '_t_Facebook_t_',
        },
    },
    {
        id: 1,
        data: {
            url: {
                type: 'non-company',
                href: 'https://www.instagram.com/',
            },
            icon: Instagram,
            image_alt: '_t_Instagram_t_',
        },
    },
    {
        id: 2,
        data: {
            url: {
                type: 'non-company',
                href: 'https://twitter.com/',
            },
            icon: Twitter,
            image_alt: '_t_Twitter_t_',
        },
        visibility: {
            is_career_page: false,
        },
    },
    {
        id: 3,
        data: {
            url: {
                type: 'non-company',
                href: 'https://www.youtube.com/',
            },
            icon: Youtube,
            image_alt: '_t_Youtube_t_',
        },
        visibility: {
            is_career_page: false,
        },
    },
    {
        id: 4,
        data: {
            url: {
                type: 'non-company',
                href: 'https://www.linkedin.com/',
            },
            icon: Linkedin,
            image_alt: '_t_Linkedin_t_',
        },
    },
    {
        id: 5,
        data: {
            url: {
                type: 'non-company',
                href: 'https://t.me/derivdotcom',
            },
            icon: Telegram,
            image_alt: '_t_Telegram_t_',
        },
        visibility: {
            is_eu: false,
            is_career_page: false,
        },
    },
]
