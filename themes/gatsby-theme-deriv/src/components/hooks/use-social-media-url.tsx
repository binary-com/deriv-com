import React, { useEffect, useState } from 'react'
import { getLanguage, getLocationPathname } from 'common/utility'
import useBuildVariant from 'features/hooks/use-build-variant'

const social_media_urls = {
    twitter: {
        non_eu_url: 'https://twitter.com/derivdotcom/',
        eu_url: 'https://www.twitter.com/deriv_eu/',
    },
    instagram: {
        url_career: 'https://www.instagram.com/derivcareers/',
        non_eu_url: 'https://www.instagram.com/deriv_official/',
        eu_url: 'https://www.instagram.com/deriv_eu/',
    },
    facebook: {
        url_career: 'https://www.facebook.com/derivcareers',
        non_eu_url: 'https://www.facebook.com/derivdotcom',
        eu_url: 'https://www.facebook.com/derivEU/',
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
        facebook: 'https://www.facebook.com/derivespanol',
    },
    ar: {
        instagram: 'https://www.instagram.com/deriv_ar/',
        twitter: 'https://twitter.com/DerivArabic',
        facebook: 'https://www.facebook.com/derivarabic',
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
    const { region } = useBuildVariant()
    const [social_media, setSocialMedia] = useState<TSocialMediaUrl>({
        fb_url: '',
        instagram_url: '',
        twitter_url: '',
        linkedin_url: '',
    })
    const language = getLanguage()
    const current_path = getLocationPathname()
    const is_career_page = current_path === '/careers/'

    const urls_array = types.map((type) => {
        const special_language_url = special_language_urls[language]?.[type]
        const current_url = is_career_page
            ? social_media_urls[type]?.url_career
            : (region === "eu" && social_media_urls[type].eu_url) || social_media_urls[type].non_eu_url
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
