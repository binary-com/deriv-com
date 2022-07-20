import { useState, useEffect, useContext } from 'react'
import { eu_countries } from 'common/country-base'
import {
    getClientInformation,
    getDomain,
    isLocalhost,
    isTestlink,
    isEuDomain,
    isUkDomain,
} from 'common/utility'
import { DerivStore } from 'store'

export const useCountryRule = () => {
    const [region, setRegion] = useState({
        is_loading: true,
        is_eu_location: false,
        is_uk_location: false,
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
    const { residence } = getClientInformation(getDomain()) || {
        residence: '',
    }

    useEffect(() => {
        const eu_countries_uk_excluded = eu_countries.filter((country: string) => country !== 'gb')
        const is_eu_country = eu_countries_uk_excluded.includes(user_ip_country)
        const is_uk_country = user_ip_country === 'gb'
        const is_eu_residence = eu_countries_uk_excluded.includes(residence)
        const is_uk_residence = residence === 'gb'
        const is_eu_location = is_eu_residence || (!residence && is_eu_country)
        const is_uk_location = is_uk_residence || (!residence && is_uk_country)
        const is_eu = is_eu_location || isEuDomain()
        const is_uk = is_uk_location || isUkDomain()
        const is_non_uk = !is_uk
        const is_non_eu = !is_eu
        const is_uk_eu = !(!is_eu && !is_uk)
        const is_row = !is_uk_eu
        const is_dev = isLocalhost() || isTestlink()

        if (website_status) {
            setRegion({
                is_loading: false,
                is_eu_location,
                is_uk_location,
                is_eu,
                is_uk,
                is_non_uk,
                is_non_eu,
                is_uk_eu,
                is_row,
                is_dev,
            })
        }
    }, [residence, user_ip_country, website_status])

    return region
}
