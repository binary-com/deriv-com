import React from 'react'
import { SocialWrapper } from './common/style'
import { LocalizedLink } from 'components/localization'
import { telegram_url, youtube_url } from 'common/constants'
import { useSocialMediaUrl } from 'components/hooks/use-social-media-url'
//Logo
import Telegram from 'images/svg/layout/footer-telegram.svg'
import Twitter from 'images/svg/layout/footer-twitter.svg'
import Youtube from 'images/svg/layout/footer-youtube.svg'
import Instagram from 'images/svg/layout/footer-instagram.svg'
import Facebook from 'images/svg/layout/footer-facebook.svg'
import Linkedin from 'images/svg/layout/footer-linkedin.svg'
import useBreakpoints from 'components/hooks/use-breakpoints'

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

    const facebook = {
        link: fb_url,
        image: Facebook,
        image_alt: `facebook ${alt_string}`,
    }

    const instagram = {
        link: instagram_url,
        image: Instagram,
        image_alt: `instagram ${alt_string}`,
    }

    const twitter = {
        link: twitter_url,
        image: Twitter,
        image_alt: `twitter ${alt_string}`,
    }

    const youtube = {
        link: youtube_url,
        image: Youtube,
        image_alt: `youtube ${alt_string}`,
    }

    const linkedin = {
        link: linkedin_url,
        image: Linkedin,
        image_alt: `linkedin ${alt_string}`,
    }

    const telegram = {
        link: telegram_url,
        image: Telegram,
        image_alt: `telegram ${alt_string}`,
    }

    let accounts: TSocialAccount[] = []

    if (is_career_page) {
        accounts = [facebook, instagram, linkedin]
    } else {
        accounts = [facebook, instagram, twitter, youtube, linkedin, telegram]
    }

    return <SocialMediaComponent social_accounts={accounts} />
}

const SocialMediaComponent = ({ social_accounts = [] }: SocialMediaComponentProps) => {
    const { is_mobile } = useBreakpoints()
    return (
        <SocialWrapper>
            {social_accounts.map((account) => {
                return (
                    <LocalizedLink
                        key={account.image_alt}
                        external
                        to={account.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={account.image}
                            alt={account.image_alt}
                            width={is_mobile ? '24' : '32'}
                            height={is_mobile ? '24' : '32'}
                        />
                    </LocalizedLink>
                )
            })}
        </SocialWrapper>
    )
}

export default SocialWrapperComponent
