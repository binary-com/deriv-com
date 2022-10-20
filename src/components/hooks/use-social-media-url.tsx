import { useEffect, useState } from 'react'
import { useCountryRule } from './use-country-rule'
import { getLanguage, getLocationPathname } from 'common/utility'

const social_media_urls = {
    twitter: {
        non_eu_url: 'https://twitter.com/derivdotcom/',
        eu_url: 'https://www.twitter.com/deriv_eu/',
        uk_url: 'https://www.twitter.com/deriv_uk/',
    },
    instagram: {
        url_career: 'https://www.instagram.com/derivcareers/',
        non_eu_url: 'https://www.instagram.com/deriv_official/',
        eu_url: 'https://www.instagram.com/deriv_eu/',
        uk_url: 'https://www.instagram.com/deriv_uk/',
    },
    facebook: {
        url_career: 'https://www.facebook.com/derivcareers',
        non_eu_url: 'https://www.facebook.com/derivdotcom',
        eu_url: 'https://www.facebook.com/derivEU/',
        uk_url: 'https://www.facebook.com/derivUK/',
    },
    linkedin: {
        non_eu_url: 'https://www.linkedin.com/company/derivdotcom/',
        url_career: 'https://www.linkedin.com/company/derivdotcom/life/',
    },
}
const special_language_urls = {
    es: {
        instagram: 'https://www.instagram.com/deriv_espanol/',
        twitter: 'https://twitter.com/DerivEspanol',
        // facebook: 'https://www.facebook.com/derivespanol', need to add once fb account restored
    },
}
const types = ['facebook', 'instagram', 'twitter', 'linkedin']

type TSocialMediaUrl = {
    fb_url: string
    instagram_url: string
    twitter_url: string
    linkedin_url: string
}

export const useSocialMediaUrl = (): TSocialMediaUrl => {
    const [social_media, setSocialMedia] = useState<TSocialMediaUrl>({
        fb_url: '',
        instagram_url: '',
        twitter_url: '',
        linkedin_url: '',
    })
    const { is_eu, is_uk } = useCountryRule()
    const language = getLanguage()
    const current_path = getLocationPathname()
    const is_career_page = current_path === '/careers/'

    const urls_array = types.map((type) => {
        const special_language_url = special_language_urls[language]?.[type]
        const current_url = is_career_page
            ? social_media_urls[type]?.url_career
            : (is_eu && social_media_urls[type].eu_url) ||
              (is_uk && social_media_urls[type].uk_url) ||
              social_media_urls[type].non_eu_url
        return { [type]: special_language_url || current_url }
    })

    const urls = Object.assign({}, ...urls_array)

    useEffect(() => {
        setSocialMedia({
            fb_url: urls.facebook,
            instagram_url: urls.instagram,
            twitter_url: urls.twitter,
            linkedin_url: urls.linkedin,
        })
    }, [])

    return social_media
}
