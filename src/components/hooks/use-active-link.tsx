import { useEffect, useState } from 'react'
import { getLocationPathname } from 'common/utility'

const useIsActiveLink = (current_page: string, active_urls?: string[]): boolean => {
    const [isActive, setIsActive] = useState(false)

    const pathname = getLocationPathname()
    useEffect(() => {
        setIsActive(
            active_urls?.length
                ? active_urls.some((url) => pathname.includes(url))
                : pathname.includes(current_page),
        )
    }, [current_page, active_urls, pathname])

    return isActive
}

export default useIsActiveLink
