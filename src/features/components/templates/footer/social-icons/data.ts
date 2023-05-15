import Telegram from 'images/svg/footer/telegram_icon.svg'
import Twitter from 'images/svg/footer/twitter_icon.svg'
import Youtube from 'images/svg/footer/youtube_icon.svg'
import Instagram from 'images/svg/footer/instagram_icon.svg'
import Facebook from 'images/svg/footer/facebook_icon.svg'
import Linkedin from 'images/svg/footer/linkedin_icon.svg'
import { TSmartContent, TString } from 'types/generics'
import { LinkUrlType } from 'features/types'

export type SocialMediaAccount = {
    url: ((config: Config) => LinkUrlType) | LinkUrlType
    icon: string
    image_alt?: TString
}

export type Config = {
    is_eu?: boolean
    is_career_page?: boolean
    is_ar?: boolean
    is_es?: boolean
}

export type SmartSocialAccount = TSmartContent<SocialMediaAccount, Config>

export const socialMediaAccounts: SmartSocialAccount[] = [
    {
        id: 0,
        data: {
            url: ({ is_ar, is_es }) => {
                if (is_es) {
                    return {
                        type: 'non-company',
                        target: '_blank',
                        href: 'https://www.facebook.com/derivespanol',
                    }
                } else if (is_ar) {
                    return {
                        type: 'non-company',
                        target: '_blank',
                        href: 'https://www.facebook.com/derivarabic',
                    }
                }
                return {
                    type: 'non-company',
                    target: '_blank',
                    href: 'https://www.facebook.com/derivdotcom',
                }
            },
            icon: Facebook,
            image_alt: '_t_Facebook_t_',
        },
        visibility: {
            is_eu: false,
            is_career_page: false,
        },
    },
    {
        id: 1,
        data: {
            url: ({ is_ar, is_es }) => {
                if (is_es) {
                    return {
                        type: 'non-company',
                        show_eu_modal: true,
                        target: '_blank',
                        href: 'https://www.facebook.com/derivespanol',
                    }
                } else if (is_ar) {
                    return {
                        type: 'non-company',
                        show_eu_modal: true,
                        target: '_blank',
                        href: 'https://www.facebook.com/derivarabic',
                    }
                }
                return {
                    type: 'non-company',
                    show_eu_modal: true,
                    target: '_blank',
                    href: 'https://www.facebook.com/derivEU/',
                }
            },
            icon: Facebook,
            image_alt: '_t_Facebook_t_',
        },
        visibility: {
            is_eu: true,
            is_career_page: false,
        },
    },
    {
        id: 2,
        data: {
            url: {
                type: 'non-company',
                target: '_blank',
                href: 'https://www.facebook.com/derivcareers',
            },
            icon: Facebook,
            image_alt: '_t_Facebook_t_',
        },
        visibility: {
            is_career_page: true,
        },
    },
    {
        id: 3,
        data: {
            url: ({ is_ar, is_es }) => {
                if (is_es) {
                    return {
                        type: 'non-company',
                        target: '_blank',
                        href: 'https://www.instagram.com/deriv_espanol/',
                    }
                } else if (is_ar) {
                    return {
                        type: 'non-company',
                        target: '_blank',
                        href: 'https://www.instagram.com/deriv_ar/',
                    }
                }
                return {
                    type: 'non-company',
                    target: '_blank',
                    href: 'https://www.instagram.com/deriv_official/',
                }
            },
            icon: Instagram,
            image_alt: '_t_Instagram_t_',
        },
        visibility: {
            is_eu: false,
            is_career_page: false,
        },
    },
    {
        id: 4,
        data: {
            url: ({ is_ar, is_es }) => {
                if (is_es) {
                    return {
                        type: 'non-company',
                        show_eu_modal: true,
                        target: '_blank',
                        href: 'https://www.instagram.com/deriv_espanol/',
                    }
                } else if (is_ar) {
                    return {
                        type: 'non-company',
                        show_eu_modal: true,
                        target: '_blank',
                        href: 'https://www.instagram.com/deriv_ar/',
                    }
                }
                return {
                    type: 'non-company',
                    show_eu_modal: true,
                    target: '_blank',
                    href: 'https://www.instagram.com/deriv_eu/',
                }
            },
            icon: Instagram,
            image_alt: '_t_Instagram_t_',
        },
        visibility: {
            is_career_page: false,
            is_eu: true,
        },
    },
    {
        id: 5,
        data: {
            url: {
                type: 'non-company',
                target: '_blank',
                href: 'https://www.instagram.com/derivcareers/',
            },
            icon: Instagram,
            image_alt: '_t_Instagram_t_',
        },
        visibility: {
            is_career_page: true,
        },
    },
    {
        id: 6,
        data: {
            url: ({ is_ar, is_es }) => {
                if (is_es) {
                    return {
                        type: 'non-company',
                        target: '_blank',
                        href: 'https://twitter.com/DerivEspanol',
                    }
                } else if (is_ar) {
                    return {
                        type: 'non-company',
                        target: '_blank',
                        href: 'https://twitter.com/DerivArabic',
                    }
                }
                return {
                    type: 'non-company',
                    target: '_blank',
                    href: 'https://twitter.com/derivdotcom/',
                }
            },
            icon: Twitter,
            image_alt: '_t_Twitter_t_',
        },
        visibility: {
            is_career_page: false,
            is_eu: false,
        },
    },
    {
        id: 7,
        data: {
            url: ({ is_ar, is_es }) => {
                if (is_es) {
                    return {
                        type: 'non-company',
                        show_eu_modal: true,
                        target: '_blank',
                        href: 'https://twitter.com/DerivEspanol',
                    }
                } else if (is_ar) {
                    return {
                        type: 'non-company',
                        show_eu_modal: true,
                        target: '_blank',
                        href: 'https://twitter.com/DerivArabic',
                    }
                }
                return {
                    type: 'non-company',
                    show_eu_modal: true,
                    target: '_blank',
                    href: 'https://www.twitter.com/deriv_eu/',
                }
            },
            icon: Twitter,
            image_alt: '_t_Twitter_t_',
        },
        visibility: {
            is_career_page: false,
            is_eu: true,
        },
    },
    {
        id: 8,
        data: {
            url: {
                type: 'non-company',
                target: '_blank',
                href: 'https://www.youtube.com/@deriv',
            },
            icon: Youtube,
            image_alt: '_t_Youtube_t_',
        },
        visibility: {
            is_career_page: false,
        },
    },
    {
        id: 9,
        data: {
            url: {
                type: 'non-company',
                target: '_blank',
                href: 'https://www.linkedin.com/company/derivdotcom/',
            },
            icon: Linkedin,
            image_alt: '_t_Linkedin_t_',
        },
        visibility: {
            is_career_page: false,
        },
    },
    {
        id: 10,
        data: {
            url: {
                type: 'non-company',
                target: '_blank',
                href: 'https://www.linkedin.com/company/derivdotcom/life/',
            },
            icon: Linkedin,
            image_alt: '_t_Linkedin_t_',
        },
        visibility: {
            is_career_page: true,
        },
    },
    {
        id: 11,
        data: {
            url: {
                type: 'non-company',
                target: '_blank',
                href: 'https://t.me/derivdotcomofficial',
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
