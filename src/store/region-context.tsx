import React, { useState, useEffect, createContext, ReactNode } from 'react'
import {
    isEuCountry,
    eu_countries,
    latam_countries,
    african_countries,
    cpa_plan_countries,
} from 'common/country-base'
import useWebsiteStatus from 'components/hooks/use-website-status'
import {
    getClientInformation,
    getDomain,
    isLocalhost,
    isTestlink,
    isEuDomain,
} from 'common/utility'
import { TRegion } from 'types/generics'

type RegionProviderProps = {
    children: ReactNode
}

type RegionContextType = Record<
    | 'is_eu_country'
    | 'is_p2p_allowed_country'
    | 'is_region_loading'
    | 'is_eu_location'
    | 'is_eu'
    | 'is_non_eu'
    | 'is_cpa_plan'
    | 'is_latam'
    | 'is_row'
    | 'is_dev'
    | 'is_africa',
    boolean
> & { user_country: string }

export const RegionContext = createContext<RegionContextType>(null)

export const RegionProvider = ({ children }: RegionProviderProps) => {
    const is_eu_domain = isEuDomain()
    const { website_status } = useWebsiteStatus()
    const [region, setRegion] = useState<TRegion>({
        is_region_loading: true,
        is_eu_location: is_eu_domain,
        is_eu: is_eu_domain,
        is_non_eu: !is_eu_domain,
        is_cpa_plan: false,
        is_latam: false,
        is_row: !is_eu_domain,
        is_dev: false,
        is_africa: false,
    })
    const [is_eu_country, setEuCountry] = useState(null)
    const [is_p2p_allowed_country, setP2PAllowedCountry] = useState(false)
    const [user_country, setUserCountry] = useState(null)

    useEffect(() => {
        if (website_status) {
            const client_country = website_status.clients_country
            const { residence } = getClientInformation(getDomain()) || {
                residence: '',
            }

            const is_eu_country_ip = eu_countries.includes(client_country)
            const is_africa = african_countries.includes(client_country)
            const is_eu_residence = eu_countries.includes(residence)
            const is_eu_location = is_eu_residence || (!residence && is_eu_country_ip)
            const is_eu = is_eu_location || is_eu_domain
            const is_non_eu = !is_eu
            const is_cpa_plan = cpa_plan_countries.includes(client_country)
            const is_latam = latam_countries.includes(client_country)
            const is_row = !is_eu
            const is_dev = isLocalhost() || isTestlink()

            const { clients_country, p2p_config } = website_status
            setEuCountry(!!isEuCountry(clients_country))
            setP2PAllowedCountry(!!p2p_config)
            setUserCountry(clients_country)
            setRegion((prev) => ({
                ...prev,
                is_region_loading: false,
                is_eu_location,
                is_latam,
                is_eu,
                is_non_eu,
                is_cpa_plan,
                is_africa,
                is_row,
                is_dev,
            }))
        }
    }, [is_eu_domain, website_status])

    const {
        is_region_loading,
        is_eu_location,
        is_latam,
        is_eu,
        is_non_eu,
        is_cpa_plan,
        is_africa,
        is_row,
        is_dev,
    } = region

    return (
        <RegionContext.Provider
            value={{
                is_eu_country,
                is_p2p_allowed_country,
                user_country,
                is_region_loading,
                is_eu_location,
                is_latam,
                is_eu,
                is_non_eu,
                is_cpa_plan,
                is_africa,
                is_row,
                is_dev,
            }}
        >
            {children}
        </RegionContext.Provider>
    )
}
