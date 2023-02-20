import { useEffect, useState } from 'react'

export const useClientCountry = () => {
    const [clients_country, setClientsCountry] = useState('')

    useEffect(() => {
        const fetchClientCountry = async () => {
            const response = await fetch('https://www.cloudflare.com/cdn-cgi/trace', {
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
