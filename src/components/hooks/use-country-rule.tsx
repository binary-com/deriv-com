import { useState, useEffect } from 'react'
import { useDomainBasedCheck } from './use-domain-base-check'
import { useWebsiteStatus } from './use-website-status'
import { eu_countries } from 'common/country-base'
import { getClientInformation, getDomain, isLocalhost, isTestlink } from 'common/utility'

export const useCountryRule = () => {
    const [region, setRegion] = useState({
        is_eu: null,
        is_uk: null,
        is_non_uk: null,
        is_non_eu: null,
        is_uk_eu: null,
        is_row: null,
        is_dev: null,
    })

    const [website_status] = useWebsiteStatus()
    const user_ip_country = website_status?.clients_country || ''
    const [is_eu_domain, is_uk_domain] = useDomainBasedCheck()
    const { residence } = getClientInformation(getDomain()) || {
        residence: '',
    }
    const eu_countries_uk_excluded = eu_countries.filter((country: string) => country !== 'gb')

    const is_eu_country = eu_countries_uk_excluded.includes(user_ip_country)
    const is_uk_country = user_ip_country === 'gb'
    // const is_eu_residence = eu_countries_uk_excluded.includes(residence)
    // const is_uk_residence = residence === 'gb'

    useEffect(() => {
        if (website_status) {
            setRegion({
                is_eu: is_eu_country || is_eu_domain,
                is_uk: is_uk_country || is_uk_domain,
                is_non_uk: !region.is_uk,
                is_non_eu: !region.is_eu,
                is_uk_eu: !(!region.is_eu && !region.is_uk),
                is_row: !region.is_uk_eu,
                is_dev: isLocalhost() || isTestlink(),
            })
        }
    }, [
        is_eu_country,
        is_eu_domain,
        is_uk_country,
        is_uk_domain,
        region.is_eu,
        region.is_uk,
        region.is_uk_eu,
        residence,
        website_status,
    ])
    return region
}
