import React, { useState, useEffect, createContext, ReactNode } from 'react'
import {
    eu_countries,
    latam_countries,
    african_countries,
    cpa_plan_countries,
    p2p_countries,
    not_available_appgallery_countries,
    not_avalable_appgallery_and_ios_countries,
    not_available_iOS_countries,
} from 'common/country-base'
import useWebsiteStatus from 'components/hooks/use-website-status'
import {
    getClientInformation,
    getDomain,
    isLocalhost,
    isTestlink,
    isEuDomain,
    queryParams,
    getP2PCookie,
} from 'common/utility'
import { TRegion } from 'types/generics'

type RegionProviderProps = {
    children?: ReactNode
}

type RegionContextType = Record<
    | 'is_p2p_allowed_country'
    | 'is_p2p_loading'
    | 'is_region_loading'
    | 'is_eu_location'
    | 'is_eu'
    | 'is_non_eu'
    | 'is_cpa_plan'
    | 'is_latam'
    | 'is_row'
    | 'is_dev'
    | 'is_africa'
    | 'is_appgallery_supported'
    | 'is_appgallery_and_ios_supported'
    | 'is_ios_supported',
    boolean
> & { user_country: string }

export const RegionContext = createContext<RegionContextType>(null)

export const RegionProvider = ({ children }: RegionProviderProps) => {
    const { website_status } = useWebsiteStatus()

    const [region, setRegion] = useState<TRegion>({
        is_region_loading: true,
        is_eu_location: isEuDomain(),
        is_eu: isEuDomain(),
        is_non_eu: !isEuDomain(),
        is_cpa_plan: false,
        is_latam: false,
        is_row: !isEuDomain(),
        is_dev: false,
        is_africa: false,
    })
    const [is_p2p_allowed_country, setP2PAllowedCountry] = useState(false)
    const [is_appgallery_supported, setAppgallerySupported] = useState(false)
    const [is_appgallery_and_ios_supported, setAppgalleryIosSupported] = useState(false)
    const [is_ios_supported, setIosSupported] = useState(false)
    const [is_p2p_loading, setP2PLoading] = useState(true)
    const [user_country, setUserCountry] = useState(null)

    const user_ip_country = website_status?.clients_country || ''
    const { residence } = getClientInformation(getDomain()) || {
        residence: '',
    }

    const qa_url_region = queryParams.get('region')?.toString()

    useEffect(() => {
        const is_eu_country_ip = eu_countries.includes(user_ip_country)
        const is_africa =
            african_countries.includes(user_ip_country) || african_countries.includes(qa_url_region)
        const is_eu_residence = eu_countries.includes(residence)
        const is_eu_location = is_eu_residence || (!residence && is_eu_country_ip)
        const is_eu = isEuDomain() || eu_countries.includes(qa_url_region)
        const is_non_eu = !is_eu
        const is_cpa_plan =
            cpa_plan_countries.includes(user_ip_country) ||
            cpa_plan_countries.includes(qa_url_region)
        const is_latam =
            latam_countries.includes(user_ip_country) || latam_countries.includes(qa_url_region)
        const is_row = !is_eu
        const is_dev = isLocalhost() || isTestlink()
        if (website_status) {
            const { clients_country, p2p_config } = website_status
            const p2p_cookie = getP2PCookie()
            setP2P(p2p_cookie, p2p_config)
            if (qa_url_region || user_ip_country) {
                not_available_appgallery_countries.includes(qa_url_region || user_ip_country)
                    ? setAppgallerySupported(false)
                    : setAppgallerySupported(true)
                not_avalable_appgallery_and_ios_countries.includes(qa_url_region || user_ip_country)
                    ? setAppgalleryIosSupported(false)
                    : setAppgalleryIosSupported(true)
                not_available_iOS_countries.includes(qa_url_region || user_ip_country)
                    ? setIosSupported(false)
                    : setIosSupported(true)
            }
            setUserCountry(clients_country)
            setRegion({
                is_region_loading: false,
                is_eu_location,
                is_latam,
                is_eu,
                is_non_eu,
                is_cpa_plan,
                is_africa,
                is_row,
                is_dev,
            })
        }
    }, [residence, user_ip_country, website_status])

    const setP2P = (p2p_cookie, p2p_config) => {
        if (p2p_cookie) {
            setP2PAllowedCountry(!JSON.parse(p2p_cookie))
            setP2PLoading(false)
        } else {
            if ('p2p_config' in website_status && p2p_config) {
                setP2PAllowedCountry(true)
                setP2PLoading(false)
            } else if ('p2p_config' in website_status && !p2p_config) {
                setP2PLoading(false)
            }
        }
        //QA testing purposes
        if (qa_url_region) {
            p2p_countries.includes(qa_url_region)
                ? setP2PAllowedCountry(true)
                : setP2PAllowedCountry(false)
            setP2PLoading(false)
        }
    }

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
                is_p2p_allowed_country,
                is_p2p_loading,
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
                is_appgallery_supported,
                is_appgallery_and_ios_supported,
                is_ios_supported,
            }}
        >
            {children}
        </RegionContext.Provider>
    )
}
