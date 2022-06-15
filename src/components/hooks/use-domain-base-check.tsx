import { useState, useEffect } from 'react'
import { eu_domains, uk_domains } from 'common/constants'

export const useDomainBasedCheck = () => {
    const [is_eu_domain, setEuDomain] = useState(false)
    const [is_uk_domain, setUkDomain] = useState(false)

    useEffect(() => {
        if (window) {
            const subdomain = window.location.hostname.split('.').slice(0, -2).join('.')

            if (eu_domains.includes(subdomain)) {
                setEuDomain(true)
            }
            if (uk_domains.includes(subdomain)) {
                setUkDomain(true)
            }
        }
    }, [])

    return [is_eu_domain, is_uk_domain]
}
