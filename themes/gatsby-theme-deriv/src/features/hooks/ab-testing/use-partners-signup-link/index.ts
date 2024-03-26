import { useEffect, useState } from 'react'
import { Analytics } from '@deriv-com/analytics'
import { getLanguage } from 'common/utility'
import { affiliate_signup_url } from 'common/constants'

const useAffiliateSignupLink = () => {
    const [affiliate_signup_link, setAffiliateSignupLink] = useState('')

    useEffect(() => {
        const partners_signup_ab_test = Analytics?.getFeatureValue(
            'partners_signup_ab_test',
            'fallback',
        )
        const language = getLanguage()

        const calculated_link =
            partners_signup_ab_test === true
                ? `${window.location.origin}${
                      language !== 'en' ? '/' + language : ''
                  }/signup-affiliates`
                : affiliate_signup_url

        setAffiliateSignupLink(calculated_link)
    }, [])

    return { affiliate_signup_link }
}

export default useAffiliateSignupLink
