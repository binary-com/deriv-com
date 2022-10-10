import { useState, useEffect } from 'react'
import { CookieStorage } from 'common/storage'
import { isNullUndefined, parseJSONString } from 'common/utility'

export const useCookieState = (key: string, options: { expires: Date }) => {
    const cookie_state = new CookieStorage(key)
    const [value, setValue] = useState(() => {
        const sticky_value = cookie_state.get(key)
        const result = sticky_value ? parseJSONString(sticky_value) : null

        return result
    })

    useEffect(() => {
        if (isNullUndefined(value)) {
            cookie_state.remove()
        } else {
            cookie_state.set(key, JSON.stringify(value), options)
        }
    }, [key, value])

    return [value, setValue]
}

const getDateFromToday = (num_of_days: number) => {
    const today = new Date()

    return new Date(today.getFullYear(), today.getMonth(), today.getDate() + num_of_days)
}

const WEBSITE_STATUS_COUNTRY_KEY = 'website_status'
const COOKIE_EXPIRY_DAYS = 7

export const useWebsiteStatus = () => {
    const [website_status, setWebsiteStatus] = useCookieState(WEBSITE_STATUS_COUNTRY_KEY, {
        expires: getDateFromToday(COOKIE_EXPIRY_DAYS),
    })

    return [website_status, setWebsiteStatus]
}
