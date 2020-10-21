import React from 'react'
import { useWebsiteStatus } from './website-status-hooks'
import { CookieStorage } from 'common/storage'
import { isEuCountry } from 'common/country-base'

const CLIENTS_COUNTRY_KEY = 'clients_country'
const clients_country_cookie = new CookieStorage(CLIENTS_COUNTRY_KEY)

export const useEuCountry = () => {
    const [clients_country, setClientCountry] = React.useState(
        clients_country_cookie.get(CLIENTS_COUNTRY_KEY),
    )
    const [is_eu_country, setEuCountry] = React.useState(isEuCountry(clients_country))
    const [website_status] = useWebsiteStatus()

    React.useEffect(() => {
        if (!clients_country && website_status) {
            setClientCountry(website_status.clients_country)
            clients_country_cookie.set(CLIENTS_COUNTRY_KEY, website_status.clients_country)
            setEuCountry(isEuCountry(website_status.clients_country))
        }
    }, [website_status])

    return [is_eu_country]
}
