import React from 'react'
import PropTypes from 'prop-types'
import { SocialWrapper } from './common/style.js'
import { LocalizedLink } from 'components/localization'
import {
    fb_url,
    fb_url_career,
    instagram_url,
    instagram_url_career,
    linkedin_url,
    linkedin_url_career,
    twitter_url,
} from 'common/constants'
//Logo
import Twitter from 'images/svg/footer-twitter.svg'
import Instagram from 'images/svg/footer-instagram.svg'
import Facebook from 'images/svg/footer-facebook.svg'
import Linkedin from 'images/svg/footer-linkedin.svg'

const SocialWrapperComponent = ({ is_career_page }) => {
    const alt_string = (is_career_page ? 'career' : '') + ' icon link'
    const accounts = [
        {
            link: is_career_page
                ? fb_url_career
                : fb_url,
            image: Facebook,
            image_alt: `facebook ${alt_string}`,
        },
        {
            link: is_career_page
                ? instagram_url_career
                : instagram_url,
            image: Instagram,
            image_alt: `instagram ${alt_string}`,
        },
        {
            link: is_career_page
                ? linkedin_url_career
                : linkedin_url,
            image: Linkedin,
            image_alt: `linkedin ${alt_string}`,
        },
    ]

    const twitter = {
        link: twitter_url,
        image: Twitter,
        image_alt: `twitter ${alt_string}`,
    }

    if (!is_career_page) {
        accounts.splice(1, 0, twitter)
    }

    return <SocialMediaComponent social_accounts={accounts} />
}

SocialWrapperComponent.propTypes = {
    is_career_page: PropTypes.bool,
}

const SocialMediaComponent = ({ social_accounts }) => (
    <SocialWrapper>
        {social_accounts.map((account, index) => (
            <LocalizedLink
                key={index}
                external="true"
                to={account.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={account.image} alt={account.image_alt} width="41" height="41" />
            </LocalizedLink>
        ))}
    </SocialWrapper>
)

SocialMediaComponent.propTypes = {
    social_accounts: PropTypes.array,
}

export default SocialWrapperComponent;