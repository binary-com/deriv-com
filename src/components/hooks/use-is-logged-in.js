import { useEffect, useState } from 'react'
import { isLoggedIn } from 'common/utility'

const useIsLoggedIn = () => {
    const [is_logged_in, setLoggedIn] = useState(false)

    useEffect(() => {
        setLoggedIn(isLoggedIn())

        let checkCookieChange = setInterval(() => {
            setLoggedIn(isLoggedIn())
        }, 1000)

        return () => clearInterval(checkCookieChange)
    })

    return is_logged_in
}

export default useIsLoggedIn
