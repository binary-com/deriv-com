import { useEffect, useRef, useState } from 'react'
import { isLoggedIn } from 'common/utility'

const useAuthCheck = () => {
    const [is_logged_in, setLoggedIn] = useState(false)
    const [is_auth_checked, setIsAuthChecked] = useState(false)
    const checkCookieInterval = useRef<NodeJS.Timer>()

    useEffect(() => {
        setIsAuthChecked(true)
        setLoggedIn(isLoggedIn())
        checkCookieInterval.current = setInterval(() => setLoggedIn(isLoggedIn()), 800)
        return () => clearInterval(checkCookieInterval.current)
    }, [])

    useEffect(() => {
        if (is_logged_in) {
            clearInterval(checkCookieInterval.current)
        }
    }, [is_logged_in])

    return [is_logged_in, is_auth_checked]
}

export default useAuthCheck
