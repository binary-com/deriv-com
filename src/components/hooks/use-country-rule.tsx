import { useState, useEffect, useContext } from 'react'
import { useDomainBasedCheck } from './use-domain-base-check'
import { eu_countries } from 'common/country-base'
import { getClientInformation, getDomain, isLocalhost, isTestlink } from 'common/utility'
import { DerivStore } from 'store'

export const useCountryRule = () => {
    const [region, setRegion] = useState({
        is_loading: true,
        is_eu: false,
        is_uk: false,
        is_non_uk: true,
        is_non_eu: true,
        is_uk_eu: false,
        is_row: true,
        is_dev: false,
    })

    const { website_status } = useContext(DerivStore)
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
            setRegion({
                is_loading: false,
                is_eu: is_eu_residence || (!residence && is_eu_country) || is_eu_domain,
                is_uk: is_uk_residence || (!residence && is_uk_country) || is_uk_domain,
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
        is_eu_residence,
        is_uk_country,
        is_uk_domain,
        is_uk_residence,
        region.is_eu,
        region.is_uk,
        region.is_uk_eu,
        residence,
        website_status,
    ])

    return region
}
