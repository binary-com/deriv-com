import { useContext } from 'react'
import { WebsiteStatusContext } from 'store/website-status-context'

const useWebsiteStatus = () => {
    const website_status = useContext(WebsiteStatusContext)

    if (!website_status) {
        throw new Error('useWebsiteStatus must be used within WebsiteStatusContext')
    }

    return website_status
}

export default useWebsiteStatus
