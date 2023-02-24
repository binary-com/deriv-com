import { useEffect, useState } from 'react'
import useWS from './useWS'
import { cloudflare_trace_url } from 'common/constants'

export const useClientCountry = () => {
    const { data, send } = useWS('website_status')
    const [clients_country, setClientsCountry] = useState('')

    useEffect(() => {
        const fetchClientCountry = async () => {
            const response = await fetch(cloudflare_trace_url, {
                mode: 'cors',
            })
            const data = await response.text()
            const country_code = /^(?:loc)=(.*)$/gm.exec(data)[1]?.toLowerCase()
            setClientsCountry(country_code)
        }

        const fetchClientCountryWS = async () => {
            await send()
            const { clients_country } = data
            setClientsCountry(clients_country)
        }

        try {
            fetchClientCountry()
        } catch (e) {
            if (!clients_country) {
                fetchClientCountryWS()
            }
        }
    }, [clients_country, data, send])

    return { clients_country }
}
