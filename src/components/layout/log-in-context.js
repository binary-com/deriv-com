import React, { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { isLoggedIn } from 'common/utility'

export const LogInContext = createContext()

export const LogInProvider = ({ children }) => {
    const [is_logged_in, setLoggedIn] = useState(true)

    useEffect(() => {
        setLoggedIn(isLoggedIn())

        let checkCookieChange = setInterval(() => {
            setLoggedIn(isLoggedIn())
        }, 1000)

        return () => clearInterval(checkCookieChange)
    })

    return <LogInContext.Provider value={{ is_logged_in }}>{children}</LogInContext.Provider>
}

LogInProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
