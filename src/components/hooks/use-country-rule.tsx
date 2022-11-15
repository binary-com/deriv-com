import { useState, useContext, useLayoutEffect } from 'react'
import { eu_countries, latam_countries, african_countries } from 'common/country-base'
import {
    getClientInformation,
    getDomain,
    isLocalhost,
    isTestlink,
    isEuDomain,
} from 'common/utility'
import { DerivStore } from 'store'

export const useCountryRule = () => {
    const [region, setRegion] = useState({
        is_loading: false,
        is_eu_location: isEuDomain(),
        is_eu: isEuDomain(),
        is_non_eu: !isEuDomain(),
        is_latam: false,
        is_row: !isEuDomain(),
        is_dev: false,
        is_africa: false,
        is_south_africa: false,
        is_nigeria: false,
    })

    const { website_status } = useContext(DerivStore)
    const user_ip_country = website_status?.clients_country || ''
    const { residence } = getClientInformation(getDomain()) || {
        residence: '',
    }

    useLayoutEffect(() => {
        const is_eu_country = eu_countries.includes(user_ip_country)
        const is_africa = african_countries.includes(user_ip_country)
        const is_eu_residence = eu_countries.includes(residence)
        const is_eu_location = is_eu_residence || (!residence && is_eu_country)
        const is_eu = is_eu_location || isEuDomain()
        const is_non_eu = !is_eu
        const is_latam = latam_countries.includes(user_ip_country)
        const is_row = !is_eu
        const is_dev = isLocalhost() || isTestlink()
        const is_south_africa = user_ip_country === 'za'
        const is_nigeria = user_ip_country === 'ng'

        if (website_status) {
            setRegion({
                is_loading: false,
                is_eu_location,
                is_latam,
                is_eu,
                is_non_eu,
                is_africa,
                is_row,
                is_dev,
                is_nigeria,
                is_south_africa,
            })
        }
    }, [residence, user_ip_country, website_status])

    return region
}
