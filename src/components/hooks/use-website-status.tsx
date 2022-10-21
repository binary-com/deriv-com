import { useCookieState } from './use-cookie-state'
import { getDateFromToday } from 'common/utility'

const WEBSITE_STATUS_COUNTRY_KEY = 'website_status'
const COOKIE_EXPIRY_DAYS = 7

export const useWebsiteStatus = () => {
    const [website_status, setWebsiteStatus] = useCookieState(null, WEBSITE_STATUS_COUNTRY_KEY, {
        expires: getDateFromToday(COOKIE_EXPIRY_DAYS),
    })

    return [website_status, setWebsiteStatus]
}
