import { useEffect, useState } from 'react'
import { isEuDomain } from 'common/utility'

const useEUDomain = () => {
    const [is_eu_domain, setIsEUDomain] = useState(false)
    const [is_eu_domain_loading, setIsEUDomainLoading] = useState(true)

    useEffect(() => {
        setIsEUDomain(isEuDomain())
        setIsEUDomainLoading(false)
    }, [])

    return { is_eu_domain, is_eu_domain_loading }
}

export default useEUDomain
