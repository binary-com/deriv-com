import React from 'react'
import { useWebsiteStatus } from './website-status-hooks'
import { isEuCountry } from 'common/country-base'

export const useEuCountry = () => {
    const [website_status] = useWebsiteStatus()
    const [is_eu_country, setEuCountry] = React.useState(
        isEuCountry(website_status?.clients_country),
    )

    React.useEffect(() => {
        if (website_status) {
            setEuCountry(isEuCountry(website_status.clients_country))
        }
    }, [website_status])

    return [is_eu_country]
}
