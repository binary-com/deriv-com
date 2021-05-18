import { useState, useEffect } from 'react'
import { CookieStorage } from 'common/storage'
import { isNullUndefined, parseJSONString } from 'common/utility'

export const useCookieState = (defaultValue, key, options) => {
    const cookie_state = new CookieStorage(key)
    const [value, setValue] = useState(() => {
        const sticky_value = cookie_state.get(key)
        const result = sticky_value ? parseJSONString(sticky_value) : defaultValue

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
