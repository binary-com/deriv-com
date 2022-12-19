import React, { useState, useEffect, createContext, Dispatch, ReactNode } from 'react'
import type { WebsiteStatus, ServerStatusResponse } from '@deriv/api-types'
import { useWebsiteStatus } from 'components/hooks/use-website-status'
import { AcademyDataType, useAcademyData } from 'components/hooks/use-academy-data'
import { useDerivApi, DerivApiProps } from 'components/hooks/use-deriv-api'
import { isEuCountry } from 'common/country-base'
import useBreakpoints from 'components/hooks/use-breakpoints'

type DerivProviderProps = {
    children?: ReactNode
}

export type DerivStoreType = {
    academy_data: AcademyDataType
    is_eu_country: boolean
    is_p2p_allowed_country: boolean
    setWebsiteStatus: Dispatch<WebsiteStatus | void>
    user_country: string
    website_status_loading: boolean
    website_status: WebsiteStatus
    deriv_api: DerivApiProps
    show_non_eu_popup: boolean
    setShowNonEuPopup: React.Dispatch<React.SetStateAction<boolean>>
    breakpoints: ReturnType<typeof useBreakpoints>
}

export const DerivStore = createContext<DerivStoreType>(null)

export const DerivProvider = ({ children }: DerivProviderProps) => {
    const deriv_api = useDerivApi()
    const [show_non_eu_popup, setShowNonEuPopup] = useState(false)
    const [website_status, setWebsiteStatus, website_status_loading] = useWebsiteStatus()
    const [is_eu_country, setEuCountry] = useState(null)
    const [is_p2p_allowed_country, setP2PAllowedCountry] = useState(false)
    const [user_country, setUserCountry] = useState(null)
    const breakpoints = useBreakpoints()

    const useAvailabileP2pData = () => {
        let [filtered_academy_video] = useAcademyData()
        let [filtered_academy_blogs] = useAcademyData()

        filtered_academy_video = filtered_academy_video.videos.filter((item) => {
            return !is_p2p_allowed_country ? !item.video_title.includes('Deriv P2P') : item
        })

        filtered_academy_blogs = filtered_academy_blogs.blog.filter((item) => {
            return !is_p2p_allowed_country ? !item.blog_title.includes('Deriv P2P') : item
        })

        const academy_data = [{ blog: filtered_academy_blogs, videos: filtered_academy_video }]
        return academy_data
    }

    const [academy_data] = useAvailabileP2pData()

    useEffect(() => {
        // Fetch website status from the API & save in the cookies
        const { send } = deriv_api

        send({ website_status: 1 }, (response: ServerStatusResponse) => {
            if (!response.error && !website_status) {
                const {
                    website_status: { clients_country, p2p_config },
                } = response

                setWebsiteStatus({ clients_country, p2p_config })
            }
        })
    }, [])

    useEffect(() => {
        if (website_status) {
            const { clients_country, p2p_config } = website_status
            setEuCountry(!!isEuCountry(clients_country))
            setP2PAllowedCountry(!!p2p_config)
            setUserCountry(clients_country)
        }
    }, [website_status])

    return (
        <DerivStore.Provider
            value={{
                academy_data,
                is_eu_country,
                is_p2p_allowed_country,
                setWebsiteStatus,
                user_country,
                website_status_loading,
                website_status,
                deriv_api,
                show_non_eu_popup,
                setShowNonEuPopup,
                breakpoints,
            }}
        >
            {children}
        </DerivStore.Provider>
    )
}

export const useDerivWS = () => {
    const {
        deriv_api: { send },
    } = React.useContext(DerivStore)

    return { send }
}
