import { useState, useEffect } from 'react'
import { isBrowser, isNullUndefined, parseJSONString } from 'common/utility'

export const useLocalStorageState = (defaultValue, key) => {
    const [value, setValue] = useState(() => {
        const sticky_value = isBrowser() ? window.localStorage.getItem(key) : null
        return sticky_value ? parseJSONString(sticky_value) : defaultValue
    })

    useEffect(() => {
        if (isBrowser()) {
            if (isNullUndefined(value)) {
                window.localStorage.removeItem(key)
            } else {
                window.localStorage.setItem(key, value)
            }
        }
    }, [key, value])

    return [value, setValue]
}
