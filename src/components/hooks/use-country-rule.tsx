import { useState, useEffect } from 'react'
import { useDomainBasedCheck } from './use-domain-base-check'
import { useWebsiteStatus } from './use-website-status'
import { eu_countries } from 'common/country-base'
import { getClientInformation, getDomain, isLocalhost, isTestlink } from 'common/utility'

export const useCountryRule = () => {
    const [is_eu, setIsEu] = useState(null)
    const [is_uk, setIsUk] = useState(null)
    const [is_non_uk, setIsNonUk] = useState(null)
    const [is_non_eu, setIsNonEu] = useState(null)
    const [is_uk_eu, setIsUkEu] = useState(null)
    const [is_row, setIsRow] = useState(null)
    const [is_dev, setIsDev] = useState(null)

    const [website_status] = useWebsiteStatus()
    const user_ip_country = website_status?.clients_country || ''
    const [is_eu_domain, is_uk_domain] = useDomainBasedCheck()
    const { residence } = getClientInformation(getDomain()) || {
        residence: '',
    }
    const eu_countries_uk_excluded = eu_countries.filter((country: string) => country !== 'gb')

    const is_eu_country = eu_countries_uk_excluded.includes(user_ip_country)
    const is_uk_country = user_ip_country === 'gb'
    const is_eu_residence = eu_countries_uk_excluded.includes(residence)
    const is_uk_residence = residence === 'gb'

    useEffect(() => {
        if (website_status) {
            setIsEu(is_eu_residence || (!residence && is_eu_country) || is_eu_domain)
            setIsUk(is_uk_residence || (!residence && is_uk_country) || is_uk_domain)
            setIsNonUk(!is_uk)
            setIsNonEu(!is_eu)
            setIsUkEu(!(!is_eu && !is_uk))
            setIsRow(!is_uk_eu)
            setIsDev(isLocalhost() || isTestlink())
        }
    }, [
        is_eu_residence,
        residence,
        is_eu_country,
        is_eu_domain,
        is_uk_residence,
        is_uk_country,
        is_uk_domain,
        is_eu,
        is_uk,
        is_uk_eu,
    ])

    return [is_eu, is_uk, is_non_uk, is_non_eu, is_uk_eu, is_row, is_dev]
}
