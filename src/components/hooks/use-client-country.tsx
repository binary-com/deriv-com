import { useEffect, useState } from 'react'
import { cloudflare_trace_url } from 'common/constants'

export const useClientCountry = () => {
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

        fetchClientCountry()
    }, [])

    return { clients_country }
}
