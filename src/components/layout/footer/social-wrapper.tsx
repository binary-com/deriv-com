import React from 'react'
import { SocialWrapper } from './common/style'
import { LocalizedLink } from 'components/localization'
import { reddit_url, telegram_url } from 'common/constants'
import { useSocialMediaUrl } from 'components/hooks/use-social-media-url'
//Logo
import Reddit from 'images/svg/layout/footer-reddit.svg'
import Telegram from 'images/svg/layout/footer-telegram.svg'
import Twitter from 'images/svg/layout/footer-twitter.svg'
import Instagram from 'images/svg/layout/footer-instagram.svg'
import Facebook from 'images/svg/layout/footer-facebook.svg'
import Linkedin from 'images/svg/layout/footer-linkedin.svg'

type SocialWrapperComponentProps = {
    is_career_page?: boolean
}
type TSocialAccount = {
    link?: string
    image?: string
    image_alt?: string
}
type SocialMediaComponentProps = {
    social_accounts: TSocialAccount[]
}

const SocialWrapperComponent = ({ is_career_page = false }: SocialWrapperComponentProps) => {
    const { fb_url, instagram_url, twitter_url, linkedin_url } = useSocialMediaUrl()
    const alt_string = (is_career_page ? 'career' : '') + ' icon link'

    const accounts = [
        {
            link: fb_url,
            image: Facebook,
            image_alt: `facebook ${alt_string}`,
        },
        {
            link: instagram_url,
            image: Instagram,
            image_alt: `instagram ${alt_string}`,
        },
        {
            link: linkedin_url,
            image: Linkedin,
            image_alt: `linkedin ${alt_string}`,
        },
    ]

    const twitter = {
        link: twitter_url,
        image: Twitter,
        image_alt: `twitter ${alt_string}`,
    }
    const reddit = {
        link: reddit_url,
        image: Reddit,
        image_alt: `reddit ${alt_string}`,
    }
    const telegram = {
        link: telegram_url,
        image: Telegram,
        image_alt: `telegram ${alt_string}`,
    }

    if (!is_career_page) {
        accounts.splice(0, 0, reddit, telegram)
        accounts.splice(3, 0, twitter)
    }

    return <SocialMediaComponent social_accounts={accounts} />
}

const SocialMediaComponent = ({ social_accounts = [] }: SocialMediaComponentProps) => (
    <SocialWrapper>
        {social_accounts.map((account, index) => (
            <LocalizedLink
                key={index}
                external
                to={account.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={account.image} alt={account.image_alt} width="41" height="41" />
            </LocalizedLink>
        ))}
    </SocialWrapper>
)

export default SocialWrapperComponent
