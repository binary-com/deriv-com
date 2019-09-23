import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import queryString from 'query-string'

const Redirect = ({ location }) => {
    useEffect(() => {
        const config = queryString.parseUrl(location.href)
        const { action, code: token, lang } = config.query
        const lang_route =
            lang.toLowerCase() === 'en' ? '/' : `/${lang.toLowerCase()}`

        const actions_map = {
            reset_password: { path: 'choose-password' },
        }

        const redirect_config = actions_map[action]
        if (redirect_config && token) {
            navigate(`${lang_route}/${redirect_config.path}?token=${token}`)
        } else {
            navigate('/')
        }
    }, [])

    return <></>
}

Redirect.propTypes = {
    location: PropTypes.object,
}

export default Redirect
